import React from 'react';
import { useApp } from '../../context/AppContext';
import { 
  X, 
  MapPin, 
  Shield, 
  Award, 
  UserPlus, 
  Users, 
  Building2, 
  ExternalLink,
  ChevronRight,
  Sparkles
} from 'lucide-react';

export const FranchiseDetailModal: React.FC = () => {
  const { selectedFranchise, setSelectedFranchise, setCurrentPage } = useApp();

  if (!selectedFranchise) return null;

  const handleApplyTrials = () => {
    setSelectedFranchise(null);
    setCurrentPage('register-player');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto">
      <div className="bg-[var(--kreeda-surface)] border-2 border-black/10 dark:border-white/15 rounded-3xl max-w-3xl w-full p-4 sm:p-8 shadow-2xl relative my-auto max-h-[92vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={() => setSelectedFranchise(null)}
          className="absolute top-5 right-5 p-2 rounded-xl text-[var(--kreeda-text-muted)] hover:text-[var(--kreeda-text-primary)] hover:bg-black/5 dark:hover:bg-white/10 transition z-10 btn-tactile"
        >
          <X className="w-6 h-6 text-[#FF5500]" />
        </button>

        {/* Modal Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 pb-5 border-b border-black/10 dark:border-white/10">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-black/10 dark:border-white/20 shadow-sm bg-[var(--kreeda-surface-elevated)] flex-shrink-0">
            {selectedFranchise.crestImage ? (
              <img src={selectedFranchise.crestImage} alt={selectedFranchise.name} className="w-full h-full object-cover" />
            ) : (
              <div 
                className="w-full h-full flex items-center justify-center font-bebas text-3xl font-bold text-[var(--kreeda-text-primary)]"
                style={{ backgroundColor: `${selectedFranchise.primaryColor}30` }}
              >
                {selectedFranchise.shortCode}
              </div>
            )}
          </div>

          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="px-3 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-[var(--kreeda-text-primary)]">
                {selectedFranchise.state}
              </span>
              <span className="text-xs sm:text-sm text-[#FF5500] font-bold">
                {selectedFranchise.zone}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bebas text-[var(--kreeda-text-primary)] tracking-wide">
              {selectedFranchise.name}
            </h2>
            <p className="text-xs sm:text-sm text-[#FF5500] italic font-semibold">
              "{selectedFranchise.tagline}"
            </p>
          </div>
        </div>

        {/* Content Body */}
        <div className="py-5 space-y-6 text-sm text-[var(--kreeda-text-secondary)]">
          
          {/* Overview Description */}
          <p className="leading-relaxed text-[var(--kreeda-text-secondary)] text-sm sm:text-base">
            {selectedFranchise.description}
          </p>

          {/* Key Facts Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/10 dark:border-white/10 space-y-2">
              <div className="flex items-center gap-2 font-bold text-[#FF5500] text-xs uppercase tracking-wider">
                <MapPin className="w-4 h-4 text-[#F59E0B]" />
                <span>Regional Hub &amp; Home Venue</span>
              </div>
              <div className="text-[var(--kreeda-text-primary)] font-extrabold text-base">{selectedFranchise.hub}</div>
              <div className="text-xs text-[var(--kreeda-text-muted)] leading-snug">{selectedFranchise.homeVenue}</div>
            </div>

            <div className="p-4 rounded-2xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/10 dark:border-white/10 space-y-2">
              <div className="flex items-center gap-2 font-bold text-[#F59E0B] text-xs uppercase tracking-wider">
                <Building2 className="w-4 h-4 text-[#F59E0B]" />
                <span>Leadership &amp; Mentorship</span>
              </div>
              <div className="text-[var(--kreeda-text-primary)] font-bold">Mentor: <span className="text-[#FF5500]">{selectedFranchise.mentor}</span></div>
              <div className="text-xs text-[var(--kreeda-text-secondary)]">Head Coach: {selectedFranchise.headCoach}</div>
              <div className="text-[11px] text-[var(--kreeda-text-muted)]">{selectedFranchise.ownerGroup}</div>
            </div>
          </div>

          {/* Catchment Districts */}
          <div className="space-y-3">
            <div className="font-bebas text-xl text-[var(--kreeda-text-primary)] tracking-wider flex items-center justify-between">
              <span>APPROVED DISTRICT CATCHMENTS</span>
              <span className="text-[#FF5500] font-sans text-xs font-black">
                {selectedFranchise.catchmentDistricts.length} Districts Mapped
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {selectedFranchise.catchmentDistricts.map((district) => (
                <span
                  key={district}
                  className="px-3 py-1.5 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-xs font-semibold text-[var(--kreeda-text-primary)]"
                >
                  {district}
                </span>
              ))}
            </div>
            <p className="text-xs text-[var(--kreeda-text-muted)] italic">
              *Players residing in any of the above districts are automatically routed to {selectedFranchise.name} selection trials.
            </p>
          </div>

          {/* Squad Roster */}
          <div className="space-y-3">
            <div className="font-bebas text-xl text-[var(--kreeda-text-primary)] tracking-wider flex items-center justify-between">
              <span>ACTIVE SQUAD ROSTER</span>
              <span className="text-[#F59E0B] font-sans text-xs font-bold">16-18 Player Roster</span>
            </div>

            <div className="space-y-2 max-h-64 overflow-y-auto pr-1">
              {selectedFranchise.squad.map((player) => (
                <div
                  key={player.id}
                  className="p-3 sm:p-3.5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.03] hover:bg-black/[0.05] dark:hover:bg-white/[0.06] border border-black/5 dark:border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-3 transition"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="w-8 h-8 rounded-xl bg-[#FF5500]/15 border border-[#FF5500]/30 flex items-center justify-center font-bebas text-base text-[#FF5500] flex-shrink-0">
                      #{player.jerseyNumber}
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="font-bold text-[var(--kreeda-text-primary)] text-sm flex flex-wrap items-center gap-1.5 sm:gap-2">
                        <span>{player.name}</span>
                        {player.isCaptain && (
                          <span className="px-1.5 py-0.5 rounded-full bg-[#FF5500]/20 text-[#FF5500] text-[9.5px] font-black tracking-widest uppercase">
                            CAPTAIN
                          </span>
                        )}
                        {player.isViceCaptain && (
                          <span className="px-1.5 py-0.5 rounded-full bg-[#F59E0B]/20 text-[#F59E0B] text-[9.5px] font-black tracking-widest uppercase">
                            VICE CAPTAIN
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-[var(--kreeda-text-muted)] mt-0.5 truncate">
                        {player.role} • {player.battingStyle}
                        {player.bowlingStyle ? ` • ${player.bowlingStyle}` : ''}
                      </div>
                    </div>
                  </div>

                  <div className="text-left sm:text-right text-xs pl-11 sm:pl-0 flex-shrink-0">
                    <span className="text-[var(--kreeda-text-muted)]">Home: </span>
                    <span className="text-[var(--kreeda-text-primary)] font-bold">{player.homeDistrict}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer CTAs */}
        <div className="pt-4 border-t border-black/10 dark:border-white/10 flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleApplyTrials}
            className="flex-1 py-3 px-6 rounded-2xl bg-gradient-to-r from-[#FF5500] to-[#FF661A] hover:brightness-110 text-white font-bebas text-base tracking-wider uppercase font-black flex items-center justify-center gap-2 shadow-orange-glow btn-tactile"
          >
            <UserPlus className="w-5 h-5 text-white" />
            <span>Apply for {selectedFranchise.name} Trials</span>
          </button>

          <button
            onClick={() => setSelectedFranchise(null)}
            className="py-3 px-6 rounded-2xl bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-[var(--kreeda-text-primary)] font-bold text-sm border border-black/10 dark:border-white/10 transition btn-tactile"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
