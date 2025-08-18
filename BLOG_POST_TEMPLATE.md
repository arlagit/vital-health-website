# 📝 **Blog Post Template - Copy & Modify**

## **Quick Copy Template:**

```typescript
{
  id: 'your-post-slug-here',
  title: 'Your Blog Post Title',
  excerpt: 'Brief description that appears in the blog list...',
  content: `
    <h2>Introduction</h2>
    <p>Your opening paragraph here...</p>
    
    <h2>Main Content Section</h2>
    <p>Your main content with paragraphs, lists, etc...</p>
    
    <ul>
      <li>Key point 1</li>
      <li>Key point 2</li>
      <li>Key point 3</li>
    </ul>
    
    <h2>Conclusion</h2>
    <p>Wrap up your article and include a call-to-action...</p>
    
    <p><strong>Ready to take control of your health?</strong> <a href="/contact">Book a consultation</a> with our qualified telehealth doctors.</p>
  `,
  category: 'Weight Management', // Choose from: Weight Management, Men's Health, Sleep Health, Heart & Metabolic, General Health
  date: '2024-01-30', // Use YYYY-MM-DD format
  readTime: '5 min read', // Estimated reading time
  image: '/blog/your-image.jpg', // Optional - add image to public/blog/ folder
  author: 'Dr. Sarah Chen', // Optional - doctor's name
  tags: ['weight loss', 'lifestyle', 'New Zealand'], // Optional - relevant keywords
  featured: true // Optional - set to true to highlight this post
}
```

## **Step-by-Step Process:**

### **1. Open the Blog Data File**
Edit: `src/data/blog-posts.ts`

### **2. Add Your New Post**
Copy the template above and paste it into the `blogPosts` array

### **3. Customize the Content**
- **id**: URL-friendly slug (e.g., 'weight-loss-tips-nz')
- **title**: Engaging headline that captures attention
- **excerpt**: Brief summary (appears in blog list)
- **content**: Full article in HTML format
- **category**: Choose from existing categories
- **date**: Publication date
- **readTime**: Estimated reading time
- **image**: Optional image path
- **author**: Doctor's name for credibility
- **tags**: SEO-friendly keywords

### **4. Add Images (Optional)**
Place images in: `public/blog/your-image.jpg`

### **5. Save and Test**
Your post automatically appears at: `/blog/your-post-slug`

## **Content Guidelines:**

### **Medical Content Best Practices:**
- ✅ Include disclaimers: "This is for informational purposes only"
- ✅ Encourage consultation: "Consult with healthcare professionals"
- ✅ Use evidence-based information
- ✅ Keep language accessible
- ✅ Include practical, actionable tips

### **Content Ideas for Vital Health NZ:**
- **Weight Management**: NZ diet tips, exercise routines, medication info
- **Men's Health**: Hormone optimization, cardiovascular health
- **Sleep Health**: Sleep hygiene, stress management, NZ lifestyle factors
- **Heart & Metabolic**: Risk assessment, prevention strategies
- **General Health**: Telehealth benefits, lifestyle medicine, seasonal wellness

## **Example Real Blog Post:**

```typescript
{
  id: 'nz-winter-nutrition',
  title: 'Winter Nutrition in New Zealand: Fueling Your Health',
  excerpt: 'Discover the best foods to eat during New Zealand\'s winter months to boost your immune system and maintain energy levels.',
  content: `
    <h2>Why Winter Nutrition Matters</h2>
    <p>During New Zealand\'s winter months, our bodies need extra support to maintain energy levels and fight off seasonal illnesses...</p>
    
    <h2>Top Winter Foods for Kiwis</h2>
    <ul>
      <li><strong>Kumara (Sweet Potato):</strong> Rich in vitamin A and fiber</li>
      <li><strong>Citrus Fruits:</strong> Boost vitamin C for immune support</li>
      <li><strong>Oily Fish:</strong> Omega-3s for heart health</li>
      <li><strong>Dark Leafy Greens:</strong> Essential vitamins and minerals</li>
    </ul>
    
    <h2>Practical Tips for Winter Eating</h2>
    <p>Plan your meals ahead, batch cook on weekends, and keep healthy snacks readily available...</p>
    
    <h2>When to Seek Professional Advice</h2>
    <p>If you\'re struggling with winter nutrition or have specific health concerns, our telehealth doctors can provide personalized guidance...</p>
    
    <p><strong>Ready to optimize your winter nutrition?</strong> <a href="/contact">Book a consultation</a> with our qualified doctors for personalized advice.</p>
  `,
  category: 'General Health',
  date: '2024-01-30',
  readTime: '6 min read',
  author: 'Dr. Sarah Chen',
  tags: ['nutrition', 'winter', 'New Zealand', 'immune health', 'seasonal wellness'],
  featured: true
}
```

## **Pro Tips:**

1. **Start with 2-3 posts** to test the system
2. **Use NZ-specific content** to connect with local patients
3. **Include medical disclaimers** for compliance
4. **Link to your service pages** for better navigation
5. **Add doctor credentials** to build trust
6. **Post regularly** to build SEO and patient engagement

---

**Your blog is ready to publish professional health content that builds trust and drives consultations!** 🎉
