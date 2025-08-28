# AstroWind BioLink Project Context

## Project Overview

This is a personal portfolio/bio link website built using the AstroWind template, which is based on Astro 5.0 + Tailwind CSS. The site serves as a centralized hub for Alec Reimel's professional presence, featuring links to his projects, social profiles, resume, and contact information.

### Key Technologies
- **Astro 5.0**: Static site generator for fast, optimized websites
- **Tailwind CSS**: Utility-first CSS framework for styling
- **TypeScript**: Typed JavaScript for better code quality
- **YAML**: Configuration management
- **ESLint/Prettier**: Code linting and formatting

### Project Structure
```
/
├── public/                 # Static assets (images, PDFs, etc.)
├── src/
│   ├── assets/            # CSS and other assets
│   ├── components/        # Reusable UI components
│   │   ├── biolink/       # BioLink-specific components
│   │   ├── common/        # General components
│   │   ├── ui/            # UI primitives
│   │   └── widgets/       # Complex widgets
│   ├── content/           # Blog content (Markdown)
│   ├── data/              # JSON data files
│   ├── layouts/           # Page layouts
│   ├── pages/             # Page routes
│   └── utils/             # Utility functions
├── astro.config.ts        # Astro configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── src/config.yaml        # Site configuration
└── package.json           # Dependencies and scripts
```

## Core Functionality

### BioLink System
The main feature is a customizable bio link page that includes:
- Personal profile section with avatar, name, title, and description
- Social media links (LinkedIn, GitHub, Email)
- Profile links (Resume, Website, Contact form)
- Project showcase links
- VHS-inspired retro styling with neo-brutalist design elements

### Styling & Design
- **VHS-inspired color palette**: Orange, yellow, red, magenta with off-white and dark gray
- **Neo-brutalist design elements**: Thick borders, bold shadows, retro fonts
- **Responsive layouts**: Mobile-friendly vertical stack and desktop bento grid
- **Dark mode support**: Automatic theme switching based on system preferences

### Custom Components
- `BioLink.astro`: Main container component
- `ProfileSection.astro`: Personal profile display
- `LinksList.astro`: Renders lists of links
- `LinkButton.astro`: Individual link buttons
- `SocialLinks.astro`: Social media icon links
- `ContactForm.astro`: Contact form with modal support

## Development Workflow

### Prerequisites
- Node.js (version 18.17.1 or higher)
- pnpm (package manager)

### Key Commands
```bash
# Install dependencies
pnpm install

# Start development server
pnpm run dev

# Build for production
pnpm run build

# Preview production build
pnpm run preview

# Check for errors
pnpm run check

# Fix code formatting
pnpm run fix
```

> **Note**: This project uses `pnpm` as the package manager. Always use `pnpm` commands instead of `npm` to ensure consistency and proper dependency management.

### Development Conventions
- **Component Structure**: Components are organized by function (biolink, common, ui, widgets)
- **Styling**: Uses Tailwind CSS with custom utilities for VHS/neo-brutalist effects
- **Data Management**: Content is managed through JSON files in `src/data/`
- **Routing**: Pages are created in `src/pages/` with Astro's file-based routing
- **Code Quality**: ESLint and Prettier ensure consistent code formatting

### Configuration Files
- `src/config.yaml`: Site metadata, SEO settings, blog configuration
- `astro.config.ts`: Astro build and integration settings
- `tailwind.config.js`: Tailwind CSS customization
- `eslint.config.js`: ESLint rules and settings
- `.prettierrc.cjs`: Prettier formatting rules

## Deployment

### Supported Platforms
- **Netlify**: Configured via `netlify.toml`
- **Vercel**: Configured in project settings
- **Docker**: Containerized deployment via `Dockerfile`

### Build Process
1. Astro builds static files to the `dist/` directory
2. Assets are optimized and minified
3. CSS/JS files are bundled and compressed

## Customization Guide

### Updating Content
1. Modify `src/data/biolink.json` to update personal information, links, and projects
2. Replace images in `public/` directory (avatar, resume PDF)
3. Update site metadata in `src/config.yaml`

### Styling Changes
1. Color palette modifications in `tailwind.config.js`
2. Custom CSS utilities in `src/assets/styles/tailwind.css`
3. Component-specific styling in individual Astro components

### Adding New Sections
1. Create new components in `src/components/biolink/`
2. Update `BioLink.astro` to include new sections
3. Add new data structures to `biolink.json`
4. Update responsive grid layouts in CSS if needed

## Maintenance

### Regular Tasks
- Update dependencies periodically with `pnpm update`
- Check for security vulnerabilities with `pnpm audit`
- Ensure compatibility with latest Astro versions

### Troubleshooting
- Clear build cache with `pnpm run clean` (if script exists)
- Check Astro documentation for migration guides when updating major versions
- Verify Tailwind CSS compatibility with new features