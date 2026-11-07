import React from 'react';
import { useApp } from '../../context/AppContext';
import { UserPlus, Flame, CheckCircle, ArrowRight, ShieldAlert, Award, Sparkles } from 'lucide-react';
import { getAssetUrl } from '../../utils/assetHelper';

export const GatewaysBanner: React.FC = () => {
  const { setCurrentPage } = useApp();

  return (
    <section className="py-10 sm:py-14 w-full px-4 sm:px-8 lg:px-12 xl:px-16 border-b border-black/10 dark:border-white/10 bg-[var(--kreeda-surface)]/30 transition-colors duration-200">
      <div className="w-full space-y-6 sm:space-y-8">
        
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-block px-3 py-1 rounded-full bg-[#FF5500]/15 border border-[#FF5500]/30 text-[#FF5500] font-bold text-xs tracking-widest uppercase">
            PARTICIPATION PATHWAYS
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bebas text-[var(--kreeda-text-primary)] tracking-wide">
            STEP ONTO THE CRICKET STAGE
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-[var(--kreeda-text-secondary)]">
            Whether you dominate on the 22 yards or drive digital fanfare online, ICL T10 has an accredited gateway for you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          
          {/* Card 1: Player Registration & Trials with Dynamic 3D Equipment Showcase */}
          <div className="glass-card p-4 sm:p-8 relative overflow-hidden flex flex-col justify-between group border border-black/10 dark:border-white/10 hover:border-[#FF5500]/50 transition-all duration-300 shadow-sm dark:shadow-tactile rounded-3xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#FF5500]/15 via-[#F59E0B]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-4 relative z-10">
              
              {/* Header with Floating 3D Equipment Asset */}
              <div className="flex items-start justify-between gap-3 sm:gap-4">
                <div className="space-y-2 flex-1 min-w-0">
                  <div className="inline-flex items-center gap-2">
                    <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#FF5500]/15 border border-[#FF5500]/30 flex items-center justify-center text-[#FF5500] shadow-sm flex-shrink-0">
                      <UserPlus className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#FF5500] bg-[#FF5500]/15 px-2.5 py-0.5 sm:py-1 rounded-full truncate">
                      Grassroots to Floodlights
                    </span>
                  </div>
                  
                  <h3 className="text-xl sm:text-3xl font-bebas text-[var(--kreeda-text-primary)] tracking-wide leading-tight">
                    PLAYER REGISTRATION &amp; OPEN TRIALS
                  </h3>
                </div>

                {/* Large 3D Photorealistic Cricket Gear Hero Asset */}
                <div className="flex-shrink-0 -mt-1 sm:-mt-2 -mr-1 relative">
                  <div className="absolute inset-0 bg-[#FF5500]/20 rounded-full blur-xl pointer-events-none scale-90" />
                  <img 
                    src={getAssetUrl('assets/player_trials_3d.png')} 
                    alt="Official Player Cricket Equipment" 
                    className="w-20 h-20 sm:w-36 sm:h-36 md:w-40 md:h-40 object-contain filter drop-shadow-[0_12px_24px_rgba(255,85,0,0.3)] group-hover:scale-105 group-hover:-translate-y-1 transition-all duration-300 relative z-10" 
                  />
                </div>
              </div>

              <div>
                <p className="text-xs sm:text-sm text-[var(--kreeda-text-secondary)] leading-relaxed">
                  Are you an explosive batter, express fast bowler, or crafty spinner in Andhra Pradesh or Telangana? Submit your cricket profile, verify your native district, and earn a call-up for franchise selection trials.
                </p>
              </div>

              <div className="space-y-2 pt-1 text-xs text-[var(--kreeda-text-secondary)] font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#FF5500] flex-shrink-0" />
                  <span>Automated district-to-franchise catchment routing</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#FF5500] flex-shrink-0" />
                  <span>Instant verifiable Application ID &amp; acknowledgment slip</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#FF5500] flex-shrink-0" />
                  <span>Real-time status tracker from trial invite to shortlist</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-black/10 dark:border-white/10 relative z-10">
              <button
                onClick={() => setCurrentPage('register-player')}
                className="w-full py-3 px-5 rounded-xl bg-gradient-to-r from-[#FF5500] to-[#FF661A] hover:brightness-110 text-white font-bold text-xs sm:text-sm tracking-wider uppercase flex items-center justify-center gap-2 shadow-orange-glow btn-tactile"
              >
                <span>Complete Player Application</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>

          {/* Card 2: Creator / Influencer Portal with Dynamic 3D Media Kit Showcase */}
          <div className="glass-card p-4 sm:p-8 relative overflow-hidden flex flex-col justify-between group border border-black/10 dark:border-white/10 hover:border-[#F59E0B]/50 transition-all duration-300 shadow-sm dark:shadow-tactile rounded-3xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#F59E0B]/15 via-[#FF5500]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-4 relative z-10">
              
              {/* Header with Floating 3D Media Gear Asset */}
              <div className="flex items-start justify-between gap-3 sm:gap-4">
                <div className="space-y-2 flex-1 min-w-0">
                  <div className="inline-flex items-center gap-2">
                    <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#F59E0B]/15 border border-[#F59E0B]/30 flex items-center justify-center text-[#F59E0B] shadow-sm flex-shrink-0">
                      <Flame className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#0A1128] bg-gradient-to-r from-[#F59E0B] to-[#FBBF24] px-2.5 py-0.5 sm:py-1 rounded-full font-black truncate">
                      Digital Content Creators
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-3xl font-bebas text-[var(--kreeda-text-primary)] tracking-wide leading-tight">
                    INFLUENCER &amp; CREATOR PORTAL
                  </h3>
                </div>

                {/* Large 3D Photorealistic VIP Media Rig Hero Asset */}
                <div className="flex-shrink-0 -mt-1 sm:-mt-2 -mr-1 relative">
                  <div className="absolute inset-0 bg-[#F59E0B]/20 rounded-full blur-xl pointer-events-none scale-90" />
                  <img 
                    src={getAssetUrl('assets/creator_vip_3d.png')} 
                    alt="Official VIP Media Creator Equipment" 
                    className="w-20 h-20 sm:w-36 sm:h-36 md:w-40 md:h-40 object-contain filter drop-shadow-[0_12px_24px_rgba(245,158,11,0.3)] group-hover:scale-105 group-hover:-translate-y-1 transition-all duration-300 relative z-10" 
                  />
                </div>
              </div>

              <div>
                <p className="text-xs sm:text-sm text-[var(--kreeda-text-secondary)] leading-relaxed">
                  Connect your YouTube, Instagram, or fan community directly to the tournament. Selected digital influencers receive dugout access, locker room privileges, and official partnership accreditation.
                </p>
              </div>

              <div className="space-y-2 pt-1 text-xs text-[var(--kreeda-text-secondary)] font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#F59E0B] flex-shrink-0" />
                  <span>All-access media badge &amp; pitchside presenter rights</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#F59E0B] flex-shrink-0" />
                  <span>Franchise fan-engagement collaboration</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#F59E0B] flex-shrink-0" />
                  <span>Dedicated creator dashboard &amp; verification badge</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-black/10 dark:border-white/10 relative z-10">
              <button
                onClick={() => setCurrentPage('register-influencer')}
                className="w-full py-3 px-5 rounded-xl bg-gradient-to-r from-[#F59E0B] via-[#FBBF24] to-[#F59E0B] hover:brightness-110 text-[#0A1128] font-bold text-xs sm:text-sm tracking-wider uppercase flex items-center justify-center gap-2 shadow-gold-glow btn-tactile font-black"
              >
                <span>Register as Creator / Influencer</span>
                <ArrowRight className="w-4 h-4 text-[#0A1128]" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
