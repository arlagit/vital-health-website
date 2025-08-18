# 📝 **Blog Post Management Guide - Vital Health NZ**

## 🚀 **3 Ways to Add Blog Posts**

### **Method 1: Quick Add (Easiest)**
Add posts directly to the `blogPosts` array in `src/pages/blog.astro`:

```typescript
const blogPosts = [
  // ... existing posts ...
  {
    title: 'Your New Blog Post Title',
    excerpt: 'A brief description of your blog post content...',
    category: 'Weight Management', // Choose from existing categories
    date: '2024-01-25', // Use YYYY-MM-DD format
    readTime: '5 min read', // Estimated reading time
    image: '/blog/your-image.jpg' // Image path (optional)
  }
];
```

### **Method 2: Use Data File (Recommended)**
Add posts to `src/data/blog-posts.ts` for better organization:

```typescript
export const blogPosts: BlogPost[] = [
  // ... existing posts ...
  {
    id: 'your-post-slug', // URL-friendly identifier
    title: 'Your Blog Post Title',
    excerpt: 'Brief description...',
    content: 'Full blog post content here...', // Optional
    category: 'Weight Management',
    date: '2024-01-25',
    readTime: '5 min read',
    image: '/blog/your-image.jpg',
    author: 'Dr. Sarah Chen', // Optional
    tags: ['weight loss', 'lifestyle'], // Optional
    featured: true // Optional - shows in featured section
  }
];
```

### **Method 3: Individual Blog Post Pages (Most Professional)**
Each blog post gets its own dedicated page at `/blog/[slug]` with:
- ✅ Full article content
- ✅ Author information
- ✅ Publication date
- ✅ Tags
- ✅ Related posts
- ✅ Call-to-action for consultations

## 📋 **Blog Post Structure**

### **Required Fields:**
- `id`: Unique URL slug (e.g., 'weight-loss-tips')
- `title`: Blog post headline
- `excerpt`: Short description (appears in blog list)
- `category`: One of the predefined categories
- `date`: Publication date (YYYY-MM-DD)
- `readTime`: Estimated reading time

### **Optional Fields:**
- `content`: Full blog post content
- `image`: Featured image path
- `author`: Doctor's name
- `tags`: Array of relevant keywords
- `featured`: Boolean for highlighting

## 🏷️ **Available Categories**
- Weight Management
- Men's Health
- Sleep Health
- Heart & Metabolic
- General Health

## 📝 **Content Guidelines**

### **Medical Content Best Practices:**
1. **Always include disclaimers** - "This is for informational purposes only"
2. **Encourage consultation** - "Consult with healthcare professionals"
3. **Use evidence-based information** - Reference medical guidelines
4. **Keep it accessible** - Avoid overly technical jargon
5. **Include practical tips** - Actionable advice for readers

### **Content Ideas for Vital Health NZ:**
- **Weight Management**: NZ-specific diet tips, exercise routines, medication information
- **Men's Health**: Hormone optimization, cardiovascular health, performance tips
- **Sleep Health**: Sleep hygiene, stress management, NZ lifestyle factors
- **Heart & Metabolic**: Risk assessment, prevention strategies, local health statistics
- **General Health**: Telehealth benefits, lifestyle medicine, seasonal wellness

## 🖼️ **Adding Images**

### **Image Structure:**
```
public/
  blog/
    your-post-image.jpg
    another-post-image.png
```

### **Image Guidelines:**
- **Format**: JPG, PNG, or WebP
- **Size**: 800x600px recommended
- **Optimization**: Compress for web (under 200KB)
- **Alt Text**: Always include descriptive alt text

## 🔧 **Technical Details**

### **File Locations:**
- **Blog List**: `src/pages/blog.astro`
- **Blog Data**: `src/data/blog-posts.ts`
- **Individual Posts**: `src/pages/blog/[slug].astro`
- **Images**: `public/blog/`

### **URL Structure:**
- Blog list: `/blog`
- Individual post: `/blog/your-post-slug`

### **SEO Features:**
- ✅ Meta titles and descriptions
- ✅ Open Graph tags
- ✅ Structured data
- ✅ Canonical URLs
- ✅ Category filtering

## 📱 **Mobile Responsiveness**
All blog posts are automatically:
- ✅ Mobile-optimized
- ✅ Responsive images
- ✅ Touch-friendly navigation
- ✅ Fast loading

## 🚀 **Quick Start Example**

1. **Add a new post** to `src/data/blog-posts.ts`:
```typescript
{
  id: 'kiwi-summer-wellness',
  title: 'Kiwi Summer Wellness: Staying Healthy in NZ Heat',
  excerpt: 'Essential health tips for New Zealand\'s summer months...',
  category: 'General Health',
  date: '2024-01-30',
  readTime: '4 min read',
  author: 'Dr. Michael Thompson',
  tags: ['summer health', 'New Zealand', 'wellness', 'seasonal']
}
```

2. **Add an image** to `public/blog/kiwi-summer-wellness.jpg`

3. **Your post is live** at `/blog/kiwi-summer-wellness`

## 💡 **Pro Tips**

1. **Consistent Publishing**: Post regularly (weekly or bi-weekly)
2. **Engaging Titles**: Use questions or actionable phrases
3. **Internal Linking**: Link to your service pages
4. **Call-to-Actions**: Always include consultation booking prompts
5. **Local Content**: Reference NZ-specific health information
6. **Doctor Credentials**: Include author credentials for trust

## 🔍 **Troubleshooting**

### **Common Issues:**
- **Post not showing**: Check category spelling matches exactly
- **Image not loading**: Verify image path in `public/blog/`
- **Build errors**: Ensure all required fields are filled
- **404 errors**: Check that `id` field is URL-friendly

### **Need Help?**
- Check the terminal for error messages
- Verify file paths and imports
- Ensure all required fields are present
- Test with a simple post first

---

**Your blog is now ready to publish professional health content that builds trust and drives consultations!** 🎉

