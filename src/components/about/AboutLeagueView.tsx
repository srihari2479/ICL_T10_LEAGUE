import React from 'react';
import { useApp } from '../../context/AppContext';
import { getAssetUrl } from '../../utils/assetHelper';
import { 
  Trophy, 
  ShieldCheck, 
  Timer, 
  MapPin, 
  Users, 
  Award, 
  CheckCircle2, 
  FileText,
  ExternalLink,
  Sparkles
} from 'lucide-react';

export const AboutLeagueView: React.FC = () => {
  const { setCurrentPage, openKreedaBoundaryModal } = useApp();

  const rules = [
    { title: '10 Overs Per Innings', desc: 'Each team faces exactly 60 legal deliveries in an electrifying 90-minute clash.' },
    { title: '2-Over Powerplay', desc: 'Only 2 fielders allowed outside the 30-yard circle during overs 1 and 2.' },
    { title: 'Bowler Quota (Max 2 Overs)', desc: 'A minimum of 5 distinct bowlers must be utilized by the fielding captain.' },
    { title: '45-Second Strategic Timeout', desc: 'One tactical consultation allowed per innings at the end of the 5th over.' },
    { title: 'Sudden Death Super Over', desc: 'Tied matches are resolved with an immediate 1-over shootout with 3 nominated batters.' },
    { title: 'Squad Size (16-18 Players)', desc: 'Each franchise roster must include certified local talent from approved catchment districts.' }
  ];

  return (
    <div className="w-full pt-3 sm:pt-5 pb-10 sm:pb-14 px-4 sm:px-8 lg:px-12 xl:px-16 space-y-10 sm:space-y-12">
      
      {/* Header with 3D Trophy Banner */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-8 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-widest text-[#FF5500]">
            <Trophy className="w-4 h-4 text-[#F59E0B]" />
            <span>The Official League Story</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bebas text-[var(--kreeda-text-primary)] tracking-wide leading-tight">
            DEMOCRATIZING CRICKET ACROSS THE TELUGU STATES
          </h1>
          <p className="text-sm sm:text-base text-[var(--kreeda-text-secondary)] leading-relaxed max-w-3xl">
            Indian Champions League T10 was conceived to bridge the historic gap between grassroots talent in rural and semi-urban mandals and the professional floodlights of international stadiums.
          </p>
        </div>

        <div className="lg:col-span-4 flex justify-center">
          <div className="w-64 h-64 rounded-3xl overflow-hidden border-2 border-black/10 dark:border-white/15 shadow-sm dark:shadow-orange-glow bg-[var(--kreeda-surface-elevated)] p-4 flex items-center justify-center relative group">
            <img 
              src={getAssetUrl('assets/trophy.png?v=4')} 
              alt="ICL T10 Official Championship Silverware" 
              className="h-full object-contain filter drop-shadow-2xl group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>

      {/* Vision & Mission Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="glass-card p-8 space-y-3 border-l-4 border-l-[#FF5500] shadow-sm dark:shadow-tactile border border-black/10 dark:border-white/10">
          <div className="text-xs font-bold text-[#FF5500] uppercase tracking-widest">
            Our Vision
          </div>
          <h2 className="text-xl sm:text-2xl font-bebas text-[var(--kreeda-text-primary)] tracking-wide">
            A UNITED REGIONAL SPORTING FESTIVAL
          </h2>
          <p className="text-sm text-[var(--kreeda-text-secondary)] leading-relaxed">
            To build a celebrated annual sports festival that honors the unique cultural pride, athletic ferocity, and vibrant heritage of every region across Andhra Pradesh and Telangana.
          </p>
        </div>

        <div className="glass-card p-6 sm:p-8 space-y-3 border-l-4 border-l-[#F59E0B] shadow-sm dark:shadow-tactile border border-black/10 dark:border-white/10">
          <div className="text-xs font-bold text-[#F59E0B] uppercase tracking-widest">
            The Catchment Philosophy
          </div>
          <h2 className="text-xl sm:text-2xl font-bebas text-[var(--kreeda-text-primary)] tracking-wide">
            DIRECT DISTRICT-TO-FRANCHISE SCOUTING
          </h2>
          <p className="text-sm text-[var(--kreeda-text-secondary)] leading-relaxed">
            By grouping 45+ districts into 8 balanced regional franchises, ICL T10 guarantees that aspiring cricketers from Srikakulam to Adilabad, and Nizamabad to Chittoor have an authentic, transparent gateway to competitive cricket.
          </p>
        </div>
      </div>

      {/* T10 Tournament Format & Rules */}
      <div className="space-y-6">
        <div>
          <div className="text-xs font-bold text-[#FF5500] uppercase tracking-widest">
            Match Protocol
          </div>
          <h2 className="text-2xl sm:text-3xl font-bebas text-[var(--kreeda-text-primary)] tracking-wide">
            OFFICIAL T10 RULES SUMMARY
          </h2>
          <p className="text-sm text-[var(--kreeda-text-secondary)] mt-1">
            Engineered for high adrenaline, fast pacing, and uncompromising tactical rigor.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {rules.map((rule, idx) => (
            <div
              key={idx}
              className="glass-card p-5 space-y-2 border-2 border-black/10 dark:border-white/10 hover:border-[#FF5500]/40 transition shadow-sm dark:shadow-tactile"
            >
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-gradient-to-r from-[#FF5500] to-[#FF661A] text-white font-bebas text-base flex items-center justify-center font-black">
                  {idx + 1}
                </span>
                <span className="font-bebas text-xl text-[var(--kreeda-text-primary)] tracking-wide">{rule.title}</span>
              </div>
              <p className="text-xs sm:text-sm text-[var(--kreeda-text-secondary)] leading-relaxed pl-11">
                {rule.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Kreeda App Technical Boundary Card */}
      <div className="glass-card p-5 sm:p-8 rounded-3xl border-2 border-black/10 dark:border-white/10 space-y-4 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FF5500]">
              Technical Governance &amp; Scoring Authority
            </span>
            <h3 className="font-bebas text-xl sm:text-2xl text-[var(--kreeda-text-primary)] tracking-wide">
              KREEDA APP: SYSTEM OF RECORD
            </h3>
            <p className="text-xs sm:text-sm text-[var(--kreeda-text-secondary)] max-w-2xl leading-relaxed">
              As mandated by DPR Section 1.3, all points tables, live telemetry, bowler speeds, ball-by-ball commentary, and Net Run Rate calculations operate strictly inside Kreeda App.
            </p>
          </div>

          <button
            onClick={() => openKreedaBoundaryModal()}
            className="w-full sm:w-auto py-2.5 sm:py-3 px-5 rounded-xl bg-gradient-to-r from-[#FF5500] to-[#FF661A] text-white font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition flex-shrink-0 shadow-orange-glow btn-tactile"
          >
            <span>Read Architecture Boundary</span>
            <ExternalLink className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>

      {/* Quick Action Footer */}
      <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
        <button
          onClick={() => setCurrentPage('register-player')}
          className="w-full sm:w-auto py-3.5 px-7 rounded-2xl bg-gradient-to-r from-[#FF5500] to-[#FF661A] hover:brightness-110 text-white font-bebas text-lg tracking-wider uppercase font-black transition shadow-orange-glow btn-tactile text-center"
        >
          Enroll for Player Trials
        </button>

        <button
          onClick={() => setCurrentPage('zones')}
          className="w-full sm:w-auto py-3.5 px-6 rounded-2xl bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/15 text-[var(--kreeda-text-primary)] font-bold text-sm border border-black/10 dark:border-white/10 transition btn-tactile text-center"
        >
          Explore Catchment Map
        </button>
      </div>

    </div>
  );
};
