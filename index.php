<?php
require_once __DIR__ . '/config.php';
$pageTitle = 'Home';
include __DIR__ . '/includes/header.php';
?>

<main>
    <!-- HERO -->
    <section class="hero">
        <video class="hero-video" autoplay loop muted playsinline>
            <source src="/assets/Ash-Lee Reel 1.mp4" type="video/mp4" />
        </video>
        <div class="hero-overlay"></div>
        <div class="container hero-content">
            <img src="/assets/logo.PNG" alt="Ash-Lee Motors" class="hero-logo" />
            <h1>Our Perfection is Your Protection</h1>
            <p class="lead">
                From fault-finding to full repairs—engines, gearboxes, clutches, auto-electrical &amp; more.
            </p>
            <div class="actions">
                <a class="btn btn-primary btn-lg" href="https://wa.me/27787764024" target="_blank" rel="noreferrer">
                    WhatsApp us
                </a>
                <a class="btn btn-secondary btn-lg" href="tel:0787764024">Call 078 776 4024</a>
            </div>
        </div>
    </section>

    <!-- SERVICES GRID -->
    <section class="section">
        <div class="container">
            <h2>Our Services</h2>
            
            <div class="gallery-filters" style="margin-bottom: var(--space-6);">
                <button class="filter-btn active" data-tab="specialized" onclick="setActiveTab('specialized')">
                    Specialized Services
                </button>
                <button class="filter-btn" data-tab="general" onclick="setActiveTab('general')">
                    General Services
                </button>
            </div>

            <div id="specialized-services" class="grid grid-3 mt-4">
                <?php foreach ($specializedServices as $service): ?>
                    <article class="card service-card">
                        <img 
                            src="<?php echo htmlspecialchars($service['image']); ?>" 
                            alt="<?php echo htmlspecialchars($service['title']); ?>"
                            style="width: 100%; height: 180px; object-fit: cover; border-radius: var(--radius-8); margin-bottom: var(--space-4);"
                        />
                        <h3><?php echo htmlspecialchars($service['title']); ?></h3>
                        <p><?php echo htmlspecialchars($service['description']); ?></p>
                        <div style="display: flex; gap: var(--space-2); flex-wrap: wrap;">
                            <a class="btn btn-primary btn-sm" href="https://wa.me/27787764024" target="_blank" rel="noreferrer">
                                WhatsApp
                            </a>
                            <a class="btn btn-secondary btn-sm" href="tel:0787764024">Call</a>
                        </div>
                    </article>
                <?php endforeach; ?>
            </div>

            <div id="general-services" class="grid grid-3 mt-4" style="display: none;">
                <?php foreach ($generalServices as $service): ?>
                    <article class="card service-card">
                        <img 
                            src="<?php echo htmlspecialchars($service['image']); ?>" 
                            alt="<?php echo htmlspecialchars($service['title']); ?>"
                            style="width: 100%; height: 180px; object-fit: cover; border-radius: var(--radius-8); margin-bottom: var(--space-4);"
                        />
                        <h3><?php echo htmlspecialchars($service['title']); ?></h3>
                        <p><?php echo htmlspecialchars($service['description']); ?></p>
                        <div style="display: flex; gap: var(--space-2); flex-wrap: wrap;">
                            <a class="btn btn-primary btn-sm" href="https://wa.me/27787764024" target="_blank" rel="noreferrer">
                                WhatsApp
                            </a>
                            <a class="btn btn-secondary btn-sm" href="tel:0787764024">Call</a>
                        </div>
                    </article>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <!-- WHY SECTION -->
    <section class="section">
        <div class="container">
            <h2>Why Ash-lee Motors</h2>
            <div class="grid grid-2 mt-4">
                <ul class="card" style="list-style: none; padding: var(--space-6);">
                    <li><strong>70+ years' combined experience</strong> across diagnostics, mechanical and auto-electrical.</li>
                    <li class="mt-3"><strong>Honest quotes &amp; clear explanations</strong> before any work begins.</li>
                    <li class="mt-3"><strong>Quality parts &amp; workmanship</strong> backed by warranty.</li>
                    <li class="mt-3"><strong>Quick turnarounds</strong> with same-day diagnostics available.</li>
                </ul>
                <div class="card">
                    <p class="mt-0"><strong>Trusted locally.</strong> We service all major brands and accept Card &amp; EFT.</p>
                    <div class="trust-strip mt-3">
                        <span>All Major Brands</span>
                        <span>Card &amp; EFT</span>
                        <span>Quality Service</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- REVIEWS -->
    <section class="section">
        <div class="container">
            <h2>What Local Drivers Say</h2>
            <div class="grid grid-3 mt-4">
                <blockquote class="review">
                    "Found the fault in one visit and had me back on the road the same day."<br/>— <em>Thabo M.</em>
                </blockquote>
                <blockquote class="review">
                    "Straightforward pricing and great communication."<br/>— <em>Sarah P.</em>
                </blockquote>
                <blockquote class="review">
                    "They fixed a persistent electrical drain no one else could."<br/>— <em>Gareth D.</em>
                </blockquote>
            </div>
        </div>
    </section>

    <!-- CTA BAND -->
    <section class="section" style="padding-top: 0;">
        <div class="container card">
            <div class="grid grid-2">
                <div>
                    <h3 class="mt-0">Need a same-day diagnostic?</h3>
                    <p class="mt-2">WhatsApp us now or call 078 776 4024.</p>
                </div>
                <div style="display: flex; gap: 12px; align-items: center; justify-content: flex-end; flex-wrap: wrap;">
                    <a class="btn btn-primary" href="https://wa.me/27787764024" target="_blank" rel="noreferrer">WhatsApp</a>
                    <a class="btn btn-secondary" href="tel:0787764024">Call</a>
                </div>
            </div>
        </div>
    </section>
</main>

<script>
function setActiveTab(tab) {
    const specializedDiv = document.getElementById('specialized-services');
    const generalDiv = document.getElementById('general-services');
    const buttons = document.querySelectorAll('.filter-btn');
    
    buttons.forEach(btn => {
        if (btn.dataset.tab === tab) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    if (tab === 'specialized') {
        specializedDiv.style.display = 'grid';
        generalDiv.style.display = 'none';
    } else {
        specializedDiv.style.display = 'none';
        generalDiv.style.display = 'grid';
    }
}
</script>

<?php include __DIR__ . '/includes/footer.php'; ?>

