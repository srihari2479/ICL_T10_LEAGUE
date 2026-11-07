import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { FRANCHISES_DATA } from '../../data/franchisesData';
import { Franchise } from '../../types';
import { Shield, MapPin, Users, Award, ChevronRight, UserPlus } from 'lucide-react';

export const TeamsView: React.FC = () => {
  const { setSelectedFranchise, setCurrentPage } = useApp();
  const [selectedState, setSelectedState] = useState<'ALL' | 'Andhra Pradesh' | 'Telangana'>('ALL');

  const filteredTeams = FRANCHISES_DATA.filter((team) => {
    if (selectedState === 'ALL') return true;
    return team.state === selectedState;
  });

  return (
    <div className="w-full pt-3 sm:pt-5 pb-10 sm:pb-14 px-4 sm:px-8 lg:px-12 xl:px-16 space-y-8 sm:space-y-10">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-5">
        <div>
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-widest text-[#FF5500] mb-1">
            <Shield className="w-4 h-4 text-[#F59E0B]" />
            <span>The 8 Regional Contenders</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bebas text-[var(--kreeda-text-primary)] tracking-wide">
            FRANCHISES &amp; SQUAD ROSTERS
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-[var(--kreeda-text-secondary)] mt-1 max-w-2xl leading-relaxed">
            Representing the proud sporting culture of Andhra Pradesh and Telangana. Explore team identities, home stadiums, mentors, and squads.
          </p>
        </div>

        {/* State Filter Pills */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[var(--kreeda-surface)] border border-black/10 dark:border-white/15 self-start md:self-auto shadow-sm">
          {(['ALL', 'Andhra Pradesh', 'Telangana'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedState(tab)}
              className={`px-3 sm:px-4 py-1.5 rounded-lg text-xs font-bold transition-all btn-tactile ${
                selectedState === tab
                  ? 'bg-gradient-to-r from-[#FF5500] to-[#FF661A] text-white font-black shadow-orange-glow'
                  : 'text-[var(--kreeda-text-secondary)] hover:text-[var(--kreeda-text-primary)]'
              }`}
            >
              {tab === 'ALL' ? 'All 8 Franchises' : tab === 'Andhra Pradesh' ? 'Andhra (4)' : 'Telangana (4)'}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Teams - 2 Column Full-Screen Width */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
        {filteredTeams.map((team) => {
          const captain = team.squad.find((s) => s.isCaptain)?.name || 'Announced soon';

          return (
            <div
              key={team.id}
              className="glass-card p-5 sm:p-6 flex flex-col justify-between space-y-4 border-2 border-black/10 dark:border-white/10 hover:border-[#FF5500]/50 transition-all duration-300 relative overflow-hidden shadow-sm dark:shadow-tactile"
            >
              <div 
                className="absolute top-0 left-0 right-0 h-1.5" 
                style={{ backgroundColor: team.primaryColor }}
              />

              <div className="space-y-3.5">
                {/* Team Top Row */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-13 h-13 sm:w-16 sm:h-16 rounded-xl overflow-hidden border-2 border-black/10 dark:border-white/10 shadow-lg bg-[var(--kreeda-surface-elevated)] flex-shrink-0">
                      {team.crestImage ? (
                        <img src={team.crestImage} alt={team.name} className="w-13 h-13 sm:w-16 sm:h-16 object-cover" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center font-bebas text-xl font-bold text-[var(--kreeda-text-primary)]">
                          {team.shortCode}
                        </div>
                      )}
                    </div>
                    <div>
                      <span className="text-[11px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-[var(--kreeda-text-primary)]">
                        {team.state}
                      </span>
                      <h2 className="font-bebas text-xl sm:text-2xl text-[var(--kreeda-text-primary)] mt-1 leading-tight">
                        {team.name}
                      </h2>
                      <div className="text-xs text-[#FF5500] italic font-semibold mt-0.5">
                        "{team.tagline}"
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-[11px] text-[var(--kreeda-text-muted)] block font-medium">Regional Hub</span>
                    <span className="text-xs sm:text-sm font-bold text-[#F59E0B] flex items-center justify-end gap-1 mt-0.5">
                      <MapPin className="w-3.5 h-3.5 text-[#FF5500]" />
                      {team.hub}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[var(--kreeda-text-secondary)] leading-relaxed">
                  {team.description}
                </p>

                {/* Metadata Grid */}
                <div className="grid grid-cols-2 gap-2.5 p-3.5 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-xs">
                  <div>
                    <span className="text-[var(--kreeda-text-muted)] block text-[11px]">Official Zone:</span>
                    <span className="text-[var(--kreeda-text-primary)] font-bold">{team.zone}</span>
                  </div>
                  <div>
                    <span className="text-[var(--kreeda-text-muted)] block text-[11px]">Team Captain:</span>
                    <span className="text-[#F59E0B] font-bold">{captain}</span>
                  </div>
                  <div>
                    <span className="text-[var(--kreeda-text-muted)] block text-[11px]">Team Mentor:</span>
                    <span className="text-[var(--kreeda-text-primary)] font-medium">{team.mentor}</span>
                  </div>
                  <div>
                    <span className="text-[var(--kreeda-text-muted)] block text-xs">Head Coach:</span>
                    <span className="text-[var(--kreeda-text-primary)] font-medium">{team.headCoach}</span>
                  </div>
                </div>

                {/* Catchment Preview */}
                <div>
                  <div className="text-xs font-bold text-[#FF5500] uppercase tracking-wider mb-2 flex items-center justify-between">
                    <span>Mapped Catchment Districts ({team.catchmentDistricts.length})</span>
                    <span className="text-[var(--kreeda-text-muted)] text-xs font-normal">DPR Tables 19 &amp; 20</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {team.catchmentDistricts.map((d) => (
                      <span
                        key={d}
                        className="px-2.5 py-1 rounded-lg bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-xs font-semibold text-[var(--kreeda-text-secondary)]"
                      >
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-4 border-t border-black/10 dark:border-white/10 flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedFranchise(team)}
                  className="flex-1 py-3 px-4 rounded-xl bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-[var(--kreeda-text-primary)] font-bebas text-base uppercase tracking-wider font-bold flex items-center justify-center gap-2 border border-black/10 dark:border-white/10 transition btn-tactile"
                >
                  <Users className="w-4 h-4 text-[#F59E0B]" />
                  <span>View Full Squad Roster</span>
                </button>

                <button
                  onClick={() => setCurrentPage('register-player')}
                  className="py-3 px-5 rounded-xl bg-gradient-to-r from-[#FF5500] to-[#FF661A] text-white font-bebas text-base uppercase tracking-wider font-black flex items-center gap-1.5 shadow-orange-glow btn-tactile"
                >
                  <UserPlus className="w-4 h-4 text-white" />
                  <span>Apply for Trials</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};
