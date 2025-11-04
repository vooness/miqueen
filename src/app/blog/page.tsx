
// app/blog/page.tsx
import React from 'react';
import { getAllPosts } from '@/app/lib/blog';
import BlogCard from '../components/BlogCard';
import { Newspaper, Calendar, Tag } from 'lucide-react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

export const metadata = {
  title: 'Blog | MiQueen',
  description: 'Vinařské příběhy, tipy a novinky z vinohradů',
};

const BlogPage = () => {
  const posts = getAllPosts();
  const accentColor = "#ab8754";
  const paperColor = "#fefbea";

  // Získat všechny unikátní tagy
  const allTags = Array.from(
    new Set(posts.flatMap(post => post.tags || []))
  );

  return (
    <>
      <Navbar />
      <div className="min-h-screen" style={{ backgroundColor: paperColor }}>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div 
            className="absolute top-40 -right-40 w-[500px] h-[500px] rounded-full blur-3xl opacity-40" 
            style={{ 
              background: `radial-gradient(circle, ${accentColor}30, transparent)`,
              animation: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite'
            }}
          />
          <div 
            className="absolute bottom-40 -left-40 w-[600px] h-[600px] rounded-full blur-3xl opacity-40"
            style={{ 
              background: `radial-gradient(circle, ${accentColor}20, transparent)`,
              animation: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite 2s'
            }}
          />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
              <Newspaper className="w-8 h-8" style={{ color: accentColor }} />
              <div className="h-px w-12 bg-gradient-to-l from-transparent via-gray-300 to-transparent" />
            </div>

            <h1 className="text-5xl lg:text-7xl font-light text-gray-800 mb-6">
              MiQueen <span style={{ color: accentColor }}>Blog</span>
            </h1>
            
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Vinařské příběhy, tipy na ochutnávání vín a novinky z našich vinohradu
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
            <div className="bg-white rounded-2xl p-6 text-center border border-gray-200 shadow-sm">
              <Calendar className="w-8 h-8 mx-auto mb-3" style={{ color: accentColor }} />
              <p className="text-3xl font-bold text-gray-900 mb-1">{posts.length}</p>
              <p className="text-gray-600">Články</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 text-center border border-gray-200 shadow-sm">
              <Tag className="w-8 h-8 mx-auto mb-3" style={{ color: accentColor }} />
              <p className="text-3xl font-bold text-gray-900 mb-1">{allTags.length}</p>
              <p className="text-gray-600">Témat</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 text-center border border-gray-200 shadow-sm">
              <Newspaper className="w-8 h-8 mx-auto mb-3" style={{ color: accentColor }} />
              <p className="text-3xl font-bold text-gray-900 mb-1">Nové</p>
              <p className="text-gray-600">Každý týden</p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 lg:py-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <Newspaper className="w-20 h-20 text-gray-300 mx-auto mb-6" />
              <h3 className="text-2xl font-light text-gray-600 mb-2">
                Zatím žádné články
              </h3>
              <p className="text-gray-500">
                Brzy tu najdete zajímavé příběhy z vinařství
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>

      
    </div>
    <Footer />
    </>
  );
};

export default BlogPage;