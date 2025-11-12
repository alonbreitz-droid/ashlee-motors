<?php
require_once __DIR__ . '/../config.php';
$currentPage = getCurrentPage();
?>
<nav>
    <div class="container nav-container">
        <a href="/" class="nav-brand" style="display: flex; align-items: center; gap: var(--space-3);">
            <img src="/assets/logo.PNG" alt="Ash-Lee Motors" class="nav-logo" />
            <span style="font-size: var(--font-size-lg); font-weight: bold; color: var(--white);">ASH-LEE MOTORS</span>
        </a>
        <ul class="nav-links">
            <li>
                <a href="/" class="<?php echo isActive('/'); ?>">
                    Home
                </a>
            </li>
            <li>
                <a href="/services.php" class="<?php echo isActive('/services.php'); ?>">
                    Services
                </a>
            </li>
            <li>
                <a href="/about.php" class="<?php echo isActive('/about.php'); ?>">
                    About
                </a>
            </li>
            <li>
                <a href="/gallery.php" class="<?php echo isActive('/gallery.php'); ?>">
                    Gallery
                </a>
            </li>
            <li>
                <a href="/contact.php" class="<?php echo isActive('/contact.php'); ?>">
                    Contact
                </a>
            </li>
        </ul>
    </div>
</nav>

