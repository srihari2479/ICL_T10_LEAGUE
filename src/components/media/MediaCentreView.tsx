import React, { useState } from 'react';
import { NEWS_DATA } from '../../data/mediaData';
import { NewsItem } from '../../types';
import { Newspaper, Clock, User, Share2, X, ChevronRight, Video, Image as ImageIcon } from 'lucide-react';

export const MediaCentreView: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [activeArticle, setActiveArticle] = useState<NewsItem | null>(null);

  const filteredNews = NEWS_DATA.filter((item) => {
    if (selectedCategory === 'ALL') return true;
    return item.category === selectedCategory;
  });

  return (
    <div className="w-full pt-3 sm:pt-5 pb-10 sm:pb-14 px-4 sm:px-8 lg:px-12 xl:px-16 space-y-6 sm:space-y-8">
      
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-widest text-[#FF5500] mb-1">
          <Newspaper className="w-4 h-4 text-[#F59E0B]" />
          <span>Official Communications Hub</span>
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bebas text-[var(--kreeda-text-primary)] tracking-wide">
          MEDIA CENTRE &amp; PRESS RELEASES
        </h1>
        <p className="text-sm sm:text-base text-[var(--kreeda-text-secondary)] mt-1 max-w-2xl leading-relaxed">
          Tournament announcements, team launches, open trials bulletins, and high-definition cricket stories from the heart of Telugu sports.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
        {['ALL', 'Official', 'Squads', 'Matches', 'Franchise'].map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition btn-tactile ${
              selectedCategory === cat
                ? 'bg-gradient-to-r from-[#FF5500] to-[#FF661A] text-white font-black shadow-orange-glow'
                : 'text-[var(--kreeda-text-secondary)] hover:text-[var(--kreeda-text-primary)] bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10'
            }`}
          >
            {cat === 'ALL' ? 'All Coverage' : cat}
          </button>
        ))}
      </div>

      {/* News Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredNews.map((article) => (
          <div
            key={article.id}
            onClick={() => setActiveArticle(article)}
            className="glass-card-interactive group cursor-pointer overflow-hidden flex flex-col justify-between shadow-sm dark:shadow-tactile border border-black/10 dark:border-white/10"
          >
            <div className="relative h-60 overflow-hidden bg-[var(--kreeda-surface-elevated)]">
              <img
                src={article.imageUrl}
                alt={article.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-95 text-transparent"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = '/assets/kreeda/stadium_daylight_banner.jpg';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-white/95 dark:bg-black/85 backdrop-blur-md border border-[#FF5500]/40 text-xs font-bebas tracking-widest uppercase text-[#FF5500] dark:text-[#FFCD80] font-black shadow-md">
                  {article.category}
                </span>
              </div>
            </div>

            <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 text-xs text-[var(--kreeda-text-muted)] mb-2">
                  <span className="flex items-center gap-1.5 font-semibold text-[#FF5500]">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{article.readTime}</span>
                  </span>
                  <span>•</span>
                  <span>{article.date}</span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-[var(--kreeda-text-primary)] group-hover:text-[#FF5500] transition leading-snug">
                  {article.title}
                </h3>

                <p className="text-xs sm:text-sm text-[var(--kreeda-text-secondary)] mt-2 line-clamp-3 leading-relaxed">
                  {article.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-black/10 dark:border-white/10 flex items-center justify-between text-xs sm:text-sm font-bold text-[#FF5500]">
                <span className="font-bebas text-base uppercase tracking-wider">Read Full Bulletin</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Article Detail Reader Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-[var(--kreeda-surface)] border-2 border-black/10 dark:border-white/15 rounded-3xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[92vh] overflow-y-auto space-y-5">
            
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-5 right-5 p-2 rounded-xl text-[var(--kreeda-text-muted)] hover:text-[var(--kreeda-text-primary)] hover:bg-black/5 dark:hover:bg-white/10 transition z-10 btn-tactile"
            >
              <X className="w-6 h-6 text-[#FF5500]" />
            </button>

            <div className="space-y-2">
              <span className="px-3 py-1 rounded-full bg-[#FF5500]/15 text-[#FF5500] text-xs font-black uppercase font-bebas tracking-wider">
                {activeArticle.category}
              </span>
              <h2 className="text-xl sm:text-2xl font-bebas text-[var(--kreeda-text-primary)] tracking-wide leading-tight pr-8">
                {activeArticle.title}
              </h2>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-[var(--kreeda-text-secondary)] font-medium">
                <span>By {activeArticle.author}</span>
                <span>•</span>
                <span>{activeArticle.date}</span>
                <span>•</span>
                <span>{activeArticle.readTime}</span>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden h-64 bg-[var(--kreeda-surface-elevated)] border border-black/10 dark:border-white/10 shadow-lg">
              <img
                src={activeArticle.imageUrl}
                alt={activeArticle.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-4 text-sm sm:text-base text-[var(--kreeda-text-secondary)] leading-relaxed">
              {activeArticle.content.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="pt-4 border-t border-black/10 dark:border-white/10 flex items-center justify-between">
              <button
                onClick={() => {
                  navigator.clipboard?.writeText(window.location.href);
                  alert('Article link copied to clipboard!');
                }}
                className="py-2.5 px-4 rounded-xl bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-[var(--kreeda-text-primary)] text-sm font-semibold flex items-center gap-2 border border-black/10 dark:border-white/10 transition btn-tactile"
              >
                <Share2 className="w-4 h-4 text-[#F4B738]" />
                <span>Share Article</span>
              </button>

              <button
                onClick={() => setActiveArticle(null)}
                className="py-2.5 px-6 rounded-xl bg-gradient-to-r from-[#FF5500] to-[#FF661A] text-white font-bebas text-base uppercase tracking-wider font-black transition btn-tactile shadow-orange-glow"
              >
                Done Reading
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
