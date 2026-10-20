/* A SonarQube-style scan of this repository: eslint 9 with eslint-plugin-sonarjs, its whole
   recommended set, over every file git knows about.

   The point is not to fix nine hundred findings about nested template literals - this code is
   written that way on purpose. The point is that a NEW one fails the build. sonar-baseline.json
   records how many findings of each rule each file has today; anything above that is a
   regression. After deliberately accepting one, or after cleaning some up:

     node scripts/sonar.mjs --update

   eslint and the plugin are not dependencies of this repository. Point SONAR_DIR at a
   node_modules that has them, or let CI install them into one:

     npm i --no-save --prefix /tmp/sonar eslint@9 eslint-plugin-sonarjs
     SONAR_DIR=/tmp/sonar/node_modules node scripts/sonar.mjs                                  */
import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const BASELINE = path.join(ROOT, 'sonar-baseline.json');
const require = createRequire(import.meta.url);

function load(name){
  for(const where of [process.env.SONAR_DIR && path.join(process.env.SONAR_DIR, name), path.join(ROOT, 'node_modules', name), name].filter(Boolean)){
    try { return require(where); } catch {}
  }
  console.error(`${name} is not here. Install it and set SONAR_DIR:\n  npm i --no-save --prefix /tmp/sonar eslint@9 eslint-plugin-sonarjs\n  SONAR_DIR=/tmp/sonar/node_modules node scripts/sonar.mjs`);
  process.exit(2);
}
const { Linter } = load('eslint');
const sonarjs = load('eslint-plugin-sonarjs');

const rules = {};
for(const [id, rule] of Object.entries(sonarjs.rules || {})){
  if(rule.meta?.docs?.recommended !== false) rules['sonarjs/' + id] = 'warn';
}
// NOSONAR S4036 - git from PATH is what every other script here does, and the argument is fixed.
/* Tracked files AND new ones that are not ignored: a file scanned only once it is staged is
   a file whose findings first appear in CI, which is exactly where they are least welcome. */
const files = execSync('git ls-files --cached --others --exclude-standard', { cwd:ROOT }).toString().split('\n')
  .filter(f => /\.(js|jsx|mjs|cjs)$/.test(f) && !f.startsWith('dist/') && !f.includes('node_modules/') && !f.includes('/vendor/') && !f.endsWith('.min.js'));

const linter = new Linter({ configType:'flat', cwd:ROOT });
const found = {}, parseErrors = [];
for(const f of files){
  const src = fs.readFileSync(path.join(ROOT, f), 'utf8');
  const isModule = /\.(mjs|jsx)$/.test(f) || /^[ \t]*(?:import|export)\s/m.test(src);
  const config = [{ files:['**/*.js', '**/*.jsx', '**/*.mjs', '**/*.cjs'], plugins:{ sonarjs },
    languageOptions:{ ecmaVersion:'latest', sourceType:isModule ? 'module' : 'script', parserOptions:{ ecmaFeatures:{ jsx:true } } }, rules }];
  let messages = [];
  try { messages = linter.verify(src, config, { filename:path.join(ROOT, f) }); }
  catch(err){ parseErrors.push(`${f}: ${String(err.message).split('\n')[0]}`); continue; }
  for(const m of messages){
    if(!m.ruleId){ parseErrors.push(`${f}:${m.line}: ${m.message}`); continue; }
    found[`${f}|${m.ruleId}`] = (found[`${f}|${m.ruleId}`] || 0) + 1;
    if(process.argv.includes('--list')) console.log(`${f}:${m.line}  ${m.ruleId}  ${m.message}`);
  }
}

if(process.argv.includes('--update')){
  fs.writeFileSync(BASELINE, JSON.stringify({ note:'How many findings of each rule each file has. A file:rule above its number fails scripts/sonar.mjs. Update with --update.', counts:Object.fromEntries(Object.entries(found).sort()) }, null, 1) + '\n');
  console.log(`sonar-baseline.json: ${Object.keys(found).length} file/rule pairs, ${Object.values(found).reduce((a, b) => a + b, 0)} findings`);
  process.exit(0);
}

let base = { counts:{} };
try { base = JSON.parse(fs.readFileSync(BASELINE, 'utf8')); } catch { console.error('No sonar-baseline.json yet — run node scripts/sonar.mjs --update once.'); process.exit(2); }
const worse = Object.entries(found).filter(([k, n]) => n > (base.counts[k] || 0));
const better = Object.entries(base.counts).filter(([k, n]) => (found[k] || 0) < n);
for(const [k, n] of worse) console.log(`FAIL  ${k.replace('|', '  ')}  ${base.counts[k] || 0} → ${n}`);
for(const e of parseErrors) console.log(`FAIL  ${e}`);
if(better.length) console.log(`${better.length} file/rule pair${better.length === 1 ? '' : 's'} improved — run --update to bank it.`);
const total = Object.values(found).reduce((a, b) => a + b, 0);
const verdict = worse.length || parseErrors.length ? 'FAILED' : 'PASS';
const unparsed = parseErrors.length ? `, ${parseErrors.length} that would not parse` : '';
console.log(`${verdict}  sonar: ${total} findings in ${files.length} files, ${worse.length} above the baseline${unparsed}`);
process.exitCode = worse.length || parseErrors.length ? 1 : 0;
