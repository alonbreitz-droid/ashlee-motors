<?php
require_once __DIR__ . '/config.php';
$pageTitle = 'Contact';
include __DIR__ . '/includes/header.php';
?>

<main style="position: relative; min-height: 100vh; width: 100vw; margin: 0; padding: 0; background-image: url(/assets/gallery/JFS_2360.jpeg); background-size: cover; background-position: center; background-repeat: no-repeat; background-attachment: fixed;">
    <div style="position: absolute; top: 0; left: 0; width: 100%; min-height: 100vh; background-color: rgba(28, 28, 28, 0.6); backdrop-filter: blur(2px); z-index: 1;"></div>
    
    <section class="section" style="position: relative; z-index: 2; min-height: 100vh; padding-top: var(--space-12); padding-bottom: var(--space-12);">
        <div class="container">
            <h1 style="color: var(--white);">Contact Us</h1>

            <div class="map-placeholder" style="background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(var(--blur-sm)); border: 1px solid rgba(255, 255, 255, 0.3); padding: 0; overflow: hidden;">
                <iframe
                    src="https://www.google.com/maps?q=16+4th+Street+Wynberg+Sandton&output=embed"
                    width="100%"
                    height="100%"
                    style="border: 0; min-height: 400px; border-radius: var(--radius-16);"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    title="Ash-lee Motors Location - 16 4th Street, Wynberg, Sandton"
                ></iframe>
            </div>

            <div class="contact-info">
                <div>
                    <div class="contact-section">
                        <h2 style="color: var(--white);">Address</h2>
                        <p style="color: rgba(255, 255, 255, 0.9);">16 4th Street</p>
                        <p style="color: rgba(255, 255, 255, 0.9);">Wynberg, Sandton</p>
                    </div>

                    <div class="contact-section">
                        <h2 style="color: var(--white);">Opening Hours</h2>
                        <p style="color: rgba(255, 255, 255, 0.9);"><strong>Monday - Friday:</strong> 08:00 - 17:00</p>
                        <p style="color: rgba(255, 255, 255, 0.9);"><strong>Saturday:</strong> Closed</p>
                        <p style="color: rgba(255, 255, 255, 0.9);"><strong>Sunday:</strong> Closed</p>
                    </div>
                </div>

                <div>
                    <div class="contact-section">
                        <h2 style="color: var(--white);">Get in Touch</h2>
                        <p style="color: rgba(255, 255, 255, 0.9);">
                            <a href="https://wa.me/27787764024" target="_blank" rel="noreferrer" style="color: rgba(255, 255, 255, 0.9); text-decoration: underline;">078 776 4024 (WhatsApp)</a>
                            or
                            <a href="tel:0787764024" style="color: rgba(255, 255, 255, 0.9); text-decoration: underline;">Call</a>
                        </p>
                        <p style="color: rgba(255, 255, 255, 0.9);">
                            <a href="https://wa.me/27789996243" target="_blank" rel="noreferrer" style="color: rgba(255, 255, 255, 0.9); text-decoration: underline;">078 999 6243 (WhatsApp)</a>
                            or
                            <a href="tel:0789996243" style="color: rgba(255, 255, 255, 0.9); text-decoration: underline;">Call</a>
                        </p>
                        <p style="color: rgba(255, 255, 255, 0.9);">
                            <a href="mailto:info@ash-leemotors.co.za" style="color: rgba(255, 255, 255, 0.9);">info@ash-leemotors.co.za</a>
                        </p>
                        <div class="contact-buttons">
                            <a class="btn btn-primary" href="https://wa.me/27787764024" target="_blank" rel="noreferrer">
                                WhatsApp us
                            </a>
                            <a class="btn btn-secondary" href="tel:0787764024">Call</a>
                        </div>
                    </div>

                    <div class="contact-section">
                        <h2 style="color: var(--white);">Parking</h2>
                        <p style="color: rgba(255, 255, 255, 0.9);">
                            Directions or notes about parking. Ample parking available on-site. 
                            Please use the designated customer parking area.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>

<?php include __DIR__ . '/includes/footer.php'; ?>

