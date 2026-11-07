import React from 'react';
import { useApp } from '../../context/AppContext';
import { FIXTURES_DATA } from '../../data/fixturesData';
import { FRANCHISES_DATA } from '../../data/franchisesData';
import { Calendar, ChevronRight } from 'lucide-react';

export const UpcomingFixturesStrip: React.FC = () => {
  const { setCurrentPage, navigateToBookingForMatch, openKreedaBoundaryModal } = useApp();

  const previewMatches = FIXTURES_DATA.slice(0, 4);

  return (
    <section className="py-10 sm:py-14 w-full px-4 sm:px-8 lg:px-12 xl:px-16 border-b border-black/10 dark:border-white/10 transition-colors duration-200">
      <div className="w-full space-y-6 sm:space-y-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-widest text-[#FF5500] mb-1">
              <Calendar className="w-4 h-4 text-[#F59E0B]" />
              <span>Official Tournament Schedule</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bebas text-[var(--kreeda-text-primary)] tracking-wide">
              UPCOMING BLOCKBUSTER CLASHES
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-[var(--kreeda-text-secondary)] max-w-xl mt-1">
              High-intensity 10-over matches across Uppal, Visakhapatnam, Amaravati, and Kadapa.
            </p>
          </div>

          <button
            onClick={() => setCurrentPage('fixtures')}
            className="text-xs sm:text-sm font-bold text-[#FF5500] hover:text-[#FF661A] flex items-center gap-1.5 transition self-start md:self-auto uppercase tracking-wider"
          >
            <span>View Full Fixture Calendar</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Matches Grid - 2 Columns Full Width */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
          {previewMatches.map((match) => {
            const team1 = FRANCHISES_DATA.find((f) => f.id === match.team1Id);
            const team2 = FRANCHISES_DATA.find((f) => f.id === match.team2Id);
            const isLive = match.status === 'live';

            return (
              <div
                key={match.id}
                className={`glass-card p-4 sm:p-6 rounded-3xl flex flex-col justify-between border-2 transition-all duration-300 shadow-sm dark:shadow-tactile ${
                  isLive 
                    ? 'border-rose-500/50 bg-rose-500/5 dark:bg-rose-950/20 shadow-md' 
                    : 'border-black/10 dark:border-white/10 hover:border-[#FF5500]/40'
                }`}
              >
                <div className="space-y-4">
                  
                  {/* Header Row */}
                  <div className="flex items-center justify-between pb-3 border-b border-black/10 dark:border-white/10 text-xs">
                    <span className="font-bold uppercase tracking-wider text-[var(--kreeda-text-muted)]">
                      {match.stage} • Match #{match.matchNo}
                    </span>

                    {isLive ? (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-rose-500/15 border border-rose-500/30 text-rose-600 dark:text-rose-400 font-extrabold text-[11px] tracking-wider uppercase animate-pulse">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-ping" />
                        LIVE
                      </span>
                    ) : (
                      <span className="text-[var(--kreeda-text-secondary)] font-semibold">
                        {match.date} • {match.time}
                      </span>
                    )}
                  </div>

                  {/* Mobile Match Scoreboard Layout (< sm) */}
                  <div className="sm:hidden space-y-2.5 py-1">
                    {/* Team 1 */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2.5 min-w-0 flex-1">
                        <div className="w-9 h-9 rounded-xl overflow-hidden border border-black/10 dark:border-white/10 shadow-sm bg-[var(--kreeda-surface-elevated)] flex-shrink-0">
                          {team1?.crestImage ? (
                            <img src={team1.crestImage} alt={team1.name} className="w-full h-full object-cover" />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center font-bebas text-sm font-bold text-[var(--kreeda-text-primary)]">
                              {team1?.shortCode}
                            </div>
                          )}
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="font-bold text-xs sm:text-sm text-[var(--kreeda-text-primary)] leading-tight">
                            {team1?.name}
                          </div>
                          <div className="text-[10px] text-[var(--kreeda-text-muted)] truncate">
                            {team1?.hub}
                          </div>
                        </div>
                      </div>
                      {isLive && match.team1Score && (
                        <div className="text-right flex-shrink-0 font-bebas text-base text-[#FF5500]">
                          {match.team1Score}
                        </div>
                      )}
                    </div>

                    {/* Divider */}
                    <div className="flex items-center gap-2 text-xs text-[var(--kreeda-text-muted)]">
                      <div className="flex-1 h-px bg-black/10 dark:bg-white/10" />
                      <span className="font-black text-[9px] text-[#FF5500] uppercase tracking-widest px-1">
                        {isLive ? 'VS' : 'MATCHUP'}
                      </span>
                      <div className="flex-1 h-px bg-black/10 dark:bg-white/10" />
                    </div>

                    {/* Team 2 */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2.5 min-w-0 flex-1">
                        <div className="w-9 h-9 rounded-xl overflow-hidden border border-black/10 dark:border-white/10 shadow-sm bg-[var(--kreeda-surface-elevated)] flex-shrink-0">
                          {team2?.crestImage ? (
                            <img src={team2.crestImage} alt={team2.name} className="w-full h-full object-cover" />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center font-bebas text-sm font-bold text-[var(--kreeda-text-primary)]">
                              {team2?.shortCode}
                            </div>
                          )}
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="font-bold text-xs sm:text-sm text-[var(--kreeda-text-primary)] leading-tight">
                            {team2?.name}
                          </div>
                          <div className="text-[10px] text-[var(--kreeda-text-muted)] truncate">
                            {team2?.hub}
                          </div>
                        </div>
                      </div>
                      {isLive && match.team2Score && (
                        <div className="text-right flex-shrink-0 font-bebas text-base text-[#F59E0B]">
                          {match.team2Score}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Desktop Scoreboard Layout (>= sm) */}
                  <div className="hidden sm:flex items-center justify-between gap-3 py-2.5">
                    {/* Team 1 */}
                    <div className="flex items-center gap-2.5 min-w-0 flex-1">
                      <div className="w-12 h-12 rounded-xl overflow-hidden border border-black/10 dark:border-white/10 shadow-sm bg-[var(--kreeda-surface-elevated)] flex-shrink-0">
                        {team1?.crestImage ? (
                          <img src={team1.crestImage} alt={team1.name} className="w-full h-full object-cover" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center font-bebas text-base font-bold text-[var(--kreeda-text-primary)]">
                            {team1?.shortCode}
                          </div>
                        )}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="font-bold text-sm text-[var(--kreeda-text-primary)] leading-snug line-clamp-1">
                          {team1?.name}
                        </div>
                        <div className="text-[11px] text-[var(--kreeda-text-muted)] truncate mt-0.5">
                          {team1?.hub}
                        </div>
                      </div>
                    </div>

                    {/* Center Score / VS Indicator */}
                    <div className="flex-shrink-0 px-2 text-center flex flex-col items-center justify-center">
                      {isLive && match.team1Score && match.team2Score ? (
                        <div className="space-y-0.5">
                          <div className="font-bebas text-xl tracking-wider text-[#FF5500] leading-none whitespace-nowrap">
                            {match.team1Score.split(' ')[0]} <span className="text-[var(--kreeda-text-muted)] text-xs font-sans font-normal">vs</span> {match.team2Score.split(' ')[0]}
                          </div>
                          <div className="text-[10px] text-[var(--kreeda-text-muted)] font-mono">
                            {match.team1Score.split(' ')[1] || ''} • {match.team2Score.split(' ')[1] || ''}
                          </div>
                        </div>
                      ) : (
                        <span className="w-8 h-8 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 flex items-center justify-center text-[10px] font-black text-[#FF5500] shadow-sm">
                          VS
                        </span>
                      )}
                    </div>

                    {/* Team 2 */}
                    <div className="flex items-center justify-end gap-2.5 min-w-0 flex-1 text-right">
                      <div className="min-w-0 flex-1">
                        <div className="font-bold text-sm text-[var(--kreeda-text-primary)] leading-snug line-clamp-1">
                          {team2?.name}
                        </div>
                        <div className="text-[11px] text-[var(--kreeda-text-muted)] truncate mt-0.5">
                          {team2?.hub}
                        </div>
                      </div>
                      <div className="w-12 h-12 rounded-xl overflow-hidden border border-black/10 dark:border-white/10 shadow-sm bg-[var(--kreeda-surface-elevated)] flex-shrink-0">
                        {team2?.crestImage ? (
                          <img src={team2.crestImage} alt={team2.name} className="w-full h-full object-cover" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center font-bebas text-base font-bold text-[var(--kreeda-text-primary)]">
                            {team2?.shortCode}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Match Situation / Result */}
                  {match.result && (
                    <div className="text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 py-1.5 px-3 rounded-xl border border-emerald-500/20 text-center">
                      {match.result}
                    </div>
                  )}

                  {/* Venue Details */}
                  <div className="text-[11px] sm:text-xs text-[var(--kreeda-text-muted)] text-center line-clamp-2 sm:line-clamp-1 leading-snug">
                    {match.venue}, {match.city}
                  </div>
                </div>

                {/* Action Button & Subtle Footnote (Single Clean CTA) */}
                <div className="mt-4 pt-3 border-t border-black/10 dark:border-white/10 space-y-2">
                  {match.ticketsAvailable ? (
                    <button
                      onClick={() => navigateToBookingForMatch(match.id)}
                      className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#FF5500] to-[#FF661A] hover:brightness-110 text-white font-black text-xs sm:text-sm uppercase tracking-wider shadow-orange-glow transition btn-tactile text-center"
                    >
                      Book Match Tickets
                    </button>
                  ) : (
                    <button
                      onClick={() => openKreedaBoundaryModal({
                        title: 'Live Telemetry via Kreeda App',
                        message: `Match #${match.matchNo} is live! Official ball-by-ball scoring and wagon wheels are served via Kreeda App.`
                      })}
                      className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-rose-600 to-rose-500 hover:brightness-110 text-white font-black text-xs sm:text-sm uppercase tracking-wider shadow-md transition btn-tactile text-center"
                    >
                      Launch Live Match Center ↗
                    </button>
                  )}

                  <div className="flex items-center justify-between text-[11px] text-[var(--kreeda-text-muted)] px-1">
                    <span>DPR Match #{match.matchNo}</span>
                    <button
                      onClick={() => openKreedaBoundaryModal({
                        title: 'Kreeda App Scoring',
                        message: `Official match scorecards and points are registered exclusively in Kreeda App.`
                      })}
                      className="text-[#FF5500] hover:underline font-semibold"
                    >
                      Scorecard on Kreeda ↗
                    </button>
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
