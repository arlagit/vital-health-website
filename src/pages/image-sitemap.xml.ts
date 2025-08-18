import type { APIRoute } from 'astro';
import { blogPosts } from '../data/blog-posts';

export const GET: APIRoute = async () => {
  const baseUrl = 'https://vitalhealth.nz';
  
  // Generate image sitemap entries for all blog posts
  const imageEntries = blogPosts.map(post => {
    const imageUrl = `${baseUrl}/blog/images/social/${post.id}.webp`;
    const pageUrl = `${baseUrl}/blog/${post.id}`;
    
    // Generate SEO-optimized alt text
    const seoAlt = post.tags && post.tags.length > 0 
      ? `${post.title} - ${post.tags.slice(0, 3).join(', ')} guide for New Zealand patients by Vital Health`
      : `${post.title} - New Zealand weight loss medication guide by Vital Health`;
    
    return `
    <url>
      <loc>${pageUrl}</loc>
      <image:image>
        <image:loc>${imageUrl}</image:loc>
        <image:title>${post.title} | Vital Health NZ</image:title>
        <image:caption>${seoAlt}</image:caption>
        <image:geo_location>New Zealand</image:geo_location>
        <image:license>https://vitalhealth.nz/terms</image:license>
      </image:image>
    </url>`;
  }).join('');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  ${imageEntries}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600'
    }
  });
};
