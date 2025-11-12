<?php
require_once __DIR__ . '/config.php';
$pageTitle = 'About Us';
include __DIR__ . '/includes/header.php';
?>

<main>
    <section class="section">
        <div class="container">
            <h1>About Us</h1>
            
            <div style="width: 100%; height: 60vh; min-height: 400px; overflow: hidden; border-radius: var(--radius-16); margin-bottom: var(--space-6); position: relative;">
                <img 
                    src="/assets/gallery/JFS_2354.jpeg" 
                    alt="Ash-lee Motors workshop"
                    style="width: 100%; height: 100%; object-fit: cover; object-position: center top;"
                />
            </div>

            <div class="grid grid-2 mt-4">
                <div>
                    <h2>Mission &amp; Values</h2>
                    <p>
                        At Ash-lee Motors, we believe in doing the job right the first time. With over 70 years of combined experience 
                        in automotive diagnostics, mechanical repairs, and auto-electrical work, we've built our reputation on honesty, 
                        quality, and reliability.
                    </p>
                    <p>
                        Our mission is to provide all clientele with honest, transparent Services backed by dealer-level 
                        diagnostic tools and quality parts. We take the time to explain what's wrong with your vehicle and provide clear, 
                        upfront quotes before any work begins.
                    </p>
                    <p>
                        We're committed to quick turnarounds without compromising on quality. Whether you need a same-day diagnostic 
                        or a full engine rebuild, we treat every vehicle with the care and attention it deserves.
                    </p>
                    <video
                        controls
                        autoplay
                        loop
                        playsinline
                        style="width: 100%; border-radius: var(--radius-16); margin-top: var(--space-6);"
                    >
                        <source src="/assets/Ash-Lee reel 2.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

                <div>
                    <h2>History</h2>
                    <img
                        src="/assets/grandpa.png"
                        alt="Ash-lee Motors team"
                        style="width: 100%; height: auto; border-radius: var(--radius-8); margin-bottom: var(--space-4); object-fit: cover; filter: grayscale(100%);"
                    />
                    <p>
                        Ash-lee Motors has been serving the community for years, building trust through consistent, 
                        quality workmanship and honest customer service. Over 3 generations of a grassroots family run business.
                    </p>
                    <p>
                        Our team brings together decades of experience across all aspects of vehicle diagnostics and repair. From 
                        computer diagnostics using the latest dealer-level tools, to complex mechanical and auto-electrical work, 
                        we've seen it all.
                    </p>
                    <p>
                        We're authorized to work on a wide range of vehicle brands and models. We've 
                        helped thousands of local drivers get back on the road safely and quickly.
                    </p>
                    <p>
                        Today, we continue to invest in the latest diagnostic equipment and training, ensuring we can handle everything 
                        from routine maintenance to the most complex fault-finding challenges.
                    </p>
                </div>
            </div>

            <div class="card mt-4">
                <h2>Why Choose Us</h2>
                <div class="grid grid-2">
                    <ul style="list-style: none; padding: 0;">
                        <li style="margin-bottom: var(--space-3);">
                            <strong>70+ years' combined experience</strong> across diagnostics, mechanical and auto-electrical
                        </li>
                        <li style="margin-bottom: var(--space-3);">
                            <strong>Dealer-level diagnostic tools</strong> for all major vehicle brands
                        </li>
                        <li style="margin-bottom: var(--space-3);">
                            <strong>Honest quotes</strong> with clear explanations before work begins
                        </li>
                    </ul>
                    <ul style="list-style: none; padding: 0;">
                        <li style="margin-bottom: var(--space-3);">
                            <strong>Quality parts &amp; workmanship</strong> backed by warranty
                        </li>
                        <li style="margin-bottom: var(--space-3);">
                            <strong>Quick turnarounds</strong> with same-day diagnostics available
                        </li>
                        <li style="margin-bottom: var(--space-3);">
                            <strong>Trusted locally</strong> - Serving the community for generations
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</main>

<?php include __DIR__ . '/includes/footer.php'; ?>

