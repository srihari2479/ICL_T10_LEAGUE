import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { PARTNERS_DATA } from '../../data/sponsorsData';
import { Partner } from '../../types';
import { Award, Handshake, ExternalLink, Download, CheckCircle2, X, Send } from 'lucide-react';

export const SponsorsView: React.FC = () => {
  const { theme } = useApp();
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [companyName, setCompanyName] = useState('');
  const [contactName, setContactName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedTier, setSelectedTier] = useState('Official Franchise Co-Sponsor');
  const [inquirySubmitted, setInquirySubmitted] = useState(false);

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySubmitted(true);
    setTimeout(() => {
      setInquirySubmitted(false);
      setInquiryModalOpen(false);
      alert('Thank you! Commercial Relations team will contact you within 24 hours.');
    }, 1800);
  };

  return (
    <div className="w-full pt-3 sm:pt-5 pb-10 sm:pb-14 px-4 sm:px-8 lg:px-12 xl:px-16 space-y-8 sm:space-y-10">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-5">
        <div>
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-widest text-[#FF5500] mb-1">
            <Award className="w-4 h-4 text-[#F59E0B]" />
            <span>Commercial League Ecosystem</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bebas text-[var(--kreeda-text-primary)] tracking-wide">
            OFFICIAL PARTNERS &amp; SPONSORS
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-[var(--kreeda-text-secondary)] mt-1 max-w-2xl leading-relaxed">
            Powering Telugu sporting infrastructure, player development funds, and regional broadcast excellence.
          </p>
        </div>

        <button
          onClick={() => setInquiryModalOpen(true)}
          className="self-start md:self-auto py-2.5 sm:py-3 px-5 rounded-xl bg-gradient-to-r from-[#FF5500] to-[#FF661A] hover:brightness-110 text-white font-bold text-xs sm:text-sm tracking-wider uppercase flex items-center gap-2 shadow-orange-glow btn-tactile"
        >
          <Handshake className="w-4 h-4 text-white" />
          <span>Sponsorship &amp; Branding Inquiries</span>
        </button>
      </div>

      {/* Title Sponsor Showcase Card */}
      {PARTNERS_DATA.filter((p) => p.tier === 'Title Partner').map((titlePartner) => (
        <div 
          key={titlePartner.id}
          className="glass-card p-8 sm:p-10 border-2 border-black/10 dark:border-white/10 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl"
        >
          <div className="space-y-3 text-center md:text-left">
            <span className="px-4 py-1.5 rounded-full bg-[#FF5500]/15 border border-[#FF5500]/30 text-[#FF5500] font-bebas text-base uppercase tracking-widest inline-block font-bold">
              {titlePartner.tier}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bebas text-[var(--kreeda-text-primary)] tracking-wide">
              {titlePartner.name}
            </h2>
            <p className="text-xs sm:text-sm text-[var(--kreeda-text-secondary)] max-w-xl font-medium">
              {titlePartner.tagline}
            </p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="w-64 h-24 rounded-2xl bg-white/95 dark:bg-[#070D1F] p-4 flex items-center justify-center border border-amber-500/35 shadow-inner">
              {titlePartner.logoDarkUrl ? (
                <img 
                  src={theme === 'dark' ? titlePartner.logoDarkUrl : (titlePartner.logoUrl || titlePartner.logoDarkUrl)} 
                  alt={titlePartner.name} 
                  className="max-h-16 max-w-[210px] w-auto object-contain drop-shadow-sm" 
                />
              ) : (
                <span className="text-4xl sm:text-5xl">{titlePartner.logo}</span>
              )}
            </div>
            <a
              href={titlePartner.website}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-5 rounded-xl bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-sm text-[var(--kreeda-text-primary)] font-bold flex items-center gap-2 border border-black/10 dark:border-white/10 transition btn-tactile"
            >
              <span>Visit Corporate Portal</span>
              <ExternalLink className="w-4 h-4 text-[#FF5500]" />
            </a>
          </div>
        </div>
      ))}

      {/* Grid of Other Official Tier Partners */}
      <div className="space-y-5">
        <div className="text-2xl font-bebas text-[var(--kreeda-text-primary)] tracking-wider uppercase">
          BROADCAST, TECHNOLOGY &amp; HEALTHCARE NETWORK
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PARTNERS_DATA.filter((p) => p.tier !== 'Title Partner').map((partner) => {
            const isKreeda = partner.id === 'partner-scoring';

            return (
              <div
                key={partner.id}
                className="glass-card-interactive p-6 flex flex-col justify-between space-y-4 border-2 border-black/10 dark:border-white/10 transition-all duration-200 shadow-sm dark:shadow-tactile"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-[#FF5500]">
                      {partner.tier}
                    </span>
                    <span className="text-[10.5px] text-[var(--kreeda-text-muted)] font-medium">
                      {partner.categoryScope}
                    </span>
                  </div>

                  {/* Logo Display Pedestal */}
                  <div className="h-16 w-full rounded-2xl bg-white/95 dark:bg-[#070D1F] p-2.5 flex items-center justify-center border border-black/5 dark:border-white/10 shadow-inner group-hover:border-[#FF5500]/30 transition-colors">
                    {partner.logoDarkUrl ? (
                      <img 
                        src={theme === 'dark' ? partner.logoDarkUrl : (partner.logoUrl || partner.logoDarkUrl)} 
                        alt={partner.name} 
                        className="max-h-11 max-w-[170px] w-auto object-contain drop-shadow-sm" 
                      />
                    ) : (
                      <span className="text-2xl sm:text-3xl">{partner.logo}</span>
                    )}
                  </div>

                  <div>
                    <h3 className="font-bebas text-lg sm:text-xl text-[var(--kreeda-text-primary)]">
                      {partner.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[var(--kreeda-text-secondary)] mt-1 leading-relaxed">
                      {partner.tagline}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-black/10 dark:border-white/10 flex items-center justify-between">
                  <a
                    href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm font-bold text-[#FF5500] hover:text-[#FF661A] flex items-center gap-1.5 transition font-bebas uppercase tracking-wider"
                  >
                    <span>Official Website</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Download Commercial Deck Strip */}
      <div className="p-7 rounded-3xl bg-[var(--kreeda-surface)] border-2 border-black/10 dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm dark:shadow-tactile">
        <div className="space-y-1.5 text-center md:text-left">
          <div className="text-2xl font-bebas text-[var(--kreeda-text-primary)] tracking-wide uppercase">
            ICL T10 SEASON 1 COMMERCIAL PROSPECTUS
          </div>
          <p className="text-sm text-[var(--kreeda-text-secondary)] max-w-2xl">
            Learn about on-ground LED perimeter boards, jersey branding, broadcast graphics, and stadium fan activations.
          </p>
        </div>

        <button
          onClick={() => alert('Official Commercial Prospectus PDF download started.')}
          className="py-3 px-6 rounded-2xl bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/15 text-[var(--kreeda-text-primary)] font-bold text-sm flex items-center gap-2.5 border border-black/10 dark:border-white/15 transition flex-shrink-0 btn-tactile"
        >
          <Download className="w-4 h-4 text-[#FF5500]" />
          <span>Download Partnership Deck (PDF)</span>
        </button>
      </div>

      {/* Sponsorship Inquiry Modal */}
      {inquiryModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-[var(--kreeda-surface)] border-2 border-black/10 dark:border-white/15 rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative space-y-5">
            
            <button
              onClick={() => setInquiryModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-xl text-[var(--kreeda-text-muted)] hover:text-[var(--kreeda-text-primary)] hover:bg-black/5 dark:hover:bg-white/10 transition btn-tactile"
            >
              <X className="w-6 h-6 text-[#FF5500]" />
            </button>

            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-widest text-[#FF5500]">
                Corporate Commercial Relations
              </span>
              <h2 className="text-xl sm:text-2xl font-bebas text-[var(--kreeda-text-primary)] tracking-wide">
                PARTNER WITH ICL T10
              </h2>
              <p className="text-xs sm:text-sm text-[var(--kreeda-text-secondary)]">
                Submit your commercial interest to collaborate with the league or regional franchises.
              </p>
            </div>

            <form onSubmit={handleInquirySubmit} className="space-y-4 pt-1">
              <div>
                <label className="block text-xs font-bold text-[var(--kreeda-text-secondary)] mb-1.5 uppercase">
                  Company / Brand Name *
                </label>
                <input
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder="e.g. Apex Infrastructures Ltd"
                  className="w-full px-4 py-3 rounded-2xl bg-[var(--kreeda-surface-elevated)] border border-black/10 dark:border-white/10 text-[var(--kreeda-text-primary)] placeholder-[var(--kreeda-text-muted)] text-sm focus:outline-none focus:border-[#FF5500]"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[var(--kreeda-text-secondary)] mb-1.5 uppercase">
                    Contact Person *
                  </label>
                  <input
                    type="text"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    placeholder="e.g. Suresh Kumar"
                    className="w-full px-4 py-3 rounded-2xl bg-[var(--kreeda-surface-elevated)] border border-black/10 dark:border-white/10 text-[var(--kreeda-text-primary)] placeholder-[var(--kreeda-text-muted)] text-sm focus:outline-none focus:border-[#FF5500]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[var(--kreeda-text-secondary)] mb-1.5 uppercase">
                    Corporate Email *
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="suresh@apexinfra.in"
                    className="w-full px-4 py-3 rounded-2xl bg-[var(--kreeda-surface-elevated)] border border-black/10 dark:border-white/10 text-[var(--kreeda-text-primary)] placeholder-[var(--kreeda-text-muted)] text-sm focus:outline-none focus:border-[#FF5500]"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[var(--kreeda-text-secondary)] mb-1.5 uppercase">
                  Sponsorship Tier Interest
                </label>
                <select
                  value={selectedTier}
                  onChange={(e) => setSelectedTier(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl bg-[var(--kreeda-surface-elevated)] border border-black/10 dark:border-white/10 text-[var(--kreeda-text-primary)] text-sm focus:outline-none focus:border-[#FF5500]"
                >
                  <option value="Official Franchise Co-Sponsor">Official Franchise Co-Sponsor</option>
                  <option value="Perimeter LED & Match Day Branding">Perimeter LED &amp; Match Day Branding</option>
                  <option value="Digital Media & Broadcast Segment Sponsor">Digital Media &amp; Broadcast Segment Sponsor</option>
                  <option value="Official Beverage / Refreshment Partner">Official Beverage / Refreshment Partner</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={inquirySubmitted}
                className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-[#FF5500] to-[#FF661A] hover:brightness-110 text-white font-bebas text-lg tracking-wider uppercase font-black flex items-center justify-center gap-2.5 transition active:scale-95 shadow-orange-glow btn-tactile"
              >
                {inquirySubmitted ? (
                  <CheckCircle2 className="w-5 h-5 text-white" />
                ) : (
                  <Send className="w-5 h-5 text-white" />
                )}
                <span>{inquirySubmitted ? 'Submitting Request...' : 'Submit Commercial Inquiry'}</span>
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
