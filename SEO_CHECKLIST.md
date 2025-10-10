# SEO Checklist & Reference Guide

This document provides a comprehensive reference for all SEO-related metadata, tags, and configuration points in the biolink project. Use this as a guide for SEO audits, updates, and optimization.

---

## Table of Contents

1. [Site Configuration](#1-site-configuration)
2. [Default SEO Metadata](#2-default-seo-metadata)
3. [Open Graph Tags](#3-open-graph-tags)
4. [Twitter Card Tags](#4-twitter-card-tags)
5. [Google Services Integration](#5-google-services-integration)
6. [Favicons & Icons](#6-favicons--icons)
7. [Sitemaps & Feeds](#7-sitemaps--feeds)
8. [Robots.txt](#8-robotstxt)
9. [Page-Specific Metadata](#9-page-specific-metadata)
10. [Profile & Social Data](#10-profile--social-data)
11. [Environment Variables](#11-environment-variables)
12. [Component Architecture](#12-component-architecture)
13. [Structured Data Opportunities](#13-structured-data-opportunities)
14. [SEO Improvement Checklist](#14-seo-improvement-checklist)

---

## 1. Site Configuration

### Primary Site URL
**File:** `src/config.yaml`
**Lines:** 1-5

```yaml
site:
  name: AstroWind
  site: 'https://astrowind.vercel.app'
  base: '/'
  trailingSlash: false
```

**Action Items:**
- [ ] Update `site.name` to match brand/personal name
- [ ] Update `site.site` to production domain URL
- [ ] Verify `base` path (usually '/' for root deployment)
- [ ] Confirm `trailingSlash` preference for URL structure

### Build Configuration
**File:** `astro.config.ts`
**Lines:** 24-32

- Output mode: `static` (line 25)
- Sitemap integration enabled (line 31)
- Image domains whitelisted: `cdn.pixabay.com` (line 75)

---

## 2. Default SEO Metadata

### Title Configuration
**File:** `src/config.yaml`
**Lines:** 11-13

```yaml
metadata:
  title:
    default: AstroWind
    template: '%s — AstroWind'
```

**Current Values:**
- Default title: "AstroWind"
- Template pattern: "%s — AstroWind" (page title — site name)

**Action Items:**
- [ ] Update default title to your name/brand
- [ ] Update title template pattern
- [ ] Verify title appears correctly in browser tabs

### Meta Description
**File:** `src/config.yaml`
**Line:** 14

```yaml
description: "🚀 Suitable for Startups, Small Business, Sass Websites, Professional Portfolios, Marketing Websites, Landing Pages & Blogs."
```

**Action Items:**
- [ ] Write compelling, keyword-rich description (150-160 characters)
- [ ] Ensure description matches site purpose
- [ ] Remove emoji if not appropriate for professional context

### Robots Meta Tags
**File:** `src/config.yaml`
**Lines:** 15-17

```yaml
robots:
  index: true
  follow: true
```

**Current Settings:**
- Indexing: **Enabled** (pages will appear in search results)
- Link following: **Enabled** (crawlers will follow links)

**Action Items:**
- [ ] Confirm these settings are correct for production
- [ ] Consider `noindex` for staging/development environments

---

## 3. Open Graph Tags

### Open Graph Configuration
**File:** `src/config.yaml`
**Lines:** 18-24

```yaml
openGraph:
  site_name: AstroWind
  images:
    - url: '~/assets/images/default.png'
      width: 1200
      height: 628
  type: website
```

**Current Values:**
- Site name: "AstroWind"
- Default OG image: `src/assets/images/default.png`
- Image dimensions: 1200x628 (recommended size)
- Type: website

**Image Location:**
**File:** `src/assets/images/default.png`

**Action Items:**
- [ ] Update `site_name` to match brand
- [ ] Create/replace default OG image (1200x628px recommended)
- [ ] Ensure image has compelling visual content
- [ ] Test OG image appears correctly on social platforms
- [ ] Consider creating page-specific OG images

### Open Graph Implementation
**File:** `src/components/common/Metadata.astro`
**Lines:** 27-68

- Uses `@astrolib/seo` package for OG tag generation
- Supports dynamic OG image optimization via `adaptOpenGraphImages()`
- Merges global config with page-specific metadata

**Related Utility:**
**File:** `src/utils/images.ts`
**Lines:** 52-111
Function: `adaptOpenGraphImages()` - Optimizes and adapts OG images

---

## 4. Twitter Card Tags

### Twitter Configuration
**File:** `src/config.yaml`
**Lines:** 25-28

```yaml
twitter:
  handle: '@onwidget'
  site: '@onwidget'
  cardType: summary_large_image
```

**Current Values:**
- Twitter handle: "@onwidget"
- Site handle: "@onwidget"
- Card type: summary_large_image (shows large preview image)

**Action Items:**
- [ ] Update `handle` to your personal Twitter/X username
- [ ] Update `site` handle to match
- [ ] Verify card type preference (summary_large_image vs summary)
- [ ] Test Twitter card preview using Twitter Card Validator

### Twitter Card Implementation
**File:** `src/components/common/Metadata.astro`
**Lines:** 42-44, 63

- Automatically selects card type based on image availability
- Falls back to 'summary' if no images present

---

## 5. Google Services Integration

### Google Site Verification
**File:** `src/config.yaml`
**Line:** 7

```yaml
googleSiteVerificationId: orcPxI47GSa-cRvY11tUe6iGg2IO_RPvnA1q95iEM3M
```

**Component Implementation:**
**File:** `src/components/common/SiteVerification.astro`
**Lines:** 1-6

**Action Items:**
- [ ] Get your Google Search Console verification ID
- [ ] Replace verification ID in config.yaml
- [ ] Verify ownership in Google Search Console
- [ ] Submit sitemap to Google Search Console

### Google Analytics
**File:** `src/config.yaml`
**Lines:** 66-69

```yaml
analytics:
  vendors:
    googleAnalytics:
      id: null # or "G-XXXXXXXXXX"
```

**Component Implementation:**
**File:** `src/components/common/Analytics.astro`
**Lines:** 1-14

**Current Status:** Analytics disabled (id: null)

**Action Items:**
- [ ] Create Google Analytics 4 property
- [ ] Add GA4 measurement ID (format: G-XXXXXXXXXX)
- [ ] Update config.yaml with GA4 ID
- [ ] Verify tracking works after deployment

### Google Tag Manager
**File:** `src/components/common/GtmTagHead.astro`
**Lines:** 1-3

```javascript
GTM Container ID: GTM-M7FV36FQ
```

**File:** `src/components/common/GtmTagBody.astro`
**Lines:** 1-3

**Current Status:** GTM is actively configured

**Action Items:**
- [ ] Verify GTM container ID is correct
- [ ] Or replace with your own GTM container
- [ ] Configure tags, triggers, and variables in GTM dashboard
- [ ] Test GTM deployment using Tag Assistant

**GTM Integration Points:**
- Head script: `src/layouts/Layout.astro` (line 36)
- Body noscript: `src/layouts/Layout.astro` (line 45)

---

## 6. Favicons & Icons

### Favicon Files
**Component:** `src/components/Favicons.astro`
**Lines:** 1-11

**Current Implementation:**
```astro
import favIcon from '~/assets/favicons/favicon.ico';
import favIconSvg from '~/assets/favicons/favicon.svg';
import appleTouchIcon from '~/assets/favicons/apple-touch-icon.png';
```

**Required Files:**
- `src/assets/favicons/favicon.ico` - Legacy favicon
- `src/assets/favicons/favicon.svg` - Modern SVG favicon
- `src/assets/favicons/apple-touch-icon.png` - iOS home screen icon (180x180)

**Note:** Favicons component is currently commented out in Layout.astro (line 31)

### Active Favicon
**File:** `src/layouts/Layout.astro`
**Line:** 32

```html
<link rel="icon" type="image/svg" href="/favicon.svg" />
```

**Current Status:** Using `/public/favicon.svg` directly

**Action Items:**
- [ ] Create/update favicon.svg in public folder
- [ ] OR uncomment Favicons component (line 31) and remove line 32
- [ ] Generate favicon.ico (16x16, 32x32, 48x48)
- [ ] Create apple-touch-icon.png (180x180)
- [ ] Consider creating additional sizes for various platforms
- [ ] Test favicon appearance across browsers and devices

### Mask Icon Color
**File:** `src/components/Favicons.astro`
**Line:** 9

```html
<link rel="mask-icon" href={favIconSvg.src} color="#8D46E7" />
```

**Action Items:**
- [ ] Update mask-icon color to match brand color

---

## 7. Sitemaps & Feeds

### Sitemap Configuration
**File:** `astro.config.ts`
**Line:** 31

```javascript
sitemap()  // @astrojs/sitemap integration enabled
```

**Meta Link:**
**File:** `src/components/common/CommonMeta.astro`
**Line:** 11

```html
<link rel="sitemap" href={getAsset('/sitemap-index.xml')} />
```

**Generation:** Automatic via Astro build process

**Action Items:**
- [ ] Verify sitemap generates correctly (`npm run build`)
- [ ] Check `dist/sitemap-index.xml` after build
- [ ] Submit sitemap URL to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Verify all important pages are included

### RSS Feed
**File:** `src/pages/rss.xml.ts`
**Lines:** 1-37

**Current Configuration:**
- Feed title: `${SITE.name}'s Blog`
- Description: from METADATA config
- Conditional: Only enabled if `APP_BLOG.isEnabled` is true

**File:** `src/config.yaml`
**Lines:** 35-36

```yaml
apps:
  blog:
    isEnabled: true
```

**Action Items:**
- [ ] Verify blog functionality is needed
- [ ] Update RSS feed title if using blog
- [ ] Or disable blog feature if not using
- [ ] Test RSS feed at `/rss.xml` endpoint

---

## 8. Robots.txt

### Robots File
**File:** `public/robots.txt`
**Lines:** 1-2

```
User-agent: *
Disallow:
```

**Current Status:** Allows all crawlers, no restrictions

**Action Items:**
- [ ] Review if any pages should be disallowed
- [ ] Add sitemap reference: `Sitemap: https://yourdomain.com/sitemap-index.xml`
- [ ] Consider blocking admin/private areas if added
- [ ] Verify robots.txt is accessible at `/robots.txt`

**Example Enhanced robots.txt:**
```
User-agent: *
Disallow: /admin/
Disallow: /private/

Sitemap: https://yourdomain.com/sitemap-index.xml
```

---

## 9. Page-Specific Metadata

### Homepage Metadata
**File:** `src/pages/index.astro`
**Lines:** 19-23

```javascript
const metadata = {
  title: `${bioLinkData.profile.name} - Links`,
  description: bioLinkData.profile.description,
  ignoreTitleTemplate: true,
};
```

**Data Sources:**
- Profile name: `src/data/biolink.json` (line 3)
- Description: `src/data/biolink.json` (line 6)

**Current Values from biolink.json:**
- Name: "Alec Reimel"
- Description: "Building the sci-fi future we were promised."

**Action Items:**
- [ ] Verify homepage title is SEO-optimized
- [ ] Ensure description is compelling and keyword-rich
- [ ] Consider adding more specific keywords to description
- [ ] Test how title appears in search results

### 404 Page
**File:** `src/pages/404.astro`

**Action Items:**
- [ ] Review 404 page metadata (if it exists)
- [ ] Ensure helpful navigation for lost users

### Other Page Layouts
**File:** `src/layouts/PageLayout.astro`
**Lines:** 1-26

- Accepts metadata prop for any page
- Passes to base Layout component

**File:** `src/layouts/MarkdownLayout.astro`
- Layout for markdown content pages

**Action Items:**
- [ ] Review any additional pages for proper metadata
- [ ] Ensure all pages have unique titles and descriptions

---

## 10. Profile & Social Data

### Biolink Profile Data
**File:** `src/data/biolink.json`
**Lines:** 2-9

```json
"profile": {
  "name": "Alec Reimel",
  "title": "Senior Developer",
  "subtitle": "Full-Stack Web Dev, Software Engineer, AI Architect, Tech Lead",
  "description": "Building the sci-fi future we were promised.",
  "avatar": "/alec-profile-pic-2025.jpg",
  "backgroundColor": "#f8e1dc"
}
```

**SEO Impact:**
- Name used in page title (index.astro:20)
- Description used as meta description (index.astro:21)
- Title/subtitle provide keyword context

**Action Items:**
- [ ] Optimize description with relevant keywords
- [ ] Ensure title/subtitle include searchable terms
- [ ] Verify avatar image has proper alt text when rendered

### Social Links
**File:** `src/data/biolink.json`
**Lines:** 10-31

**Current Platforms:**
- Email: alecreimel1@gmail.com
- LinkedIn: linkedin.com/in/alecwreimel/
- GitHub: github.com/areimel
- Instagram: instagram.com/alecreimel/

**SEO Considerations:**
- Social profiles provide credibility signals
- Links create connection between personal brand and platforms

**Action Items:**
- [ ] Verify all social URLs are correct and active
- [ ] Consider adding more professional networks (Twitter/X, Medium, etc.)
- [ ] Ensure social profiles are optimized and public

### About Me Content
**File:** `src/data/aboutme.json`
**Lines:** 1-8

```json
{
  "headline": "About Me",
  "paragraphs": [
    "I specialize in developing websites, products, and tools for digital marketing.",
    "My typical work day includes building conversion-centric marketing websites...",
    "My past clients have ranged from small startups, household brands, Fortune 500s..."
  ]
}
```

**SEO Value:**
- Rich content for crawlers
- Keywords: "websites," "digital marketing," "AI apps," "Fortune 500s"
- Demonstrates expertise and authority

**Action Items:**
- [ ] Include relevant industry keywords
- [ ] Mention specific technologies/skills
- [ ] Add accomplishments that showcase expertise

---

## 11. Environment Variables

### Configuration File
**File:** `.env.example`
**Lines:** 1-4

```bash
PUBLIC_WEB3FORMS_ACCESS_KEY=YOUR_ACCESS_KEY_HERE
```

**Purpose:** Contact form integration (Web3Forms)

**Actual Config File:** `.env` (gitignored)

**Action Items:**
- [ ] Set up Web3Forms account at https://web3forms.com
- [ ] Add actual access key to `.env` file
- [ ] Verify contact form submission works
- [ ] Never commit `.env` to version control

### Site URL Environment
**File:** `src/pages/rss.xml.ts`
**Line:** 20

```javascript
site: import.meta.env.SITE
```

**Action Items:**
- [ ] Ensure `SITE` environment variable is set in production
- [ ] Verify RSS feed uses correct domain

---

## 12. Component Architecture

### Core SEO Components

#### Metadata Component
**File:** `src/components/common/Metadata.astro`
**Purpose:** Main SEO meta tag generator
**Dependencies:**
- `@astrolib/seo` package (AstroSeo component)
- `lodash.merge` for config merging
- Custom image optimization utils

**Props Interface (src/types.d.ts:52-64):**
```typescript
interface MetaData {
  title?: string;
  ignoreTitleTemplate?: boolean;
  canonical?: string;
  robots?: MetaDataRobots;
  description?: string;
  openGraph?: MetaDataOpenGraph;
  twitter?: MetaDataTwitter;
}
```

#### CommonMeta Component
**File:** `src/components/common/CommonMeta.astro`
**Purpose:** Basic HTML meta tags and preconnects
**Contents:**
- Charset UTF-8
- Viewport settings
- Google Fonts preconnect
- Sitemap link

#### Layout Hierarchy
```
Layout.astro (base)
  ├─ CommonMeta
  ├─ Favicons (commented out)
  ├─ Metadata (dynamic SEO tags)
  ├─ SiteVerification
  └─ GtmTagHead

PageLayout.astro (wrapper)
  └─ Layout + slot for content
```

**Action Items:**
- [ ] Understand component flow for debugging
- [ ] Verify all SEO components are active
- [ ] Check for unused/commented components

---

## 13. Structured Data Opportunities

### Current Status
**No structured data (JSON-LD) currently implemented**

**Search Result:** No schema.org markup found in codebase

### Recommended Implementations

#### Person Schema
**Purpose:** Enhanced personal/professional profile in search results
**Benefits:**
- Rich snippets with profile info
- Knowledge panel eligibility
- Better brand recognition

**Example Implementation:**
```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Alec Reimel",
  "jobTitle": "Senior Developer",
  "description": "Full-Stack Web Dev, Software Engineer, AI Architect",
  "url": "https://yourdomain.com",
  "sameAs": [
    "https://linkedin.com/in/alecwreimel/",
    "https://github.com/areimel",
    "https://instagram.com/alecreimel/"
  ],
  "image": "https://yourdomain.com/alec-profile-pic-2025.jpg"
}
```

**Suggested Location:** Add to `src/layouts/Layout.astro` head section

#### ProfilePage Schema
**Purpose:** Indicates page is a profile
**Benefits:** Clearer context for search engines

#### Organization Schema (for Freelance Brand)
**Purpose:** Structured data for ARDA Tech Lab
**Benefits:** Business visibility, brand recognition

**Action Items:**
- [ ] Implement Person schema on homepage
- [ ] Add ProfilePage schema
- [ ] Consider Organization schema for freelance brand
- [ ] Test structured data with Google's Rich Results Test
- [ ] Monitor Google Search Console for structured data issues

---

## 14. SEO Improvement Checklist

### Critical Priority

- [ ] **Update site.site URL** in `src/config.yaml:3` to production domain
- [ ] **Update site.name** in `src/config.yaml:2` to actual brand name
- [ ] **Replace default title** in `src/config.yaml:12`
- [ ] **Write compelling meta description** in `src/config.yaml:14`
- [ ] **Update Open Graph site_name** in `src/config.yaml:19`
- [ ] **Create custom OG image** (1200x628) at `src/assets/images/default.png`
- [ ] **Update Twitter handles** in `src/config.yaml:26-27`
- [ ] **Configure Google Site Verification** in `src/config.yaml:7`
- [ ] **Add sitemap to robots.txt**

### High Priority

- [ ] **Enable Google Analytics** in `src/config.yaml:69`
- [ ] **Verify/update GTM container ID** in `src/components/common/GtmTagHead.astro`
- [ ] **Create/update favicons** (ICO, SVG, Apple Touch)
- [ ] **Implement Person schema** structured data
- [ ] **Submit sitemap** to Google Search Console
- [ ] **Optimize homepage description** with keywords
- [ ] **Test all meta tags** using browser inspector

### Medium Priority

- [ ] **Add ProfilePage schema** structured data
- [ ] **Enhance About Me content** with keywords
- [ ] **Create page-specific OG images** for key pages
- [ ] **Test social sharing** previews on all platforms
- [ ] **Verify RSS feed** functionality
- [ ] **Add breadcrumb** navigation (if applicable)
- [ ] **Implement canonical URLs** strategy

### Low Priority / Maintenance

- [ ] **Monitor Core Web Vitals** in Search Console
- [ ] **Review indexed pages** monthly
- [ ] **Update content** regularly for freshness
- [ ] **Monitor backlinks** and brand mentions
- [ ] **Track keyword rankings** for name/brand
- [ ] **A/B test titles** and descriptions
- [ ] **Review analytics** for SEO insights

---

## Quick Reference: Key Files

| Purpose | File Path | Lines |
|---------|-----------|-------|
| Site config & SEO defaults | `src/config.yaml` | 1-73 |
| Homepage metadata | `src/pages/index.astro` | 19-23 |
| Profile data (name, desc) | `src/data/biolink.json` | 2-9 |
| Meta tags component | `src/components/common/Metadata.astro` | All |
| OG image optimization | `src/utils/images.ts` | 52-111 |
| Google verification | `src/components/common/SiteVerification.astro` | All |
| GTM head tag | `src/components/common/GtmTagHead.astro` | All |
| Favicons | `src/components/Favicons.astro` | All |
| Robots.txt | `public/robots.txt` | All |
| Sitemap config | `astro.config.ts` | 31 |
| Base layout | `src/layouts/Layout.astro` | All |

---

## Tools & Resources

### Testing Tools
- **Google Rich Results Test:** https://search.google.com/test/rich-results
- **Google Search Console:** https://search.google.com/search-console
- **Twitter Card Validator:** https://cards-dev.twitter.com/validator
- **Facebook Sharing Debugger:** https://developers.facebook.com/tools/debug/
- **LinkedIn Post Inspector:** https://www.linkedin.com/post-inspector/
- **Schema.org Validator:** https://validator.schema.org/

### Image Resources
- **OG Image Size:** 1200x628px (recommended)
- **Favicon Generator:** https://realfavicongenerator.net/
- **Image Optimization:** Use WebP/AVIF for performance

### Analytics & Monitoring
- **Google Analytics 4:** https://analytics.google.com/
- **Google Tag Manager:** https://tagmanager.google.com/
- **Google Search Console:** https://search.google.com/search-console

---

**Document Version:** 1.0
**Last Updated:** 2025-10-09
**Maintainer:** Alec Reimel

---

## Notes

- This checklist should be reviewed and updated after major site changes
- Use this document for onboarding new team members to SEO structure
- Track completed items by checking boxes as you update configurations
- Run audits quarterly to ensure SEO health
- Keep this document in version control alongside your code
