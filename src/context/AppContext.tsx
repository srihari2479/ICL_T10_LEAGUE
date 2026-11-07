import React, { createContext, useContext, useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { 
  Franchise, 
  Fixture, 
  PlayerApplication, 
  InfluencerApplication, 
  TicketBooking 
} from '../types';
import { FRANCHISES_DATA } from '../data/franchisesData';
import { FIXTURES_DATA } from '../data/fixturesData';
import { 
  INITIAL_PLAYER_APPLICATIONS, 
  INITIAL_INFLUENCER_APPLICATIONS, 
  INITIAL_BOOKINGS 
} from '../data/mockApplicationsData';

export type NavigationPage = 
  | 'home'
  | 'about'
  | 'teams'
  | 'zones'
  | 'fixtures'
  | 'tickets'
  | 'register-player'
  | 'register-influencer'
  | 'tracker'
  | 'media'
  | 'sponsors'
  | 'help'
  | 'admin';

export const ROUTE_MAP: Record<string, NavigationPage> = {
  '/': 'home',
  '/about': 'about',
  '/teams': 'teams',
  '/franchises': 'teams',
  '/districts': 'zones',
  '/zones': 'zones',
  '/fixtures': 'fixtures',
  '/matches': 'fixtures',
  '/tickets': 'tickets',
  '/box-office': 'tickets',
  '/register-player': 'register-player',
  '/register': 'register-player',
  '/register-influencer': 'register-influencer',
  '/creators': 'register-influencer',
  '/tracker': 'tracker',
  '/track': 'tracker',
  '/media': 'media',
  '/news': 'media',
  '/sponsors': 'sponsors',
  '/partners': 'sponsors',
  '/help': 'help',
  '/contact': 'help',
  '/admin': 'admin',
};

export const PAGE_TO_ROUTE: Record<NavigationPage, string> = {
  'home': '/',
  'about': '/about',
  'teams': '/teams',
  'zones': '/districts',
  'fixtures': '/fixtures',
  'tickets': '/tickets',
  'register-player': '/register-player',
  'register-influencer': '/register-influencer',
  'tracker': '/tracker',
  'media': '/media',
  'sponsors': '/sponsors',
  'help': '/help',
  'admin': '/admin',
};

export type AdminRole = 'SUPER_ADMIN' | 'FRANCHISE_MANAGER' | 'VERIFICATION_OFFICER';

interface ToastMessage {
  id: string;
  type: 'success' | 'info' | 'warning' | 'error';
  title: string;
  description?: string;
}

interface AppContextType {
  currentPage: NavigationPage;
  setCurrentPage: (page: NavigationPage) => void;

  // Kreeda App Exact Theme System (Light & Dark)
  theme: 'light' | 'dark';
  toggleTheme: (event?: React.MouseEvent) => void;
  setTheme: (theme: 'light' | 'dark') => void;
  
  // Modals & Selected Objects
  selectedFranchise: Franchise | null;
  setSelectedFranchise: (franchise: Franchise | null) => void;
  selectedFixture: Fixture | null;
  setSelectedFixture: (fixture: Fixture | null) => void;
  isKreedaModalOpen: boolean;
  setIsKreedaModalOpen: (open: boolean) => void;
  kreedaModalContext: { title?: string; message?: string } | null;
  openKreedaBoundaryModal: (context?: { title?: string; message?: string }) => void;
  
  // Applications & State
  playerApplications: PlayerApplication[];
  addPlayerApplication: (app: PlayerApplication) => void;
  updatePlayerStatus: (appId: string, status: PlayerApplication['status'], notes?: string) => void;
  
  influencerApplications: InfluencerApplication[];
  addInfluencerApplication: (app: InfluencerApplication) => void;
  updateInfluencerStatus: (appId: string, status: InfluencerApplication['status']) => void;
  
  // Ticketing & Gate Scanner
  ticketBookings: TicketBooking[];
  addTicketBooking: (booking: TicketBooking) => void;
  latestConfirmedBooking: TicketBooking | null;
  setLatestConfirmedBooking: (booking: TicketBooking | null) => void;
  validateTicketQR: (qrToken: string) => { success: boolean; message: string; booking?: TicketBooking };
  
  // Admin Operations
  adminRole: AdminRole;
  setAdminRole: (role: AdminRole) => void;
  selectedFranchiseFilter: string;
  setSelectedFranchiseFilter: (franchiseId: string) => void;
  
  // Notifications
  toasts: ToastMessage[];
  showToast: (type: ToastMessage['type'], title: string, description?: string) => void;
  removeToast: (id: string) => void;
  
  // Helper shortcuts
  navigateToBookingForMatch: (matchId: string) => void;
  navigateToTrackerWithId: (id: string) => void;
  prefilledTrackerId: string | null;
  setPrefilledTrackerId: (id: string | null) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  // Active page automatically derived from the browser URL path
  const currentPage: NavigationPage = ROUTE_MAP[location.pathname.toLowerCase()] || 'home';

  const setCurrentPage = (page: NavigationPage) => {
    const targetRoute = PAGE_TO_ROUTE[page] || '/';
    if (location.pathname.toLowerCase() !== targetRoute) {
      navigate(targetRoute);
    }
  };

  // Smooth scroll to top on every route change
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location.pathname]);

  const [theme, setThemeState] = useState<'light' | 'dark'>(() => {
    const saved = localStorage.getItem('kreeda_theme');
    if (saved === 'light' || saved === 'dark') return saved;
    return 'dark'; // Default deep stadium midnight
  });

  useEffect(() => {
    localStorage.setItem('kreeda_theme', theme);
    if (theme === 'light') {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
    }
  }, [theme]);

  const toggleTheme = (event?: React.MouseEvent) => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';

    // Kreeda App Circular Wave Reveal Animation
    if (typeof document !== 'undefined' && 'startViewTransition' in document) {
      const x = event ? event.clientX : window.innerWidth - 60;
      const y = event ? event.clientY : 60;
      const endRadius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y)
      );

      const transition = (document as any).startViewTransition(() => {
        setThemeState(nextTheme);
      });

      transition.ready?.then(() => {
        document.documentElement.animate(
          {
            clipPath: [
              `circle(0px at ${x}px ${y}px)`,
              `circle(${endRadius}px at ${x}px ${y}px)`,
            ],
          },
          {
            duration: 850,
            easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
            pseudoElement: '::view-transition-new(root)',
          }
        );
      });
    } else {
      setThemeState(nextTheme);
    }
  };

  const setTheme = (newTheme: 'light' | 'dark') => {
    setThemeState(newTheme);
  };

  const [selectedFranchise, setSelectedFranchise] = useState<Franchise | null>(null);
  const [selectedFixture, setSelectedFixture] = useState<Fixture | null>(null);
  const [isKreedaModalOpen, setIsKreedaModalOpen] = useState(false);
  const [kreedaModalContext, setKreedaModalContext] = useState<{ title?: string; message?: string } | null>(null);

  const [playerApplications, setPlayerApplications] = useState<PlayerApplication[]>(() => {
    const saved = localStorage.getItem('icl_player_applications');
    return saved ? JSON.parse(saved) : INITIAL_PLAYER_APPLICATIONS;
  });

  const [influencerApplications, setInfluencerApplications] = useState<InfluencerApplication[]>(() => {
    const saved = localStorage.getItem('icl_influencer_applications');
    return saved ? JSON.parse(saved) : INITIAL_INFLUENCER_APPLICATIONS;
  });

  const [ticketBookings, setTicketBookings] = useState<TicketBooking[]>(() => {
    const saved = localStorage.getItem('icl_ticket_bookings');
    return saved ? JSON.parse(saved) : INITIAL_BOOKINGS;
  });

  const [latestConfirmedBooking, setLatestConfirmedBooking] = useState<TicketBooking | null>(null);
  const [adminRole, setAdminRole] = useState<AdminRole>('SUPER_ADMIN');
  const [selectedFranchiseFilter, setSelectedFranchiseFilter] = useState<string>('all');
  const [toasts, setToasts] = useState<ToastMessage[]>([]);
  const [prefilledTrackerId, setPrefilledTrackerId] = useState<string | null>(null);

  // Persistence
  useEffect(() => {
    localStorage.setItem('icl_player_applications', JSON.stringify(playerApplications));
  }, [playerApplications]);

  useEffect(() => {
    localStorage.setItem('icl_influencer_applications', JSON.stringify(influencerApplications));
  }, [influencerApplications]);

  useEffect(() => {
    localStorage.setItem('icl_ticket_bookings', JSON.stringify(ticketBookings));
  }, [ticketBookings]);

  // Window scroll to top on navigation change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const showToast = (type: ToastMessage['type'], title: string, description?: string) => {
    const id = Date.now().toString() + Math.random().toString(36).substring(2, 6);
    setToasts((prev) => [...prev, { id, type, title, description }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4500);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const openKreedaBoundaryModal = (context?: { title?: string; message?: string }) => {
    setKreedaModalContext(context || null);
    setIsKreedaModalOpen(true);
  };

  const addPlayerApplication = (app: PlayerApplication) => {
    setPlayerApplications((prev) => [app, ...prev]);
    showToast('success', 'Application Submitted Successfully!', `Application ID: ${app.applicationId}`);
  };

  const updatePlayerStatus = (appId: string, status: PlayerApplication['status']) => {
    setPlayerApplications((prev) =>
      prev.map((app) => (app.applicationId === appId ? { ...app, status } : app))
    );
    showToast('info', 'Status Updated', `Application ${appId} changed to ${status.replace('_', ' ')}`);
  };

  const addInfluencerApplication = (app: InfluencerApplication) => {
    setInfluencerApplications((prev) => [app, ...prev]);
    showToast('success', 'Creator Application Registered!', `Tracking ID: ${app.applicationId}`);
  };

  const updateInfluencerStatus = (appId: string, status: InfluencerApplication['status']) => {
    setInfluencerApplications((prev) =>
      prev.map((app) => (app.applicationId === appId ? { ...app, status } : app))
    );
    showToast('info', 'Creator Status Updated', `Application ${appId} changed to ${status}`);
  };

  const addTicketBooking = (booking: TicketBooking) => {
    setTicketBookings((prev) => [booking, ...prev]);
    setLatestConfirmedBooking(booking);
    showToast('success', 'Booking Confirmed!', `Match: ${booking.team1Short} vs ${booking.team2Short}`);
  };

  const validateTicketQR = (qrToken: string) => {
    const trimmed = qrToken.trim();
    const found = ticketBookings.find((b) => b.qrToken === trimmed || b.bookingId === trimmed);

    if (!found) {
      return { success: false, message: 'Invalid or Unrecognized QR Ticket Token. Access Denied.' };
    }

    if (found.status === 'SCANNED_ENTERED') {
      return { 
        success: false, 
        message: `FRAUD ALERT: Ticket ${found.bookingId} has ALREADY been scanned and entered at turnstile.`, 
        booking: found 
      };
    }

    // Mark as scanned
    setTicketBookings((prev) =>
      prev.map((b) => (b.bookingId === found.bookingId ? { ...b, status: 'SCANNED_ENTERED' } : b))
    );

    return { 
      success: true, 
      message: `Entry Approved! Welcome ${found.fanName}. Stand: ${found.standName}, Seats: ${found.seats.join(', ')}.`, 
      booking: found 
    };
  };

  const navigateToBookingForMatch = (matchId: string) => {
    const match = FIXTURES_DATA.find((f) => f.id === matchId) || FIXTURES_DATA[0];
    setSelectedFixture(match);
    setCurrentPage('tickets');
  };

  const navigateToTrackerWithId = (id: string) => {
    setPrefilledTrackerId(id);
    setCurrentPage('tracker');
  };

  return (
    <AppContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        theme,
        toggleTheme,
        setTheme,
        selectedFranchise,
        setSelectedFranchise,
        selectedFixture,
        setSelectedFixture,
        isKreedaModalOpen,
        setIsKreedaModalOpen,
        kreedaModalContext,
        openKreedaBoundaryModal,
        playerApplications,
        addPlayerApplication,
        updatePlayerStatus,
        influencerApplications,
        addInfluencerApplication,
        updateInfluencerStatus,
        ticketBookings,
        addTicketBooking,
        latestConfirmedBooking,
        setLatestConfirmedBooking,
        validateTicketQR,
        adminRole,
        setAdminRole,
        selectedFranchiseFilter,
        setSelectedFranchiseFilter,
        toasts,
        showToast,
        removeToast,
        navigateToBookingForMatch,
        navigateToTrackerWithId,
        prefilledTrackerId,
        setPrefilledTrackerId,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
