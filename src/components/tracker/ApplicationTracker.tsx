import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { FRANCHISES_DATA } from '../../data/franchisesData';
import { 
  Search, 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  MapPin, 
  User, 
  Calendar, 
  Download, 
  Printer, 
  ShieldCheck,
  ChevronRight,
  Flame
} from 'lucide-react';

export const ApplicationTracker: React.FC = () => {
  const { 
    playerApplications, 
    influencerApplications, 
    prefilledTrackerId, 
    setPrefilledTrackerId,
    setCurrentPage 
  } = useApp();

  const [query, setQuery] = useState(prefilledTrackerId || 'ICL-PL-2026-8941');
  const [searched, setSearched] = useState(true);

  useEffect(() => {
    if (prefilledTrackerId) {
      setQuery(prefilledTrackerId);
      setSearched(true);
      setPrefilledTrackerId(null);
    }
  }, [prefilledTrackerId]);

  const cleanQuery = query.trim().toUpperCase();

  const matchedPlayer = playerApplications.find(
    (app) => app.applicationId.toUpperCase() === cleanQuery || app.mobile.includes(query.trim())
  );

  const matchedInfluencer = influencerApplications.find(
    (app) => app.applicationId.toUpperCase() === cleanQuery || app.mobile.includes(query.trim())
  );

  const assignedFranchise = matchedPlayer ? FRANCHISES_DATA.find((f) => f.id === matchedPlayer.assignedFranchiseId) : null;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearched(true);
  };

  const stages = [
    { key: 'SUBMITTED', label: 'Submitted' },
    { key: 'CATCHMENT', label: 'Catchment Verified' },
    { key: 'VERIFIED', label: 'Documents Approved' },
    { key: 'TRIAL', label: 'Trial Scheduled' },
    { key: 'SHORTLISTED', label: 'Squad Shortlist' }
  ];

  const getStageIndex = (status: string) => {
    switch (status) {
      case 'UNDER_REVIEW': return 1;
      case 'VERIFIED': return 2;
      case 'TRIAL_SCHEDULED': return 3;
      case 'SHORTLISTED': case 'SELECTED': return 4;
      case 'REJECTED': return 0;
      default: return 1;
    }
  };

  return (
    <div className="w-full py-6 sm:py-14 px-2.5 xs:px-4 sm:px-8 max-w-4xl mx-auto space-y-6 sm:space-y-8 pb-8 sm:pb-12">
      
      {/* Search Header */}
      <div className="glass-card p-4 xs:p-6 sm:p-8 space-y-4 border-2 border-[#FF5500]/25 shadow-2xl">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 xs:w-12 xs:h-12 rounded-2xl bg-[#FF5500]/20 text-[#FF5500] flex items-center justify-center border border-[#FF5500]/40 shadow-orange-glow flex-shrink-0">
            <Search className="w-5 h-5 xs:w-6 xs:h-6" />
          </div>
          <div>
            <h2 className="font-bebas text-xl xs:text-2xl sm:text-3xl text-white tracking-wide">
              APPLICATION STATUS TRACKER
            </h2>
            <p className="text-[11px] xs:text-xs sm:text-sm text-[var(--kreeda-text-secondary)]">
              Query live verification status of Player Open Trials or Creator Accreditation
            </p>
          </div>
        </div>

        <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-2.5 pt-2">
          <div className="relative flex-1 min-w-0">
            <Search className="w-5 h-5 text-[var(--kreeda-text-muted)] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Application ID (e.g. ICL-PL-2026-8941) or Mobile..."
              className="w-full pl-10 pr-3 sm:pl-12 sm:pr-4 py-3 sm:py-3.5 rounded-xl sm:rounded-2xl bg-[var(--kreeda-surface)] border border-black/10 dark:border-white/10 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-[#FF5500]"
            />
          </div>
          <button
            type="submit"
            className="w-full sm:w-auto py-3 sm:py-3.5 px-6 rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#FF5500] to-[#F59E0B] text-[#070B14] font-bebas text-base sm:text-lg tracking-wider uppercase font-black transition btn-tactile shadow-orange-glow whitespace-nowrap flex items-center justify-center flex-shrink-0"
          >
            Track Status
          </button>
        </form>

        {/* Quick Sample IDs */}
        <div className="pt-2 border-t border-black/10 dark:border-white/10 flex flex-wrap items-center gap-1.5 xs:gap-2 text-[11px] xs:text-xs text-[var(--kreeda-text-muted)]">
          <span>Quick Lookup Samples:</span>
          {['ICL-PL-2026-8941', 'ICL-PL-2026-9022', 'ICL-INF-2026-1044'].map((sample) => (
            <button
              key={sample}
              type="button"
              onClick={() => {
                setQuery(sample);
                setSearched(true);
              }}
              className="px-2 xs:px-2.5 py-1 rounded-lg bg-black/5 dark:bg-white/5 hover:bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/10 text-[#FF5500] font-mono transition text-[11px] xs:text-xs"
            >
              {sample}
            </button>
          ))}
        </div>
      </div>

      {/* Search Result View */}
      {searched && (
        <>
          {matchedPlayer && (
            <div className="glass-card p-4 xs:p-6 sm:p-8 space-y-5 sm:space-y-6 border-2 border-[#FF5500]/40 shadow-2xl">
              
              {/* Header with Assigned Team Crest */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 pb-4 border-b border-black/10 dark:border-white/10">
                <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                  {assignedFranchise?.crestImage && (
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl overflow-hidden border-2 border-black/10 dark:border-white/10 shadow-lg bg-[var(--kreeda-surface-elevated)] flex-shrink-0">
                      <img src={assignedFranchise.crestImage} alt="Crest" className="w-full h-full object-cover" />
                    </div>
                  )}
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                      <span className="font-bebas text-xl sm:text-2xl text-[#FF5500] tracking-wider">
                        {matchedPlayer.applicationId}
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-[#FF5500]/20 text-[#FFFFFF] text-[10px] sm:text-[11px] font-black uppercase font-bebas tracking-wider whitespace-nowrap">
                        Player Application
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-2xl font-bold text-[var(--kreeda-text-primary)] mt-0.5 truncate">
                      {matchedPlayer.fullName}
                    </h3>
                  </div>
                </div>

                <div className="text-left sm:text-right flex items-center sm:block gap-2 text-xs">
                  <span className="text-[var(--kreeda-text-muted)] font-medium">Submitted On:</span>
                  <span className="text-[var(--kreeda-text-primary)] font-bold">{matchedPlayer.submittedAt}</span>
                </div>
              </div>

              {/* Visual 5-Stage Pipeline */}
              <div className="space-y-3">
                <div className="text-xs font-bold text-[#FF5500] uppercase tracking-wider">
                  Verification Pipeline Progress
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-5 gap-1.5 sm:gap-2 text-center">
                  {stages.map((st, idx) => {
                    const currentStageIdx = getStageIndex(matchedPlayer.status);
                    const isPassed = idx <= currentStageIdx;
                    const isCurrent = idx === currentStageIdx;

                    return (
                      <div
                        key={st.key}
                        className={`p-2 xs:p-2.5 sm:p-3 rounded-xl border text-xs flex flex-col items-center justify-center gap-1 sm:gap-1.5 transition ${
                          idx === 4 ? 'col-span-2 sm:col-span-1' : ''
                        } ${
                          isCurrent
                            ? 'bg-[#FF5500]/20 border-[#FF5500] text-[#FF5500] font-bold shadow-orange-glow'
                            : isPassed
                            ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300'
                            : 'bg-white/[0.02] border-white/5 text-slate-500'
                        }`}
                      >
                        {isPassed ? (
                          <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 flex-shrink-0" />
                        ) : (
                          <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-500 flex-shrink-0" />
                        )}
                        <span className="text-[10px] sm:text-[11px] leading-tight font-semibold">{st.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Data Summary Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 p-3.5 xs:p-5 rounded-2xl bg-[var(--kreeda-surface)] border border-black/10 dark:border-white/10 text-xs sm:text-sm">
                <div>
                  <span className="text-xs text-[var(--kreeda-text-muted)] block font-medium">Permanent District</span>
                  <span className="font-bold text-[var(--kreeda-text-primary)] text-base">{matchedPlayer.district} ({matchedPlayer.state})</span>
                </div>
                <div>
                  <span className="text-xs text-[var(--kreeda-text-muted)] block font-medium">Assigned Franchise</span>
                  <span className="font-bold text-[#FF5500] text-base">{matchedPlayer.assignedFranchiseName}</span>
                </div>
                <div>
                  <span className="text-xs text-[var(--kreeda-text-muted)] block font-medium">Primary Skill</span>
                  <span className="font-bold text-[#F59E0B] text-base">{matchedPlayer.primaryRole} ({matchedPlayer.battingHand})</span>
                </div>
                <div>
                  <span className="text-xs text-[var(--kreeda-text-muted)] block font-medium">Registered Contact</span>
                  <span className="font-bold text-[var(--kreeda-text-primary)] text-base">{matchedPlayer.mobile}</span>
                </div>
              </div>

              {/* Trial Notification Box if scheduled */}
              {matchedPlayer.trialDate && (
                <div className="p-3.5 xs:p-5 rounded-xl sm:rounded-2xl bg-[#FF5500]/10 border border-[#FF5500]/40 space-y-1.5 text-xs sm:text-sm">
                  <div className="flex items-center gap-2 font-bebas text-base xs:text-lg text-[#F59E0B] tracking-wider uppercase">
                    <Calendar className="w-4 h-4 xs:w-5 xs:h-5 text-[#FF5500]" />
                    <span>Selection Trial Call-Up Details</span>
                  </div>
                  <div className="text-white font-bold text-sm xs:text-base leading-snug">{matchedPlayer.trialVenue}</div>
                  <div className="text-[var(--kreeda-text-secondary)] text-[11px] xs:text-xs">Reporting Slot: {matchedPlayer.trialDate}</div>
                </div>
              )}

              {/* Print / Download Button */}
              <div className="pt-2 flex gap-3">
                <button
                  onClick={() => window.print()}
                  className="w-full py-2.5 sm:py-3 px-4 rounded-xl bg-black/5 dark:bg-white/5 hover:bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/10 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition btn-tactile whitespace-nowrap"
                >
                  <Printer className="w-4 h-4 text-[#FF5500]" />
                  <span>Print Application Slip</span>
                </button>
              </div>

            </div>
          )}

          {matchedInfluencer && (
            <div className="glass-card p-6 sm:p-8 space-y-5 border-2 border-[#F59E0B]/40 shadow-2xl">
              <div className="flex items-center justify-between pb-4 border-b border-black/10 dark:border-white/10">
                <div>
                  <span className="font-bebas text-2xl text-[#F59E0B] tracking-wider">
                    {matchedInfluencer.applicationId}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[var(--kreeda-text-primary)] mt-0.5">
                    {matchedInfluencer.fullName}
                  </h3>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#FF5500]/20 text-[#FFFFFF] text-xs font-black uppercase font-bebas tracking-wider">
                  {matchedInfluencer.status}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-xs text-[var(--kreeda-text-muted)] block font-medium">Platform</span>
                  <span className="font-bold text-[var(--kreeda-text-primary)] text-base">{matchedInfluencer.primaryPlatform} ({matchedInfluencer.platformHandle})</span>
                </div>
                <div>
                  <span className="text-xs text-[var(--kreeda-text-muted)] block font-medium">Audience Reach</span>
                  <span className="font-bold text-[#FF5500] text-base">{matchedInfluencer.followerCount}</span>
                </div>
                <div>
                  <span className="text-xs text-[var(--kreeda-text-muted)] block font-medium">Niche</span>
                  <span className="font-semibold text-[var(--kreeda-text-primary)]">{matchedInfluencer.contentNiche}</span>
                </div>
                <div>
                  <span className="text-xs text-[var(--kreeda-text-muted)] block font-medium">Role Preference</span>
                  <span className="font-semibold text-[var(--kreeda-text-primary)]">{matchedInfluencer.collaborationPreference}</span>
                </div>
              </div>
            </div>
          )}

          {!matchedPlayer && !matchedInfluencer && (
            <div className="glass-card p-10 text-center space-y-4">
              <AlertCircle className="w-12 h-12 text-[#FF5500] mx-auto" />
              <div className="font-bebas text-xl sm:text-2xl text-white">
                NO RECORD FOUND FOR "{query}"
              </div>
              <p className="text-sm text-[var(--kreeda-text-secondary)] max-w-md mx-auto leading-relaxed">
                Please check your application number format (e.g. ICL-PL-2026-8941) or enroll as a new player.
              </p>
              <button
                onClick={() => setCurrentPage('register-player')}
                className="py-3 px-6 rounded-2xl bg-gradient-to-r from-[#FF5500] to-[#F59E0B] text-[#070B14] font-bebas text-base uppercase tracking-wider font-black inline-flex items-center gap-2 transition btn-tactile shadow-orange-glow"
              >
                <span>Register as New Player</span>
                <ChevronRight className="w-4 h-4 text-[#070B14]" />
              </button>
            </div>
          )}
        </>
      )}

    </div>
  );
};
