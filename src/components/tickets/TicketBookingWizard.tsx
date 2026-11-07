import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { FIXTURES_DATA, STAND_CATEGORIES } from '../../data/fixturesData';
import { FRANCHISES_DATA } from '../../data/franchisesData';
import { TicketBooking } from '../../types';
import confetti from 'canvas-confetti';
import { CheckCircle2, Printer } from 'lucide-react';

export const TicketBookingWizard: React.FC = () => {
  const { 
    selectedFixture, 
    addTicketBooking, 
    latestConfirmedBooking, 
    setLatestConfirmedBooking 
  } = useApp();

  const openMatches = FIXTURES_DATA.filter((m) => m.ticketsAvailable);

  const [activeMatchId, setActiveMatchId] = useState(
    selectedFixture?.id || openMatches[0]?.id || FIXTURES_DATA[1].id
  );

  const [selectedStandId, setSelectedStandId] = useState(STAND_CATEGORIES[1].id);
  const [quantity, setQuantity] = useState(2);

  const [fanName, setFanName] = useState('');
  const [fanMobile, setFanMobile] = useState('');
  const [fanEmail, setFanEmail] = useState('');

  const currentMatch = FIXTURES_DATA.find((m) => m.id === activeMatchId) || openMatches[0] || FIXTURES_DATA[1];
  const team1 = FRANCHISES_DATA.find((f) => f.id === currentMatch.team1Id);
  const team2 = FRANCHISES_DATA.find((f) => f.id === currentMatch.team2Id);
  const currentStand = STAND_CATEGORIES.find((s) => s.id === selectedStandId) || STAND_CATEGORIES[0];

  const subtotal = currentStand.price * quantity;
  const gst = Math.round(subtotal * 0.18);
  const totalAmount = subtotal + gst;

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fanName.trim() || !fanMobile.trim()) {
      alert('Please enter your full name and mobile number.');
      return;
    }

    const randomBookingNum = Math.floor(10000 + Math.random() * 90000);
    const bookingId = `ICL-TKT-${randomBookingNum}`;
    const qrToken = `QR-TOKEN-${bookingId}-${team1?.shortCode}-${team2?.shortCode}-GATE2`;

    const seatPrefix = currentStand.name.charAt(0);
    const generatedSeats = Array.from({ length: quantity }, (_, i) => `${seatPrefix}-${Math.floor(10 + Math.random() * 80) + i}`);

    const newBooking: TicketBooking = {
      bookingId,
      matchId: currentMatch.id,
      team1Short: team1?.shortCode || 'T1',
      team2Short: team2?.shortCode || 'T2',
      venue: currentMatch.venue,
      dateTime: `${currentMatch.date} • ${currentMatch.time}`,
      standName: currentStand.name,
      quantity,
      unitPrice: currentStand.price,
      totalAmount,
      fanName,
      fanMobile,
      fanEmail: fanEmail || `${fanName.toLowerCase().replace(/\s+/g, '')}@gmail.com`,
      gateNo: 'Gate 3 - North Wing Entry',
      seats: generatedSeats,
      qrToken,
      bookingTime: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }) + ' ' + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: 'VALID'
    };

    addTicketBooking(newBooking);

    try {
      confetti({ particleCount: 90, spread: 75, origin: { y: 0.6 } });
    } catch (e) {}
  };

  // If booking confirmed, render official E-Ticket
  if (latestConfirmedBooking) {
    return (
      <div className="w-full pt-3 sm:pt-5 pb-12 px-4 sm:px-8 max-w-3xl mx-auto">
        <div className="glass-card p-6 sm:p-10 border-2 border-black/10 dark:border-white/10 relative overflow-hidden space-y-6 shadow-xl">
          
          <div className="text-center space-y-1.5">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/15 text-emerald-500 flex items-center justify-center mx-auto mb-2 border border-emerald-500/30">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bebas text-[var(--kreeda-text-primary)] tracking-wide">
              OFFICIAL MATCH E-TICKET
            </h2>
            <p className="text-xs sm:text-sm text-[var(--kreeda-text-secondary)]">
              Booking Confirmed • Present this QR code at stadium turnstiles
            </p>
          </div>

          {/* E-Ticket Card Layout */}
          <div className="bg-[var(--kreeda-surface)] border-2 border-black/10 dark:border-white/15 rounded-3xl p-6 relative overflow-hidden space-y-5 shadow-lg">
            
            <div className="flex items-center justify-between pb-4 border-b border-black/10 dark:border-white/10">
              <div>
                <span className="text-xs uppercase font-bold text-[#FF5500] tracking-widest">
                  Booking ID: {latestConfirmedBooking.bookingId}
                </span>
                <div className="font-bebas text-xl sm:text-2xl text-[var(--kreeda-text-primary)] mt-0.5">
                  {latestConfirmedBooking.team1Short} vs {latestConfirmedBooking.team2Short}
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-black uppercase font-bebas tracking-wider">
                {latestConfirmedBooking.status}
              </span>
            </div>

            {/* Stadium & Schedule Details */}
            <div className="grid grid-cols-2 gap-4 text-xs sm:text-sm">
              <div>
                <span className="text-[11px] text-[var(--kreeda-text-muted)] block font-medium">Match Schedule</span>
                <span className="font-bold text-[var(--kreeda-text-primary)]">{latestConfirmedBooking.dateTime}</span>
              </div>
              <div>
                <span className="text-[11px] text-[var(--kreeda-text-muted)] block font-medium">Stadium Venue</span>
                <span className="font-bold text-[var(--kreeda-text-primary)]">{latestConfirmedBooking.venue}</span>
              </div>
              <div>
                <span className="text-[11px] text-[var(--kreeda-text-muted)] block font-medium">Enclosure / Stand</span>
                <span className="font-bold text-[#F59E0B]">{latestConfirmedBooking.standName}</span>
              </div>
              <div>
                <span className="text-[11px] text-[var(--kreeda-text-muted)] block font-medium">Designated Turnstile</span>
                <span className="font-bold text-[#FF5500]">{latestConfirmedBooking.gateNo}</span>
              </div>
              <div>
                <span className="text-[11px] text-[var(--kreeda-text-muted)] block font-medium">Allocated Seats ({latestConfirmedBooking.quantity})</span>
                <span className="font-bold text-[var(--kreeda-text-primary)]">{latestConfirmedBooking.seats.join(', ')}</span>
              </div>
              <div>
                <span className="text-[11px] text-[var(--kreeda-text-muted)] block font-medium">Ticket Holder</span>
                <span className="font-bold text-[var(--kreeda-text-primary)]">{latestConfirmedBooking.fanName}</span>
              </div>
            </div>

            {/* QR Code Container */}
            <div className="pt-4 border-t border-dashed border-black/10 dark:border-white/15 flex flex-col items-center justify-center space-y-3">
              <div className="p-4 bg-white rounded-2xl shadow-md border border-black/10">
                <svg className="w-32 h-32 text-black" viewBox="0 0 100 100" fill="currentColor">
                  <rect x="5" y="5" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="4" />
                  <rect x="11" y="11" width="16" height="16" />
                  <rect x="67" y="5" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="4" />
                  <rect x="73" y="11" width="16" height="16" />
                  <rect x="5" y="67" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="4" />
                  <rect x="11" y="73" width="16" height="16" />
                  <rect x="38" y="10" width="8" height="8" />
                  <rect x="50" y="18" width="10" height="8" />
                  <rect x="38" y="32" width="16" height="12" />
                  <rect x="10" y="42" width="14" height="10" />
                  <rect x="60" y="40" width="12" height="12" />
                  <rect x="78" y="45" width="12" height="8" />
                  <rect x="38" y="52" width="10" height="12" />
                  <rect x="54" y="60" width="14" height="8" />
                  <rect x="38" y="70" width="8" height="18" />
                  <rect x="52" y="76" width="18" height="12" />
                  <rect x="76" y="68" width="14" height="20" />
                </svg>
              </div>

              <div className="text-center space-y-0.5">
                <span className="text-[11px] font-mono text-[var(--kreeda-text-secondary)] block">
                  Token: {latestConfirmedBooking.qrToken}
                </span>
                <span className="text-xs text-[#FF5500] font-bold">
                  Single-Entry Validated at Stadium Gate Turnstile
                </span>
              </div>
            </div>

          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              onClick={() => window.print()}
              className="flex-1 py-3 px-5 rounded-2xl bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/15 text-[var(--kreeda-text-primary)] font-bold text-xs sm:text-sm flex items-center justify-center gap-2 border border-black/10 dark:border-white/15 transition btn-tactile"
            >
              <Printer className="w-4 h-4 text-[#FF5500]" />
              <span>Print / Save E-Ticket</span>
            </button>

            <button
              onClick={() => setLatestConfirmedBooking(null)}
              className="py-3 px-6 rounded-2xl bg-gradient-to-r from-[#FF5500] to-[#FF661A] text-white font-bebas text-base uppercase tracking-wider font-black transition btn-tactile shadow-orange-glow"
            >
              Book Another Match
            </button>
          </div>

        </div>
      </div>
    );
  }

  return (
    <div className="w-full pt-3 sm:pt-5 pb-10 sm:pb-14 px-4 sm:px-8 lg:px-12 xl:px-16 space-y-6 sm:space-y-8">
      
      {/* Page Header */}
      <div>
        <div className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#FF5500] mb-1">
          Official Stadium Box Office
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bebas text-[var(--kreeda-text-primary)] tracking-wide">
          MATCHDAY TICKET BOOKING
        </h1>
        <p className="text-xs sm:text-sm md:text-base text-[var(--kreeda-text-secondary)] mt-1 max-w-2xl leading-relaxed">
          Select match, choose your preferred stadium stand, and receive instant QR-enabled digital tickets.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left 8 Cols: 3-Step Selection Flow */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Step 1: Match Selection */}
          <div className="glass-card p-5 sm:p-6 space-y-4 border-2 border-black/10 dark:border-white/10 shadow-sm dark:shadow-tactile">
            <div className="flex items-center justify-between pb-2 border-b border-black/10 dark:border-white/10">
              <span className="font-bebas text-lg sm:text-xl text-[var(--kreeda-text-primary)] tracking-wider uppercase">
                1. Choose Match
              </span>
              <span className="text-[#FF5500] font-bold text-xs">
                {openMatches.length} Matches Open
              </span>
            </div>

            {/* Compact Scrollable Match List with Level Heights */}
            <div className="space-y-2.5 max-h-[380px] overflow-y-auto pr-1">
              {openMatches.map((match) => {
                const t1 = FRANCHISES_DATA.find((f) => f.id === match.team1Id);
                const t2 = FRANCHISES_DATA.find((f) => f.id === match.team2Id);
                const isSelected = activeMatchId === match.id;

                return (
                  <div
                    key={match.id}
                    onClick={() => setActiveMatchId(match.id)}
                    className={`p-3.5 sm:p-4 rounded-xl border-2 cursor-pointer flex items-center justify-between gap-4 transition-all duration-200 ${
                      isSelected
                        ? 'bg-[#FF5500]/10 border-[#FF5500] ring-2 ring-[#FF5500]/20 shadow-sm'
                        : 'bg-black/[0.02] dark:bg-white/[0.02] border-black/10 dark:border-white/10 hover:border-[#FF5500]/40'
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      {/* Match Badge */}
                      <div className={`w-9 h-9 rounded-lg flex items-center justify-center font-bold text-xs uppercase flex-shrink-0 ${
                        isSelected 
                          ? 'bg-[#FF5500] text-white' 
                          : 'bg-black/5 dark:bg-white/5 text-[var(--kreeda-text-secondary)] border border-black/10 dark:border-white/10'
                      }`}>
                        M{match.matchNo}
                      </div>

                      <div className="min-w-0">
                        <div className="font-bold text-xs sm:text-sm text-[var(--kreeda-text-primary)] truncate leading-snug">
                          {t1?.name} vs {t2?.name}
                        </div>
                        <div className="text-[11px] text-[var(--kreeda-text-muted)] truncate">
                          {match.date} • {match.venue}
                        </div>
                      </div>
                    </div>

                    <div className="text-right flex-shrink-0">
                      <span className="text-xs sm:text-sm font-extrabold text-[#FF5500] block">
                        ₹249 onwards
                      </span>
                      <span className="text-[10px] text-[var(--kreeda-text-muted)] uppercase tracking-wider font-semibold">
                        {match.stage}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Step 2: Stand Category */}
          <div className="glass-card p-5 sm:p-6 space-y-4 border-2 border-black/10 dark:border-white/10 shadow-sm dark:shadow-tactile">
            <div className="pb-2 border-b border-black/10 dark:border-white/10">
              <span className="font-bebas text-lg sm:text-xl text-[var(--kreeda-text-primary)] tracking-wider uppercase">
                2. Select Stadium Stand / Tier
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {STAND_CATEGORIES.map((stand) => {
                const isSelected = selectedStandId === stand.id;

                return (
                  <div
                    key={stand.id}
                    onClick={() => setSelectedStandId(stand.id)}
                    className={`p-4 rounded-xl border-2 cursor-pointer flex flex-col justify-between transition-all duration-200 ${
                      isSelected
                        ? 'bg-[#FF5500]/10 border-[#FF5500] ring-2 ring-[#FF5500]/20 shadow-sm'
                        : 'bg-black/[0.02] dark:bg-white/[0.02] border-black/10 dark:border-white/10 hover:border-[#FF5500]/40'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between pb-1">
                        <span className="font-bold text-sm sm:text-base text-[var(--kreeda-text-primary)]">
                          {stand.name}
                        </span>
                        <span className="font-bebas text-xl sm:text-2xl text-[#FF5500]">
                          ₹{stand.price}
                        </span>
                      </div>
                      <p className="text-xs text-[var(--kreeda-text-secondary)] leading-relaxed line-clamp-2">
                        {stand.description}
                      </p>
                    </div>

                    <div className="mt-3 pt-2.5 border-t border-black/10 dark:border-white/10 flex items-center justify-between text-[11px]">
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold">
                        {stand.availableSeats} Seats Left
                      </span>
                      <span className="text-[var(--kreeda-text-muted)] truncate max-w-[130px]">
                        {stand.perks[0]}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Step 3: Quantity Selector */}
          <div className="glass-card p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border border-black/10 dark:border-white/10 shadow-sm dark:shadow-tactile">
            <div>
              <div className="font-bebas text-base sm:text-lg text-[var(--kreeda-text-primary)] tracking-wider uppercase">
                3. Number of Tickets
              </div>
              <div className="text-[11px] text-[var(--kreeda-text-muted)]">Max 6 tickets per transaction</div>
            </div>

            <div className="flex items-center justify-between sm:justify-start gap-1.5 sm:gap-2 w-full sm:w-auto">
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <button
                  key={num}
                  type="button"
                  onClick={() => setQuantity(num)}
                  className={`flex-1 sm:flex-none w-auto sm:w-10 h-10 rounded-xl font-bold text-sm transition border btn-tactile ${
                    quantity === num
                      ? 'bg-gradient-to-r from-[#FF5500] to-[#FF661A] text-white border-transparent shadow-orange-glow font-black'
                      : 'bg-black/5 dark:bg-white/5 border-black/10 dark:border-white/10 text-[var(--kreeda-text-primary)] hover:bg-black/10'
                  }`}
                >
                  {num}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Right 4 Cols: Sticky Checkout Summary */}
        <div className="lg:col-span-4 sticky top-24 space-y-4">
          <div className="glass-card p-5 sm:p-6 space-y-4 border-2 border-black/10 dark:border-white/10 shadow-xl">
            <div className="pb-3 border-b border-black/10 dark:border-white/10 flex items-center justify-between">
              <span className="font-bebas text-lg text-[var(--kreeda-text-primary)] tracking-wider uppercase">
                BOOKING SUMMARY
              </span>
              <span className="text-emerald-600 dark:text-emerald-400 font-bold text-[10px] tracking-wider uppercase">
                Instant E-Ticket
              </span>
            </div>

            {/* Line Items */}
            <div className="space-y-2.5 text-xs sm:text-sm">
              <div className="flex items-center justify-between">
                <span className="text-[var(--kreeda-text-muted)]">Match:</span>
                <span className="font-bold text-[var(--kreeda-text-primary)] truncate max-w-[170px]">
                  {team1?.shortCode} vs {team2?.shortCode}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[var(--kreeda-text-muted)]">Enclosure:</span>
                <span className="font-bold text-[#F59E0B] truncate max-w-[170px]">
                  {currentStand.name}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[var(--kreeda-text-muted)]">Tickets:</span>
                <span className="text-[var(--kreeda-text-primary)] font-semibold">
                  ₹{currentStand.price} × {quantity}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[var(--kreeda-text-muted)]">Subtotal:</span>
                <span className="text-[var(--kreeda-text-primary)]">₹{subtotal}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[var(--kreeda-text-muted)]">GST (18%):</span>
                <span className="text-[var(--kreeda-text-primary)]">₹{gst}</span>
              </div>

              <div className="pt-3 border-t border-black/10 dark:border-white/10 flex items-center justify-between">
                <span className="font-bebas text-lg text-[var(--kreeda-text-primary)] uppercase">Total Amount:</span>
                <span className="font-bebas text-2xl sm:text-3xl text-[#FF5500] tracking-wider">₹{totalAmount}</span>
              </div>
            </div>

            {/* Fan Details Form */}
            <form onSubmit={handleBookingSubmit} className="space-y-3.5 pt-1">
              <div>
                <label className="block text-[11px] font-bold text-[var(--kreeda-text-secondary)] mb-1 uppercase tracking-wider">
                  Full Name *
                </label>
                <input
                  type="text"
                  value={fanName}
                  onChange={(e) => setFanName(e.target.value)}
                  placeholder="e.g. Anand Varma"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--kreeda-surface-elevated)] border border-black/10 dark:border-white/10 text-[var(--kreeda-text-primary)] placeholder-[var(--kreeda-text-muted)] text-xs sm:text-sm focus:outline-none focus:border-[#FF5500]"
                  required
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-[var(--kreeda-text-secondary)] mb-1 uppercase tracking-wider">
                  Mobile Number (for SMS QR Code) *
                </label>
                <input
                  type="tel"
                  value={fanMobile}
                  onChange={(e) => setFanMobile(e.target.value)}
                  placeholder="98490 12345"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--kreeda-surface-elevated)] border border-black/10 dark:border-white/10 text-[var(--kreeda-text-primary)] placeholder-[var(--kreeda-text-muted)] text-xs sm:text-sm focus:outline-none focus:border-[#FF5500]"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#FF5500] to-[#FF661A] hover:brightness-110 text-white font-black text-xs sm:text-sm uppercase tracking-wider shadow-orange-glow transition btn-tactile text-center"
              >
                Confirm Booking &amp; Get E-Ticket
              </button>
            </form>

            <div className="text-[11px] text-[var(--kreeda-text-muted)] text-center pt-0.5">
              Verified Turnstile Single-Entry QR Generation
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};
