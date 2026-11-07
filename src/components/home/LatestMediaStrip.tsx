import React from 'react';
import { useApp } from '../../context/AppContext';
import { NEWS_DATA } from '../../data/mediaData';
import { Newspaper, ChevronRight, Clock, User } from 'lucide-react';
import { getAssetUrl } from '../../utils/assetHelper';

export const LatestMediaStrip: React.FC = () => {
  const { setCurrentPage } = useApp();

  return (
    <section className="py-10 sm:py-14 w-full px-4 sm:px-8 lg:px-12 xl:px-16 border-b border-black/10 dark:border-white/10 bg-[var(--kreeda-surface)]/30 transition-colors duration-200">
      <div className="w-full space-y-6 sm:space-y-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-widest text-[#FF5500] mb-1">
              <Newspaper className="w-4 h-4 text-[#F59E0B]" />
              <span>Media &amp; Announcements</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bebas text-[var(--kreeda-text-primary)] tracking-wide">
              LATEST FROM THE LEAGUE
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-[var(--kreeda-text-secondary)] max-w-xl mt-1">
              Official press releases, franchise launches, and trial notifications across the Telugu states.
            </p>
          </div>

          <button
            onClick={() => setCurrentPage('media')}
            className="text-xs sm:text-sm font-bold text-[#FF5500] hover:text-[#FF661A] flex items-center gap-1.5 transition self-start md:self-auto uppercase tracking-wider"
          >
            <span>Visit Media Centre</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {NEWS_DATA.slice(0, 3).map((article) => (
            <div
              key={article.id}
              onClick={() => setCurrentPage('media')}
              className="glass-card-interactive group cursor-pointer overflow-hidden flex flex-col justify-between shadow-sm dark:shadow-tactile border border-black/10 dark:border-white/10"
            >
              <div className="relative h-48 sm:h-52 overflow-hidden bg-[var(--kreeda-surface-elevated)]">
                <img
                  src={article.imageUrl}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-95 text-transparent"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = getAssetUrl('assets/media_season1_launch.jpg');
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                <div className="absolute top-3.5 left-3.5">
                  <span className="px-2.5 py-1 rounded-full bg-white/95 dark:bg-black/85 backdrop-blur-md border border-[#FF5500]/40 text-[10px] font-bold tracking-widest uppercase text-[#FF5500] dark:text-[#FFCD80] shadow-md">
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

      </div>
    </section>
  );
};
