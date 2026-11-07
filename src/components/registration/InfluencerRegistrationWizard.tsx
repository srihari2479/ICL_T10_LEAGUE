import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { InfluencerApplication, StateType } from '../../types';
import confetti from 'canvas-confetti';
import { getAssetUrl } from '../../utils/assetHelper';
import { 
  Flame, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  MapPin, 
  Eye, 
  Users,
  Video
} from 'lucide-react';

export const InfluencerRegistrationWizard: React.FC = () => {
  const { addInfluencerApplication, navigateToTrackerWithId } = useApp();

  const [fullName, setFullName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('Hyderabad');
  const [state, setState] = useState<StateType>('Telangana');

  const [primaryPlatform, setPrimaryPlatform] = useState<'Instagram' | 'YouTube' | 'Facebook' | 'Twitter/X'>('Instagram');
  const [platformHandle, setPlatformHandle] = useState('@');
  const [followerCount, setFollowerCount] = useState('150K');
  const [avgReelViews, setAvgReelViews] = useState('100K - 250K');
  const [contentNiche, setContentNiche] = useState<InfluencerApplication['contentNiche']>('Cricket Commentary');
  const [collaborationPreference, setCollaborationPreference] = useState<InfluencerApplication['collaborationPreference']>('Matchday Live Dugout Presenter');

  const [submittedApp, setSubmittedApp] = useState<InfluencerApplication | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !mobile || !platformHandle) {
      alert('Please fill out all required creator fields');
      return;
    }

    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const appId = `ICL-INF-2026-${randomNum}`;

    const newCreatorApp: InfluencerApplication = {
      applicationId: appId,
      fullName,
      mobile,
      email: email || `${fullName.toLowerCase().replace(/\s+/g, '')}@creator.com`,
      city,
      state,
      primaryPlatform,
      platformHandle,
      followerCount,
      avgReelViews,
      contentNiche,
      collaborationPreference,
      status: 'VERIFIED',
      submittedAt: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })
    };

    addInfluencerApplication(newCreatorApp);
    setSubmittedApp(newCreatorApp);

    try {
      confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
    } catch (e) {}
  };

  if (submittedApp) {
    return (
      <div className="w-full pt-3 sm:pt-5 pb-12 px-4 sm:px-8 max-w-3xl mx-auto">
        <div className="glass-card p-8 border-2 border-black/10 dark:border-white/15 relative overflow-hidden space-y-6 shadow-xl">
          <div className="text-center space-y-2">
            <div className="w-16 h-16 rounded-2xl bg-[#FF5500]/15 border border-[#FF5500]/30 text-[#FF5500] flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bebas text-[var(--kreeda-text-primary)] tracking-wide">
              CREATOR ACCREDITATION SUBMITTED!
            </h2>
            <p className="text-sm text-[var(--kreeda-text-secondary)]">
              Your digital influencer accreditation request is now verified for media review.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[var(--kreeda-surface)] border border-black/10 dark:border-white/10 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-black/10 dark:border-white/10">
              <div>
                <span className="text-xs uppercase font-bold text-[var(--kreeda-text-muted)]">Creator Tracking ID</span>
                <div className="font-bebas text-2xl text-[#FF5500] tracking-wider mt-0.5">
                  {submittedApp.applicationId}
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-black uppercase font-bebas tracking-wider">
                {submittedApp.status}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-xs text-[var(--kreeda-text-muted)] block font-medium">Creator / Channel Name</span>
                <span className="font-bold text-[var(--kreeda-text-primary)] text-base">{submittedApp.fullName}</span>
              </div>
              <div>
                <span className="text-xs text-[var(--kreeda-text-muted)] block font-medium">Platform &amp; Handle</span>
                <span className="font-bold text-[#FF5500] text-base">{submittedApp.primaryPlatform} ({submittedApp.platformHandle})</span>
              </div>
              <div>
                <span className="text-xs text-[var(--kreeda-text-muted)] block font-medium">Audience Reach</span>
                <span className="font-bold text-[#F59E0B] text-base">{submittedApp.followerCount} Followers</span>
              </div>
              <div>
                <span className="text-xs text-[var(--kreeda-text-muted)] block font-medium">Role Preference</span>
                <span className="font-bold text-[var(--kreeda-text-primary)]">{submittedApp.collaborationPreference}</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => navigateToTrackerWithId(submittedApp.applicationId)}
            className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-[#FF5500] to-[#FF661A] hover:brightness-110 text-white font-bebas text-lg tracking-wider uppercase font-black flex items-center justify-center gap-2 shadow-orange-glow transition btn-tactile"
          >
            <span>Track Creator Accreditation Status</span>
            <ArrowRight className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full pt-3 sm:pt-5 pb-10 sm:pb-14 px-4 sm:px-8 max-w-4xl mx-auto space-y-6 sm:space-y-8">
      <div className="glass-card p-6 sm:p-10 space-y-8 border-2 border-black/10 dark:border-white/15 shadow-xl">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-black/10 dark:border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-widest text-[#FF5500] mb-1">
              <Flame className="w-4 h-4 text-[#F59E0B]" />
              <span>Official Creator Program</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bebas text-[var(--kreeda-text-primary)] tracking-wide">
              INFLUENCER &amp; CREATOR PORTAL
            </h2>
            <p className="text-sm sm:text-base text-[var(--kreeda-text-secondary)] mt-1 leading-relaxed">
              Are you a content creator, vlogger, or cricket analyst? Join the ICL T10 dugout creator league for official credentials.
            </p>
          </div>

          {/* Kreeda VIP Pass Badge Thumbnail */}
          <div className="w-16 h-16 rounded-2xl overflow-hidden border border-[#F59E0B]/40 shadow-sm flex-shrink-0 hidden sm:block">
            <img src={getAssetUrl('assets/kreeda/kreeda_vip_pass_badge.jpg')} alt="VIP Pass" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Creator Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-bold text-[var(--kreeda-text-secondary)] mb-2">
                Full Name / Channel Name *
              </label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="e.g. Ramesh Reddy (Telugu Cricket Talks)"
                className="w-full px-4 py-3 rounded-2xl bg-[var(--kreeda-surface)] border border-black/10 dark:border-white/10 text-[var(--kreeda-text-primary)] placeholder-[var(--kreeda-text-muted)] text-sm focus:outline-none focus:border-[#FF5500]"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-[var(--kreeda-text-secondary)] mb-2">
                Mobile Number (WhatsApp) *
              </label>
              <input
                type="tel"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                placeholder="98490 12345"
                className="w-full px-4 py-3 rounded-2xl bg-[var(--kreeda-surface)] border border-black/10 dark:border-white/10 text-[var(--kreeda-text-primary)] placeholder-[var(--kreeda-text-muted)] text-sm focus:outline-none focus:border-[#FF5500]"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-bold text-[var(--kreeda-text-secondary)] mb-2">
                Primary Platform *
              </label>
              <select
                value={primaryPlatform}
                onChange={(e) => setPrimaryPlatform(e.target.value as any)}
                className="w-full px-4 py-3 rounded-2xl bg-[var(--kreeda-surface)] border border-black/10 dark:border-white/10 text-[var(--kreeda-text-primary)] text-sm focus:outline-none focus:border-[#FF5500]"
              >
                <option value="Instagram">Instagram</option>
                <option value="YouTube">YouTube</option>
                <option value="Twitter/X">Twitter / X</option>
                <option value="Facebook">Facebook</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-bold text-[var(--kreeda-text-secondary)] mb-2">
                Handle / Channel URL *
              </label>
              <input
                type="text"
                value={platformHandle}
                onChange={(e) => setPlatformHandle(e.target.value)}
                placeholder="@mycreatorshow"
                className="w-full px-4 py-3 rounded-2xl bg-[var(--kreeda-surface)] border border-black/10 dark:border-white/10 text-[var(--kreeda-text-primary)] placeholder-[var(--kreeda-text-muted)] text-sm focus:outline-none focus:border-[#FF5500]"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-[var(--kreeda-text-secondary)] mb-2">
                Follower Count *
              </label>
              <input
                type="text"
                value={followerCount}
                onChange={(e) => setFollowerCount(e.target.value)}
                placeholder="e.g. 150K"
                className="w-full px-4 py-3 rounded-2xl bg-[var(--kreeda-surface)] border border-black/10 dark:border-white/10 text-[var(--kreeda-text-primary)] placeholder-[var(--kreeda-text-muted)] text-sm focus:outline-none focus:border-[#FF5500]"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-bold text-[var(--kreeda-text-secondary)] mb-2">
                Content Niche / Style *
              </label>
              <select
                value={contentNiche}
                onChange={(e) => setContentNiche(e.target.value as any)}
                className="w-full px-4 py-3 rounded-2xl bg-[var(--kreeda-surface)] border border-black/10 dark:border-white/10 text-[var(--kreeda-text-primary)] text-sm focus:outline-none focus:border-[#FF5500]"
              >
                <option value="Cricket Commentary">Cricket Commentary &amp; Tactical Analysis</option>
                <option value="Comedy & Entertainment">Comedy, Roasts &amp; Entertainment</option>
                <option value="Vlogs & Lifestyle">Stadium Vlogs &amp; Fan Atmosphere</option>
                <option value="Youth & Fan Zone">Youth Banter &amp; Fan Zone</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-bold text-[var(--kreeda-text-secondary)] mb-2">
                Preferred Collaboration Role *
              </label>
              <select
                value={collaborationPreference}
                onChange={(e) => setCollaborationPreference(e.target.value as any)}
                className="w-full px-4 py-3 rounded-2xl bg-[var(--kreeda-surface)] border border-black/10 dark:border-white/10 text-[var(--kreeda-text-primary)] text-sm focus:outline-none focus:border-[#FF5500]"
              >
                <option value="Matchday Live Dugout Presenter">Matchday Live Dugout Presenter</option>
                <option value="Digital Team Creator">Dedicated Franchise Digital Creator</option>
                <option value="Fan Hub Host">Fan Hub &amp; Stadium Host</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-bold text-[var(--kreeda-text-secondary)] mb-2">
                Base City
              </label>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="e.g. Hyderabad, Vizag, Vijayawada, Warangal"
                className="w-full px-4 py-3 rounded-2xl bg-[var(--kreeda-surface)] border border-black/10 dark:border-white/10 text-[var(--kreeda-text-primary)] placeholder-[var(--kreeda-text-muted)] text-sm focus:outline-none focus:border-[#FF5500]"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-[var(--kreeda-text-secondary)] mb-2">
                State
              </label>
              <select
                value={state}
                onChange={(e) => setState(e.target.value as any)}
                className="w-full px-4 py-3 rounded-2xl bg-[var(--kreeda-surface)] border border-black/10 dark:border-white/10 text-[var(--kreeda-text-primary)] text-sm focus:outline-none focus:border-[#FF5500]"
              >
                <option value="Telangana">Telangana</option>
                <option value="Andhra Pradesh">Andhra Pradesh</option>
              </select>
            </div>
          </div>

          <div className="pt-4 border-t border-black/10 dark:border-white/10">
            <button
              type="submit"
              className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#FF5500] to-[#FF661A] hover:brightness-110 text-white font-bebas text-xl tracking-wider uppercase font-black flex items-center justify-center gap-2.5 shadow-orange-glow transition btn-tactile"
            >
              <Flame className="w-5 h-5 text-white" />
              <span>Submit Creator Application</span>
            </button>
          </div>

        </form>

      </div>
    </div>
  );
};
