import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { PARTNERS_DATA } from '../../data/sponsorsData';
import { Partner } from '../../types';
import { 
  Award, 
  ChevronRight, 
  ExternalLink, 
  Sparkles, 
  Crown, 
  ShieldCheck, 
  ArrowUpRight,
  X,
  Building2,
  Tv,
  Activity,
  HeartPulse,
  Flame
} from 'lucide-react';

export const SponsorsStrip: React.FC = () => {
  const { setCurrentPage, theme } = useApp();
  const [selectedPartner, setSelectedPartner] = useState<Partner | null>(null);

  // Distinct tier visual metadata
  const getTierBadge = (tier: string) => {
    switch (tier) {
      case 'Title Partner':
        return {
          icon: <Crown className="w-3.5 h-3.5 text-amber-400" />,
          label: 'TITLE PARTNER',
          pillClass: 'bg-amber-500/15 text-amber-500 dark:text-amber-300 border-amber-500/35',
          borderClass: 'border-amber-500/40 hover:border-amber-400 dark:hover:border-amber-400/80',
          glowClass: 'shadow-[0_0_25px_rgba(245,158,11,0.15)]',
          crown: true
        };
      case 'Powered By':
        return {
          icon: <Building2 className="w-3.5 h-3.5 text-rose-500 dark:text-rose-400" />,
          label: 'POWERED BY',
          pillClass: 'bg-rose-500/15 text-rose-600 dark:text-rose-300 border-rose-500/35',
          borderClass: 'border-rose-500/30 hover:border-rose-400 dark:hover:border-rose-400/80',
          glowClass: 'shadow-[0_0_20px_rgba(244,63,94,0.12)]',
          crown: false
        };
      case 'Digital Scoring Partner':
      case 'Scoring Partner':
        return {
          icon: <Activity className="w-3.5 h-3.5 text-orange-500" />,
          label: 'DIGITAL SCORING',
          pillClass: 'bg-[#FF5500]/15 text-[#FF5500] dark:text-orange-300 border-[#FF5500]/35',
          borderClass: 'border-[#FF5500]/30 hover:border-[#FF5500] dark:hover:border-[#FF5500]/80',
          glowClass: 'shadow-[0_0_20px_rgba(255,85,0,0.12)]',
          crown: false
        };
      case 'Official Broadcast Partner':
      case 'Broadcast Partner':
        return {
          icon: <Tv className="w-3.5 h-3.5 text-red-500" />,
          label: 'BROADCAST PARTNER',
          pillClass: 'bg-red-500/15 text-red-600 dark:text-red-300 border-red-500/35',
          borderClass: 'border-red-500/30 hover:border-red-400 dark:hover:border-red-400/80',
          glowClass: 'shadow-[0_0_20px_rgba(239,68,68,0.12)]',
          crown: false
        };
      case 'Official Kit Partner':
      case 'Kit Partner':
        return {
          icon: <ShieldCheck className="w-3.5 h-3.5 text-blue-500" />,
          label: 'KIT PARTNER',
          pillClass: 'bg-blue-500/15 text-blue-600 dark:text-blue-300 border-blue-500/35',
          borderClass: 'border-blue-500/30 hover:border-blue-400 dark:hover:border-blue-400/80',
          glowClass: 'shadow-[0_0_20px_rgba(59,130,246,0.12)]',
          crown: false
        };
      case 'Healthcare Partner':
      default:
        return {
          icon: <HeartPulse className="w-3.5 h-3.5 text-amber-500" />,
          label: 'HEALTHCARE PARTNER',
          pillClass: 'bg-amber-500/15 text-amber-600 dark:text-amber-300 border-amber-500/35',
          borderClass: 'border-amber-500/30 hover:border-amber-400 dark:hover:border-amber-400/80',
          glowClass: 'shadow-[0_0_20px_rgba(217,119,6,0.12)]',
          crown: false
        };
    }
  };

  const titlePartner = PARTNERS_DATA.find((p) => p.tier === 'Title Partner');
  const otherPartners = PARTNERS_DATA.filter((p) => p.tier !== 'Title Partner');

  return (
    <section className="py-10 sm:py-14 w-full px-4 sm:px-8 lg:px-12 xl:px-16 border-b border-black/10 dark:border-white/10 bg-gradient-to-b from-transparent via-[var(--kreeda-surface)]/20 to-transparent transition-colors duration-200 relative overflow-hidden">
      
      {/* Background ambient decorative glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-[#FF5500]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full space-y-6 sm:space-y-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-amber-500/15 to-[#FF5500]/15 border border-amber-500/30 text-xs font-bold uppercase tracking-widest text-[#FF5500] dark:text-amber-400 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Commercial Ecosystem &bull; Season 1</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bebas text-[var(--kreeda-text-primary)] tracking-wide flex items-center gap-3">
              <span>OFFICIAL PARTNERS &amp; SPONSORS</span>
            </h2>
            <p className="text-xs sm:text-sm text-[var(--kreeda-text-secondary)] mt-1 max-w-xl">
              Powering Telugu cricket excellence, infrastructure, player welfare, and regional broadcast coverage.
            </p>
          </div>

          <button
            onClick={() => setCurrentPage('sponsors')}
            className="text-xs sm:text-sm font-bold text-[#FF5500] hover:text-[#FF661A] flex items-center gap-1.5 transition self-start md:self-auto uppercase tracking-wider group px-3.5 py-2 rounded-xl bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 border border-black/10 dark:border-white/10 btn-tactile"
          >
            <span>Partner With Us</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* ============================================================== */}
        {/* MOBILE VIEW (< 640px): Dedicated Hero Card + 2-Col Grid         */}
        {/* ============================================================== */}
        <div className="block sm:hidden space-y-3.5">
          {/* Mobile Featured Title Partner Hero Card */}
          {titlePartner && (() => {
            const meta = getTierBadge(titlePartner.tier);
            const logoSrc = theme === 'dark' ? titlePartner.logoDarkUrl : (titlePartner.logoUrl || titlePartner.logoDarkUrl);
            return (
              <div
                onClick={() => setSelectedPartner(titlePartner)}
                className={`p-4 rounded-2xl bg-gradient-to-br from-amber-500/15 via-[var(--kreeda-surface)] to-[var(--kreeda-surface-elevated)] border-2 ${meta.borderClass} ${meta.glowClass} relative overflow-hidden cursor-pointer shadow-lg active:scale-[0.99] transition-all`}
              >
                {/* Gold corner badge */}
                <div className="absolute top-0 right-0">
                  <div className="px-3 py-1 bg-gradient-to-l from-amber-500 to-amber-600 text-black font-bebas text-[11px] font-black tracking-widest rounded-bl-xl shadow-md uppercase flex items-center gap-1">
                    <Crown className="w-3 h-3 text-black" />
                    <span>PREMIER SPONSOR</span>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 pt-1">
                  {/* High contrast logo pedestal */}
                  <div className="w-28 h-16 rounded-xl bg-white/95 dark:bg-[#070D1F] p-2 flex items-center justify-center border border-amber-500/30 flex-shrink-0 shadow-inner">
                    <img 
                      src={logoSrc} 
                      alt={titlePartner.name} 
                      className="max-h-12 max-w-[100px] w-auto object-contain"
                    />
                  </div>

                  {/* Title & Tagline */}
                  <div className="min-w-0 flex-1">
                    <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9.5px] font-bold tracking-wider uppercase bg-amber-500/20 text-amber-500 dark:text-amber-300 mb-1 border border-amber-500/30">
                      <Crown className="w-3 h-3 text-amber-400" />
                      <span>{meta.label}</span>
                    </div>
                    <div className="text-sm font-bold text-[var(--kreeda-text-primary)] leading-tight truncate">
                      {titlePartner.name}
                    </div>
                    <div className="text-[11px] text-[var(--kreeda-text-secondary)] mt-0.5 line-clamp-1">
                      {titlePartner.categoryScope}
                    </div>
                  </div>
                </div>

                <div className="mt-3 pt-2.5 border-t border-amber-500/20 flex items-center justify-between text-[11px]">
                  <span className="text-[var(--kreeda-text-muted)] truncate max-w-[210px]">
                    {titlePartner.tagline}
                  </span>
                  <span className="text-amber-400 font-bold flex items-center gap-0.5 flex-shrink-0">
                    <span>View Dossier</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })()}

          {/* Mobile 2-Column Grid for Remaining 5 Partners */}
          <div className="grid grid-cols-2 gap-2.5">
            {otherPartners.map((partner) => {
              const meta = getTierBadge(partner.tier);
              const logoSrc = theme === 'dark' ? partner.logoDarkUrl : (partner.logoUrl || partner.logoDarkUrl);
              return (
                <div
                  key={partner.id}
                  onClick={() => setSelectedPartner(partner)}
                  className={`p-3 rounded-2xl bg-[var(--kreeda-surface)] border ${meta.borderClass} flex flex-col justify-between min-h-[145px] cursor-pointer shadow-sm active:scale-[0.98] transition-all relative overflow-hidden group`}
                >
                  {/* Subtle top brand tint */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

                  {/* Tier Pill */}
                  <div className="w-full flex items-center justify-between mb-1.5">
                    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-bold tracking-wider uppercase border ${meta.pillClass}`}>
                      {meta.icon}
                      <span className="truncate max-w-[90px]">{meta.label}</span>
                    </span>
                  </div>

                  {/* High contrast logo container */}
                  <div className="h-12 w-full rounded-xl bg-white/90 dark:bg-[#070D1F] p-1.5 flex items-center justify-center border border-black/5 dark:border-white/10 shadow-inner my-1 group-hover:scale-105 transition-transform duration-200">
                    <img 
                      src={logoSrc} 
                      alt={partner.name} 
                      className="max-h-9 max-w-[110px] w-auto object-contain" 
                    />
                  </div>

                  {/* Name and Scope */}
                  <div className="w-full text-center mt-1">
                    <div className="text-[11.5px] font-bold text-[var(--kreeda-text-primary)] leading-tight truncate">
                      {partner.name}
                    </div>
                    <div className="text-[9.5px] text-[var(--kreeda-text-muted)] font-medium mt-0.5 truncate">
                      {partner.categoryScope}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ============================================================== */}
        {/* TABLET & DESKTOP VIEW (>= 640px): 6-Card High-End Luxury Row   */}
        {/* ============================================================== */}
        <div className="hidden sm:grid sm:grid-cols-3 xl:grid-cols-6 gap-3.5 sm:gap-4">
          {PARTNERS_DATA.map((partner) => {
            const meta = getTierBadge(partner.tier);
            const logoSrc = theme === 'dark' ? partner.logoDarkUrl : (partner.logoUrl || partner.logoDarkUrl);
            const isTitle = partner.tier === 'Title Partner';

            return (
              <div
                key={partner.id}
                onClick={() => setSelectedPartner(partner)}
                className={`group relative rounded-2xl p-3 sm:p-4 min-h-[178px] sm:min-h-[188px] flex flex-col justify-between cursor-pointer transition-all duration-300 border ${meta.borderClass} ${
                  isTitle 
                    ? 'bg-gradient-to-b from-amber-500/10 via-[var(--kreeda-surface)] to-[var(--kreeda-surface-elevated)] ' + meta.glowClass
                    : 'bg-[var(--kreeda-surface)] hover:bg-[var(--kreeda-surface-elevated)] shadow-sm dark:shadow-tactile'
                } hover:-translate-y-1 hover:shadow-xl`}
              >
                {/* Crown/Special Ribbon for Title Partner */}
                {isTitle && (
                  <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-black text-[9px] font-black tracking-widest uppercase shadow-md flex items-center gap-1 z-10 whitespace-nowrap">
                    <Crown className="w-3 h-3 text-black" />
                    <span>PREMIER SPONSOR</span>
                  </div>
                )}

                {/* Tier Micro-Pill Header */}
                <div className={`w-full flex items-center justify-center ${isTitle ? 'mt-1' : ''}`}>
                  <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[9.5px] sm:text-[10px] font-bold tracking-wider uppercase border ${meta.pillClass}`}>
                    {meta.icon}
                    <span className="truncate">{meta.label}</span>
                  </span>
                </div>

                {/* Logo Display Pedestal */}
                <div className="h-14 sm:h-16 w-full rounded-xl bg-white/95 dark:bg-[#070D1F] p-2 flex items-center justify-center border border-black/5 dark:border-white/10 shadow-inner group-hover:border-[#FF5500]/30 transition-colors my-2 relative overflow-hidden">
                  {/* Subtle brand color backlight glow */}
                  <div 
                    className="absolute inset-0 opacity-20 group-hover:opacity-35 transition-opacity blur-md"
                    style={{ backgroundColor: partner.brandColor || '#FF5500' }}
                  />
                  <img 
                    src={logoSrc} 
                    alt={partner.name} 
                    className="max-h-11 sm:max-h-12 max-w-[135px] w-auto object-contain drop-shadow-sm group-hover:scale-108 transition-transform duration-300 relative z-10" 
                  />
                </div>

                {/* Partner Details */}
                <div className="w-full text-center space-y-0.5">
                  <div className="text-xs sm:text-[13px] font-bold text-[var(--kreeda-text-primary)] leading-tight truncate group-hover:text-[#FF5500] transition-colors">
                    {partner.name}
                  </div>
                  <div className="text-[10px] sm:text-[10.5px] text-[var(--kreeda-text-muted)] font-medium truncate">
                    {partner.categoryScope}
                  </div>
                </div>

                {/* Subtle Hover Action Pill */}
                <div className="w-full pt-1.5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-[10px] text-[#FF5500] font-bold gap-0.5">
                  <span>View Details</span>
                  <ArrowUpRight className="w-3 h-3" />
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* ============================================================== */}
      {/* PARTNER DOSSIER MODAL: Opens on Click with Official Details     */}
      {/* ============================================================== */}
      {selectedPartner && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-[var(--kreeda-surface)] border-2 border-black/10 dark:border-white/15 rounded-3xl max-w-lg w-full p-6 sm:p-7 shadow-2xl relative overflow-hidden space-y-5">
            
            {/* Header with Close */}
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-black/10 dark:border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-16 h-14 rounded-2xl bg-white dark:bg-[#070D1F] p-2 flex items-center justify-center border border-black/10 dark:border-white/10 shadow-sm flex-shrink-0">
                  <img 
                    src={theme === 'dark' ? selectedPartner.logoDarkUrl : (selectedPartner.logoUrl || selectedPartner.logoDarkUrl)} 
                    alt={selectedPartner.name}
                    className="max-h-10 max-w-[50px] object-contain"
                  />
                </div>
                <div>
                  <div className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-[#FF5500]">
                    {selectedPartner.tier}
                  </div>
                  <h3 className="font-bebas text-2xl text-[var(--kreeda-text-primary)] tracking-wide">
                    {selectedPartner.name}
                  </h3>
                </div>
              </div>

              <button
                onClick={() => setSelectedPartner(null)}
                className="p-2 rounded-xl text-[var(--kreeda-text-muted)] hover:text-[var(--kreeda-text-primary)] hover:bg-black/5 dark:hover:bg-white/10 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content Scope */}
            <div className="space-y-3">
              <div className="p-3.5 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 space-y-1">
                <div className="text-[11px] uppercase tracking-wider font-bold text-[var(--kreeda-text-muted)]">
                  Official League Scope &bull; Season 1
                </div>
                <div className="text-sm font-semibold text-[var(--kreeda-text-primary)]">
                  {selectedPartner.tagline}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-3 rounded-xl bg-[var(--kreeda-surface-elevated)] border border-black/5 dark:border-white/5">
                  <div className="text-[10px] text-[var(--kreeda-text-muted)] uppercase font-bold">Category</div>
                  <div className="font-bold text-[var(--kreeda-text-primary)] mt-0.5">{selectedPartner.categoryScope}</div>
                </div>
                <div className="p-3 rounded-xl bg-[var(--kreeda-surface-elevated)] border border-black/5 dark:border-white/5">
                  <div className="text-[10px] text-[var(--kreeda-text-muted)] uppercase font-bold">Partnership Status</div>
                  <div className="font-bold text-emerald-500 mt-0.5 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Active &bull; Verified</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
              <a
                href={selectedPartner.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-[#FF5500] to-[#FF661A] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-orange-glow btn-tactile hover:brightness-110 transition"
              >
                <span>Visit Official Portal</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <button
                onClick={() => {
                  setSelectedPartner(null);
                  setCurrentPage('sponsors');
                }}
                className="py-3 px-4 rounded-xl bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-xs font-bold text-[var(--kreeda-text-primary)] border border-black/10 dark:border-white/10 transition btn-tactile"
              >
                Sponsorship Directory
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
