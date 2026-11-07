import React from 'react';
import { useApp } from '../../context/AppContext';
import { X, ExternalLink, ShieldCheck, Activity, Award, CheckCircle2 } from 'lucide-react';
import { getAssetUrl } from '../../utils/assetHelper';

export const KreedaModal: React.FC = () => {
  const { isKreedaModalOpen, setIsKreedaModalOpen, kreedaModalContext } = useApp();

  if (!isKreedaModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[var(--kreeda-surface)] border-2 border-black/10 dark:border-white/15 rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative overflow-hidden space-y-5">
        
        {/* Glow orb */}
        <div className="absolute -top-24 -right-24 w-56 h-56 bg-[#FF5500]/15 rounded-full blur-3xl pointer-events-none" />
        
        {/* Header with Kreeda Logo Asset */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-black/10 dark:border-white/10">
          <div className="flex items-center gap-3">
            <div className="h-12 w-auto bg-black/5 dark:bg-white/10 p-2 rounded-2xl border border-black/10 dark:border-white/10 flex items-center justify-center">
              <img src={getAssetUrl('assets/kreeda/kreeda.png')} alt="Kreeda App" className="h-7 object-contain" />
            </div>
            <div>
              <h3 className="font-bebas text-2xl text-[var(--kreeda-text-primary)] tracking-wide">
                {kreedaModalContext?.title || 'KREEDA APP SYSTEM OF RECORD'}
              </h3>
              <p className="text-xs text-[#FF5500] font-bold">
                Official Cricket Telemetry &amp; Live Analytics Boundary
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsKreedaModalOpen(false)}
            className="p-2 rounded-xl text-[var(--kreeda-text-muted)] hover:text-[var(--kreeda-text-primary)] hover:bg-black/5 dark:hover:bg-white/10 transition btn-tactile"
          >
            <X className="w-6 h-6 text-[#FF5500]" />
          </button>
        </div>

        {/* Content body */}
        <div className="space-y-4 text-xs sm:text-sm text-[var(--kreeda-text-secondary)] leading-relaxed">
          <p>
            As specified in Section 1.3 of the ICL T10 Detailed Project Report (DPR), the ICL public website maintains strict architectural separation from live scoring operations:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div className="p-4 rounded-2xl bg-[var(--kreeda-surface-elevated)] border border-[#FF5500]/30 space-y-2">
              <div className="flex items-center gap-2 font-bebas text-base text-[#FF5500] uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4 text-[#FF5500]" />
                <span>Kreeda App Core</span>
              </div>
              <ul className="space-y-1.5 text-[var(--kreeda-text-secondary)] text-xs font-medium">
                <li>• Ball-by-ball commentary</li>
                <li>• Official points table &amp; NRR</li>
                <li>• Real-time player telemetry</li>
                <li>• Umpire scoring sync &amp; wagon wheels</li>
              </ul>
            </div>

            <div className="p-4 rounded-2xl bg-[var(--kreeda-surface-elevated)] border border-[#F59E0B]/30 space-y-2">
              <div className="flex items-center gap-2 font-bebas text-base text-[#F59E0B] uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-[#F59E0B]" />
                <span>ICL Digital Portal</span>
              </div>
              <ul className="space-y-1.5 text-[var(--kreeda-text-secondary)] text-xs font-medium">
                <li>• Official fixture schedule</li>
                <li>• 45+ district catchment routing</li>
                <li>• Player &amp; creator registrations</li>
                <li>• Box Office QR turnstile ticketing</li>
              </ul>
            </div>
          </div>

          {/* Simulated live match situation box */}
          <div className="p-4 rounded-2xl bg-[#FF5500]/10 border border-[#FF5500]/30 text-xs sm:text-sm">
            <span className="font-bebas text-base text-[#FF5500] uppercase tracking-wider block">
              CURRENT MATCH TELEMETRY:
            </span>
            <span className="text-[var(--kreeda-text-primary)] font-medium">
              Match 1 is underway at Rajiv Gandhi Stadium, Uppal. Deccan Capitals need 1 run in 2 deliveries.
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-2 flex flex-col sm:flex-row gap-3">
          <a
            href="https://kreedaapp.com"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsKreedaModalOpen(false)}
            className="flex-1 py-3 px-5 rounded-2xl bg-gradient-to-r from-[#FF5500] to-[#FF661A] hover:brightness-110 text-white font-bebas text-base uppercase tracking-wider font-black flex items-center justify-center gap-2 shadow-orange-glow transition btn-tactile"
          >
            <span>Launch Live Match in Kreeda App</span>
            <ExternalLink className="w-4 h-4 text-white" />
          </a>
          <button
            onClick={() => setIsKreedaModalOpen(false)}
            className="py-3 px-5 rounded-2xl bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-[var(--kreeda-text-primary)] font-bold text-sm border border-black/10 dark:border-white/10 transition btn-tactile"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
