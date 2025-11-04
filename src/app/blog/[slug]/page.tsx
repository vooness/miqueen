// app/blog/[slug]/page.tsx
import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, ArrowLeft, Tag, Clock } from 'lucide-react';
import { getAllPostSlugs, getPostBySlug, markdownToHtml, getRelatedPosts } from '@/app/lib/blog';
import BlogCard from '../../components/BlogCard';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  
  if (!post) {
    return {
      title: 'Článek nenalezen',
    };
  }

  return {
    title: `${post.title} | MiQueen Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.image ? [post.image] : [],
    },
  };
}

const BlogPostPage = async ({ params }: { params: { slug: string } }) => {
  const post = getPostBySlug(params.slug, true);

  if (!post || !post.content) {
    notFound();
  }

  const contentHtml = await markdownToHtml(post.content);
  const relatedPosts = getRelatedPosts(post.slug, post.tags || [], 3);
  const accentColor = "#ab8754";
  const paperColor = "#fefbea";

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('cs-CZ', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Odhad času čtení (250 slov za minutu)
  const wordCount = post.content.split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / 250);

  return (
    <>
      <Navbar />
      <div className="min-h-screen" style={{ backgroundColor: paperColor }}>
      {/* Hero Section */}
      <section className="relative py-12 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link 
            href="/blog"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-[#ab8754] transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Zpět na blog
          </Link>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <time dateTime={post.date}>{formatDate(post.date)}</time>
            </div>
            
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{post.author}</span>
            </div>

            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{readingTime} min čtení</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Excerpt */}
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            {post.excerpt}
          </p>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium"
                  style={{ backgroundColor: `${accentColor}15`, color: accentColor }}
                >
                  <Tag className="w-4 h-4" />
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Featured Image */}
        {post.image && (
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl border-2 border-gray-200">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1280px) 100vw, 1280px"
              />
            </div>
          </div>
        )}
      </section>

      {/* Content */}
      <article className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div 
            className="prose prose-xl max-w-none
              prose-headings:font-bold prose-headings:text-gray-900
              prose-h1:text-5xl prose-h1:mb-8 prose-h1:leading-tight prose-h1:text-gray-900
              prose-h2:text-4xl prose-h2:mt-16 prose-h2:mb-8 prose-h2:leading-tight prose-h2:text-gray-900 prose-h2:border-b prose-h2:border-gray-200 prose-h2:pb-4
              prose-h3:text-2xl prose-h3:mt-12 prose-h3:mb-6 prose-h3:text-gray-900 prose-h3:font-semibold
              prose-h4:text-xl prose-h4:mt-8 prose-h4:mb-4 prose-h4:text-gray-800 prose-h4:font-semibold
              prose-p:text-gray-800 prose-p:text-lg prose-p:leading-relaxed prose-p:mb-8
              prose-a:text-[#ab8754] prose-a:font-medium prose-a:no-underline hover:prose-a:underline hover:prose-a:text-[#8b6d44] prose-a:transition-colors
              prose-strong:text-gray-900 prose-strong:font-bold
              prose-ul:my-8 prose-ul:space-y-3 prose-ul:list-disc prose-ul:pl-8
              prose-ol:my-8 prose-ol:space-y-3 prose-ol:list-decimal prose-ol:pl-8
              prose-li:text-gray-800 prose-li:text-lg prose-li:leading-relaxed
              prose-li>p:mb-2
              prose-img:rounded-3xl prose-img:shadow-2xl prose-img:my-12
              prose-blockquote:border-l-4 prose-blockquote:border-[#ab8754] 
              prose-blockquote:pl-8 prose-blockquote:pr-8 prose-blockquote:py-6 prose-blockquote:my-10
              prose-blockquote:italic prose-blockquote:text-gray-800 prose-blockquote:text-xl
              prose-blockquote:bg-gradient-to-r prose-blockquote:from-[#ab875410] prose-blockquote:to-transparent
              prose-blockquote:rounded-r-2xl
              prose-code:text-[#ab8754] prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:font-mono prose-code:text-base
              prose-pre:bg-gray-900 prose-pre:text-white prose-pre:rounded-2xl prose-pre:p-6 prose-pre:my-8
              [&>*]:text-gray-800
              [&>h2]:scroll-mt-20
              [&>h3]:scroll-mt-20"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-12 lg:py-20 border-t border-gray-200">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-light text-gray-800 mb-12 text-center">
              Související <span style={{ color: accentColor }}>články</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <BlogCard key={relatedPost.slug} post={relatedPost} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-12 lg:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-[#ab875410] to-transparent rounded-3xl p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Líbil se vám článek?
            </h3>
            <p className="text-gray-600 mb-6">
              Prozkoumejte naši nabídku vín nebo adoptujte vlastní vinohrad
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/vina"
                className="px-8 py-3 bg-[#ab8754] text-white rounded-full font-semibold hover:shadow-lg transition-all hover:scale-105"
              >
                Naše vína
              </Link>
              <Link
                href="/adoptuj-vinohrad"
                className="px-8 py-3 bg-white text-gray-700 rounded-full font-semibold border-2 border-gray-300 hover:border-gray-400 transition-all hover:scale-105"
              >
                Adoptuj vinohrad
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
    <Footer />
    </>
  );
};

export default BlogPostPage;