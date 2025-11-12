# Ash-Lee Motors - LAMP Stack Setup

This is a LAMP (Linux, Apache, MySQL, PHP) stack implementation of the Ash-Lee Motors website.

## Requirements

- PHP 7.4 or higher
- Apache 2.4 or higher with mod_rewrite enabled
- MySQL 5.7 or higher (optional, not currently used)
- Web server with document root pointing to this directory

## Installation

1. **Clone or download the repository**
   ```bash
   git clone <repository-url>
   cd ashlee-motors
   ```

2. **Set up Apache Virtual Host** (if using local development)
   
   Add to your Apache configuration (`/etc/apache2/sites-available/ashlee-motors.conf` or similar):
   ```apache
   <VirtualHost *:80>
       ServerName ashlee-motors.local
       DocumentRoot /path/to/ashlee-motors
       
       <Directory /path/to/ashlee-motors>
           Options Indexes FollowSymLinks
           AllowOverride All
           Require all granted
       </Directory>
   </VirtualHost>
   ```

3. **Enable mod_rewrite** (if not already enabled)
   ```bash
   sudo a2enmod rewrite
   sudo systemctl restart apache2
   ```

4. **Set proper permissions**
   ```bash
   chmod 755 /path/to/ashlee-motors
   chmod 644 /path/to/ashlee-motors/.htaccess
   ```

5. **Configure PHP** (if needed)
   - Ensure PHP is installed and running
   - Check `php.ini` settings for upload limits if needed

## File Structure

```
ashlee-motors/
├── index.php              # Home page
├── about.php              # About page
├── services.php           # Services page
├── gallery.php            # Gallery page
├── contact.php            # Contact page
├── config.php             # Site configuration and data
├── .htaccess              # Apache rewrite rules
├── includes/
│   ├── header.php         # HTML head and opening tags
│   ├── navigation.php     # Navigation menu
│   └── footer.php         # Footer and closing tags
├── assets/
│   ├── css/
│   │   └── style.css      # Main stylesheet
│   ├── gallery/           # Gallery images
│   └── ...                # Other assets (logo, videos, etc.)
└── public/
    └── assets/            # Public assets (same structure)
```

## URL Structure

- `/` or `/index.php` - Home page
- `/about` or `/about.php` - About page
- `/services` or `/services.php` - Services page
- `/gallery` or `/gallery.php` - Gallery page
- `/contact` or `/contact.php` - Contact page

The `.htaccess` file removes the `.php` extension from URLs for cleaner URLs.

## Features

- **Glass morphism design** - Modern, transparent UI elements
- **Responsive design** - Works on all device sizes
- **Service tabs** - Toggle between specialized and general services
- **Gallery with filters** - Filter images by category
- **Lightbox modal** - Full-screen image viewing
- **WhatsApp integration** - Primary contact method
- **Google Maps embed** - Location map on contact page

## Development

1. **Local Development**
   - Use XAMPP, WAMP, MAMP, or similar
   - Point document root to project directory
   - Access via `http://localhost` or configured virtual host

2. **Production Deployment**
   - Upload all files to web server
   - Ensure Apache mod_rewrite is enabled
   - Set proper file permissions
   - Configure PHP settings as needed

## Notes

- Video files (`Ash-Lee Reel 1.mp4` and `Ash-Lee reel 2.mp4`) are excluded from git due to size limits
- All images are in `public/assets/gallery/`
- CSS is in `assets/css/style.css`
- Configuration and shared data is in `config.php`

## Support

For issues or questions, contact Pritchard Specialized Solutions.

