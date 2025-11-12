<?php
require_once __DIR__ . '/config.php';
$pageTitle = 'Services';
include __DIR__ . '/includes/header.php';
?>

<main>
    <section class="section">
        <div class="container">
            <h1>Services</h1>
            <h2>Diagnostics &amp; Repairs in Wynberg, Sandton</h2>
            <p class="lead">
                We offer a complete range of services covering every aspect of your vehicle's diagnostics, maintenance, and repair.
            </p>

            <div class="gallery-filters" style="margin-bottom: var(--space-6);">
                <button class="filter-btn active" data-tab="specialized" onclick="setActiveTab('specialized')">
                    Specialized Services
                </button>
                <button class="filter-btn" data-tab="general" onclick="setActiveTab('general')">
                    General Services
                </button>
            </div>

            <div id="specialized-services" class="grid grid-3 mt-4">
                <?php 
                // Update images for services page
                $servicesPageSpecialized = $specializedServices;
                foreach ($servicesPageSpecialized as $index => $service) {
                    $title = $service['title'];
                    if (isset($serviceImages[$title])) {
                        $img = $serviceImages[$title];
                        $servicesPageSpecialized[$index]['image'] = (strpos($img, '/assets/') === 0) ? $img : '/assets/gallery/' . $img;
                    }
                }
                foreach ($servicesPageSpecialized as $service): ?>
                    <article class="card service-card">
                        <img 
                            src="<?php echo htmlspecialchars($service['image']); ?>" 
                            alt="<?php echo htmlspecialchars($service['title']); ?>"
                            style="width: 100%; height: 200px; object-fit: cover; border-radius: var(--radius-8); margin-bottom: var(--space-4);"
                        />
                        <h3><?php echo htmlspecialchars($service['title']); ?></h3>
                        <p><?php echo htmlspecialchars($service['description']); ?></p>
                        <ul style="margin-bottom: var(--space-4); padding-left: var(--space-6);">
                            <?php foreach ($service['details'] as $detail): ?>
                                <li style="margin-bottom: var(--space-2);"><?php echo htmlspecialchars($detail); ?></li>
                            <?php endforeach; ?>
                        </ul>
                        <div style="display: flex; gap: var(--space-2); flex-wrap: wrap;">
                            <a class="btn btn-primary btn-sm" href="https://wa.me/27787764024" target="_blank" rel="noreferrer">
                                WhatsApp
                            </a>
                            <a class="btn btn-secondary btn-sm" href="tel:0787764024">
                                Call
                            </a>
                        </div>
                    </article>
                <?php endforeach; ?>
            </div>

            <div id="general-services" class="grid grid-3 mt-4" style="display: none;">
                <?php foreach ($generalServices as $service): ?>
                    <article class="card service-card">
                        <img 
                            src="<?php echo (strpos($service['image'], '/assets/') === 0) ? htmlspecialchars($service['image']) : '/assets/gallery/' . htmlspecialchars($service['image']); ?>" 
                            alt="<?php echo htmlspecialchars($service['title']); ?>"
                            style="width: 100%; height: 200px; object-fit: cover; border-radius: var(--radius-8); margin-bottom: var(--space-4);"
                        />
                        <h3><?php echo htmlspecialchars($service['title']); ?></h3>
                        <p><?php echo htmlspecialchars($service['description']); ?></p>
                        <ul style="margin-bottom: var(--space-4); padding-left: var(--space-6);">
                            <?php foreach ($service['details'] as $detail): ?>
                                <li style="margin-bottom: var(--space-2);"><?php echo htmlspecialchars($detail); ?></li>
                            <?php endforeach; ?>
                        </ul>
                        <div style="display: flex; gap: var(--space-2); flex-wrap: wrap;">
                            <a class="btn btn-primary btn-sm" href="https://wa.me/27787764024" target="_blank" rel="noreferrer">
                                WhatsApp
                            </a>
                            <a class="btn btn-secondary btn-sm" href="tel:0787764024">
                                Call
                            </a>
                        </div>
                    </article>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <section class="section" style="padding-top: 0;">
        <div class="container card">
            <div style="text-align: center;">
                <h3 class="mt-0">Need a diagnosis or repair?</h3>
                <p>Get in touch today to book your vehicle or request a quote.</p>
                <div class="actions" style="margin-top: var(--space-6);">
                    <a class="btn btn-primary" href="https://wa.me/27787764024" target="_blank" rel="noreferrer">WhatsApp us</a>
                    <a class="btn btn-secondary" href="tel:0787764024">Call 078 776 4024</a>
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

