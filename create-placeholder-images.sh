#!/bin/bash

# Create placeholder images for blog posts
# These will be replaced with real optimized images later

# Blog post slugs from your current posts
POSTS=(
  "wegovy-cost-per-month-new-zealand-2025"
  "how-long-wegovy-take-work-weight-loss-nz"
  "glp-1-side-effects-management-nz"
  "semaglutide-cost-new-zealand"
  "wegovy-prescription-online-nz"
  "wegovy-ozempic-weight-management"
  "glp-1-prescription-online-new-zealand"
)

# Colors for different post types
declare -A COLORS
COLORS["wegovy-cost-per-month-new-zealand-2025"]="#10B981"  # Green for cost
COLORS["how-long-wegovy-take-work-weight-loss-nz"]="#3B82F6"  # Blue for timeline
COLORS["glp-1-side-effects-management-nz"]="#EF4444"  # Red for safety
COLORS["semaglutide-cost-new-zealand"]="#F59E0B"  # Orange for comparison
COLORS["wegovy-prescription-online-nz"]="#8B5CF6"  # Purple for prescription
COLORS["wegovy-ozempic-weight-management"]="#EC4899"  # Pink for comparison
COLORS["glp-1-prescription-online-new-zealand"]="#06B6D4"  # Cyan for guide

# Create directories
mkdir -p public/blog/images/{desktop,social,mobile,thumbnails}

# Function to create placeholder image with ImageMagick (if available)
create_placeholder() {
  local slug="$1"
  local width="$2"
  local height="$3"
  local output_dir="$4"
  local color="${COLORS[$slug]}"
  
  # Create a simple colored rectangle placeholder
  # This requires ImageMagick - install with: brew install imagemagick
  if command -v convert &> /dev/null; then
    convert -size ${width}x${height} xc:"$color" \
      -gravity center \
      -pointsize 24 \
      -fill white \
      -annotate +0+0 "$(echo $slug | tr '-' ' ' | title)" \
      "$output_dir/${slug}.jpg"
    
    # Create WebP version
    convert "$output_dir/${slug}.jpg" "$output_dir/${slug}.webp"
  else
    echo "ImageMagick not found. Please install with: brew install imagemagick"
    echo "Or manually create images for: $slug"
  fi
}

# Create placeholders for each post
for post in "${POSTS[@]}"; do
  echo "Creating placeholders for: $post"
  
  # Desktop (1920x1080)
  create_placeholder "$post" 1920 1080 "public/blog/images/desktop"
  
  # Social (1200x630)
  create_placeholder "$post" 1200 630 "public/blog/images/social"
  
  # Mobile (800x450)
  create_placeholder "$post" 800 450 "public/blog/images/mobile"
  
  # Thumbnails (400x225)
  create_placeholder "$post" 400 225 "public/blog/images/thumbnails"
done

echo "Placeholder images created!"
echo "Replace these with real optimized images when ready."
echo ""
echo "Recommended tools for creating real images:"
echo "- Figma/Canva for design"
echo "- Squoosh.app for WebP conversion"
echo "- TinyPNG for compression"
