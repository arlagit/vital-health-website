# Image Management Guide for Vital Health NZ

## Folder Structure
```
public/images/
├── logos/          # Company logos, brand assets
├── services/       # Service-specific images (weight, men's health, sleep, heart)
├── hero/           # Hero section images, main banners
└── about/          # Team photos, office images, about page content
```

## Image Guidelines

### Recommended Formats
- **Web-optimized images**: Use `.webp`, `.jpg`, or `.png`
- **Logo files**: Use `.png` for logos (with transparent background) or `.svg` for scalable graphics
- **File sizes**: Keep images under 500KB for web performance
- **Dimensions**: 
  - Hero images: 1200x600px minimum
  - Service images: 600x400px
  - Logo: 200x80px
  - About images: 400x400px

### Naming Convention
Use descriptive, lowercase names with hyphens:
- `Vital-Health-Logo.png`
- `weight-management-hero.jpg`
- `mens-health-service.jpg`
- `doctor-profile-1.jpg`

## How to Add Images

### 1. Logo Integration
Place your logo in `public/images/logos/` and update the Navigation component:

```astro
<!-- In src/components/Navigation.astro -->
<img src="/images/logos/Vital-Health-Logo.png" alt="Vital Health NZ" class="h-8" />
```

### 2. Hero Images
Add hero images to `public/images/hero/` and use them in page components:

```astro
<!-- In any page component -->
<div class="bg-cover bg-center" style="background-image: url('/images/hero/hero-image.jpg')">
  <!-- Hero content -->
</div>
```

### 3. Service Images
Add service-specific images to `public/images/services/` and reference them:

```astro
<!-- In service pages -->
<img src="/images/services/weight-management.jpg" alt="Weight Management" class="rounded-lg" />
```

### 4. About Page Images
Add team photos and office images to `public/images/about/`:

```astro
<!-- In about.astro -->
<img src="/images/about/doctor-1.jpg" alt="Dr. Smith" class="rounded-full" />
```

## Image Optimization Tips

1. **Compress images** before uploading using tools like TinyPNG or ImageOptim
2. **Use appropriate formats**: SVG for logos, WebP for photos
3. **Implement lazy loading** for better performance
4. **Add descriptive alt text** for accessibility
5. **Consider responsive images** for different screen sizes

## Example Integration

Here's how to add a hero image to your homepage:

```astro
<!-- In src/pages/index.astro -->
<section class="bg-cover bg-center bg-no-repeat" style="background-image: url('/images/hero/healthcare-hero.jpg')">
  <div class="bg-black bg-opacity-50">
    <!-- Your hero content -->
  </div>
</section>
```

## Current Image Placeholders

The website currently uses:
- Placeholder icons (SVG) for services
- CSS gradients for visual appeal
- No actual photos yet

Replace these with your real images following the guidelines above!
