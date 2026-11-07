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
  PhoneCall,
  Activity
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
      }, 2000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-white dark:bg-[#070D1F] border-t border-black/10 dark:border-white/10 text-slate-700 dark:text-slate-300 text-sm mt-auto shadow-2xl relative z-10 transition-colors duration-200">
      
      {/* ============================================================== */}
      {/* 1. TOP BANNER: Official DPR Architectural Governance Bar       */}
      {/* ============================================================== */}
      <div className="border-b border-black/10 dark:border-white/10 bg-[#F8F9FC] dark:bg-[#0A1128] py-4 sm:py-5 px-4 sm:px-8 lg:px-12 xl:px-16 transition-colors duration-200">
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4">
          
          <div className="flex items-center gap-3.5 text-center md:text-left">
            {/* Live Telemetry Pulse Badge */}
            <div className="relative flex items-center justify-center flex-shrink-0">
              <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2.5">
              <span className="px-2.5 py-0.5 rounded-full bg-[#FF5500]/15 text-[#FF5500] text-[10px] font-bold uppercase tracking-wider border border-[#FF5500]/30 self-center sm:self-auto">
                DPR Architecture
              </span>
              <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                <strong className="text-slate-900 dark:text-white font-bold">Kreeda Live Match Engine:</strong> Ball-by-ball scoring, wagon wheels, and official points standings powered exclusively via Kreeda App.
              </span>
            </div>
          </div>

          <button
            onClick={() => openKreedaBoundaryModal()}
            className="text-xs sm:text-sm font-bold text-[#FF5500] hover:text-[#FF661A] flex items-center gap-2 transition px-3.5 py-1.5 rounded-xl bg-orange-500/10 hover:bg-orange-500/20 border border-orange-500/25 btn-tactile whitespace-nowrap flex-shrink-0"
          >
            <Activity className="w-4 h-4 text-[#FF5500]" />
            <span>Explore Kreeda App Telemetry</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#FF5500]" />
          </button>
        </div>
      </div>

      {/* ============================================================== */}
      {/* 2. MAIN FOOTER CONTENT GRID                                    */}
      {/* ============================================================== */}
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 py-10 sm:py-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
        
        {/* BRAND & SECRETARIAT HUB (Col 1-5, 5 spans) */}
        <div className="lg:col-span-5 space-y-5">
          <div className="flex items-center gap-3">
            <Link to="/" className="inline-block group focus:outline-none">
              <img 
                src={getAssetUrl('assets/icl_logo.png')} 
                alt="ICL T10 Official League Logo" 
                className="h-12 sm:h-14 w-auto object-contain group-hover:scale-105 transition-transform duration-200"
              />
            </Link>
            <div className="pl-3 border-l-2 border-[#FF5500]/30">
              <span className="text-[11px] font-bold text-[#FF5500] uppercase tracking-wider block">
                Official Season 1
              </span>
              <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">
                Andhra Pradesh &amp; Telangana
              </span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
            Indian Champions League T10 is the premier grassroots and professional cricket league representing 8 regional franchises across Andhra Pradesh and Telangana. Uniting communities through the spirit of fast-paced 10-over cricket.
          </p>

          {/* Contact Details Card */}
          <div className="p-4 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 space-y-2.5 text-xs sm:text-[13px]">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#FF5500] flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-slate-900 dark:text-white">Headquarters:</span>{' '}
                <span className="text-slate-600 dark:text-slate-300">Banjara Hills, Hyderabad, Telangana 500034</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-[#F59E0B] flex-shrink-0" />
              <div>
                <span className="font-bold text-slate-900 dark:text-white">Secretariat:</span>{' '}
                <a href="mailto:operations@iclt10cricket.com" className="text-[#FF5500] hover:underline font-semibold">
                  operations@iclt10cricket.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-4 h-4 text-emerald-500 flex-shrink-0" />
              <div>
                <span className="font-bold text-slate-900 dark:text-white">Integrity Hotline:</span>{' '}
                <span className="text-slate-600 dark:text-slate-300">Zero-Tolerance Anti-Corruption Unit</span>
              </div>
            </div>
          </div>
        </div>

        {/* 8 REGIONAL FRANCHISES MATRIX (Col 6-9, 4 spans) */}
        <div className="lg:col-span-4 space-y-3.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Trophy className="w-4 h-4 text-[#FF5500]" />
              <h3 className="font-bebas text-xl uppercase tracking-wider text-slate-900 dark:text-white">
                8 REGIONAL FRANCHISES
              </h3>
            </div>
            <button 
              onClick={() => { setCurrentPage('teams'); scrollToTop(); }}
              className="text-[11px] font-bold text-[#FF5500] hover:underline uppercase"
            >
              View Squads &rarr;
            </button>
          </div>

          <p className="text-xs text-slate-500 dark:text-slate-400">
            Tap any franchise to inspect its 16-player squad, mentor, and home ground:
          </p>

          {/* 2-Column Responsive Visual Matrix with Team Crests */}
          <div className="grid grid-cols-2 gap-2">
            {FRANCHISES_DATA.map((f) => (
              <button
                key={f.id}
                onClick={() => handleFranchiseClick(f.id)}
                className="p-2 sm:p-2.5 rounded-xl bg-black/5 dark:bg-white/5 hover:bg-[#FF5500]/10 dark:hover:bg-[#FF5500]/15 border border-black/10 dark:border-white/10 hover:border-[#FF5500]/50 transition-all flex items-center gap-2 text-left group active:scale-[0.98]"
              >
                {/* Team Mini Crest */}
                <div className="w-8 h-8 rounded-lg bg-black/10 dark:bg-[#070D1F] p-0.5 border border-black/10 dark:border-white/10 flex-shrink-0 overflow-hidden flex items-center justify-center">
                  <img 
                    src={f.crestImage} 
                    alt={f.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-200" 
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5">
                    <span 
                      className="px-1 py-0.2 rounded text-[9px] font-black uppercase tracking-wider text-white"
                      style={{ backgroundColor: f.primaryColor || '#FF5500' }}
                    >
                      {f.shortCode}
                    </span>
                  </div>
                  <div className="text-[11.5px] font-bold text-slate-900 dark:text-white truncate group-hover:text-[#FF5500] transition-colors leading-tight mt-0.5">
                    {f.name}
                  </div>
                  <div className="text-[9.5px] text-slate-500 dark:text-slate-400 truncate">
                    {f.hub}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* PORTALS & GOVERNANCE QUICK ACCESS (Col 10-12, 3 spans) */}
        <div className="lg:col-span-3 space-y-4">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-[#F59E0B]" />
              <h3 className="font-bebas text-xl uppercase tracking-wider text-slate-900 dark:text-white">
                LEAGUE GATEWAYS
              </h3>
            </div>
            
            <ul className="space-y-1.5 text-xs font-semibold">
              <li>
                <button 
                  onClick={() => { setCurrentPage('register-player'); scrollToTop(); }}
                  className="w-full p-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 transition flex items-center justify-between text-slate-700 dark:text-slate-300 hover:text-[#FF5500] group"
                >
                  <span className="flex items-center gap-2">
                    <UserPlus className="w-3.5 h-3.5 text-[#FF5500]" />
                    <span>Player Trials Registration</span>
                  </span>
                  <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-emerald-500/15 text-emerald-500 uppercase">
                    Open
                  </span>
                </button>
              </li>

              <li>
                <button 
                  onClick={() => { setCurrentPage('register-influencer'); scrollToTop(); }}
                  className="w-full p-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 transition flex items-center justify-between text-slate-700 dark:text-slate-300 hover:text-[#FF5500] group"
                >
                  <span className="flex items-center gap-2">
                    <Flame className="w-3.5 h-3.5 text-[#F59E0B]" />
                    <span>Creator &amp; Dugout Portal</span>
                  </span>
                  <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-amber-500/15 text-amber-500 uppercase">
                    VIP
                  </span>
                </button>
              </li>

              <li>
                <button 
                  onClick={() => { setCurrentPage('tickets'); scrollToTop(); }}
                  className="w-full p-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 transition flex items-center justify-between text-slate-700 dark:text-slate-300 hover:text-[#FF5500] group"
                >
                  <span className="flex items-center gap-2">
                    <Ticket className="w-3.5 h-3.5 text-[#FF5500]" />
                    <span>Box Office &amp; QR Tickets</span>
                  </span>
                  <ArrowRight className="w-3 h-3 text-slate-400 group-hover:text-[#FF5500] transition" />
                </button>
              </li>

              <li>
                <button 
                  onClick={() => { setCurrentPage('tracker'); scrollToTop(); }}
                  className="w-full p-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 transition flex items-center justify-between text-slate-700 dark:text-slate-300 hover:text-[#FF5500] group"
                >
                  <span className="flex items-center gap-2">
                    <Search className="w-3.5 h-3.5 text-sky-500" />
                    <span>Application Status Tracker</span>
                  </span>
                  <ArrowRight className="w-3 h-3 text-slate-400 group-hover:text-[#FF5500] transition" />
                </button>
              </li>

              <li>
                <button 
                  onClick={() => { setCurrentPage('admin'); scrollToTop(); }}
                  className="w-full p-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 transition flex items-center justify-between text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 group"
                >
                  <span className="flex items-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Admin Scrutiny Console</span>
                  </span>
                  <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-emerald-500/15 uppercase">
                    Auth
                  </span>
                </button>
              </li>
            </ul>
          </div>

          <div className="pt-2 border-t border-black/10 dark:border-white/10">
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
              GOVERNANCE &amp; POLICIES
            </div>
            <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs">
              <button onClick={() => { setCurrentPage('about'); scrollToTop(); }} className="hover:text-[#FF5500] transition text-slate-600 dark:text-slate-400">
                Playing Conditions
              </button>
              <span className="text-slate-400">&bull;</span>
              <button onClick={() => { setCurrentPage('help'); scrollToTop(); }} className="hover:text-[#FF5500] transition text-slate-600 dark:text-slate-400">
                Anti-Corruption
              </button>
              <span className="text-slate-400">&bull;</span>
              <button onClick={() => { setCurrentPage('help'); scrollToTop(); }} className="hover:text-[#FF5500] transition text-slate-600 dark:text-slate-400">
                Grievance Cell
              </button>
              <span className="text-slate-400">&bull;</span>
              <button onClick={() => { setCurrentPage('sponsors'); scrollToTop(); }} className="hover:text-[#FF5500] transition text-slate-600 dark:text-slate-400">
                Sponsorships
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* ============================================================== */}
      {/* 3. FAN MATCHDAY ALERTS BAR                                     */}
      {/* ============================================================== */}
      <div className="border-t border-black/10 dark:border-white/10 bg-[#F1F4F9] dark:bg-[#050914] py-5 px-4 sm:px-8 lg:px-12 xl:px-16 transition-colors duration-200">
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white flex items-center justify-center md:justify-start gap-2">
              <Flame className="w-4 h-4 text-[#FF5500]" />
              <span>Stay Updated on Matchday Fixtures &amp; Open Trials</span>
            </div>
            <div className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Receive official district trial schedules, player selection lists, and ticket release dates.
            </div>
          </div>

          <form onSubmit={handleNewsletterSubmit} className="flex items-center gap-2 w-full max-w-md">
            {newsletterSubscribed ? (
              <div className="py-2.5 px-4 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-500 font-bold text-xs flex items-center gap-2 w-full justify-center">
                <CheckCircle2 className="w-4 h-4" />
                <span>Thank you! You are subscribed to ICL T10 Official Alerts.</span>
              </div>
            ) : (
              <>
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  className="flex-1 py-2 px-3.5 rounded-xl bg-white dark:bg-[#070D1F] border border-black/15 dark:border-white/15 text-xs text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-[#FF5500]"
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
      {/* 4. BOTTOM COPYRIGHT & COMPLIANCE BAR                           */}
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
