import React from 'react';
import { useApp } from '../../context/AppContext';
import { UserPlus, Flame, CheckCircle, ArrowRight } from 'lucide-react';

export const GatewaysBanner: React.FC = () => {
  const { setCurrentPage } = useApp();

  return (
    <section className="py-8 sm:py-12 lg:py-16 w-full px-4 sm:px-8 lg:px-12 xl:px-16 border-b border-black/10 dark:border-white/10 bg-[var(--kreeda-surface)]/30 transition-colors duration-200">
      <div className="w-full space-y-5 sm:space-y-8 max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-1.5 sm:space-y-2">
          <div className="inline-block px-3 py-1 rounded-full bg-[#FF5500]/15 border border-[#FF5500]/30 text-[#FF5500] font-bold text-[10px] sm:text-xs tracking-widest uppercase">
            PARTICIPATION PATHWAYS
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bebas text-[var(--kreeda-text-primary)] tracking-wide leading-none">
            STEP ONTO THE CRICKET STAGE
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-[var(--kreeda-text-secondary)] leading-relaxed">
            Whether you dominate on the 22 yards or drive digital fanfare online, ICL T10 has an accredited gateway for you.
          </p>
        </div>

        {/* 2 Gateway Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          
          {/* Card 1: Player Registration & Trials */}
          <div className="glass-card p-4 sm:p-6 lg:p-8 relative overflow-hidden flex flex-col justify-between group border border-black/10 dark:border-white/10 hover:border-[#FF5500]/50 transition-all duration-300 shadow-sm dark:shadow-tactile rounded-2xl sm:rounded-3xl">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#FF5500]/15 via-[#F59E0B]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-3.5 sm:space-y-4 relative z-10">
              
              {/* Header with 3D Equipment Showcase */}
              <div className="relative">
                {/* 3D Equipment Asset Positioned Gracefully */}
                <div className="absolute -top-1 -right-1 sm:-top-2 sm:right-0 pointer-events-none z-0">
                  <div className="absolute inset-0 bg-[#FF5500]/15 rounded-full blur-xl scale-75" />
                  <img 
                    src="/assets/player_trials_3d.png" 
                    alt="Official Player Cricket Equipment" 
                    className="w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 object-contain filter drop-shadow-[0_10px_20px_rgba(255,85,0,0.25)] group-hover:scale-105 transition-transform duration-300" 
                  />
                </div>

                {/* Left Text Column with Safe Right Padding on Mobile */}
                <div className="pr-20 sm:pr-28 md:pr-36 relative z-10 space-y-2">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#FF5500]/15 border border-[#FF5500]/30 text-[#FF5500]">
                    <UserPlus className="w-3.5 h-3.5 flex-shrink-0" />
                    <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                      Grassroots to Floodlights
                    </span>
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bebas text-[var(--kreeda-text-primary)] tracking-wide leading-tight">
                    PLAYER REGISTRATION &amp; OPEN TRIALS
                  </h3>
                </div>
              </div>

              {/* Description */}
              <div>
                <p className="text-xs sm:text-sm text-[var(--kreeda-text-secondary)] leading-relaxed font-medium">
                  Are you an explosive batter, express fast bowler, or crafty spinner in Andhra Pradesh or Telangana? Submit your cricket profile, verify your native district, and earn a call-up for franchise selection trials.
                </p>
              </div>

              {/* Key Features List */}
              <div className="space-y-1.5 sm:space-y-2 pt-1 text-xs text-[var(--kreeda-text-secondary)] font-medium">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[#FF5500] flex-shrink-0 mt-0.5" />
                  <span>Automated district-to-franchise catchment routing</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[#FF5500] flex-shrink-0 mt-0.5" />
                  <span>Instant verifiable Application ID &amp; acknowledgment slip</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[#FF5500] flex-shrink-0 mt-0.5" />
                  <span>Real-time status tracker from trial invite to shortlist</span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-5 sm:mt-6 pt-3 sm:pt-4 border-t border-black/10 dark:border-white/10 relative z-10">
              <button
                onClick={() => setCurrentPage('register-player')}
                className="w-full py-2.5 sm:py-3 px-5 rounded-xl bg-gradient-to-r from-[#FF5500] to-[#FF661A] hover:brightness-110 text-white font-bold text-xs sm:text-sm tracking-wider uppercase flex items-center justify-center gap-2 shadow-orange-glow btn-tactile"
              >
                <span>Complete Player Application</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>

          {/* Card 2: Creator / Influencer Portal */}
          <div className="glass-card p-4 sm:p-6 lg:p-8 relative overflow-hidden flex flex-col justify-between group border border-black/10 dark:border-white/10 hover:border-[#F59E0B]/50 transition-all duration-300 shadow-sm dark:shadow-tactile rounded-2xl sm:rounded-3xl">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#F59E0B]/15 via-[#FF5500]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-3.5 sm:space-y-4 relative z-10">
              
              {/* Header with 3D Media Gear Showcase */}
              <div className="relative">
                {/* 3D VIP Media Rig Asset Positioned Gracefully */}
                <div className="absolute -top-1 -right-1 sm:-top-2 sm:right-0 pointer-events-none z-0">
                  <div className="absolute inset-0 bg-[#F59E0B]/15 rounded-full blur-xl scale-75" />
                  <img 
                    src="/assets/creator_vip_3d.png" 
                    alt="Official VIP Media Creator Equipment" 
                    className="w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 object-contain filter drop-shadow-[0_10px_20px_rgba(245,158,11,0.25)] group-hover:scale-105 transition-transform duration-300" 
                  />
                </div>

                {/* Left Text Column with Safe Right Padding on Mobile */}
                <div className="pr-20 sm:pr-28 md:pr-36 relative z-10 space-y-2">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#F59E0B]/15 border border-[#F59E0B]/30 text-[#F59E0B]">
                    <Flame className="w-3.5 h-3.5 flex-shrink-0" />
                    <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                      Digital Content Creators
                    </span>
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bebas text-[var(--kreeda-text-primary)] tracking-wide leading-tight">
                    INFLUENCER &amp; CREATOR PORTAL
                  </h3>
                </div>
              </div>

              {/* Description */}
              <div>
                <p className="text-xs sm:text-sm text-[var(--kreeda-text-secondary)] leading-relaxed font-medium">
                  Connect your YouTube, Instagram, or fan community directly to the tournament. Selected digital influencers receive dugout access, locker room privileges, and official partnership accreditation.
                </p>
              </div>

              {/* Key Features List */}
              <div className="space-y-1.5 sm:space-y-2 pt-1 text-xs text-[var(--kreeda-text-secondary)] font-medium">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[#F59E0B] flex-shrink-0 mt-0.5" />
                  <span>All-access media badge &amp; pitchside presenter rights</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[#F59E0B] flex-shrink-0 mt-0.5" />
                  <span>Franchise fan-engagement collaboration</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[#F59E0B] flex-shrink-0 mt-0.5" />
                  <span>Dedicated creator dashboard &amp; verification badge</span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-5 sm:mt-6 pt-3 sm:pt-4 border-t border-black/10 dark:border-white/10 relative z-10">
              <button
                onClick={() => setCurrentPage('register-influencer')}
                className="w-full py-2.5 sm:py-3 px-5 rounded-xl bg-gradient-to-r from-[#F59E0B] to-[#FF5500] hover:brightness-110 text-white font-bold text-xs sm:text-sm tracking-wider uppercase flex items-center justify-center gap-2 shadow-gold-glow btn-tactile"
              >
                <span>Register as Creator / Influencer</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
