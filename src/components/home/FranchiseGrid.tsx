import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { FRANCHISES_DATA } from '../../data/franchisesData';
import { Franchise } from '../../types';
import { Shield, MapPin, ChevronRight, Users, Sparkles, Award } from 'lucide-react';

export const FranchiseGrid: React.FC = () => {
  const { setSelectedFranchise, setCurrentPage } = useApp();
  const [filterState, setFilterState] = useState<'ALL' | 'Andhra Pradesh' | 'Telangana'>('ALL');

  const filteredFranchises = FRANCHISES_DATA.filter((f) => {
    if (filterState === 'ALL') return true;
    return f.state === filterState;
  });

  const handleCardClick = (f: Franchise) => {
    setSelectedFranchise(f);
  };

  return (
    <section className="py-10 sm:py-14 w-full px-4 sm:px-8 lg:px-12 xl:px-16 border-b border-black/10 dark:border-white/10 transition-colors duration-200">
      <div className="w-full space-y-6 sm:space-y-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-widest text-[#FF5500] mb-1">
              <Shield className="w-4 h-4 text-[#F59E0B]" />
              <span>Official 8 Franchises</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bebas text-[var(--kreeda-text-primary)] tracking-wide">
              REGIONAL POWERHOUSES
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-[var(--kreeda-text-secondary)] max-w-2xl mt-1 leading-relaxed">
              Four powerhouse teams from Andhra Pradesh and four from Telangana battle for supremacy across 10 overs.
            </p>
          </div>

          {/* Filter Pills with Dynamic Theme */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white dark:bg-[#0D1424] border border-black/10 dark:border-white/15 self-start md:self-auto shadow-sm">
            {(['ALL', 'Andhra Pradesh', 'Telangana'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setFilterState(tab)}
                className={`px-3 sm:px-4 py-1.5 rounded-lg text-xs font-bold transition-all btn-tactile ${
                  filterState === tab
                    ? 'bg-gradient-to-r from-[#FF5500] to-[#FF661A] text-white font-black shadow-orange-glow'
                    : 'text-[var(--kreeda-text-secondary)] hover:text-[var(--kreeda-text-primary)]'
                }`}
              >
                {tab === 'ALL' ? 'All 8 Teams' : tab === 'Andhra Pradesh' ? 'Andhra (4)' : 'Telangana (4)'}
              </button>
            ))}
          </div>
        </div>

        {/* 8 Franchises Grid - 4 Columns on XL, 2 on MD, 1 on Mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {filteredFranchises.map((team) => {
            const captain = team.squad.find((s) => s.isCaptain)?.name || 'Announced soon';
            
            return (
              <div
                key={team.id}
                onClick={() => handleCardClick(team)}
                className="glass-card-interactive group cursor-pointer p-4 sm:p-5 flex flex-col justify-between relative overflow-hidden shadow-sm dark:shadow-tactile"
              >
                {/* Top team color glow accent */}
                <div 
                  className="absolute top-0 left-0 right-0 h-1.5" 
                  style={{ backgroundColor: team.primaryColor }}
                />

                <div className="space-y-3.5">
                  {/* Top Row: Official Kreeda Crest & Hub Badge */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl overflow-hidden border-2 border-black/10 dark:border-white/10 group-hover:border-[#FF5500] transition-colors shadow-sm bg-[var(--kreeda-surface-elevated)] flex-shrink-0">
                      {team.crestImage ? (
                        <img 
                          src={team.crestImage} 
                          alt={team.name} 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      ) : (
                        <div 
                          className="w-full h-full flex items-center justify-center font-bebas text-lg text-[var(--kreeda-text-primary)] font-bold"
                          style={{ backgroundColor: `${team.primaryColor}30` }}
                        >
                          {team.shortCode}
                        </div>
                      )}
                    </div>

                    <div className="text-right">
                      <span className="inline-block px-2.5 py-0.5 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-[11px] font-bold text-[var(--kreeda-text-primary)]">
                        {team.state === 'Andhra Pradesh' ? 'Andhra' : 'Telangana'}
                      </span>
                      <div className="text-[11px] text-[var(--kreeda-text-muted)] font-medium flex items-center justify-end gap-1 mt-1">
                        <MapPin className="w-3 h-3 text-[#FF5500]" />
                        <span>{team.hub}</span>
                      </div>
                    </div>
                  </div>

                  {/* Team Name & Tagline */}
                  <div>
                    <h3 className="font-bebas text-lg sm:text-xl text-[var(--kreeda-text-primary)] group-hover:text-[#FF5500] transition-colors leading-tight">
                      {team.name}
                    </h3>
                    <p className="text-xs text-[#FF5500] italic font-medium mt-0.5 line-clamp-1">
                      "{team.tagline}"
                    </p>
                  </div>

                  {/* Team Details Summary */}
                  <div className="pt-2.5 border-t border-black/10 dark:border-white/10 space-y-1 text-xs text-[var(--kreeda-text-secondary)]">
                    <div className="flex items-center justify-between">
                      <span className="text-[var(--kreeda-text-muted)]">Zone:</span>
                      <span className="text-[var(--kreeda-text-primary)] font-semibold">{team.zone}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[var(--kreeda-text-muted)]">Captain:</span>
                      <span className="text-[#F59E0B] font-semibold">{captain}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[var(--kreeda-text-muted)]">Districts Mapped:</span>
                      <span className="text-[#FF5500] font-bold">{team.catchmentDistricts.length} Districts</span>
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="mt-5 pt-3 border-t border-black/10 dark:border-white/10 flex items-center justify-between text-xs sm:text-sm font-bold text-[#FF5500] group-hover:text-[#FF661A] transition">
                  <span className="font-bebas text-base tracking-wider uppercase">View Squad &amp; Roster</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Catchment search CTA banner with Kreeda assets */}
        <div className="p-6 rounded-3xl bg-gradient-to-r from-[#FF5500]/10 via-[#F59E0B]/10 to-transparent border border-orange-500/25 flex flex-col md:flex-row items-center justify-between gap-5 text-center md:text-left shadow-sm dark:shadow-tactile">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[var(--kreeda-surface)] border border-orange-500/30 p-1 flex-shrink-0 hidden sm:block">
              <img src="/assets/kreeda/kreeda_vip_pass_badge.jpg" alt="VIP Pass" className="w-full h-full object-cover rounded-xl" />
            </div>
            <div>
              <div className="font-bebas text-2xl sm:text-3xl text-[var(--kreeda-text-primary)] tracking-wide">
                WHICH FRANCHISE REPRESENTS YOUR DISTRICT?
              </div>
              <div className="text-xs sm:text-sm text-[var(--kreeda-text-secondary)] mt-0.5">
                Type your native district name to view your assigned franchise, trial location, and selection calendar.
              </div>
            </div>
          </div>

          <button
            onClick={() => setCurrentPage('zones')}
            className="py-3 px-6 rounded-xl bg-gradient-to-r from-[#FF5500] to-[#FF661A] hover:brightness-110 text-white font-bebas text-base uppercase tracking-wider font-black flex items-center gap-2 transition btn-tactile flex-shrink-0 shadow-orange-glow"
          >
            <span>Launch District Finder</span>
            <ChevronRight className="w-4 h-4 text-white" />
          </button>
        </div>

      </div>
    </section>
  );
};
