
# Project Overview

This project is a personal bio link website built with [Astro](https://astro.build/) and [Tailwind CSS](https://tailwindcss.com/). It's designed to be a simple, fast, and SEO-friendly website that can be easily customized and deployed. The project uses a single data file (`src/data/biolink.json`) to populate the content of the bio link page, making it easy to update the links and profile information without touching the code.

The project is based on the AstroWind template, which provides a solid foundation for building a modern website with Astro. It includes features like dark mode, RTL support, image optimization, and a blog.

## Key Technologies

*   **Astro:** A web framework for building fast, content-focused websites.
*   **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
*   **MDX:** A superset of Markdown that allows you to write JSX in your Markdown files.
*   **Partytown:** A library for off-loading third-party scripts to a web worker.
*   **Unpic:** A universal image CDN for optimizing images.

# Building and Running

The following commands are used to build, run, and test the project:

| Command | Action |
| :--- | :--- |
| `npm install` | Installs dependencies |
| `npm run dev` | Starts local dev server at `localhost:4321` |
| `npm run build` | Build your production site to `./dist/` |
| `npm run preview` | Preview your build locally, before deploying |
| `npm run check` | Check your project for errors |
| `npm run fix` | Run Eslint and format codes with Prettier |
| `npm run astro ...` | Run CLI commands like `astro add`, `astro preview` |

# Development Conventions

## Configuration

The project's configuration is split between two main files:

*   `astro.config.ts`: This file contains the Astro configuration, including integrations, markdown plugins, and Vite aliases.
*   `src/config.yaml`: This file contains the site-wide configuration, including metadata, internationalization, and analytics.

## Content

The content for the bio link page is stored in `src/data/biolink.json`. This file contains the profile information, social media links, and various other links. To update the content of the bio link page, you should edit this file.

## Styling

The project uses Tailwind CSS for styling. The main Tailwind configuration file is `tailwind.config.js`. Custom styles can be added to `src/assets/styles/tailwind.css`.

## Blog

The project includes a blog that is enabled by default. The blog posts are stored in `src/content/post`. The blog's configuration can be found in `src/config.yaml`.
