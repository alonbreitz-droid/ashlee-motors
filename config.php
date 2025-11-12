<?php
// Site Configuration
define('SITE_NAME', 'Ash-Lee Motors');
define('SITE_URL', '/');

// Service Images Configuration
$homeServiceImages = [
    'Computer Diagnostics' => 'JFS_2548.jpeg',
    'Engine & Gearbox' => 'JFS_2302.jpeg',
    'Clutch & Brakes' => 'JFS_2375.jpeg',
    'Auto-Electrical' => 'JFS_2246.jpeg',
    'Air-Con & Cooling' => 'JFS_2315.jpeg',
    'Fleet Care' => 'JFS_2510.jpeg'
];

$serviceImages = [
    'Computer Diagnostics' => '/assets/GT-LTDM2-1_600x.jpg.webp',
    'Engine & Gearbox' => 'JFS_2302.jpeg',
    'Clutch & Brakes' => 'JFS_2375.jpeg',
    'Auto-Electrical' => 'JFS_2246.jpeg',
    'Air-Con & Cooling' => 'JFS_2315.jpeg',
    'Fleet Care' => 'JFS_2340.jpeg'
];

// Specialized Services
$specializedServices = [
    [
        'title' => 'Computer Diagnostics',
        'description' => 'Dealer-level tools for all major brands. Fault code reading, live-data analysis, coding & resets.',
        'image' => '/assets/GT-LTDM2-1_600x.jpg.webp',
        'buttonText' => 'Call for diagnostic',
        'details' => [
            'Fault code reading and clearing',
            'Live-data analysis',
            'ECU/BCM coding and programming',
            'Module resets and adaptations',
            'All major vehicle brands supported'
        ]
    ],
    [
        'title' => 'Engine & Gearbox',
        'description' => 'Repairs, replacements and services for engines and manual/auto gearboxes. Timing sets and seals.',
        'image' => '/assets/gallery/' . $homeServiceImages['Engine & Gearbox'],
        'buttonText' => 'Get a quote',
        'details' => [
            'Engine repairs and rebuilds',
            'Gearbox repairs (manual and automatic)',
            'Timing belt/chain replacement',
            'Seal and gasket replacement',
            'Oil leaks and diagnostics'
        ]
    ],
    [
        'title' => 'Clutch & Brakes',
        'description' => 'Clutch kits, hydraulics, discs & pads, ABS fault-finding and brake fluid flushes.',
        'image' => '/assets/gallery/' . $homeServiceImages['Clutch & Brakes'],
        'buttonText' => 'Book inspection',
        'details' => [
            'Clutch kit replacement',
            'Clutch master and slave cylinder repairs',
            'Brake disc and pad replacement',
            'Brake disc skimming',
            'ABS fault diagnosis and repair',
            'Brake fluid flush and replacement'
        ]
    ],
    [
        'title' => 'Auto-Electrical',
        'description' => 'Starters, alternators, wiring repairs, parasitic drain tests, ECU/BCM coding and resets.',
        'image' => '/assets/gallery/' . $homeServiceImages['Auto-Electrical'],
        'buttonText' => 'Fix electrical issue',
        'details' => [
            'Starter motor repair and replacement',
            'Alternator repair and replacement',
            'Wiring fault diagnosis and repair',
            'Battery drain testing',
            'ECU/BCM coding and resets',
            'Electrical system diagnostics'
        ]
    ],
    [
        'title' => 'Air-Con & Cooling',
        'description' => 'Regas, pressure tests, compressors, condensers, radiators, thermostats & cooling diagnostics.',
        'image' => '/assets/gallery/' . $homeServiceImages['Air-Con & Cooling'],
        'buttonText' => 'Regas or repair',
        'details' => [
            'Air-conditioning regas',
            'Pressure and leak testing',
            'Compressor repair and replacement',
            'Condenser replacement',
            'Radiator repair and replacement',
            'Thermostat replacement',
            'Cooling system diagnostics'
        ]
    ],
    [
        'title' => 'Fleet Care',
        'description' => 'Priority booking, preventative schedules, consolidated invoicing and digital service records.',
        'image' => '/assets/gallery/JFS_2340.jpeg',
        'buttonText' => 'Enquire about fleet',
        'details' => [
            'Priority booking for fleet vehicles',
            'Preventative maintenance schedules',
            'Consolidated invoicing',
            'Digital service records',
            'Fleet management reporting',
            'Dedicated account management'
        ]
    ]
];

