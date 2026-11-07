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
    <section className="relative overflow-hidden w-full pt-3 sm:pt-5 pb-14 sm:pb-20 px-4 sm:px-8 lg:px-12 xl:px-16 border-b border-black/10 dark:border-white/10 min-h-[580px] flex items-center">
      
      {/* High-Visibility Live Stadium Scenery Video/Motion Backdrop */}
      <StadiumHeroScenery />

      <div className="w-full relative z-10 space-y-8 max-w-7xl mx-auto">
        
        {/* Floating Season 1 Pill Badge - Container-less Sleek Glass Strip */}
        <div className="flex justify-center lg:justify-start">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-xl border border-amber-500/40 shadow-lg text-white">
            <span className="flex h-2.5 w-2.5 rounded-full bg-[#FF5500] animate-ping" />
            <span className="text-[#FF5500] font-bebas text-sm sm:text-base tracking-widest uppercase">
              SEASON 1 OFFICIAL LAUNCH
            </span>
            <span className="text-white/40 hidden xs:inline">•</span>
            <span className="hidden xs:inline text-slate-200 font-bold text-xs uppercase tracking-wider">
              Andhra Pradesh &amp; Telangana
            </span>
          </div>
        </div>

        {/* Completely Container-less Fluid Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left 7 Columns: Floating Typography & Primary CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#FF5500]/20 border border-[#FF5500]/40 text-[#FF661A] font-bold text-xs uppercase tracking-widest backdrop-blur-md">
                <Flame className="w-3.5 h-3.5 text-[#FF5500]" />
                <span>T10 TELUGU CHAMPIONSHIP</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bebas tracking-wide text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)] leading-[0.98]">
                THE BATTLE FOR <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5500] via-[#FF7733] to-[#F59E0B] drop-shadow-sm">
                  TELUGU CRICKET
                </span> <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F59E0B] via-[#FF5500] to-[#EF4444]">
                  PRIDE &amp; GLORY
                </span>
              </h1>

              <p className="text-sm sm:text-base md:text-lg text-slate-100 max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)] pt-1">
                8 Regional Franchises. 45+ Catchment Districts. 10 Explosive Overs. The official grassroots-to-floodlights cricket league uniting millions of Telugu fans.
              </p>
            </div>

            {/* High Impact Primary Actions (Container-less Floating Buttons) */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-1">
              <Link
                to="/register-player"
                className="py-3 px-6 rounded-xl bg-gradient-to-r from-[#FF5500] to-[#FF661A] hover:brightness-110 text-white font-bold text-sm uppercase tracking-wider flex items-center gap-2 shadow-orange-glow btn-tactile border border-white/20"
              >
                <UserPlus className="w-4 h-4 text-white" />
                <span>Register for Trials</span>
              </Link>

              <Link
                to="/tickets"
                className="py-3 px-5 rounded-xl bg-black/40 hover:bg-black/60 backdrop-blur-xl border border-white/25 text-white font-bold text-sm flex items-center gap-2 shadow-lg btn-tactile transition-all"
              >
                <Ticket className="w-4 h-4 text-[#FF5500]" />
                <span>Book Match Tickets</span>
              </Link>

              <Link
                to="/districts"
                className="py-3 px-5 rounded-xl bg-black/30 hover:bg-[#FF5500]/20 backdrop-blur-md border border-[#FF5500]/40 text-[#FFCD80] font-bold text-sm flex items-center gap-1.5 transition btn-tactile"
              >
                <MapPin className="w-4 h-4 text-[#FF5500]" />
                <span>Find My District Team</span>
                <ChevronRight className="w-3.5 h-3.5 text-[#FF5500]" />
              </Link>
            </div>

            {/* Key Assurance Badges */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs text-slate-200 font-semibold drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#10B981] shadow-[0_0_8px_#10B981]" />
                <span>Automated District Catchment Routing</span>
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FF5500] shadow-[0_0_8px_#FF5500]" />
                <span>Live Telemetry via Kreeda App</span>
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#F59E0B] shadow-[0_0_8px_#F59E0B]" />
                <span>Instant Scannable QR E-Tickets</span>
              </span>
            </div>

          </div>

          {/* Right 5 Columns: Container-less 3D Trophy Showcase & Telemetry Countdown */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative select-none">
            
            {/* Ambient Spotlight & Halo behind Trophy */}
            <div className="absolute -top-10 w-72 sm:w-96 h-72 sm:h-96 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.25)_0%,rgba(255,85,0,0.12)_45%,transparent_70%)] pointer-events-none blur-2xl animate-pulse-subtle" />

            {/* Floating Silverware Prestige Badge */}
            <div className="mb-2 px-3.5 py-1.5 rounded-full bg-black/50 backdrop-blur-xl border border-amber-500/40 shadow-xl flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
              <span className="text-[11px] font-black text-amber-300 uppercase tracking-widest">
                ICL T10 SEASON 1 TROPHY
              </span>
              <span className="text-white/30">•</span>
              <span className="text-[10px] text-slate-300 font-bold uppercase tracking-wider">
                1 TROPHY • 8 TEAMS
              </span>
            </div>

            {/* 3D Trophy Asset Display (Container-less Broadcast Stage) */}
            <div className="relative w-full max-w-[340px] sm:max-w-[420px] flex flex-col items-center justify-center py-2 group">
              
              {/* Grand 3D Championship Trophy Asset with clean alpha */}
              <img 
                src="/assets/trophy.png?v=4" 
                alt="ICL T10 Official Championship Silverware" 
                className="w-auto h-72 sm:h-84 md:h-92 object-contain filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.7)] group-hover:scale-105 transition-transform duration-500 relative z-10"
              />

              {/* Broadcast Stage Soft Contact Shadow & Ground Glow */}
              <div className="w-48 sm:w-60 h-4 bg-black/70 rounded-full blur-md -mt-2 relative z-0" />
              <div className="w-64 sm:w-76 h-8 bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.35)_0%,rgba(255,85,0,0.15)_40%,transparent_75%)] rounded-full blur-lg -mt-3 relative z-0 pointer-events-none" />
            </div>

            {/* Container-less Floating Telemetry Countdown Bar */}
            <div className="w-full max-w-sm sm:max-w-md mt-2 p-3 sm:p-3.5 rounded-2xl bg-black/50 backdrop-blur-xl border border-white/20 shadow-2xl space-y-2">
              
              <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-300 px-1">
                <span className="flex items-center gap-1.5 text-amber-400">
                  <Calendar className="w-3.5 h-3.5 text-[#FF5500]" />
                  <span>Countdown to Grand Finale</span>
                </span>
                <span className="text-[#FF5500] font-black font-bebas text-sm tracking-wider">Nov 22, 2026 • Uppal</span>
              </div>

              {/* 4 Sleek Telemetry Cells */}
              <div className="grid grid-cols-4 gap-2 text-center">
                <div className="py-1.5 px-2 rounded-xl bg-white/10 border border-white/15 backdrop-blur-sm">
                  <div className="font-bebas text-xl sm:text-2xl text-[#FF5500] leading-none">{timeLeft.days}</div>
                  <span className="text-[9px] uppercase font-bold text-slate-300 tracking-wider">Days</span>
                </div>
                <div className="py-1.5 px-2 rounded-xl bg-white/10 border border-white/15 backdrop-blur-sm">
                  <div className="font-bebas text-xl sm:text-2xl text-white leading-none">{timeLeft.hours}</div>
                  <span className="text-[9px] uppercase font-bold text-slate-300 tracking-wider">Hours</span>
                </div>
                <div className="py-1.5 px-2 rounded-xl bg-white/10 border border-white/15 backdrop-blur-sm">
                  <div className="font-bebas text-xl sm:text-2xl text-white leading-none">{timeLeft.minutes}</div>
                  <span className="text-[9px] uppercase font-bold text-slate-300 tracking-wider">Mins</span>
                </div>
                <div className="py-1.5 px-2 rounded-xl bg-white/10 border border-white/15 backdrop-blur-sm">
                  <div className="font-bebas text-xl sm:text-2xl text-amber-400 leading-none">{timeLeft.seconds}</div>
                  <span className="text-[9px] uppercase font-bold text-slate-300 tracking-wider">Secs</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
