// lib/blog.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  author: string;
  image?: string;
  tags?: string[];
  content?: string;
}

// Získat všechny slugy článků
export function getAllPostSlugs() {
  try {
    const fileNames = fs.readdirSync(postsDirectory);
    return fileNames
      .filter(fileName => fileName.endsWith('.md'))
      .map(fileName => fileName.replace(/\.md$/, ''));
  } catch (error) {
    console.error('Chyba při načítání slugů:', error);
    return [];
  }
}

// Získat metadata všech článků (bez obsahu)
export function getAllPosts(): BlogPost[] {
  try {
    const slugs = getAllPostSlugs();
    const posts = slugs
      .map(slug => {
        const post = getPostBySlug(slug, false);
        return post;
      })
      .filter(post => post !== null) as BlogPost[];
    
    // Seřadit podle data (nejnovější první)
    return posts.sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
  } catch (error) {
    console.error('Chyba při načítání článků:', error);
    return [];
  }
}

// Získat konkrétní článek podle slugu
export function getPostBySlug(slug: string, includeContent: boolean = true): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    
    const { data, content } = matter(fileContents);
    
    return {
      slug,
      title: data.title || 'Bez názvu',
      date: data.date || new Date().toISOString(),
      excerpt: data.excerpt || '',
      author: data.author || 'MiQueen',
      image: data.image || '/blog/default.jpg',
      tags: data.tags || [],
      content: includeContent ? content : undefined,
    };
  } catch (error) {
    console.error(`Chyba při načítání článku ${slug}:`, error);
    return null;
  }
}

// Konvertovat Markdown na HTML
export async function markdownToHtml(markdown: string) {
  const result = await remark()
    .use(html, { sanitize: false })
    .process(markdown);
  return result.toString();
}

// Získat související články podle tagů
export function getRelatedPosts(currentSlug: string, tags: string[], limit: number = 3): BlogPost[] {
  const allPosts = getAllPosts();
  
  const relatedPosts = allPosts
    .filter(post => post.slug !== currentSlug)
    .map(post => {
      const commonTags = post.tags?.filter(tag => tags.includes(tag)) || [];
      return { post, score: commonTags.length };
    })
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(item => item.post);
  
  return relatedPosts;
}