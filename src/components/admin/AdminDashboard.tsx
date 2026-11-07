import React, { useState } from 'react';
import { useApp, AdminRole } from '../../context/AppContext';
import { FRANCHISES_DATA } from '../../data/franchisesData';
import { GateScannerModal } from './GateScannerModal';
import { 
  ShieldCheck, 
  Users, 
  Ticket, 
  Flame, 
  Search, 
  Filter, 
  CheckCircle2, 
  XCircle, 
  Calendar, 
  QrCode, 
  Eye, 
  Download,
  AlertCircle
} from 'lucide-react';

export const AdminDashboard: React.FC = () => {
  const { 
    adminRole, 
    setAdminRole, 
    playerApplications, 
    updatePlayerStatus, 
    influencerApplications, 
    updateInfluencerStatus, 
    ticketBookings,
    selectedFranchiseFilter,
    setSelectedFranchiseFilter,
    showToast
  } = useApp();

  const [activeTab, setActiveTab] = useState<'PLAYERS' | 'INFLUENCERS' | 'TICKETS'>('PLAYERS');
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL');
  const [isScannerOpen, setIsScannerOpen] = useState(false);

  const handleRoleChange = (role: AdminRole) => {
    setAdminRole(role);
    showToast('info', 'Active Admin Role Switched', `Logged in as: ${role.replace('_', ' ')}`);
  };

  const filteredPlayers = playerApplications.filter((app) => {
    const matchesFranchise = selectedFranchiseFilter === 'all' || app.assignedFranchiseId === selectedFranchiseFilter;
    const matchesStatus = statusFilter === 'ALL' || app.status === statusFilter;
    const matchesSearch = app.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          app.applicationId.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          app.district.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFranchise && matchesStatus && matchesSearch;
  });

  const totalTicketRevenue = ticketBookings.reduce((sum, b) => sum + b.totalAmount, 0);

  return (
    <div className="w-full pt-3 sm:pt-5 pb-10 sm:pb-14 px-4 sm:px-8 lg:px-12 xl:px-16 space-y-6 sm:space-y-8">
      
      {/* Top Header & Role Switcher */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 pb-5 border-b border-black/10 dark:border-white/10">
        <div>
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-widest text-[#FF5500] mb-1">
            <ShieldCheck className="w-4 h-4 text-[#F59E0B]" />
            <span>ICL T10 Operations &amp; Scrutiny Console</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bebas text-[var(--kreeda-text-primary)] tracking-wide">
            LEAGUE ADMINISTRATION
          </h1>
        </div>

        {/* Role Switcher Pills */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs sm:text-sm text-[var(--kreeda-text-secondary)] font-bold">Active Role:</span>
          {(['SUPER_ADMIN', 'FRANCHISE_MANAGER', 'VERIFICATION_OFFICER'] as AdminRole[]).map((role) => (
            <button
              key={role}
              onClick={() => handleRoleChange(role)}
              className={`px-3 sm:px-4 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all border btn-tactile ${
                adminRole === role
                  ? 'bg-gradient-to-r from-[#FF5500] to-[#FF661A] text-white font-black shadow-orange-glow border-transparent'
                  : 'bg-black/5 dark:bg-white/5 border-black/10 dark:border-white/10 text-[var(--kreeda-text-secondary)] hover:text-[var(--kreeda-text-primary)]'
              }`}
            >
              {role === 'SUPER_ADMIN' ? 'Super Admin' : role === 'FRANCHISE_MANAGER' ? 'Franchise Manager' : 'Scrutiny Officer'}
            </button>
          ))}
        </div>
      </div>

      {/* KPI Stats Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 sm:gap-4">
        <div className="glass-card p-4 space-y-1 border-2 border-[#FF5500]/30 shadow-sm dark:shadow-tactile rounded-xl">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FF5500]">Player Apps</span>
            <Users className="w-4 h-4 text-[#FF5500]" />
          </div>
          <div className="font-bebas text-2xl sm:text-3xl text-[var(--kreeda-text-primary)]">
            {playerApplications.length}
          </div>
          <div className="text-[11px] text-[var(--kreeda-text-muted)]">Across 45+ Districts</div>
        </div>

        <div className="glass-card p-4 space-y-1 border-2 border-[#F59E0B]/30 shadow-sm dark:shadow-tactile rounded-xl">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F59E0B]">Creators</span>
            <Flame className="w-4 h-4 text-[#F59E0B]" />
          </div>
          <div className="font-bebas text-2xl sm:text-3xl text-[var(--kreeda-text-primary)]">
            {influencerApplications.length}
          </div>
          <div className="text-[11px] text-[var(--kreeda-text-muted)]">Regional Influencers</div>
        </div>

        <div className="glass-card p-4 space-y-1 border-2 border-emerald-500/30 shadow-sm dark:shadow-tactile rounded-xl">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">Tickets Issued</span>
            <Ticket className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
          </div>
          <div className="font-bebas text-2xl sm:text-3xl text-[var(--kreeda-text-primary)]">
            {ticketBookings.length}
          </div>
          <div className="text-[11px] text-[var(--kreeda-text-muted)]">₹{totalTicketRevenue.toLocaleString()} Total Revenue</div>
        </div>

        <div className="glass-card p-5 space-y-1.5 border-2 border-black/10 dark:border-white/10 shadow-sm dark:shadow-tactile">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--kreeda-text-primary)]">Turnstile Scanner</span>
            <QrCode className="w-4 h-4 text-[#FF5500]" />
          </div>
          <button
            onClick={() => setIsScannerOpen(true)}
            className="w-full py-2 px-3 rounded-xl bg-gradient-to-r from-[#FF5500] to-[#FF661A] text-white font-bebas text-base uppercase tracking-wider font-black transition mt-1.5 btn-tactile shadow-orange-glow"
          >
            Launch Scanner
          </button>
        </div>
      </div>

      {/* Tabs Switcher: Players vs Influencers vs Tickets */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
        <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-[var(--kreeda-surface)] border border-black/10 dark:border-white/10 shadow-sm">
          <button
            onClick={() => setActiveTab('PLAYERS')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition btn-tactile ${
              activeTab === 'PLAYERS'
                ? 'bg-gradient-to-r from-[#FF5500] to-[#FF661A] text-white font-black shadow-orange-glow'
                : 'text-[var(--kreeda-text-secondary)] hover:text-[var(--kreeda-text-primary)]'
            }`}
          >
            Player Applications ({playerApplications.length})
          </button>

          <button
            onClick={() => setActiveTab('INFLUENCERS')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition btn-tactile ${
              activeTab === 'INFLUENCERS'
                ? 'bg-gradient-to-r from-[#FF5500] to-[#FF661A] text-white font-black shadow-orange-glow'
                : 'text-[var(--kreeda-text-secondary)] hover:text-[var(--kreeda-text-primary)]'
            }`}
          >
            Creator Applications ({influencerApplications.length})
          </button>

          <button
            onClick={() => setActiveTab('TICKETS')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition btn-tactile ${
              activeTab === 'TICKETS'
                ? 'bg-gradient-to-r from-[#FF5500] to-[#FF661A] text-white font-black shadow-orange-glow'
                : 'text-[var(--kreeda-text-secondary)] hover:text-[var(--kreeda-text-primary)]'
            }`}
          >
            Issued Tickets ({ticketBookings.length})
          </button>
        </div>

        {/* Franchise Filter (if Super Admin or Manager) */}
        {activeTab === 'PLAYERS' && (
          <div className="flex items-center gap-2.5 text-sm">
            <span className="text-slate-400 font-medium">Franchise Filter:</span>
            <select
              value={selectedFranchiseFilter}
              onChange={(e) => setSelectedFranchiseFilter(e.target.value)}
              className="px-4 py-2 rounded-xl bg-[var(--kreeda-surface)] border border-black/10 dark:border-white/15 text-[var(--kreeda-text-primary)] text-sm focus:outline-none focus:border-[#FF5500]"
            >
              <option value="all">All 8 Franchises</option>
              {FRANCHISES_DATA.map((f) => (
                <option key={f.id} value={f.id}>
                  {f.name}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      {/* Search & Status Filter Strip */}
      <div className="glass-card p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 border border-black/10 dark:border-white/10 shadow-sm dark:shadow-tactile">
        <div className="relative flex-1 w-full sm:w-auto">
          <Search className="w-5 h-5 text-[var(--kreeda-text-muted)] absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by candidate name, application ID, or district..."
            className="w-full pl-12 pr-4 py-2.5 rounded-xl bg-[var(--kreeda-surface)] border border-black/10 dark:border-white/10 text-[var(--kreeda-text-primary)] placeholder-[var(--kreeda-text-muted)] text-sm focus:outline-none focus:border-[#FF5500]"
          />
        </div>

        {activeTab === 'PLAYERS' && (
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar w-full sm:w-auto">
            {['ALL', 'UNDER_REVIEW', 'VERIFIED', 'TRIAL_SCHEDULED', 'SHORTLISTED'].map((st) => (
              <button
                key={st}
                onClick={() => setStatusFilter(st)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                  statusFilter === st
                    ? 'bg-[#FF8A00] text-[#070B14] font-black'
                    : 'text-slate-300 hover:text-white bg-white/5'
                }`}
              >
                {st.replace('_', ' ')}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* TABLE 1: Players Management */}
      {activeTab === 'PLAYERS' && (
        <div className="glass-card overflow-hidden border-2 border-[#FFCD80]/20 shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="bg-white/[0.04] border-b border-white/10 text-slate-300 font-bold text-xs uppercase tracking-wider">
                  <th className="p-4">App ID</th>
                  <th className="p-4">Applicant Name</th>
                  <th className="p-4">District &amp; State</th>
                  <th className="p-4">Assigned Franchise</th>
                  <th className="p-4">Role</th>
                  <th className="p-4">Status</th>
                  <th className="p-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-slate-200">
                {filteredPlayers.map((app) => (
                  <tr key={app.applicationId} className="hover:bg-white/[0.03] transition">
                    <td className="p-4 font-mono font-bold text-[#FF8A00] whitespace-nowrap">
                      {app.applicationId}
                    </td>
                    <td className="p-4 font-bold text-white whitespace-nowrap">
                      {app.fullName}
                      <span className="block text-xs text-slate-400 font-normal">{app.mobile}</span>
                    </td>
                    <td className="p-4 whitespace-nowrap font-medium">
                      {app.district}
                      <span className="block text-xs text-slate-400">{app.state}</span>
                    </td>
                    <td className="p-4 font-bold text-[#F4B738] whitespace-nowrap">
                      {app.assignedFranchiseName}
                    </td>
                    <td className="p-4 whitespace-nowrap">
                      <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-semibold">
                        {app.primaryRole}
                      </span>
                    </td>
                    <td className="p-4 whitespace-nowrap">
                      <span className={`px-3 py-1 rounded-full text-xs font-black uppercase font-bebas tracking-wider ${
                        app.status === 'SHORTLISTED' ? 'bg-[#F59E0B]/20 text-[#F59E0B] border border-[#F59E0B]/30' :
                        app.status === 'TRIAL_SCHEDULED' ? 'bg-[#FF5500]/20 text-[#FF5500] border border-[#FF5500]/40' :
                        app.status === 'VERIFIED' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' :
                        'bg-slate-500/20 text-[var(--kreeda-text-muted)]'
                      }`}>
                        {app.status.replace('_', ' ')}
                      </span>
                    </td>
                    <td className="p-4 text-right whitespace-nowrap space-x-1.5">
                      {app.status !== 'TRIAL_SCHEDULED' && (
                        <button
                          onClick={() => updatePlayerStatus(app.applicationId, 'TRIAL_SCHEDULED')}
                          className="px-3 py-1.5 rounded-xl bg-[#FF5500]/15 hover:bg-[#FF5500]/25 border border-[#FF5500]/30 text-[#FF5500] text-xs font-bold transition btn-tactile"
                        >
                          Schedule Trial
                        </button>
                      )}
                      {app.status !== 'SHORTLISTED' && (
                        <button
                          onClick={() => updatePlayerStatus(app.applicationId, 'SHORTLISTED')}
                          className="px-3 py-1.5 rounded-xl bg-[#F59E0B]/15 hover:bg-[#F59E0B]/25 border border-[#F59E0B]/30 text-[#F59E0B] text-xs font-bold transition btn-tactile"
                        >
                          Shortlist
                        </button>
                      )}
                      {app.status !== 'REJECTED' && (
                        <button
                          onClick={() => updatePlayerStatus(app.applicationId, 'REJECTED')}
                          className="px-3 py-1.5 rounded-xl bg-rose-500/15 hover:bg-rose-500/25 border border-rose-500/30 text-rose-300 text-xs font-bold transition btn-tactile"
                        >
                          Reject
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TABLE 2: Creator Applications */}
      {activeTab === 'INFLUENCERS' && (
        <div className="glass-card overflow-hidden border-2 border-[#FFCD80]/20 shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="bg-white/[0.04] border-b border-white/10 text-slate-300 font-bold text-xs uppercase tracking-wider">
                  <th className="p-4">App ID</th>
                  <th className="p-4">Creator Name</th>
                  <th className="p-4">Platform &amp; Handle</th>
                  <th className="p-4">Reach</th>
                  <th className="p-4">Niche</th>
                  <th className="p-4">Status</th>
                  <th className="p-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-slate-200">
                {influencerApplications.map((inf) => (
                  <tr key={inf.applicationId} className="hover:bg-white/[0.03] transition">
                    <td className="p-4 font-mono font-bold text-[#F4B738] whitespace-nowrap">
                      {inf.applicationId}
                    </td>
                    <td className="p-4 font-bold text-white whitespace-nowrap">
                      {inf.fullName}
                      <span className="block text-xs text-slate-400 font-normal">{inf.mobile}</span>
                    </td>
                    <td className="p-4 whitespace-nowrap font-medium">
                      <span className="font-bold text-[#FF8A00]">{inf.primaryPlatform}</span>
                      <span className="block text-xs text-slate-400">{inf.platformHandle}</span>
                    </td>
                    <td className="p-4 font-black text-[#F4B738] whitespace-nowrap">
                      {inf.followerCount}
                    </td>
                    <td className="p-4 whitespace-nowrap text-slate-300">
                      {inf.contentNiche}
                    </td>
                    <td className="p-4 whitespace-nowrap">
                      <span className={`px-3 py-1 rounded-full text-xs font-black uppercase font-bebas tracking-wider ${
                        inf.status === 'SELECTED' ? 'bg-[#FF8A00]/25 text-[#FFFCC9] border border-[#FF8A00]/40' :
                        inf.status === 'VERIFIED' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' :
                        'bg-slate-500/20 text-slate-300'
                      }`}>
                        {inf.status}
                      </span>
                    </td>
                    <td className="p-4 text-right whitespace-nowrap space-x-1.5">
                      {inf.status !== 'SELECTED' && (
                        <button
                          onClick={() => updateInfluencerStatus(inf.applicationId, 'SELECTED')}
                          className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-[#FF8A00] to-[#F4B738] text-[#070B14] text-xs font-black uppercase font-bebas tracking-wider transition btn-tactile"
                        >
                          Accredit
                        </button>
                      )}
                      {inf.status !== 'REJECTED' && (
                        <button
                          onClick={() => updateInfluencerStatus(inf.applicationId, 'REJECTED')}
                          className="px-3 py-1.5 rounded-xl bg-rose-500/15 hover:bg-rose-500/25 border border-rose-500/30 text-rose-300 text-xs font-bold transition btn-tactile"
                        >
                          Decline
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TABLE 3: Tickets Sold & Gate Scans */}
      {activeTab === 'TICKETS' && (
        <div className="glass-card overflow-hidden border-2 border-[#FFCD80]/20 shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="bg-white/[0.04] border-b border-white/10 text-slate-300 font-bold text-xs uppercase tracking-wider">
                  <th className="p-4">Booking ID</th>
                  <th className="p-4">Match</th>
                  <th className="p-4">Fan Name</th>
                  <th className="p-4">Stand &amp; Seats</th>
                  <th className="p-4">Amount</th>
                  <th className="p-4">Turnstile Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-slate-200">
                {ticketBookings.map((tkt) => (
                  <tr key={tkt.bookingId} className="hover:bg-white/[0.03] transition">
                    <td className="p-4 font-mono font-bold text-[#FF8A00] whitespace-nowrap">
                      {tkt.bookingId}
                    </td>
                    <td className="p-4 font-bold text-white whitespace-nowrap">
                      {tkt.team1Short} vs {tkt.team2Short}
                      <span className="block text-xs text-slate-400 font-normal">{tkt.venue}</span>
                    </td>
                    <td className="p-4 whitespace-nowrap">
                      {tkt.fanName}
                      <span className="block text-xs text-slate-400 font-normal">{tkt.fanMobile}</span>
                    </td>
                    <td className="p-4 whitespace-nowrap">
                      <span className="font-bold text-[#F4B738]">{tkt.standName}</span>
                      <span className="block text-xs text-slate-300">{tkt.seats.join(', ')}</span>
                    </td>
                    <td className="p-4 font-bebas text-xl text-white whitespace-nowrap">
                      ₹{tkt.totalAmount}
                    </td>
                    <td className="p-4 whitespace-nowrap">
                      <span className={`px-3 py-1 rounded-full text-xs font-black uppercase font-bebas tracking-wider ${
                        tkt.status === 'VALID' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' :
                        tkt.status === 'SCANNED_ENTERED' ? 'bg-[#FF5500]/20 text-[#FF5500] border border-[#FF5500]/30' :
                        'bg-rose-500/20 text-rose-400'
                      }`}>
                        {tkt.status.replace('_', ' ')}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Turnstile QR Gate Scanner Modal */}
      <GateScannerModal isOpen={isScannerOpen} onClose={() => setIsScannerOpen(false)} />

    </div>
  );
};
