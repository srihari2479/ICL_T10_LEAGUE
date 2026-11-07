import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { ZONES_AND_DISTRICTS, findCatchmentByDistrict } from '../../data/zonesAndDistrictsData';
import { FRANCHISES_DATA } from '../../data/franchisesData';
import { PlayerApplication, PlayerRole, StateType } from '../../types';
import confetti from 'canvas-confetti';
import { 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  ShieldCheck, 
  Upload, 
  Smartphone, 
  User, 
  MapPin, 
  Activity, 
  Video, 
  FileCheck,
  Sparkles,
  Download,
  AlertCircle
} from 'lucide-react';

export const PlayerRegistrationWizard: React.FC = () => {
  const { addPlayerApplication, navigateToTrackerWithId } = useApp();

  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 6;

  // Form State
  const [mobile, setMobile] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('2002-05-15');
  const [gender, setGender] = useState('Male');

  const [state, setState] = useState<StateType>('Andhra Pradesh');
  const [district, setDistrict] = useState('Visakhapatnam');

  const [primaryRole, setPrimaryRole] = useState<PlayerRole>('All-Rounder');
  const [battingHand, setBattingHand] = useState<'Right-hand bat' | 'Left-hand bat'>('Right-hand bat');
  const [bowlingStyle, setBowlingStyle] = useState('Right-arm fast medium');
  const [cricHeroesProfile, setCricHeroesProfile] = useState('');
  const [previousExperience, setPreviousExperience] = useState('District League / Local Academy division tournament');

  const [videoHighlightsUrl, setVideoHighlightsUrl] = useState('');
  const [aadhaarDocName, setAadhaarDocName] = useState('aadhaar_card_proof.pdf');
  const [agreedConsent, setAgreedConsent] = useState(true);

  // Success state
  const [submittedApp, setSubmittedApp] = useState<PlayerApplication | null>(null);

  // Derived catchment info & franchise
  const catchment = findCatchmentByDistrict(district) || {
    franchiseId: 'vizag-strikers',
    franchiseName: 'Vizag Strikers',
    zoneName: 'North Coast Zone',
    hub: 'Visakhapatnam'
  };

  const assignedTeam = FRANCHISES_DATA.find((f) => f.id === catchment.franchiseId);

  const handleSendOtp = () => {
    if (mobile.length < 10) {
      alert('Please enter a valid 10-digit mobile number');
      return;
    }
    setOtpSent(true);
    setOtp('5892');
  };

  const handleVerifyOtp = () => {
    if (otp === '5892' || otp.length === 4) {
      setOtpVerified(true);
    }
  };

  const handleNextStep = () => {
    if (currentStep === 1 && !otpVerified) {
      alert('Please complete OTP verification to proceed.');
      return;
    }
    if (currentStep === 2 && !fullName.trim()) {
      alert('Please enter your full legal name.');
      return;
    }
    if (currentStep < totalSteps) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreedConsent) {
      alert('You must accept tournament regulations and declarations to proceed.');
      return;
    }

    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const appId = `ICL-PL-2026-${randomNum}`;

    const newApplication: PlayerApplication = {
      applicationId: appId,
      fullName,
      mobile,
      email: email || `${fullName.toLowerCase().replace(/\s+/g, '')}@cricketmail.com`,
      dob,
      gender,
      state,
      district,
      assignedFranchiseId: catchment.franchiseId,
      assignedFranchiseName: catchment.franchiseName,
      assignedZone: catchment.zoneName,
      primaryRole,
      battingHand,
      bowlingStyle,
      cricHeroesProfile,
      previousExperience,
      videoHighlightsUrl,
      aadhaarProofName: aadhaarDocName,
      status: 'VERIFIED',
      trialDate: '15 Nov 2026 - 08:30 AM',
      trialVenue: `${catchment.hub} Stadium Ground B`,
      submittedAt: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })
    };

    addPlayerApplication(newApplication);
    setSubmittedApp(newApplication);

    try {
      confetti({ particleCount: 90, spread: 75, origin: { y: 0.6 } });
    } catch (err) {}
  };

  if (submittedApp) {
    return (
      <div className="w-full pt-3 sm:pt-5 pb-12 px-4 sm:px-8 max-w-3xl mx-auto">
        <div className="glass-card p-8 border-2 border-emerald-500/50 relative overflow-hidden space-y-6 shadow-2xl">
          <div className="text-center space-y-2">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bebas text-[var(--kreeda-text-primary)] tracking-wide">
              PLAYER ENROLLMENT CONFIRMED!
            </h2>
            <p className="text-sm text-[var(--kreeda-text-secondary)]">
              Your official player application has been recorded in the ICL T10 Scrutiny Registry.
            </p>
          </div>

          {/* Official Acknowledgment Slip Card with Crest */}
          <div className="p-6 rounded-2xl bg-[var(--kreeda-surface)] border border-[#FF5500]/30 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-black/10 dark:border-white/10">
              <div>
                <span className="text-xs uppercase font-bold text-[var(--kreeda-text-muted)]">Application Tracking Number</span>
                <div className="font-bebas text-2xl text-[#FF5500] tracking-wider mt-0.5">
                  {submittedApp.applicationId}
                </div>
              </div>

              <div className="flex items-center gap-2">
                {assignedTeam?.crestImage && (
                  <img src={assignedTeam.crestImage} alt="Franchise" className="w-10 h-10 rounded-xl object-cover border border-black/10 dark:border-white/10" />
                )}
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-black uppercase font-bebas tracking-wider">
                  {submittedApp.status}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-xs text-[var(--kreeda-text-muted)] block font-medium">Applicant Name</span>
                <span className="font-bold text-[var(--kreeda-text-primary)] text-base">{submittedApp.fullName}</span>
              </div>
              <div>
                <span className="text-xs text-[var(--kreeda-text-muted)] block font-medium">Primary Skill</span>
                <span className="font-bold text-[#F59E0B] text-base">{submittedApp.primaryRole}</span>
              </div>
              <div>
                <span className="text-xs text-[var(--kreeda-text-muted)] block font-medium">Permanent District</span>
                <span className="font-bold text-[var(--kreeda-text-primary)]">{submittedApp.district} ({submittedApp.state})</span>
              </div>
              <div>
                <span className="text-xs text-[var(--kreeda-text-muted)] block font-medium">Assigned Franchise</span>
                <span className="font-bold text-[#FF5500]">{submittedApp.assignedFranchiseName}</span>
              </div>
            </div>

            {/* Trial Details */}
            <div className="p-4 rounded-xl bg-[#FF5500]/10 border border-[#FF5500]/30 space-y-1">
              <div className="font-bebas text-base text-[#F59E0B] tracking-wider uppercase">
                SELECTION TRIAL CALL-UP
              </div>
              <div className="text-[var(--kreeda-text-primary)] font-bold text-sm">{submittedApp.trialVenue}</div>
              <div className="text-[var(--kreeda-text-secondary)] text-xs">Reporting Slot: {submittedApp.trialDate}</div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              onClick={() => window.print()}
              className="flex-1 py-3 px-5 rounded-2xl bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/15 text-[var(--kreeda-text-primary)] font-bold text-sm flex items-center justify-center gap-2 border border-black/10 dark:border-white/15 transition btn-tactile"
            >
              <Download className="w-4 h-4 text-[#FF5500]" />
              <span>Print Acknowledgment Slip</span>
            </button>

            <button
              onClick={() => navigateToTrackerWithId(submittedApp.applicationId)}
              className="flex-1 py-3 px-6 rounded-2xl bg-gradient-to-r from-[#FF5500] via-[#F59E0B] to-[#FF5500] hover:brightness-110 text-[#070B14] font-bebas text-lg tracking-wider uppercase font-black flex items-center justify-center gap-2 shadow-orange-glow transition btn-tactile"
            >
              <span>Track Live Status</span>
              <ArrowRight className="w-5 h-5 text-[#070B14]" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full pt-3 sm:pt-5 pb-10 sm:pb-14 px-4 sm:px-8 max-w-4xl mx-auto space-y-6 sm:space-y-8">
      <div className="glass-card p-6 sm:p-10 space-y-8 border-2 border-[#FF5500]/25 shadow-2xl">
        
        {/* Header */}
        <div>
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-widest text-[#FF5500] mb-1">
            <ShieldCheck className="w-4 h-4 text-[#F59E0B]" />
            <span>Official Player Enrollment Portal</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bebas text-[var(--kreeda-text-primary)] tracking-wide">
            PLAYER REGISTRATION &amp; TRIALS
          </h2>
          <p className="text-sm sm:text-base text-[var(--kreeda-text-secondary)] mt-1 leading-relaxed">
            Open for all residents of Andhra Pradesh &amp; Telangana. Structured multi-step registration with automated district catchment mapping.
          </p>
        </div>

        {/* Step Progress Bar */}
        <div className="space-y-2.5">
          <div className="flex items-center justify-between text-xs sm:text-sm font-bold text-[var(--kreeda-text-primary)]">
            <span>Step {currentStep} of {totalSteps}: {
              currentStep === 1 ? 'Mobile Verification' :
              currentStep === 2 ? 'Personal Details' :
              currentStep === 3 ? 'District & Catchment' :
              currentStep === 4 ? 'Cricket Skills & Roles' :
              currentStep === 5 ? 'Video & Documents' : 'Declarations & Confirmation'
            }</span>
            <span className="text-[#FF5500] font-bebas text-base">{Math.round((currentStep / totalSteps) * 100)}%</span>
          </div>
          <div className="w-full h-2 bg-black/5 dark:bg-white/10 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-[#FF5500] via-[#F59E0B] to-[#FFFFFF] transition-all duration-300"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            />
          </div>
        </div>

        {/* Form Wizard Body */}
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* STEP 1: Mobile OTP Verification */}
          {currentStep === 1 && (
            <div className="space-y-5 animate-in fade-in duration-200">
              <div className="p-4 rounded-2xl bg-[#FF5500]/10 border border-[#FF5500]/30 text-sm text-[var(--kreeda-text-secondary)] space-y-1">
                <span className="font-bold text-[#F59E0B]">SMS Authentication: </span>
                <span>Enter your 10-digit mobile number to verify applicant authenticity.</span>
              </div>

              <div>
                <label className="block text-sm font-bold text-[var(--kreeda-text-primary)] mb-2">
                  Mobile Number (10 Digits) *
                </label>
                <div className="flex flex-col sm:flex-row gap-2.5">
                  <div className="flex gap-2 flex-1 min-w-0">
                    <div className="flex items-center px-3.5 sm:px-4 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-sm font-bold text-[var(--kreeda-text-secondary)] flex-shrink-0">
                      +91
                    </div>
                    <input
                      type="tel"
                      maxLength={10}
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value.replace(/\D/g, ''))}
                      placeholder="98490 12345"
                      className="w-full min-w-0 px-4 py-3 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-[var(--kreeda-text-primary)] placeholder-[var(--kreeda-text-muted)] text-sm sm:text-base focus:outline-none focus:border-[#FF5500]"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={handleSendOtp}
                    className="w-full sm:w-auto px-5 py-3 rounded-2xl bg-gradient-to-r from-[#FF5500] to-[#F59E0B] text-[#070B14] font-bebas text-base uppercase tracking-wider font-black transition btn-tactile shadow-orange-glow whitespace-nowrap"
                  >
                    {otpSent ? 'Resend' : 'Send OTP'}
                  </button>
                </div>
              </div>

              {otpSent && (
                <div className="space-y-3 p-5 rounded-2xl bg-[var(--kreeda-surface-elevated)] border border-black/10 dark:border-white/10">
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-bold text-[var(--kreeda-text-primary)]">
                      Enter 4-Digit OTP Code
                    </label>
                    <span className="text-xs text-emerald-400 font-mono font-bold">
                      (Simulated OTP: 5892)
                    </span>
                  </div>
                  <div className="flex gap-2.5">
                    <input
                      type="text"
                      maxLength={4}
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      placeholder="5892"
                      className="flex-1 px-4 py-3 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-center font-mono text-xl tracking-widest text-[var(--kreeda-text-primary)] focus:outline-none focus:border-[#F59E0B]"
                    />
                    <button
                      type="button"
                      onClick={handleVerifyOtp}
                      className="px-5 py-3 rounded-2xl bg-gradient-to-r from-[#FF5500] to-[#FF661A] hover:brightness-110 text-white shadow-orange-glow font-bebas text-base uppercase tracking-wider font-bold transition btn-tactile"
                    >
                      {otpVerified ? 'Verified ✓' : 'Verify OTP'}
                    </button>
                  </div>
                  {otpVerified && (
                    <div className="flex items-center gap-2 text-sm text-emerald-400 font-bold pt-1">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Mobile Number Verified Successfully!</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* STEP 2: Personal Details */}
          {currentStep === 2 && (
            <div className="space-y-5 animate-in fade-in duration-200">
              <div>
                <label className="block text-sm font-bold text-[var(--kreeda-text-primary)] mb-2">
                  Full Legal Name (as per Govt ID) *
                </label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Tarun Teja Varma"
                  className="w-full px-4 py-3 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-[var(--kreeda-text-primary)] placeholder-[var(--kreeda-text-muted)] text-sm sm:text-base focus:outline-none focus:border-[#FF5500]"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-[var(--kreeda-text-primary)] mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="applicant@gmail.com"
                    className="w-full px-4 py-3 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-[var(--kreeda-text-primary)] placeholder-[var(--kreeda-text-muted)] text-sm sm:text-base focus:outline-none focus:border-[#FF5500]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-[var(--kreeda-text-primary)] mb-2">
                    Date of Birth *
                  </label>
                  <input
                    type="date"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-[var(--kreeda-text-primary)] text-sm sm:text-base focus:outline-none focus:border-[#FF5500]"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-[var(--kreeda-text-primary)] mb-2">
                  Gender *
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {['Male', 'Female'].map((g) => (
                    <button
                      key={g}
                      type="button"
                      onClick={() => setGender(g)}
                      className={`py-3 px-4 rounded-2xl text-sm font-bold transition-all border btn-tactile ${
                        gender === g
                          ? 'bg-[#FF5500]/20 border-[#FF5500] text-[#FF5500] font-black'
                          : 'bg-black/5 dark:bg-white/5 border-black/10 dark:border-white/10 text-[var(--kreeda-text-secondary)] hover:text-[var(--kreeda-text-primary)]'
                      }`}
                    >
                      {g}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: Address & Automated Catchment Engine */}
          {currentStep === 3 && (
            <div className="space-y-5 animate-in fade-in duration-200">
              <div className="p-4 rounded-2xl bg-[#FF5500]/10 border border-[#FF5500]/25 text-sm text-[var(--kreeda-text-secondary)]">
                <span className="font-bold text-[#FF5500]">Automated Catchment Engine: </span>
                <span>Select your native district to auto-assign your official franchise, regional zone, and open selection trial hub.</span>
              </div>

              <div>
                <label className="block text-sm font-bold text-[var(--kreeda-text-primary)] mb-2">
                  State of Permanent Residence *
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {(['Andhra Pradesh', 'Telangana'] as const).map((st) => (
                    <button
                      key={st}
                      type="button"
                      onClick={() => {
                        setState(st);
                        const firstDistrict = ZONES_AND_DISTRICTS.find((z) => z.state === st)?.districts[0] || '';
                        setDistrict(firstDistrict);
                      }}
                      className={`py-3 px-4 rounded-2xl text-sm font-bold transition border btn-tactile ${
                        state === st
                          ? 'bg-gradient-to-r from-[#FF5500] to-[#F59E0B] text-[#070B14] font-black shadow-orange-glow'
                          : 'bg-black/5 dark:bg-white/5 border-black/10 dark:border-white/10 text-[var(--kreeda-text-secondary)] hover:text-[var(--kreeda-text-primary)]'
                      }`}
                    >
                      {st}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-[var(--kreeda-text-primary)] mb-2">
                  Native / Permanent District *
                </label>
                <select
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl bg-[var(--kreeda-surface)] border border-black/10 dark:border-white/15 text-[var(--kreeda-text-primary)] text-sm sm:text-base focus:outline-none focus:border-[#FF5500]"
                >
                  {ZONES_AND_DISTRICTS.filter((z) => z.state === state).flatMap((z) =>
                    z.districts.map((d) => (
                      <option key={d} value={d}>
                        {d} ({z.zoneName})
                      </option>
                    ))
                  )}
                </select>
              </div>

              {/* Catchment Display Box with Kreeda Crest */}
              <div className="p-5 rounded-2xl bg-[var(--kreeda-surface-elevated)] border-2 border-[#FF5500]/40 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-[#F59E0B] uppercase tracking-wider">
                  <Sparkles className="w-4 h-4 text-[#FF5500]" />
                  <span>Assigned Regional Franchise (DPR Table 19 &amp; 20)</span>
                </div>

                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    {assignedTeam?.crestImage && (
                      <div className="w-14 h-14 rounded-2xl overflow-hidden border border-white/20 shadow-md flex-shrink-0">
                        <img src={assignedTeam.crestImage} alt="Crest" className="w-full h-full object-cover" />
                      </div>
                    )}
                    <div>
                      <div className="font-bebas text-2xl sm:text-3xl text-[var(--kreeda-text-primary)]">
                        {catchment.franchiseName}
                      </div>
                      <div className="text-xs text-[var(--kreeda-text-muted)]">
                        Zone: {catchment.zoneName}
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-xs text-[var(--kreeda-text-muted)] block font-medium">Trial Hub</span>
                    <span className="text-sm sm:text-base font-bold text-[#FF5500]">{catchment.hub}</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-black/10 dark:border-white/10 flex items-center gap-2 text-xs text-emerald-400 font-bold">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>100% Catchment Match Verified</span>
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: Cricket Profile */}
          {currentStep === 4 && (
            <div className="space-y-5 animate-in fade-in duration-200">
              <div>
                <label className="block text-sm font-bold text-[var(--kreeda-text-primary)] mb-2">
                  Primary Cricket Role *
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {(['Batter', 'Fast Bowler', 'Spin Bowler', 'All-Rounder', 'Wicketkeeper'] as PlayerRole[]).map((role) => (
                    <button
                      key={role}
                      type="button"
                      onClick={() => setPrimaryRole(role)}
                      className={`py-3 px-3 rounded-2xl text-xs sm:text-sm font-bold transition border btn-tactile ${
                        primaryRole === role
                          ? 'bg-[#FF5500]/20 border-[#FF5500] text-[#FF5500] font-black'
                          : 'bg-black/5 dark:bg-white/5 border-black/10 dark:border-white/10 text-[var(--kreeda-text-secondary)] hover:text-[var(--kreeda-text-primary)]'
                      }`}
                    >
                      {role}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-[var(--kreeda-text-primary)] mb-2">
                    Batting Style *
                  </label>
                  <select
                    value={battingHand}
                    onChange={(e) => setBattingHand(e.target.value as any)}
                    className="w-full px-4 py-3 rounded-2xl bg-[var(--kreeda-surface)] border border-black/10 dark:border-white/15 text-[var(--kreeda-text-primary)] text-sm focus:outline-none focus:border-[#FF5500]"
                  >
                    <option value="Right-hand bat">Right-hand bat</option>
                    <option value="Left-hand bat">Left-hand bat</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-[var(--kreeda-text-primary)] mb-2">
                    Bowling Style
                  </label>
                  <input
                    type="text"
                    value={bowlingStyle}
                    onChange={(e) => setBowlingStyle(e.target.value)}
                    placeholder="e.g. Right-arm fast medium"
                    className="w-full px-4 py-3 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-[var(--kreeda-text-primary)] placeholder-[var(--kreeda-text-muted)] text-sm focus:outline-none focus:border-[#FF5500]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-[var(--kreeda-text-primary)] mb-2">
                  CricHeroes Profile / Player Link (Optional)
                </label>
                <input
                  type="url"
                  value={cricHeroesProfile}
                  onChange={(e) => setCricHeroesProfile(e.target.value)}
                  placeholder="https://cricheroes.in/player-profile/..."
                  className="w-full px-4 py-3 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-[var(--kreeda-text-primary)] placeholder-[var(--kreeda-text-muted)] text-sm focus:outline-none focus:border-[#FF5500]"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-[var(--kreeda-text-primary)] mb-2">
                  Past Match &amp; Tournament Experience
                </label>
                <textarea
                  rows={3}
                  value={previousExperience}
                  onChange={(e) => setPreviousExperience(e.target.value)}
                  placeholder="Mention district league, local tournaments, college cricket, or cricket academy..."
                  className="w-full px-4 py-3 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-[var(--kreeda-text-primary)] placeholder-[var(--kreeda-text-muted)] text-sm focus:outline-none focus:border-[#FF5500]"
                />
              </div>
            </div>
          )}

          {/* STEP 5: Video Evidence */}
          {currentStep === 5 && (
            <div className="space-y-5 animate-in fade-in duration-200">
              <div className="p-4 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-sm text-[var(--kreeda-text-secondary)]">
                <span className="font-bold text-[#F59E0B]">Video Evidence (Recommended): </span>
                <span>Provide a short video clip of your batting stroke play or bowling run-up to fast-track trial scouting.</span>
              </div>

              <div>
                <label className="block text-sm font-bold text-[var(--kreeda-text-primary)] mb-2">
                  YouTube / Google Drive Video Link
                </label>
                <div className="relative">
                  <Video className="w-5 h-5 text-[var(--kreeda-text-muted)] absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    type="url"
                    value={videoHighlightsUrl}
                    onChange={(e) => setVideoHighlightsUrl(e.target.value)}
                    placeholder="https://youtube.com/watch?v=... or Drive link"
                    className="w-full pl-12 pr-4 py-3 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-[var(--kreeda-text-primary)] placeholder-[var(--kreeda-text-muted)] text-sm focus:outline-none focus:border-[#FF5500]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-[var(--kreeda-text-primary)] mb-2">
                  Aadhaar / Govt ID Proof (Verification)
                </label>
                <div className="border border-dashed border-[#FF5500]/40 rounded-2xl p-6 text-center hover:border-[#FF5500] transition">
                  <Upload className="w-8 h-8 text-[#FF5500] mx-auto mb-2" />
                  <div className="text-sm font-bold text-[var(--kreeda-text-primary)]">
                    {aadhaarDocName}
                  </div>
                  <div className="text-xs text-[var(--kreeda-text-muted)] mt-1">
                    Verified residential proof for {district} district
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 6: Declarations & Submit */}
          {currentStep === 6 && (
            <div className="space-y-5 animate-in fade-in duration-200">
              <div className="p-5 rounded-2xl bg-[var(--kreeda-surface-elevated)] border border-black/10 dark:border-white/10 space-y-3 text-sm">
                <div className="font-bebas text-lg text-[var(--kreeda-text-primary)] flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#F59E0B]" />
                  <span>SUMMARY OF ENROLLMENT</span>
                </div>
                <div className="grid grid-cols-2 gap-3 text-xs sm:text-sm text-[var(--kreeda-text-secondary)] pt-1">
                  <div>Name: <strong className="text-[var(--kreeda-text-primary)]">{fullName}</strong></div>
                  <div>Mobile: <strong className="text-[var(--kreeda-text-primary)]">{mobile}</strong></div>
                  <div>District: <strong className="text-[var(--kreeda-text-primary)]">{district}</strong></div>
                  <div>Franchise: <strong className="text-[#F59E0B]">{catchment.franchiseName}</strong></div>
                  <div>Primary Skill: <strong className="text-[#FF5500]">{primaryRole}</strong></div>
                  <div>Trial Hub: <strong className="text-[var(--kreeda-text-primary)]">{catchment.hub}</strong></div>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <label className="flex items-start gap-3 cursor-pointer text-xs sm:text-sm text-[var(--kreeda-text-secondary)]">
                  <input
                    type="checkbox"
                    checked={agreedConsent}
                    onChange={(e) => setAgreedConsent(e.target.checked)}
                    className="mt-1 rounded border-white/20 text-[#FF5500] focus:ring-0"
                  />
                  <span className="leading-relaxed">
                    I declare that all personal and district information submitted is accurate and verifiable against my Aadhaar identity. I agree to abide by the ICL T10 Anti-Corruption and Fair Play Code.
                  </span>
                </label>
              </div>
            </div>
          )}

          {/* Wizard Action Buttons */}
          <div className="flex items-center justify-between pt-6 border-t border-black/10 dark:border-white/10">
            {currentStep > 1 ? (
              <button
                type="button"
                onClick={handlePrevStep}
                className="py-3 px-5 rounded-2xl bg-black/5 dark:bg-white/5 hover:bg-black/5 dark:bg-white/10 text-[var(--kreeda-text-primary)] font-bold text-sm flex items-center gap-2 border border-black/10 dark:border-white/10 transition btn-tactile"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </button>
            ) : <div />}

            {currentStep < totalSteps ? (
              <button
                type="button"
                onClick={handleNextStep}
                className="py-3 px-6 rounded-2xl bg-gradient-to-r from-[#FF5500] to-[#F59E0B] hover:brightness-110 text-[#070B14] font-bebas text-lg tracking-wider uppercase font-black flex items-center gap-2 shadow-orange-glow transition btn-tactile"
              >
                <span>Continue</span>
                <ArrowRight className="w-5 h-5 text-[#070B14]" />
              </button>
            ) : (
              <button
                type="submit"
                className="py-3 px-8 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:brightness-110 text-slate-950 font-bebas text-lg tracking-wider uppercase font-black flex items-center gap-2 shadow-lg shadow-emerald-500/25 transition btn-tactile"
              >
                <CheckCircle2 className="w-5 h-5" />
                <span>Submit &amp; Generate ID</span>
              </button>
            )}
          </div>

        </form>

      </div>
    </div>
  );
};
