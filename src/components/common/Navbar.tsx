import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useApp, NavigationPage } from '../../context/AppContext';
import { 
  Menu, 
  X, 
  ExternalLink,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const { 
    currentPage, 
    setCurrentPage, 
    openKreedaBoundaryModal
  } = useApp();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [registerDropdownOpen, setRegisterDropdownOpen] = useState(false);

  // Concise, single-line navigation items with real URL routes
  const navLinks: { label: string; page: NavigationPage; path: string }[] = [
    { label: 'Home', page: 'home', path: '/' },
    { label: 'About', page: 'about', path: '/about' },
    { label: 'Teams', page: 'teams', path: '/teams' },
    { label: 'Districts', page: 'zones', path: '/districts' },
    { label: 'Fixtures', page: 'fixtures', path: '/fixtures' },
    { label: 'Tickets', page: 'tickets', path: '/tickets' },
    { label: 'Media', page: 'media', path: '/media' },
    { label: 'Sponsors', page: 'sponsors', path: '/sponsors' },
    { label: 'Help', page: 'help', path: '/help' },
  ];

  const handleNavClick = (page: NavigationPage) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    setRegisterDropdownOpen(false);
  };

  return (
    <>
      {/* Top Ticker Bar: Harmonized Theme, High Contrast, Zero Clutter */}
      <div className="w-full bg-[var(--kreeda-ticker-bg)] border-b border-black/10 dark:border-white/10 py-1.5 px-4 sm:px-8 lg:px-12 text-xs transition-colors duration-200">
        <div className="w-full flex items-center justify-between gap-4 overflow-x-auto no-scrollbar whitespace-nowrap">
          
          {/* Live Match Score Strip */}
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-rose-500/15 border border-rose-500/30 text-rose-600 dark:text-rose-400 font-extrabold text-[10px] tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-ping" />
              LIVE
            </span>

            <span className="font-bebas text-sm text-[#FF5500] tracking-wider uppercase">
              MATCH CENTRE:
            </span>

            <span className="text-[var(--kreeda-text-primary)] font-semibold text-xs">
              Deccan Capitals <span className="text-[#FF5500] font-black">118/4 (9.4)</span> vs Vizag Strikers <span className="text-[#F59E0B] font-black">114/6 (10)</span>
            </span>

            <span className="hidden md:inline px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-[11px] font-bold">
              DCC need 1 run in 2 balls
            </span>
          </div>

          {/* Quick Utility Links (Clean, No Clutter Icons) */}
          <div className="flex items-center gap-3.5 text-xs font-semibold">
            <button 
              onClick={() => openKreedaBoundaryModal({
                title: 'Kreeda App Live Match Center',
                message: 'Live ball-by-ball commentary, points table & player telemetry are served via official Kreeda App infrastructure.'
              })}
              className="text-[#FF5500] hover:text-[#FF661A] flex items-center gap-1 transition"
            >
              <span>Live Match Center</span>
              <ExternalLink className="w-3 h-3 text-[#FF5500]" />
            </button>

            <span className="text-black/15 dark:text-white/20 hidden sm:inline">|</span>

            <Link 
              to="/tracker"
              className="text-[var(--kreeda-text-secondary)] hover:text-[#FF5500] transition"
            >
              Track Application
            </Link>
          </div>
        </div>
      </div>

      {/* Main Sticky Header: Sleek, Perfect Alignment, Edge-to-Edge */}
      <header className="sticky top-0 z-40 bg-[var(--kreeda-nav-bg)] backdrop-blur-xl border-b border-black/10 dark:border-white/10 transition-colors duration-200 shadow-sm dark:shadow-tactile">
        <div className="w-full px-4 sm:px-8 lg:px-12 h-14 sm:h-16 flex items-center justify-between gap-4">
          
          {/* Official League Brand Logo */}
          <Link 
            to="/"
            className="flex items-center group focus:outline-none flex-shrink-0 py-0.5"
            aria-label="ICL T10 Home"
          >
            <img 
              src="/assets/icl_logo.png" 
              alt="ICL T10 Official League" 
              className="h-9 sm:h-11 w-auto object-contain group-hover:scale-105 transition-transform duration-200"
            />
          </Link>

          {/* Desktop Navigation Links - Level Single-Line Baseline */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5">
            {navLinks.map((item) => {
              const isActive = currentPage === item.page;
              return (
                <Link
                  key={item.page}
                  to={item.path}
                  className={`px-2.5 xl:px-3 py-1.5 rounded-lg text-xs sm:text-sm font-bold tracking-wide transition-colors duration-150 whitespace-nowrap outline-none focus:outline-none focus-visible:outline-none ring-0 focus:ring-0 border select-none ${
                    isActive
                      ? 'text-[#FF5500] bg-[#FF5500]/10 dark:bg-[#FF5500]/15 font-black border-[#FF5500]/30'
                      : 'border-transparent text-[var(--kreeda-text-secondary)] hover:text-[var(--kreeda-text-primary)] hover:bg-black/5 dark:hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Header Actions */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            
            {/* Join League Primary CTA (Single-Line, Sleek) */}
            <div className="relative">
              <button
                onClick={() => setRegisterDropdownOpen(!registerDropdownOpen)}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#FF5500] to-[#FF661A] hover:brightness-110 text-white font-black text-xs sm:text-sm uppercase tracking-wider shadow-orange-glow transition btn-tactile whitespace-nowrap"
              >
                Join League
              </button>

              {registerDropdownOpen && (
                <div className="absolute right-0 mt-3 w-72 bg-[var(--kreeda-surface)] border border-black/10 dark:border-white/15 rounded-2xl shadow-2xl p-2.5 z-50 animate-in fade-in zoom-in-95 duration-150">
                  <div className="px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-[#FF5500]">
                    Official Registration Gateways
                  </div>
                  
                  <Link
                    to="/register-player"
                    onClick={() => setRegisterDropdownOpen(false)}
                    className="w-full text-left p-3 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 flex items-center justify-between text-sm text-[var(--kreeda-text-primary)] group transition"
                  >
                    <div>
                      <div className="font-extrabold text-[#FF5500] text-sm sm:text-base transition">
                        Player Registration
                      </div>
                      <div className="text-xs text-[var(--kreeda-text-muted)] mt-0.5">District trials &amp; talent scouting</div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-[var(--kreeda-text-muted)] group-hover:translate-x-1 text-[#FF5500] transition-transform" />
                  </Link>

                  <Link
                    to="/register-influencer"
                    onClick={() => setRegisterDropdownOpen(false)}
                    className="w-full text-left p-3 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 flex items-center justify-between text-sm text-[var(--kreeda-text-primary)] group mt-1 transition"
                  >
                    <div>
                      <div className="font-extrabold text-[#F59E0B] text-sm sm:text-base transition">
                        Influencer &amp; Creator Hub
                      </div>
                      <div className="text-xs text-[var(--kreeda-text-muted)] mt-0.5">Dugout vloggers &amp; presenters</div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-[var(--kreeda-text-muted)] group-hover:translate-x-1 text-[#F59E0B] transition-transform" />
                  </Link>

                  <div className="border-t border-black/10 dark:border-white/10 my-1.5 pt-1.5">
                    <Link
                      to="/tracker"
                      onClick={() => setRegisterDropdownOpen(false)}
                      className="w-full text-left px-3 py-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 flex items-center gap-2.5 text-xs font-bold text-[var(--kreeda-text-primary)] block"
                    >
                      <span>Check Application Status</span>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Utility Divider & Controls */}
            <div className="flex items-center gap-1.5 pl-2 border-l border-black/10 dark:border-white/10">
              
              {/* Admin Desk Link Button */}
              <Link
                to="/admin"
                className="p-2 rounded-xl bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-emerald-600 dark:text-emerald-400 border border-black/10 dark:border-white/15 transition btn-tactile"
                title="Admin & Operations Center"
              >
                <ShieldCheck className="w-4 h-4" />
              </Link>

              {/* Mobile Hamburger Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-xl bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-[var(--kreeda-text-primary)] border border-black/10 dark:border-white/15"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-[#FF5500]" /> : <Menu className="w-5 h-5" />}
              </button>

            </div>

          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[var(--kreeda-surface)] border-b border-black/10 dark:border-white/15 px-6 py-5 space-y-2 animate-in slide-in-from-top-2 duration-200">
            {navLinks.map((item) => {
              const isActive = currentPage === item.page;
              return (
                <Link
                  key={item.page}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-bold transition-colors duration-150 flex items-center justify-between border outline-none focus:outline-none ring-0 select-none ${
                    isActive
                      ? 'bg-[#FF5500]/10 text-[#FF5500] font-black border-[#FF5500]/30'
                      : 'border-transparent text-[var(--kreeda-text-secondary)] hover:text-[var(--kreeda-text-primary)] hover:bg-black/5 dark:hover:bg-white/5'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <ChevronRight className="w-4 h-4 text-[#FF5500]" />}
                </Link>
              );
            })}

            <div className="pt-3 border-t border-black/10 dark:border-white/10 flex flex-col gap-2">
              <Link
                to="/register-player"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#FF5500] to-[#FF661A] text-white font-bold text-xs uppercase tracking-wider text-center shadow-orange-glow block"
              >
                Player Registration
              </Link>
              <Link
                to="/register-influencer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 px-4 rounded-xl bg-black/5 dark:bg-white/5 text-[var(--kreeda-text-primary)] border border-black/10 dark:border-white/15 font-bold text-xs uppercase tracking-wider text-center block"
              >
                Creator &amp; Influencer Portal
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
