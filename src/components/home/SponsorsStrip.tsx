import React from 'react';
import { useApp } from '../../context/AppContext';
import { PARTNERS_DATA } from '../../data/sponsorsData';
import { Award, ChevronRight, Handshake } from 'lucide-react';

export const SponsorsStrip: React.FC = () => {
  const { setCurrentPage, theme } = useApp();

  return (
    <section className="py-10 sm:py-14 w-full px-4 sm:px-8 lg:px-12 xl:px-16 border-b border-black/10 dark:border-white/10 transition-colors duration-200">
      <div className="w-full space-y-6">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-widest text-[#FF5500] mb-1">
              <Award className="w-4 h-4 text-[#F59E0B]" />
              <span>Commercial Ecosystem</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bebas text-[var(--kreeda-text-primary)] tracking-wide">
              OFFICIAL PARTNERS &amp; SPONSORS
            </h2>
          </div>

          <button
            onClick={() => setCurrentPage('sponsors')}
            className="text-xs sm:text-sm font-bold text-[#FF5500] hover:text-[#FF661A] flex items-center gap-1.5 transition self-start md:self-auto uppercase tracking-wider"
          >
            <span>Partner With Us</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-3 sm:gap-4">
          {PARTNERS_DATA.map((partner) => {
            return (
              <div
                key={partner.id}
                onClick={() => setCurrentPage('sponsors')}
                className="glass-card-interactive px-2.5 py-3.5 sm:px-3 sm:py-4 min-h-[150px] text-center flex flex-col items-center justify-between cursor-pointer group shadow-sm dark:shadow-tactile border border-black/10 dark:border-white/10 rounded-xl hover:border-[#FF5500]/50 transition-all duration-200"
              >
                <div className="h-12 sm:h-14 flex items-center justify-center w-full px-1">
                  {partner.logoDarkUrl ? (
                    <img 
                      src={theme === 'dark' ? partner.logoDarkUrl : (partner.logoUrl || partner.logoDarkUrl)} 
                      alt={partner.name} 
                      className="h-9 sm:h-11 max-h-11 max-w-[155px] w-auto object-contain drop-shadow-sm group-hover:scale-105 transition-transform duration-200" 
                    />
                  ) : (
                    <span className="text-2xl sm:text-3xl transform group-hover:scale-110 transition-transform">
                      {partner.logo}
                    </span>
                  )}
                </div>
                
                <div className="w-full flex-1 flex flex-col justify-end pt-2">
                  <div className="text-[10px] sm:text-[10.5px] uppercase font-bold tracking-wider text-[#FF5500] whitespace-nowrap overflow-hidden text-ellipsis">
                    {partner.tier}
                  </div>
                  <div className="text-xs sm:text-[12.5px] font-bold text-[var(--kreeda-text-primary)] mt-0.5 leading-tight whitespace-nowrap overflow-hidden text-ellipsis group-hover:text-[#FF5500] transition">
                    {partner.name}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
