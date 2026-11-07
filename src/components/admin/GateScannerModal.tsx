import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { QrCode, X, CheckCircle2, AlertTriangle, ShieldCheck, RefreshCw } from 'lucide-react';

export const GateScannerModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const { validateTicketQR, ticketBookings } = useApp();
  const [tokenInput, setTokenInput] = useState('');
  const [scanResult, setScanResult] = useState<{ success: boolean; message: string; booking?: any } | null>(null);

  if (!isOpen) return null;

  const handleScan = (tokenToTest?: string) => {
    const targetToken = tokenToTest || tokenInput;
    if (!targetToken.trim()) return;

    const result = validateTicketQR(targetToken);
    setScanResult(result);
  };

  const sampleBooking = ticketBookings[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[var(--kreeda-surface)] border border-black/10 dark:border-white/15 rounded-2xl max-w-lg w-full p-5 sm:p-6 shadow-2xl relative space-y-4">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg text-[var(--kreeda-text-muted)] hover:text-[var(--kreeda-text-primary)] hover:bg-black/5 dark:hover:bg-white/10 transition"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#FF5500]/15 text-[#FF5500] flex items-center justify-center">
            <QrCode className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-[var(--kreeda-text-primary)]">
              Stadium Turnstile QR Gate Scanner
            </h3>
            <p className="text-xs text-[var(--kreeda-text-muted)]">
              Anti-Fraud Single-Entry Ticket Validation Terminal
            </p>
          </div>
        </div>

        {/* Input box */}
        <div className="space-y-3 pt-1">
          <div>
            <label className="block text-xs font-semibold text-[var(--kreeda-text-secondary)] mb-1.5">
              Enter or Scan Encrypted QR Token / Booking ID
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={tokenInput}
                onChange={(e) => setTokenInput(e.target.value)}
                placeholder="Paste QR Token or ICL-TKT-XXXX..."
                className="flex-1 px-3.5 py-2.5 rounded-xl bg-[var(--kreeda-surface-elevated)] border border-black/10 dark:border-white/10 text-[var(--kreeda-text-primary)] placeholder-[var(--kreeda-text-muted)] text-xs focus:outline-none focus:border-[#FF5500] font-mono"
              />
              <button
                type="button"
                onClick={() => handleScan()}
                className="py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#FF5500] to-[#FF661A] text-white font-bold text-xs transition active:scale-95 shadow-orange-glow btn-tactile"
              >
                Scan Token
              </button>
            </div>
          </div>

          {/* Quick Test Chip */}
          {sampleBooking && (
            <div className="p-2.5 rounded-lg bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-[11px] text-[var(--kreeda-text-secondary)] flex items-center justify-between">
              <span className="truncate">Sample Valid Ticket: <strong>{sampleBooking.bookingId}</strong></span>
              <button
                type="button"
                onClick={() => {
                  setTokenInput(sampleBooking.qrToken);
                  handleScan(sampleBooking.qrToken);
                }}
                className="text-[#FF5500] hover:underline font-semibold ml-2 flex-shrink-0"
              >
                Auto-Test
              </button>
            </div>
          )}

          {/* Scan Result Feedback Card */}
          {scanResult && (
            <div
              className={`p-4 rounded-xl border space-y-2 animate-in zoom-in-95 duration-150 ${
                scanResult.success
                  ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-800 dark:text-emerald-200'
                  : 'bg-rose-500/10 border-rose-500/40 text-rose-800 dark:text-rose-200'
              }`}
            >
              <div className="flex items-center gap-2 font-bold text-xs">
                {scanResult.success ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                ) : (
                  <AlertTriangle className="w-5 h-5 text-rose-500" />
                )}
                <span>{scanResult.success ? 'ACCESS GRANTED' : 'ACCESS REJECTED / ALERT'}</span>
              </div>

              <p className="text-xs leading-relaxed opacity-90">
                {scanResult.message}
              </p>

              {scanResult.booking && (
                <div className="pt-2 border-t border-black/10 dark:border-white/10 text-[11px] space-y-0.5 opacity-80">
                  <div>Holder: <strong>{scanResult.booking.fanName}</strong></div>
                  <div>Match: <strong>{scanResult.booking.team1Short} vs {scanResult.booking.team2Short}</strong></div>
                  <div>Gate: <strong>{scanResult.booking.gateNo}</strong> | Stand: <strong>{scanResult.booking.standName}</strong></div>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="pt-2 border-t border-black/10 dark:border-white/10 flex justify-end">
          <button
            onClick={onClose}
            className="py-2 px-4 rounded-xl bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-[var(--kreeda-text-primary)] font-semibold text-xs border border-black/10 dark:border-white/10 transition btn-tactile"
          >
            Close Terminal
          </button>
        </div>

      </div>
    </div>
  );
};
