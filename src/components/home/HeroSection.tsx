import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import { StadiumHeroScenery } from './StadiumHeroScenery';
import { 
  Trophy, 
  Ticket, 
  UserPlus, 
  MapPin, 
  ChevronRight, 
  Calendar,
  Sparkles,
  ShieldCheck,
  Flame
} from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { theme } = useApp();

  const [timeLeft, setTimeLeft] = useState({
    days: 15,
    hours: 19,
    minutes: 42,
    seconds: 18,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden w-full pt-4 sm:pt-8 pb-10 sm:pb-20 px-4 sm:px-8 lg:px-12 xl:px-16 border-b border-black/10 dark:border-white/10 min-h-[580px] lg:min-h-[620px] flex items-center">
      
      {/* High-Visibility Live Stadium Scenery Video/Motion Backdrop */}
      <StadiumHeroScenery />

      <div className="w-full relative z-10 space-y-4 sm:space-y-8 max-w-7xl mx-auto">
        
        {/* Floating Season 1 Pill Badge - Clean, Single Line Glass Strip */}
        <div className="flex justify-center lg:justify-start">
          <div className="inline-flex items-center gap-1.5 xs:gap-2 px-2.5 xs:px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-black/40 backdrop-blur-xl border border-amber-500/40 shadow-lg text-white max-w-full">
            <span className="flex h-1.5 w-1.5 xs:h-2 xs:w-2 rounded-full bg-[#FF5500] animate-ping flex-shrink-0" />
            <span className="text-[#FF5500] font-bebas text-[11px] xs:text-xs sm:text-base tracking-wider xs:tracking-widest uppercase whitespace-nowrap">
              SEASON 1 LAUNCH
            </span>
            <span className="text-white/40">•</span>
            <span className="text-slate-200 font-bold text-[9px] xs:text-[10px] sm:text-xs uppercase tracking-wider whitespace-nowrap truncate">
              Andhra Pradesh &amp; Telangana
            </span>
          </div>
        </div>

        {/* Completely Container-less Fluid Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
          
          {/* Left 7 Columns: Floating Typography & Primary CTAs */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-center lg:text-left">
            
            <div className="space-y-2 sm:space-y-3">
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-lg bg-[#FF5500]/20 border border-[#FF5500]/40 text-[#FF661A] font-bold text-[11px] sm:text-xs uppercase tracking-widest backdrop-blur-md">
                <Flame className="w-3.5 h-3.5 text-[#FF5500]" />
                <span>T10 TELUGU CHAMPIONSHIP</span>
              </div>

              <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bebas tracking-wide text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)] leading-[0.98]">
                THE BATTLE FOR <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5500] via-[#FF7733] to-[#F59E0B] drop-shadow-sm">
                  TELUGU CRICKET
                </span> <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F59E0B] via-[#FF5500] to-[#EF4444]">
                  PRIDE &amp; GLORY
                </span>
              </h1>

              <p className="text-xs sm:text-base md:text-lg text-slate-100 max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)] pt-0.5">
                8 Regional Franchises. 45+ Catchment Districts. 10 Explosive Overs. The official grassroots-to-floodlights cricket league uniting millions of Telugu fans.
              </p>
            </div>

            {/* High Impact Primary Actions (Mobile-Optimized Grid, Desktop-Unified Single Line) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-2.5 sm:gap-3 pt-1 w-full max-w-md lg:max-w-none mx-auto lg:mx-0">
              <Link
                to="/register-player"
                className="h-11 sm:h-12 px-5 sm:px-6 rounded-xl bg-gradient-to-r from-[#FF5500] to-[#FF661A] hover:brightness-110 text-white font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-orange-glow btn-tactile border border-white/20 whitespace-nowrap flex-shrink-0"
              >
                <UserPlus className="w-4 h-4 text-white flex-shrink-0" />
                <span className="whitespace-nowrap">Register for Trials</span>
              </Link>

              <div className="grid grid-cols-2 gap-2 w-full sm:flex sm:w-auto sm:items-center sm:gap-3 flex-shrink-0">
                <Link
                  to="/tickets"
                  className="h-11 sm:h-12 px-2.5 xs:px-4 sm:px-5 rounded-xl bg-black/40 hover:bg-black/60 backdrop-blur-xl border border-white/25 text-white font-bold text-[11px] xs:text-xs sm:text-sm flex items-center justify-center gap-1 xs:gap-1.5 shadow-lg btn-tactile transition-all whitespace-nowrap"
                >
                  <Ticket className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FF5500] flex-shrink-0" />
                  <span className="whitespace-nowrap">Tickets</span>
                </Link>

                <Link
                  to="/districts"
                  className="h-11 sm:h-12 px-2 xs:px-4 sm:px-5 rounded-xl bg-black/30 hover:bg-[#FF5500]/20 backdrop-blur-md border border-[#FF5500]/40 text-[#FFCD80] font-bold text-[11px] xs:text-xs sm:text-sm flex items-center justify-center gap-1 transition btn-tactile whitespace-nowrap"
                >
                  <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FF5500] flex-shrink-0" />
                  <span className="whitespace-nowrap">My District</span>
                  <ChevronRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#FF5500] flex-shrink-0" />
                </Link>
              </div>
            </div>

            {/* Key Assurance Badges */}
            <div className="pt-1 flex flex-wrap items-center justify-center lg:justify-start gap-x-3.5 gap-y-1 text-[10.5px] sm:text-xs text-slate-200 font-semibold drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] shadow-[0_0_8px_#10B981] flex-shrink-0" />
                <span>District Catchment Routing</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF5500] shadow-[0_0_8px_#FF5500] flex-shrink-0" />
                <span>Kreeda App Telemetry</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] shadow-[0_0_8px_#F59E0B] flex-shrink-0" />
                <span>QR E-Tickets</span>
              </span>
            </div>

          </div>

          {/* Right 5 Columns: Container-less 3D Trophy Showcase & Telemetry Countdown */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative select-none pt-2 lg:pt-0">
            
            {/* Ambient Spotlight & Halo behind Trophy */}
            <div className="absolute -top-10 w-72 sm:w-96 h-72 sm:h-96 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.25)_0%,rgba(255,85,0,0.12)_45%,transparent_70%)] pointer-events-none blur-2xl animate-pulse-subtle" />

            {/* Single Official Championship Trophy & ₹1 Crore Prize Pool Badge with Continuous Glowing Border & Light Blink Animation */}
            <a 
              href="#prize-pool"
              className="trophy-badge-glow mb-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-black/60 backdrop-blur-xl border-2 flex items-center gap-2 transition-all duration-300 hover:scale-105 active:scale-95 group cursor-pointer max-w-full"
            >
              <span className="relative flex h-2 w-2 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-80" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400" />
              </span>

              <span className="font-bebas text-xs sm:text-base tracking-wider uppercase text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-100 to-amber-400 font-black whitespace-nowrap">
                ₹1 CRORE PRIZE POOL
              </span>

              <span className="text-white/40">•</span>

              <span className="text-[10px] sm:text-[11px] text-slate-200 font-bold uppercase tracking-wider whitespace-nowrap">
                1 TROPHY • 8 TEAMS
              </span>
            </a>

            {/* 3D Trophy Asset Display (Container-less Broadcast Stage) */}
            <div className="relative w-full max-w-[260px] xs:max-w-[300px] sm:max-w-[340px] lg:max-w-[420px] flex flex-col items-center justify-center py-1 sm:py-2 group">
              
              {/* Grand 3D Championship Trophy Asset with clean alpha */}
              <img 
                src="/assets/trophy.png?v=4" 
                alt="ICL T10 Official Championship Silverware" 
                className="w-auto h-48 xs:h-56 sm:h-72 md:h-84 lg:h-92 object-contain filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.7)] group-hover:scale-105 transition-transform duration-500 relative z-10" 
              />

              {/* Broadcast Stage Soft Contact Shadow & Ground Glow */}
              <div className="w-36 xs:w-48 sm:w-60 h-3.5 sm:h-4 bg-black/70 rounded-full blur-md -mt-2 relative z-0" />
              <div className="w-52 xs:w-64 sm:w-76 h-6 sm:h-8 bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.35)_0%,rgba(255,85,0,0.15)_40%,transparent_75%)] rounded-full blur-lg -mt-3 relative z-0 pointer-events-none" />
            </div>

            {/* Container-less Floating Telemetry Countdown Bar */}
            <div className="w-full max-w-xs sm:max-w-md mt-1.5 sm:mt-2 p-2.5 sm:p-3.5 rounded-2xl bg-black/50 backdrop-blur-xl border border-white/20 shadow-2xl space-y-1.5 sm:space-y-2">
              
              <div className="flex items-center justify-between text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-300 px-1">
                <span className="flex items-center gap-1.5 text-amber-400">
                  <Calendar className="w-3.5 h-3.5 text-[#FF5500]" />
                  <span>Countdown to Finale</span>
                </span>
                <span className="text-[#FF5500] font-black font-bebas text-xs sm:text-sm tracking-wider">Nov 22 • Uppal</span>
              </div>

              {/* 4 Sleek Telemetry Cells */}
              <div className="grid grid-cols-4 gap-1.5 sm:gap-2 text-center">
                <div className="py-1 px-1.5 sm:py-1.5 sm:px-2 rounded-xl bg-white/10 border border-white/15 backdrop-blur-sm">
                  <div className="font-bebas text-lg sm:text-2xl text-[#FF5500] leading-none">{timeLeft.days}</div>
                  <span className="text-[8px] sm:text-[9px] uppercase font-bold text-slate-300 tracking-wider">Days</span>
                </div>
                <div className="py-1 px-1.5 sm:py-1.5 sm:px-2 rounded-xl bg-white/10 border border-white/15 backdrop-blur-sm">
                  <div className="font-bebas text-lg sm:text-2xl text-white leading-none">{timeLeft.hours}</div>
                  <span className="text-[8px] sm:text-[9px] uppercase font-bold text-slate-300 tracking-wider">Hours</span>
                </div>
                <div className="py-1 px-1.5 sm:py-1.5 sm:px-2 rounded-xl bg-white/10 border border-white/15 backdrop-blur-sm">
                  <div className="font-bebas text-lg sm:text-2xl text-white leading-none">{timeLeft.minutes}</div>
                  <span className="text-[8px] sm:text-[9px] uppercase font-bold text-slate-300 tracking-wider">Mins</span>
                </div>
                <div className="py-1 px-1.5 sm:py-1.5 sm:px-2 rounded-xl bg-white/10 border border-white/15 backdrop-blur-sm">
                  <div className="font-bebas text-lg sm:text-2xl text-amber-400 leading-none">{timeLeft.seconds}</div>
                  <span className="text-[8px] sm:text-[9px] uppercase font-bold text-slate-300 tracking-wider">Secs</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
