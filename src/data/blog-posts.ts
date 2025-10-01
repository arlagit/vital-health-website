export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  readTime: string;
  author: string;
  tags: string[];
  image: string;
  draft?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: 'weight-loss-harder-after-35-men-science',
    title: 'Weight Loss for Men Over 35 in NZ: A Doctor\'s Guide to Metabolic Health',
    excerpt: 'Finding it harder to lose weight after 35? A New Zealand doctor explains the science behind metabolic slowdown in Kiwi men and outlines proven strategies for losing fat and building muscle. Learn about effective, medically-guided options.',
    content: 'Comprehensive doctor\'s guide to metabolic health and weight loss strategies for men over 35 in New Zealand, covering hormonal changes, effective strategies, and medical weight loss programs.',
    date: '2025-10-01',
    category: 'Weight Management',
    readTime: '10 min read',
    author: 'Dr Adrian Laurence',
    tags: ['weight loss', 'men over 35', 'metabolic health', 'testosterone', 'New Zealand', 'doctor guide', 'muscle building'],
    image: '/blog/images/desktop/man-happy-with-weight-loss-scale.webp',
  },
  {
    id: 'belly-fat-after-35-what-works',
    title: 'Belly Fat After 35: Why It\'s Harder and What Actually Works',
    excerpt: 'Discover why belly fat becomes stubborn after 35 and what actually works for Kiwi men. Learn about hormonal changes, metabolism shifts, and evidence-based strategies for losing belly fat.',
    content: 'Comprehensive guide to understanding and addressing belly fat challenges for men over 35 in New Zealand, covering hormonal changes, metabolism, and evidence-based solutions.',
    date: '2025-10-01',
    category: 'Weight Management',
    readTime: '14 min read',
    author: 'Dr Adrian Laurence',
    tags: ['belly fat', 'men over 35', 'New Zealand', 'visceral fat', 'metabolism', 'weight loss'],
    image: '/blog/images/desktop/healthy-eating-telehealth-consultation.webp',
  }
];

export function getCategories(): string[] {
  const categories = ['All', ...new Set(blogPosts.map(post => post.category))];
  return categories;
}

export function getBlogPost(id: string): BlogPost | undefined {
  return blogPosts.find(post => post.id === id);
}
