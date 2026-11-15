import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import { FRANCHISES_DATA } from '../../data/franchisesData';
import { Shield, ExternalLink, Mail, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  const { setCurrentPage, setSelectedFranchise, openKreedaBoundaryModal } = useApp();

  const handleFranchiseClick = (franchiseId: string) => {
    const f = FRANCHISES_DATA.find((item) => item.id === franchiseId);
    if (f) {
      setSelectedFranchise(f);
      setCurrentPage('teams');
    }
  };

  return (
    <footer className="w-full bg-white dark:bg-[#0A1128] border-t border-black/10 dark:border-white/10 text-slate-700 dark:text-slate-300 text-sm mt-auto shadow-2xl relative z-10 transition-colors duration-200">
      
      {/* Top Banner: Responsible Tournament & Kreeda Boundary */}
      <div className="footer-top-banner border-b border-black/10 dark:border-white/10 bg-[#F8F9FC] dark:bg-[#070D1F] py-4 sm:py-5 px-4 sm:px-8 lg:px-12 xl:px-16 transition-colors duration-200">
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex items-center gap-3">
            <Shield className="w-5 h-5 text-[#FF5500] flex-shrink-0" />
            <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
              <strong className="text-slate-900 dark:text-white font-bold">Official DPR Architectural Governance:</strong> Live cricket scores, wagon wheels, commentary &amp; points standings are powered exclusively via Kreeda App.
            </span>
          </div>

          <button
            onClick={() => openKreedaBoundaryModal()}
            className="text-xs sm:text-sm font-bold text-[#FF5500] hover:text-[#FF661A] flex items-center gap-2 transition btn-tactile whitespace-nowrap"
          >
            <span>Learn About Kreeda App Integration</span>
            <ExternalLink className="w-4 h-4 text-[#FF5500]" />
          </button>
        </div>
      </div>

      {/* Main Footer Links Grid - Edge to Edge Full Width */}
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
        
        {/* Brand Column */}
        <div className="lg:col-span-2 space-y-4">
          <Link to="/" className="inline-block group focus:outline-none">
            <img 
              src="/assets/icl_logo.png" 
              alt="ICL T10 Official League Logo" 
              className="h-12 sm:h-14 w-auto object-contain group-hover:scale-105 transition-transform duration-200"
            />
          </Link>

          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed max-w-md font-medium">
            Indian Champions League T10 is the premier grassroots and professional cricket league representing 8 regional franchises across Andhra Pradesh and Telangana. Uniting communities through the spirit of fast-paced 10-over cricket.
          </p>

          <div className="pt-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-2 font-medium">
            <div className="flex items-center gap-2.5">
              <MapPin className="w-4 h-4 text-[#FF5500] flex-shrink-0" />
              <span>Headquarters: Banjara Hills, Hyderabad, Telangana 500034</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-[#F59E0B] flex-shrink-0" />
              <span>Secretariat: operations@iclt10cricket.com</span>
            </div>
          </div>
        </div>

        {/* 8 Franchises Column */}
        <div>
          <div className="font-bebas text-lg uppercase tracking-wider mb-4 text-[#FF5500]">
            8 FRANCHISES
          </div>
          <ul className="space-y-2.5 text-xs sm:text-sm font-semibold">
            {FRANCHISES_DATA.map((f) => (
              <li key={f.id}>
                <button
                  onClick={() => handleFranchiseClick(f.id)}
                  className="hover:text-[#FF5500] dark:hover:text-[#F59E0B] transition text-left flex items-center gap-2 text-slate-700 dark:text-slate-300"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF5500]" />
                  <span>{f.name} ({f.hub})</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Portals & Navigation */}
        <div>
          <div className="font-bebas text-lg uppercase tracking-wider mb-4 text-[#D97706] dark:text-[#F59E0B]">
            OFFICIAL PORTALS
          </div>
          <ul className="space-y-2.5 text-xs sm:text-sm font-semibold">
            <li>
              <button onClick={() => setCurrentPage('register-player')} className="hover:text-[#FF5500] dark:hover:text-white transition text-slate-700 dark:text-slate-300">
                Player Registration &amp; Trials
              </button>
            </li>
            <li>
              <button onClick={() => setCurrentPage('register-influencer')} className="hover:text-[#FF5500] dark:hover:text-white transition text-slate-700 dark:text-slate-300">
                Creator &amp; Influencer Hub
              </button>
            </li>
            <li>
              <button onClick={() => setCurrentPage('tracker')} className="hover:text-[#FF5500] dark:hover:text-white transition text-slate-700 dark:text-slate-300">
                Application Status Tracker
              </button>
            </li>
            <li>
              <button onClick={() => setCurrentPage('zones')} className="hover:text-[#FF5500] dark:hover:text-white transition text-slate-700 dark:text-slate-300">
                Districts &amp; Catchment Finder
              </button>
            </li>
            <li>
              <button onClick={() => setCurrentPage('tickets')} className="hover:text-[#FF5500] dark:hover:text-white transition text-slate-700 dark:text-slate-300">
                Box Office Tickets &amp; QR Entry
              </button>
            </li>
            <li>
              <button onClick={() => setCurrentPage('admin')} className="text-emerald-700 dark:text-emerald-400 font-bold transition hover:underline">
                Admin Scrutiny Console
              </button>
            </li>
          </ul>
        </div>

        {/* Governance & Policies */}
        <div>
          <div className="font-bebas text-lg uppercase tracking-wider mb-4 text-[#C2410C] dark:text-[#FF661A]">
            GOVERNANCE &amp; LEGAL
          </div>
          <ul className="space-y-2.5 text-xs sm:text-sm font-semibold">
            <li>
              <button onClick={() => setCurrentPage('about')} className="hover:text-[#FF5500] dark:hover:text-white transition text-slate-700 dark:text-slate-300">
                Tournament Governance &amp; Rules
              </button>
            </li>
            <li>
              <button onClick={() => setCurrentPage('help')} className="hover:text-[#FF5500] dark:hover:text-white transition text-slate-700 dark:text-slate-300">
                Anti-Corruption &amp; Integrity Code
              </button>
            </li>
            <li>
              <button onClick={() => setCurrentPage('help')} className="hover:text-[#FF5500] dark:hover:text-white transition text-slate-700 dark:text-slate-300">
                Grievance Redressal Cell
              </button>
            </li>
            <li>
              <button onClick={() => setCurrentPage('help')} className="hover:text-[#FF5500] dark:hover:text-white transition text-slate-700 dark:text-slate-300">
                Player Eligibility Master Matrix
              </button>
            </li>
            <li>
              <button onClick={() => setCurrentPage('sponsors')} className="hover:text-[#FF5500] dark:hover:text-white transition text-slate-700 dark:text-slate-300">
                Commercial Partnerships
              </button>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Copyright Strip */}
      <div className="footer-bottom-strip border-t border-black/10 dark:border-white/10 py-5 px-4 sm:px-8 lg:px-12 xl:px-16 bg-[#F1F4F9] dark:bg-[#03060C] transition-colors duration-200">
        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600 dark:text-slate-400 font-medium">
          <div>
            &copy; {new Date().getFullYear()} ICL T10 Official Digital Platform. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span>Powered by Kreeda Match Technologies</span>
            <span className="text-[#FF5500] font-black">#ICLT10</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
