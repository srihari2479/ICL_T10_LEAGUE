import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import { FRANCHISES_DATA } from '../../data/franchisesData';
import { 
  Shield, 
  ExternalLink, 
  Mail, 
  MapPin, 
  Trophy, 
  UserPlus, 
  Flame, 
  Search, 
  Ticket, 
  ShieldCheck, 
  ChevronUp, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  Activity,
  Globe
} from 'lucide-react';
import { getAssetUrl } from '../../utils/assetHelper';

export const Footer: React.FC = () => {
  const { setCurrentPage, setSelectedFranchise, openKreedaBoundaryModal } = useApp();
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleFranchiseClick = (franchiseId: string) => {
    const f = FRANCHISES_DATA.find((item) => item.id === franchiseId);
    if (f) {
      setSelectedFranchise(f);
      setCurrentPage('teams');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setNewsletterSubscribed(true);
      setTimeout(() => {
        setNewsletterEmail('');
      }, 2500);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-white dark:bg-[#070D1F] border-t border-black/10 dark:border-white/10 text-slate-700 dark:text-slate-300 text-sm mt-auto shadow-2xl relative z-10 transition-colors duration-200">
      
      {/* ============================================================== */}
      {/* 1. TOP BANNER: Kreeda DPR Architecture Governance              */}
      {/* ============================================================== */}
      <div className="border-b border-black/10 dark:border-white/10 bg-[#F8F9FC] dark:bg-[#0A1128] py-3.5 sm:py-4 px-4 sm:px-8 lg:px-12 xl:px-16 transition-colors duration-200">
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
          
          <div className="flex items-center gap-3">
            <div className="relative flex items-center justify-center flex-shrink-0">
              <span className="animate-ping absolute inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </div>

            <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium">
              <strong className="text-slate-900 dark:text-white font-bold">Official DPR Architectural Governance:</strong>{' '}
              <span>Live cricket scores, wagon wheels, commentary &amp; points standings powered exclusively via Kreeda App.</span>
            </div>
          </div>

          <button
            onClick={() => openKreedaBoundaryModal()}
            className="text-xs sm:text-sm font-bold text-[#FF5500] hover:text-[#FF661A] flex items-center gap-1.5 transition btn-tactile whitespace-nowrap flex-shrink-0"
          >
            <span>Learn About Kreeda App Integration</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#FF5500]" />
          </button>
        </div>
      </div>

      {/* ============================================================== */}
      {/* 2. MAIN FOOTER LINKS (4 Clean, Perfectly Balanced Columns)    */}
      {/* ============================================================== */}
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 py-10 sm:py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
        
        {/* BRAND & SECRETARIAT (Col 1-2, 2 spans) */}
        <div className="lg:col-span-2 space-y-4">
          <Link to="/" className="inline-block group focus:outline-none">
            <img 
              src={getAssetUrl('assets/icl_logo.png')} 
              alt="ICL T10 Official League Logo" 
              className="h-12 sm:h-14 w-auto object-contain group-hover:scale-105 transition-transform duration-200"
            />
          </Link>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium max-w-md">
            Indian Champions League T10 is the premier grassroots and professional cricket league representing 8 regional franchises across Andhra Pradesh and Telangana. Uniting communities through the spirit of fast-paced 10-over cricket.
          </p>

          <div className="pt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 space-y-2 font-medium">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#FF5500] flex-shrink-0 mt-0.5" />
              <span>Headquarters: Banjara Hills, Hyderabad, Telangana 500034</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-[#F59E0B] flex-shrink-0" />
              <div>
                <span>Secretariat: </span>
                <a href="mailto:operations@iclt10cricket.com" className="text-[#FF5500] hover:underline font-semibold">
                  operations@iclt10cricket.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-4 h-4 text-emerald-500 flex-shrink-0" />
              <span>Integrity Desk: Zero-Tolerance Anti-Corruption Unit</span>
            </div>
          </div>
        </div>

        {/* 8 REGIONAL FRANCHISES (Col 3, 1 span) */}
        <div>
          <div className="font-bebas text-lg uppercase tracking-wider mb-3.5 text-[#FF5500] flex items-center justify-between">
            <span>8 FRANCHISES</span>
            <button 
              onClick={() => { setCurrentPage('teams'); scrollToTop(); }}
              className="text-[10px] font-bold text-[#FF5500] hover:underline tracking-normal normal-case"
            >
              Squads &rarr;
            </button>
          </div>

          <ul className="space-y-2 text-xs sm:text-[13px] font-semibold">
            {FRANCHISES_DATA.map((f) => (
              <li key={f.id}>
                <button
                  onClick={() => handleFranchiseClick(f.id)}
                  className="w-full text-left py-1 px-1.5 -mx-1.5 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors flex items-center gap-2.5 group"
                >
                  {/* Sleek circular mini crest */}
                  <div className="w-4 h-4 rounded-full overflow-hidden flex-shrink-0 bg-black/10 dark:bg-white/10 p-0.5 border border-black/10 dark:border-white/10">
                    <img src={f.crestImage} alt={f.name} className="w-full h-full object-cover rounded-full" />
                  </div>
                  <span className="text-slate-700 dark:text-slate-300 group-hover:text-[#FF5500] transition-colors whitespace-nowrap">
                    {f.name}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* OFFICIAL PORTALS (Col 4, 1 span) */}
        <div>
          <div className="font-bebas text-lg uppercase tracking-wider mb-3.5 text-[#D97706] dark:text-[#F59E0B]">
            OFFICIAL PORTALS
          </div>

          <ul className="space-y-2.5 text-xs sm:text-sm font-semibold">
            <li>
              <button 
                onClick={() => { setCurrentPage('register-player'); scrollToTop(); }}
                className="hover:text-[#FF5500] dark:hover:text-white transition text-slate-700 dark:text-slate-300 flex items-center gap-2"
              >
                <span>Player Registration &amp; Trials</span>
                <span className="px-1.5 py-0.2 rounded text-[9px] font-bold bg-emerald-500/15 text-emerald-500 uppercase">
                  Open
                </span>
              </button>
            </li>
            <li>
              <button 
                onClick={() => { setCurrentPage('register-influencer'); scrollToTop(); }}
                className="hover:text-[#FF5500] dark:hover:text-white transition text-slate-700 dark:text-slate-300 flex items-center gap-2"
              >
                <span>Creator &amp; Influencer Hub</span>
                <span className="px-1.5 py-0.2 rounded text-[9px] font-bold bg-amber-500/15 text-amber-500 uppercase">
                  VIP
                </span>
              </button>
            </li>
            <li>
              <button 
                onClick={() => { setCurrentPage('tracker'); scrollToTop(); }}
                className="hover:text-[#FF5500] dark:hover:text-white transition text-slate-700 dark:text-slate-300"
              >
                Application Status Tracker
              </button>
            </li>
            <li>
              <button 
                onClick={() => { setCurrentPage('zones'); scrollToTop(); }}
                className="hover:text-[#FF5500] dark:hover:text-white transition text-slate-700 dark:text-slate-300"
              >
                Districts &amp; Catchment Finder
              </button>
            </li>
            <li>
              <button 
                onClick={() => { setCurrentPage('tickets'); scrollToTop(); }}
                className="hover:text-[#FF5500] dark:hover:text-white transition text-slate-700 dark:text-slate-300"
              >
                Box Office Tickets &amp; QR Entry
              </button>
            </li>
            <li>
              <button 
                onClick={() => { setCurrentPage('admin'); scrollToTop(); }}
                className="text-emerald-700 dark:text-emerald-400 font-bold transition hover:underline"
              >
                Admin Scrutiny Console
              </button>
            </li>
          </ul>
        </div>

        {/* GOVERNANCE & LEGAL (Col 5, 1 span) */}
        <div>
          <div className="font-bebas text-lg uppercase tracking-wider mb-3.5 text-[#C2410C] dark:text-[#FF661A]">
            GOVERNANCE &amp; LEGAL
          </div>

          <ul className="space-y-2.5 text-xs sm:text-sm font-semibold">
            <li>
              <button 
                onClick={() => { setCurrentPage('about'); scrollToTop(); }}
                className="hover:text-[#FF5500] dark:hover:text-white transition text-slate-700 dark:text-slate-300"
              >
                Tournament Governance &amp; Rules
              </button>
            </li>
            <li>
              <button 
                onClick={() => { setCurrentPage('help'); scrollToTop(); }}
                className="hover:text-[#FF5500] dark:hover:text-white transition text-slate-700 dark:text-slate-300"
              >
                Anti-Corruption &amp; Integrity Code
              </button>
            </li>
            <li>
              <button 
                onClick={() => { setCurrentPage('help'); scrollToTop(); }}
                className="hover:text-[#FF5500] dark:hover:text-white transition text-slate-700 dark:text-slate-300"
              >
                Grievance Redressal Cell
              </button>
            </li>
            <li>
              <button 
                onClick={() => { setCurrentPage('help'); scrollToTop(); }}
                className="hover:text-[#FF5500] dark:hover:text-white transition text-slate-700 dark:text-slate-300"
              >
                Player Eligibility Master Matrix
              </button>
            </li>
            <li>
              <button 
                onClick={() => { setCurrentPage('sponsors'); scrollToTop(); }}
                className="hover:text-[#FF5500] dark:hover:text-white transition text-slate-700 dark:text-slate-300"
              >
                Commercial Partnerships
              </button>
            </li>
          </ul>
        </div>

      </div>

      {/* ============================================================== */}
      {/* 3. FAN MATCHDAY & TRIAL ALERTS BAR                             */}
      {/* ============================================================== */}
      <div className="border-t border-black/10 dark:border-white/10 bg-[#F1F4F9] dark:bg-[#050914] py-4 sm:py-5 px-4 sm:px-8 lg:px-12 xl:px-16 transition-colors duration-200">
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white flex items-center justify-center md:justify-start gap-2">
              <Flame className="w-4 h-4 text-[#FF5500]" />
              <span>Stay Ahead of Matchday — Official ICL T10 Fan Alerts</span>
            </div>
            <div className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Receive instant squad announcements, trial schedules &amp; box office ticket release dates.
            </div>
          </div>

          <form onSubmit={handleNewsletterSubmit} className="flex items-center gap-2 w-full max-w-md">
            {newsletterSubscribed ? (
              <div className="py-2 px-3.5 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-500 font-bold text-xs flex items-center gap-2 w-full justify-center">
                <CheckCircle2 className="w-4 h-4" />
                <span>Subscribed to Official ICL T10 Fan Alerts!</span>
              </div>
            ) : (
              <>
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email for official alerts..."
                  className="flex-1 py-2 px-3 rounded-xl bg-white dark:bg-[#070D1F] border border-black/15 dark:border-white/15 text-xs text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-[#FF5500]"
                />
                <button
                  type="submit"
                  className="py-2 px-4 rounded-xl bg-gradient-to-r from-[#FF5500] to-[#FF661A] text-white font-bold text-xs uppercase tracking-wider hover:brightness-110 transition btn-tactile whitespace-nowrap"
                >
                  Join Alerts
                </button>
              </>
            )}
          </form>
        </div>
      </div>

      {/* ============================================================== */}
      {/* 4. BOTTOM COPYRIGHT & SCROLL TO TOP STRIP                      */}
      {/* ============================================================== */}
      <div className="border-t border-black/10 dark:border-white/10 py-4 px-4 sm:px-8 lg:px-12 xl:px-16 bg-[#E8EDF5] dark:bg-[#03060C] transition-colors duration-200">
        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600 dark:text-slate-400 font-medium text-center sm:text-left">
          
          <div>
            &copy; {new Date().getFullYear()} Indian Champions League T10 (ICL T10). All rights reserved.
          </div>

          <div className="flex items-center gap-3">
            <span>Powered by <strong className="text-slate-900 dark:text-white">Kreeda Match Technologies</strong></span>
            <span className="text-[#FF5500] font-black">#ICLT10</span>
            <button
              onClick={scrollToTop}
              className="p-1.5 rounded-lg bg-black/5 dark:bg-white/10 hover:bg-[#FF5500] hover:text-white transition ml-2 btn-tactile"
              aria-label="Scroll to top"
            >
              <ChevronUp className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>

    </footer>
  );
};
