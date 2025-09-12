# Theme Variables Update - Planning Document

## Overview
This document outlines the implementation of hyper-specific CSS variables for better theme control in the biolink application.

## New CSS Variables to Implement

### Background Variables
- `--aw-page-background` → maps to `var(--aw-color-bg-page)` (#f2e2c8)
- `--aw-section-background` → maps to `var(--aw-color-theme-surface)` (#f8f6f0)

### Button Variables
- `--aw-link-button-background` → maps to `var(--aw-color-theme-surface)` (#f8f6f0)
- `--aw-link-button-text-color` → maps to `var(--aw-color-theme-text)` (#444444)
- `--aw-link-button-accent-color` → maps to `var(--aw-color-theme-primary)` (#f47f21)
- `--aw-social-button-background` → maps to `var(--aw-color-theme-text)` (#444444)
- `--aw-social-button-background-hover` → maps to `var(--aw-color-theme-primary)` (#f47f21)

### Text Variables
- `--aw-body-text-color` → maps to `var(--aw-color-theme-text)` (#444444)
- `--aw-headline-color` → maps to `var(--aw-color-theme-accent)` (#da3440)

### Border Variables
- `--aw-border-color` → maps to `black`
- `--aw-border-thickness` → maps to `3px`

## Components Requiring Updates

### Core Button Components
- [ ] `src/components/common/BaseButton.astro`
  - Replace `bg-theme-surface` with `--aw-link-button-background`
  - Replace `bg-theme-primary` with `--aw-link-button-accent-color`
  - Replace `text-theme-text` with `--aw-link-button-text-color`

- [ ] `src/components/common/SocialButton.astro`
  - Replace `bg-theme-text` with `--aw-social-button-background`
  - Replace `hover:bg-theme-primary` with `--aw-social-button-background-hover`

- [ ] `src/components/common/Badge.astro`
  - Update variant background colors to use new variables

### Biolink Section Components
- [ ] `src/components/biolink/ProfileSection.astro`
  - Replace `text-theme-text` with `--aw-body-text-color`
  - Replace `text-theme-accent` with `--aw-headline-color`
  - Replace `border-theme-accent` with border variables

- [ ] `src/components/biolink/HeroSection.astro`
  - Replace theme text colors with new variables
  - Replace border colors with new variables

- [ ] `src/components/biolink/SectionHeader.astro`
  - Replace `text-theme-text` with `--aw-headline-color`

- [ ] `src/components/biolink/SectionBreak.astro`
  - Replace `border-theme-text` and `bg-theme-text` with border variables

- [ ] `src/components/biolink/ContactForm.astro`
  - Replace form styling variables
  - Update input backgrounds and text colors

- [ ] `src/components/biolink/ProjectCard.astro`
  - Replace `bg-theme-surface` with `--aw-section-background`
  - Replace `bg-theme-secondary` with appropriate variable
  - Replace text colors with new variables

- [ ] `src/components/biolink/ProjectsSection.astro`
  - Replace section background with `--aw-section-background`

- [ ] `src/components/biolink/ProjectsSectionMobile.astro`
  - Replace section background with `--aw-section-background`

- [ ] `src/components/biolink/FreelanceBrandSection.astro`
  - Replace `bg-theme-surface` with `--aw-section-background`
  - Replace text colors with new variables

- [ ] `src/components/biolink/SiteTemplateSection.astro`
  - Replace `bg-theme-surface` with `--aw-section-background`
  - Replace text colors with new variables

- [ ] `src/components/biolink/SupportSection.astro`
  - Replace section background and text variables

### Modal and Utility Components
- [ ] `src/components/common/PopupModal.astro`
  - Update modal styling with new variables

- [ ] `src/components/common/Section.astro`
  - Update section utility classes

### Styling Updates
- [ ] `src/assets/styles/tailwind.css`
  - Update `.neo-border` to use `var(--aw-border-thickness)` and `var(--aw-border-color)`
  - Update any hardcoded border or color values

## Color Mapping Reference

### Current Theme Colors (to be preserved)
- **Primary Orange**: #f47f21 (actions, buttons)
- **Secondary Yellow**: #f7d959 (secondary accents) 
- **Accent Red**: #da3440 (highlights, headlines)
- **Accent Alt Magenta**: #af375d (alternative highlights)
- **Surface Off-white**: #f2e2c8 (section backgrounds)
- **Text Dark Gray**: #444444 (main text)
- **Black**: #000000 (borders)

## Implementation Strategy

1. **Phase 1**: Update CustomStyles.astro with new variables
2. **Phase 2**: Update core button components (BaseButton, SocialButton, Badge)
3. **Phase 3**: Update biolink section components in parallel using sub-agents
4. **Phase 4**: Update utility CSS classes in tailwind.css
5. **Phase 5**: Verify no visual changes occurred

## Success Criteria
- All specified variables implemented in CustomStyles.astro
- All components updated to use new variables
- Zero visual changes to the application
- Maintained neo-brutalist styling
- All existing functionality preserved