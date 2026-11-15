import React from 'react';
import { Trophy, Award, Star, Flame, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';

export const PrizePoolSection: React.FC = () => {
  const prizes = [
    {
      id: 'winners',
      badge: 'CHAMPIONS • 1ST PLACE',
      amount: '₹50 LAKHS',
      rawAmount: '₹50,00,000',
      title: 'Tournament Winners',
      subtitle: 'The Ultimate Telugu T10 Crown',
      description: 'Championship silverware, gold medals, and the historic ₹50 Lakhs winners purse hoisted at the grand finale.',
      icon: Trophy,
      share: '50%',
      glowColor: 'rgba(245, 158, 11, 0.28)',
      accentBar: 'from-amber-400 to-yellow-500',
      cardBorder: 'border-amber-500/50 hover:border-amber-400',
      badgeBg: 'bg-amber-500/15 text-amber-500 dark:text-amber-400 border-amber-500/35',
      amountGradient: 'from-amber-400 via-amber-300 to-yellow-500',
      isHero: true,
    },
    {
      id: 'runners',
      badge: 'FINALISTS • 2ND PLACE',
      amount: '₹25 LAKHS',
      rawAmount: '₹25,00,000',
      title: 'Runners-Up',
      subtitle: 'Championship Finalists',
      description: 'Silver silverware, runner-up medallions, and ₹25 Lakhs podium purse recognizing exceptional tournament tenacity.',
      icon: Award,
      share: '25%',
      glowColor: 'rgba(148, 163, 184, 0.25)',
      accentBar: 'from-slate-200 to-slate-400',
      cardBorder: 'border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500',
      badgeBg: 'bg-slate-500/15 text-slate-700 dark:text-slate-300 border-slate-500/30',
      amountGradient: 'from-slate-100 via-white to-slate-300 dark:from-white dark:via-slate-200 dark:to-slate-400',
      isHero: false,
    },
    {
      id: 'matches',
      badge: '31 MATCHES • ₹25K / GAME',
      amount: '₹15 LAKHS',
      rawAmount: '₹15,00,000',
      title: 'Man of the Matches',
      subtitle: 'Matchday Individual Honors',
      description: '₹25,000 cash reward for each Player of the Match across 31 clashes, plus fastest fifty, maximum sixes & bowling milestone bonuses.',
      icon: Flame,
      share: '15%',
      glowColor: 'rgba(255, 85, 0, 0.25)',
      accentBar: 'from-[#FF5500] to-[#FF7733]',
      cardBorder: 'border-[#FF5500]/50 hover:border-[#FF5500]',
      badgeBg: 'bg-[#FF5500]/15 text-[#FF5500] border-[#FF5500]/35',
      amountGradient: 'from-[#FF5500] via-[#FF7733] to-[#F59E0B]',
      isHero: false,
    },
    {
      id: 'mvp',
      badge: 'TOURNAMENT MVP',
      amount: '₹10 LAKHS',
      rawAmount: '₹10,00,000',
      title: 'Man of the Series',
      subtitle: 'Player of the Tournament',
      description: 'Awarded to the most impactful cricketer of Season 1 based on verified Kreeda telemetry across runs, wickets, and strike rates.',
      icon: Star,
      share: '10%',
      glowColor: 'rgba(168, 85, 247, 0.25)',
      accentBar: 'from-purple-400 to-pink-500',
      cardBorder: 'border-purple-500/50 hover:border-purple-400',
      badgeBg: 'bg-purple-500/15 text-purple-600 dark:text-purple-400 border-purple-500/35',
      amountGradient: 'from-purple-400 via-pink-400 to-amber-300',
      isHero: false,
    },
  ];

  return (
    <section 
      id="prize-pool" 
      className="py-12 sm:py-16 lg:py-20 w-full px-4 sm:px-8 lg:px-12 xl:px-16 border-b border-black/10 dark:border-white/10 bg-gradient-to-b from-[var(--kreeda-bg)] via-[var(--kreeda-surface)]/50 to-[var(--kreeda-bg)] relative overflow-hidden transition-colors duration-200"
    >
      {/* Background Ambient Lighting Halos (Hardware accelerated) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[350px] sm:w-[650px] h-[250px] sm:h-[350px] bg-gradient-to-r from-amber-500/15 via-[#FF5500]/15 to-transparent blur-3xl pointer-events-none rounded-full transform-gpu" />
      <div className="absolute -top-12 right-6 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-amber-500/10 blur-3xl pointer-events-none rounded-full transform-gpu" />

      <div className="w-full max-w-7xl mx-auto space-y-8 sm:space-y-12 relative z-10">
        
        {/* Main Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
          
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/35 text-amber-600 dark:text-amber-400 shadow-sm backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-[#F59E0B] animate-pulse flex-shrink-0" />
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest">
              HISTORIC REGIONAL CRICKETING PURSE
            </span>
          </div>

          {/* Huge Main Headline with smooth metallic shine */}
          <div className="space-y-1">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bebas text-[var(--kreeda-text-primary)] tracking-wide leading-none">
              ₹1 CRORE TOTAL PRIZE POOL
            </h2>
            <div className="text-xs sm:text-base md:text-xl font-bold uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#FF5500] via-[#F59E0B] to-[#FF5500]">
              First Time Ever in Andhra Pradesh &amp; Telangana
            </div>
          </div>

          {/* Description */}
          <p className="text-xs sm:text-sm md:text-base text-[var(--kreeda-text-secondary)] leading-relaxed max-w-2xl mx-auto font-medium">
            Honoring grassroots athleticism with the largest purse in regional T10 history. Every boundary, crucial wicket, and match-defining hero is rewarded.
          </p>
        </div>

        {/* 4 Prize Breakdown Cards (Ultra Responsive: 1 col on mobile, 2 col on tablet, 4 col on desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {prizes.map((prize) => {
            const Icon = prize.icon;
            return (
              <div
                key={prize.id}
                className={`glass-card p-5 sm:p-6 rounded-2xl sm:rounded-3xl border-2 ${prize.cardBorder} flex flex-col justify-between transition-all duration-300 relative group overflow-hidden shadow-sm dark:shadow-tactile hover:-translate-y-1`}
                style={{
                  boxShadow: prize.isHero 
                    ? `0 10px 30px -10px ${prize.glowColor}` 
                    : undefined
                }}
              >
                {/* Top Glowing Color Accent Bar */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${prize.accentBar}`} />

                {/* Subtle Card Background Accent Glow */}
                <div 
                  className="absolute -top-16 -right-16 w-36 h-36 rounded-full blur-2xl pointer-events-none opacity-30 group-hover:opacity-70 transition-opacity duration-300"
                  style={{ backgroundColor: prize.glowColor }}
                />

                <div className="space-y-3 sm:space-y-4 relative z-10 pt-1">
                  
                  {/* Card Header: Icon + Category Badge */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 flex items-center justify-center flex-shrink-0 shadow-inner group-hover:scale-105 transition-transform duration-200">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--kreeda-text-primary)]" />
                    </div>

                    <span className={`text-[10px] sm:text-[10.5px] font-black tracking-wider uppercase px-2.5 py-1 rounded-full border ${prize.badgeBg} truncate`}>
                      {prize.badge}
                    </span>
                  </div>

                  {/* Prize Amount Showcase */}
                  <div className="pt-0.5">
                    <div className="flex items-baseline justify-between">
                      <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[var(--kreeda-text-muted)]">
                        Award Purse ({prize.share})
                      </span>
                      <span className="text-[10px] font-mono font-bold text-emerald-500 bg-emerald-500/10 px-1.5 py-0.5 rounded">
                        {prize.share} of Pool
                      </span>
                    </div>

                    <div className={`font-bebas text-4xl sm:text-4xl md:text-5xl tracking-wide leading-none text-transparent bg-clip-text bg-gradient-to-r ${prize.amountGradient} mt-0.5`}>
                      {prize.amount}
                    </div>
                    <div className="text-[11px] text-[var(--kreeda-text-muted)] font-mono font-medium">
                      {prize.rawAmount} Cash Reward
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-1 pt-1.5 border-t border-black/10 dark:border-white/10">
                    <div className="text-base sm:text-lg font-bebas text-[var(--kreeda-text-primary)] tracking-wide">
                      {prize.title}
                    </div>
                    <p className="text-xs text-[var(--kreeda-text-secondary)] leading-relaxed">
                      {prize.description}
                    </p>
                  </div>

                </div>

                {/* Card Footer Tag */}
                <div className="pt-3 sm:pt-4 mt-3 border-t border-black/5 dark:border-white/5 flex items-center justify-between text-[11px] font-bold text-[var(--kreeda-text-muted)] relative z-10">
                  <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
                    <span>Official Cash Award</span>
                  </span>
                  <span className="font-mono text-[10.5px]">
                    100% Guaranteed
                  </span>
                </div>

              </div>
            );
          })}
        </div>

        {/* Visual Allocation Bar (Pro Sports Graphic) */}
        <div className="glass-card p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-black/10 dark:border-white/10 shadow-sm dark:shadow-tactile space-y-3">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-2 text-xs">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#FF5500] flex-shrink-0" />
              <span className="font-bebas text-base sm:text-lg text-[var(--kreeda-text-primary)] tracking-wider">
                100% TRANSPARENT PRIZE POOL ALLOCATION
              </span>
            </div>
            <div className="text-[10px] sm:text-[11px] text-[var(--kreeda-text-muted)] font-medium">
              Governed under DPR Section 4.2 • Powered via Kreeda Financial Escrow
            </div>
          </div>

          {/* Allocation Progress Meter */}
          <div className="w-full h-3 sm:h-3.5 rounded-full overflow-hidden bg-black/10 dark:bg-white/10 flex p-0.5 gap-0.5 shadow-inner">
            <div 
              style={{ width: '50%' }} 
              className="h-full rounded-l-full bg-gradient-to-r from-amber-400 to-yellow-500 transition-all duration-300" 
              title="Winners: ₹50 Lakhs (50%)" 
            />
            <div 
              style={{ width: '25%' }} 
              className="h-full bg-gradient-to-r from-slate-200 to-slate-400 transition-all duration-300" 
              title="Runners-Up: ₹25 Lakhs (25%)" 
            />
            <div 
              style={{ width: '15%' }} 
              className="h-full bg-gradient-to-r from-[#FF5500] to-[#FF7733] transition-all duration-300" 
              title="Man of the Matches: ₹15 Lakhs (15%)" 
            />
            <div 
              style={{ width: '10%' }} 
              className="h-full rounded-r-full bg-gradient-to-r from-purple-400 to-pink-500 transition-all duration-300" 
              title="Player of Tournament: ₹10 Lakhs (10%)" 
            />
          </div>

          {/* Labels under the bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 text-[10.5px] sm:text-[11px] font-semibold text-[var(--kreeda-text-secondary)]">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 flex-shrink-0" />
              <span>Winners: <strong>₹50L</strong> (50%)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-300 flex-shrink-0" />
              <span>Runners: <strong>₹25L</strong> (25%)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF5500] flex-shrink-0" />
              <span>Matches: <strong>₹15L</strong> (15%)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-purple-400 flex-shrink-0" />
              <span>MVP: <strong>₹10L</strong> (10%)</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
