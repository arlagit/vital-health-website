# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Essential Commands
- `npm run dev` - Start development server at localhost:4321
- `npm run build` - Build production site to ./dist/
- `npm run preview` - Preview production build locally
- `npm install` - Install dependencies

### Build Process
The project uses Astro's standard build pipeline with Tailwind CSS processing. No additional build steps required.

## Project Architecture

### Core Technology Stack
- **Framework**: Astro 5.13.0 with SSG (Static Site Generation)
- **Styling**: Tailwind CSS with custom design system
- **Content**: TypeScript-based blog system with markdown support
- **Icons**: Lucide Astro icons
- **Site URL**: https://vitalhealth.nz

### Directory Structure
```
src/
├── layouts/          # Base layout templates
│   └── Layout.astro  # Main layout with SEO, meta tags, security headers
├── components/       # Reusable UI components
│   ├── Navigation.astro
│   └── Footer.astro
├── pages/           # File-based routing
│   ├── index.astro  # Homepage with hero, services, FAQ
│   ├── blog/        # Blog section
│   │   └── [slug].astro  # Dynamic blog post pages
│   └── services/    # Service detail pages
├── data/            # Content management
│   └── blog-posts.ts # Blog post data and helper functions
└── styles/
    └── global.css   # Global styles and Tailwind customizations
```

### Design System Architecture

**Color Palette**: Custom Tailwind configuration with semantic color scales
- `primary`: Blue variants (main brand color)
- `secondary`: Light blue variants (accent color)
- `accent`: Green variants (call-to-action color)
- `neutral`: Gray scale (text and backgrounds)

**Typography**: Inter (sans-serif) + Merriweather (serif headings)

**Component Classes**: Predefined utility classes in global.css:
- `.btn-primary`, `.btn-secondary`, `.btn-accent` for consistent buttons
- `.card` for consistent card styling
- `.section-padding`, `.container-max` for layout consistency

### Content Management System

**Blog System**: TypeScript-based with structured data in `src/data/blog-posts.ts`
- Interface: `BlogPost` with metadata (title, excerpt, category, date, readTime, image, author, tags, featured status)
- Helper functions: `getPostsByCategory()`, `getFeaturedPosts()`, `getPostById()`, `getCategories()`
- Categories: Weight Management, Men's Health, Sleep Health, Heart & Metabolic, General Health
- Content can be stored as inline markdown strings or referenced markdown files

**Service Pages**: Hardcoded service data in page components with structured metadata

### SEO and Performance Architecture

**Layout.astro** handles all SEO concerns:
- Open Graph and Twitter Card meta tags
- Canonical URLs with site configuration
- Security headers (X-Content-Type-Options, X-Frame-Options, X-XSS-Protection)
- Font preconnection for performance
- Sitemap integration via @astrojs/sitemap

**Image Handling**: Graceful fallbacks with onerror handlers that show styled placeholders when images fail to load

### Navigation and Routing

**Static Navigation**: Defined in Navigation.astro with active state detection
- Routes: Home, About, Services, How It Works, FAQ, Blog, Contact
- Mobile-responsive with hamburger menu and JavaScript toggle
- Fixed header with backdrop blur

**Dynamic Routing**: Blog uses `[slug].astro` for individual post pages

### JavaScript Patterns

**Minimal JavaScript**: Used only for essential interactions
- Mobile menu toggle with icon animation
- FAQ accordion functionality
- Event delegation and proper cleanup

## Development Patterns

### Component Structure
- Astro components use frontmatter for logic and data
- Inline styles use `is:global` when necessary
- TypeScript interfaces defined for data structures

### Content Updates
- Blog posts: Add to `blogPosts` array in `src/data/blog-posts.ts`
- Service modifications: Update data in respective page components
- Navigation changes: Modify `navItems` array in Navigation.astro

### Styling Approach
- Utility-first with Tailwind CSS
- Custom component classes in global.css for common patterns
- Responsive design with mobile-first approach
- Consistent spacing using Tailwind's spacing scale

### Performance Considerations
- Static site generation for optimal loading speeds
- Image optimization with fallback patterns
- Font preloading and efficient CSS delivery
- Minimal JavaScript footprint

## Health Industry Context

This is a telehealth platform for Vital Health NZ, focusing on:
- Weight management with GLP-1 medications
- Men's health optimization
- Sleep disorder treatment
- Cardiovascular and metabolic risk assessment

Content should maintain medical accuracy and compliance with New Zealand healthcare standards. The target audience is New Zealand adults seeking convenient, doctor-led healthcare solutions.