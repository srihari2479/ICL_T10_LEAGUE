import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { KreedaModal } from './components/common/KreedaModal';
import { ToastContainer } from './components/common/Toast';

// Views
import { HeroSection } from './components/home/HeroSection';
import { QuickStats } from './components/home/QuickStats';
import { FranchiseGrid } from './components/home/FranchiseGrid';
import { GatewaysBanner } from './components/home/GatewaysBanner';
import { UpcomingFixturesStrip } from './components/home/UpcomingFixturesStrip';
import { LatestMediaStrip } from './components/home/LatestMediaStrip';
import { SponsorsStrip } from './components/home/SponsorsStrip';

import { AboutLeagueView } from './components/about/AboutLeagueView';
import { TeamsView } from './components/teams/TeamsView';
import { FranchiseDetailModal } from './components/teams/FranchiseDetailModal';
import { ZonesView } from './components/zones/ZonesView';
import { FixturesView } from './components/fixtures/FixturesView';
import { TicketBookingWizard } from './components/tickets/TicketBookingWizard';
import { PlayerRegistrationWizard } from './components/registration/PlayerRegistrationWizard';
import { InfluencerRegistrationWizard } from './components/registration/InfluencerRegistrationWizard';
import { ApplicationTracker } from './components/tracker/ApplicationTracker';
import { MediaCentreView } from './components/media/MediaCentreView';
import { SponsorsView } from './components/sponsors/SponsorsView';
import { HelpdeskView } from './components/help/HelpdeskView';
import { AdminDashboard } from './components/admin/AdminDashboard';

const HomePage: React.FC = () => (
  <>
    <HeroSection />
    <QuickStats />
    <GatewaysBanner />
    <FranchiseGrid />
    <UpcomingFixturesStrip />
    <LatestMediaStrip />
    <SponsorsStrip />
  </>
);

const MainContent: React.FC = () => {
  return (
    <main className="flex-1 w-full overflow-x-hidden">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutLeagueView />} />
        <Route path="/teams" element={<TeamsView />} />
        <Route path="/franchises" element={<Navigate to="/teams" replace />} />
        <Route path="/districts" element={<ZonesView />} />
        <Route path="/zones" element={<Navigate to="/districts" replace />} />
        <Route path="/fixtures" element={<FixturesView />} />
        <Route path="/matches" element={<Navigate to="/fixtures" replace />} />
        <Route path="/tickets" element={<TicketBookingWizard />} />
        <Route path="/box-office" element={<Navigate to="/tickets" replace />} />
        <Route path="/register-player" element={<PlayerRegistrationWizard />} />
        <Route path="/register" element={<Navigate to="/register-player" replace />} />
        <Route path="/register-influencer" element={<InfluencerRegistrationWizard />} />
        <Route path="/creators" element={<Navigate to="/register-influencer" replace />} />
        <Route path="/tracker" element={<ApplicationTracker />} />
        <Route path="/track" element={<Navigate to="/tracker" replace />} />
        <Route path="/media" element={<MediaCentreView />} />
        <Route path="/news" element={<Navigate to="/media" replace />} />
        <Route path="/sponsors" element={<SponsorsView />} />
        <Route path="/partners" element={<Navigate to="/sponsors" replace />} />
        <Route path="/help" element={<HelpdeskView />} />
        <Route path="/contact" element={<Navigate to="/help" replace />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      {/* Global Modals */}
      <FranchiseDetailModal />
      <KreedaModal />
      <ToastContainer />
    </main>
  );
};

export function App() {
  return (
    <AppProvider>
      <div className="min-h-screen flex flex-col bg-[var(--kreeda-bg)] text-[var(--kreeda-text-primary)] font-sans selection:bg-[#FF5500] selection:text-white overflow-x-hidden min-w-[300px] transition-colors duration-200">
        <Navbar />
        <MainContent />
        <Footer />
      </div>
    </AppProvider>
  );
}

export default App;
