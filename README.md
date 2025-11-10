# Ash-lee Motors Website

A modern, responsive website for Ash-lee Motors - Automotive diagnostics and repair services in Wynberg, Sandton.

## Features

- **Responsive Design**: Mobile-first approach, works seamlessly on all devices
- **Modern React**: Built with React 18 and React Router
- **Design System**: Consistent styling based on the brand design system
- **All Pages**: Home, Services, About, Gallery, Booking, and Contact pages

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
ashlee motors/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Services.jsx
│   │   ├── About.jsx
│   │   ├── Gallery.jsx
│   │   ├── Booking.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

## Pages

- **Home**: Hero section, service highlights, why choose us, reviews, and CTA
- **Services**: Detailed service offerings with descriptions
- **About**: Mission, values, and company history
- **Gallery**: Image gallery with category filters (All, Bodywork, Mechanical)
- **Booking**: 2-step booking form for vehicle and customer details
- **Contact**: Contact information, address, opening hours, and map placeholder

## Design System

- **Colors**: Charcoal (#1C1C1C), Signal Red (#DC2626), Accent Blue (#2563EB), Ash Gray (#E5E5E5)
- **Typography**: Inter/Montserrat for headings, Roboto for body text
- **Spacing**: 4px base scale (4, 8, 12, 16, 24, 32, 48px)
- **Border Radius**: 0, 8px, 12px

## Technologies

- React 18
- React Router DOM
- Vite
- CSS3 (Custom Properties)

## License

© 2024 Ash-lee Motors

