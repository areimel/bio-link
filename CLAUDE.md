# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

This is an Astro-based biolink application. Key commands:

- `npm run dev` - Start development server at localhost:4321
- `npm run build` - Build production site to ./dist/
- `npm run preview` - Preview production build locally
- `npm run check` - Run comprehensive checks (Astro, ESLint, Prettier)
- `npm run fix` - Auto-fix ESLint issues and format with Prettier
- `npm run check:astro` - Astro-specific type checking
- `npm run check:eslint` - ESLint validation only
- `npm run check:prettier` - Prettier format validation only

## Project Architecture

### Core Structure
This is a customized Astro biolink application built on the AstroWind template with significant modifications:

- **Static Site Generation**: Uses Astro 5.0 with static output configuration
- **Styling**: Tailwind CSS with custom VHS-inspired theme (neo-brutalism styling)
- **Data-Driven**: Profile and links data stored in `src/data/biolink.json`
- **Component Architecture**: Modular biolink components in `src/components/biolink/`

### Key Configuration Files
- `src/config.yaml` - Site metadata, SEO, and app configuration
- `src/data/biolink.json` - Profile data, social links, contact links, and project links
- `tailwind.config.js` - Custom VHS color palette and theme extensions
- `src/components/CustomStyles.astro` - Global CSS custom properties and VHS theme variables

### Biolink Data Structure
The application uses a JSON-driven approach with four main link categories:
- `socialLinks` - Social media platforms (rendered in profile section)
- `profileLinks` - Primary action buttons (contact forms, resume, etc.)
- `contactLinks` - Website/blog links in "Connect with me" section
- `projectLinks` - Portfolio/project showcase in "My Projects" section

### Theme System
- **VHS-Inspired Design**: Custom color palette with retro aesthetics
- **Neo-Brutalism Styling**: Bold borders, high contrast, pixelated fonts
- **Dark Mode Support**: Full theme switching with `class` strategy
- **Custom Fonts**: "Press Start 2P" for headings, "Courier Prime" for mono

### Component Hierarchy
Main biolink flow: `index.astro` → `BioLink.astro` → `ProfileSection.astro` + `LinksList.astro`
- `ProfileSection.astro` handles avatar, name, title, description, and social links
- `LinksList.astro` renders categorized link buttons
- Modal system via `PopupModal.astro` for contact forms

### Build Configuration
- **Path Aliases**: `~/*` maps to `src/*` for clean imports
- **Astro Integrations**: Tailwind, Sitemap, MDX, Icon, Compress
- **Icon System**: Uses Tabler icons and Flat Color Icons via astro-icon
- **Image Optimization**: Astro Assets with Unpic CDN support