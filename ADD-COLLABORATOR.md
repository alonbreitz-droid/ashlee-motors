# Add Collaborator to GitHub Repository

## Repository
**URL:** https://github.com/ZombieDuckling/ashlee-motors

## Add Collaborator via GitHub Web Interface

1. **Go to Repository Settings**
   - Visit: https://github.com/ZombieDuckling/ashlee-motors/settings/access
   - Or: Repository → Settings → Collaborators

2. **Add Collaborator**
   - Click "Add people" button
   - Enter username: `alonbreitz-droid`
   - Select permission level:
     - **Write** - Can push code, create branches, merge PRs
     - **Admin** - Full access (can delete repo)
     - **Read** - View only
   - Click "Add [username] to this repository"

3. **User Accepts Invitation**
   - `alonbreitz-droid` will receive an email invitation
   - They need to accept the invitation to gain access

## Add via GitHub CLI (if you have it installed)

```bash
gh repo add-collaborator ZombieDuckling/ashlee-motors alonbreitz-droid --permission write
```

## Permission Levels

- **Read**: Can view and clone the repository
- **Write**: Can push code, create branches, merge pull requests
- **Admin**: Full access including repository settings

**Recommended:** Use **Write** permission for collaborators who will contribute code.