// General Services
$generalServices = [
    [
        'title' => 'Oil Changes & Service',
        'description' => 'Regular oil changes, filter replacements, and scheduled maintenance to keep your vehicle running smoothly.',
        'image' => '/assets/gallery/JFS_2201.jpeg',
        'buttonText' => 'Book service',
        'details' => [
            'Engine oil changes',
            'Oil filter replacement',
            'Air filter replacement',
            'Cabin filter replacement',
            'Fuel filter replacement',
            'Scheduled service intervals'
        ]
    ],
    [
        'title' => 'Emergency Light & Spotlight Fitment',
        'description' => 'Professional installation of emergency lights, spotlights, and auxiliary lighting systems for vehicles.',
        'image' => '/assets/elfit.jpg',
        'buttonText' => 'Get a quote',
        'details' => [
            'Emergency light installation',
            'Spotlight fitment',
            'Auxiliary lighting systems',
            'LED light bar installation',
            'Wiring and electrical connections',
            'Switch and control panel installation'
        ]
    ],
    [
        'title' => 'Battery Services',
        'description' => 'Battery testing, replacement, and charging system diagnostics to keep you on the road.',
        'image' => '/assets/gallery/JFS_2127.jpeg',
        'buttonText' => 'Test battery',
        'details' => [
            'Battery testing',
            'Battery replacement',
            'Charging system diagnostics',
            'Alternator testing',
            'Starter motor testing',
            'Battery terminal cleaning'
        ]
    ],
    [
        'title' => 'Vehicle Inspections',
        'description' => 'Comprehensive vehicle inspections, pre-purchase checks, and roadworthy certifications.',
        'image' => '/assets/gallery/JFS_2268.jpeg',
        'buttonText' => 'Book inspection',
        'details' => [
            'Pre-purchase inspections',
            'Roadworthy certifications',
            'Comprehensive vehicle checks',
            'Safety inspections',
            'Emission testing',
            'Service history reviews'
        ]
    ],
    [
        'title' => 'General Repairs',
        'description' => 'All general automotive repairs and maintenance work performed by experienced technicians.',
        'image' => '/assets/gallery/JFS_2187.jpeg',
        'buttonText' => 'Get a quote',
        'details' => [
            'General mechanical repairs',
            'Suspension repairs',
            'Exhaust system repairs',
            'Steering repairs',
            'Drivetrain repairs',
            'General maintenance'
        ]
    ],
    [
        'title' => 'Recovery Services',
        'description' => 'Vehicle recovery and roadside assistance to get you back on the road quickly and safely.',
        'image' => '/assets/gallery/JFS_2343.jpeg',
        'buttonText' => 'Call recovery',
        'details' => [
            'Vehicle recovery',
            'Roadside assistance',
            'Breakdown recovery',
            'Towing services',
            'Emergency repairs',
            '24/7 availability'
        ]
    ]
];

// Gallery Images
$galleryImages = [
    'JFS_2082.jpeg', 'JFS_2087.jpeg', 'JFS_2089.jpeg', 'JFS_2092.jpeg', 'JFS_2097.jpeg',
    'JFS_2098.jpeg', 'JFS_2100.jpeg', 'JFS_2102.jpeg', 'JFS_2107.jpeg', 'JFS_2109-2.jpeg',
    'JFS_2117.jpeg', 'JFS_2119.jpeg', 'JFS_2121.jpeg', 'JFS_2122.jpeg',
    'JFS_2134.jpeg', 'JFS_2138.jpeg', 'JFS_2148.jpeg', 'JFS_2154.jpeg', 'JFS_2159.jpeg',
    'JFS_2167.jpeg', 'JFS_2170.jpeg', 'JFS_2172.jpeg', 'JFS_2187.jpeg', 'JFS_2189.jpeg',
    'JFS_2191.jpeg', 'JFS_2195.jpeg', 'JFS_2199.jpeg', 'JFS_2201.jpeg', 'JFS_2202.jpeg',
    'JFS_2210.jpeg', 'JFS_2222.jpeg', 'JFS_2234.jpeg', 'JFS_2237.jpeg', 'JFS_2241.jpeg',
    'JFS_2248-2.jpeg', 'JFS_2253.jpeg', 'JFS_2265.jpeg',
    'JFS_2291.jpeg', 'JFS_2296.jpeg', 'JFS_2312.jpeg',
    'JFS_2336.jpeg', 'JFS_2351.jpeg', 'JFS_2352.jpeg',
    'JFS_2368.jpeg', 'JFS_2392.jpeg',
    'JFS_2409.jpeg', 'JFS_2415.jpeg', 'JFS_2416.jpeg', 'JFS_2418.jpeg', 'JFS_2426.jpeg',
    'JFS_2427.jpeg', 'JFS_2432.jpeg', 'JFS_2434.jpeg', 'JFS_2437.jpeg', 'JFS_2441-2.jpeg',
    'JFS_2441.jpeg', 'JFS_2449-2.jpeg', 'JFS_2449.jpeg', 'JFS_2451-2.jpeg', 'JFS_2451.jpeg',
    'JFS_2452.jpeg', 'JFS_2456.jpeg', 'JFS_2458.jpeg', 'JFS_2462.jpeg', 'JFS_2473.jpeg',
    'JFS_2475.jpeg', 'JFS_2481.jpeg', 'JFS_2486.jpeg', 'JFS_2499.jpeg', 'JFS_2503.jpeg',
    'JFS_2506.jpeg', 'JFS_2579-2.jpeg', 'JFS_2582-2.jpeg', 'JFS_2590.jpeg'
];

// Helper function to get current page
function getCurrentPage() {
    $page = basename($_SERVER['PHP_SELF'], '.php');
    return $page === 'index' ? '/' : '/' . $page;
}

// Helper function to check if page is active
function isActive($path) {
    $current = getCurrentPage();
    return ($current === $path || ($path === '/' && $current === '/')) ? 'active' : '';
}
?>

