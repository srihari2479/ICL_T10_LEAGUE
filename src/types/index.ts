export type StateType = 'Andhra Pradesh' | 'Telangana';

export type PlayerRole = 'Batter' | 'Fast Bowler' | 'Spin Bowler' | 'All-Rounder' | 'Wicketkeeper';

export interface SquadMember {
  id: string;
  name: string;
  role: PlayerRole;
  isCaptain?: boolean;
  isViceCaptain?: boolean;
  battingStyle: string;
  bowlingStyle?: string;
  jerseyNumber: number;
  homeDistrict: string;
  stats: {
    matches: number;
    strikeRate?: number;
    economyRate?: number;
    runs?: number;
    wickets?: number;
  };
}

export interface Franchise {
  id: string;
  name: string;
  shortCode: string;
  zone: string;
  hub: string;
  state: StateType;
  catchmentDistricts: string[];
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  gradient: string;
  tagline: string;
  homeVenue: string;
  ownerGroup: string;
  mentor: string;
  headCoach: string;
  squad: SquadMember[];
  description: string;
  crestImage?: string;
}

export interface ZoneCatchment {
  zoneId: string;
  zoneName: string;
  state: StateType;
  hub: string;
  franchiseId: string;
  franchiseName: string;
  districts: string[];
}

export interface Fixture {
  id: string;
  matchNo: number;
  stage: 'League Match' | 'Qualifier 1' | 'Eliminator' | 'Qualifier 2' | 'Grand Finale';
  team1Id: string;
  team2Id: string;
  date: string;
  time: string;
  venue: string;
  city: string;
  status: 'upcoming' | 'live' | 'completed';
  team1Score?: string;
  team2Score?: string;
  result?: string;
  kreedaMatchId: string;
  ticketsAvailable: boolean;
}

export interface StandCategory {
  id: string;
  name: string;
  price: number;
  description: string;
  perks: string[];
  availableSeats: number;
}

export interface TicketBooking {
  bookingId: string;
  matchId: string;
  team1Short: string;
  team2Short: string;
  venue: string;
  dateTime: string;
  standName: string;
  quantity: number;
  unitPrice: number;
  totalAmount: number;
  fanName: string;
  fanMobile: string;
  fanEmail: string;
  gateNo: string;
  seats: string[];
  qrToken: string;
  bookingTime: string;
  status: 'VALID' | 'SCANNED_ENTERED' | 'CANCELLED';
}

export interface PlayerApplication {
  applicationId: string;
  fullName: string;
  mobile: string;
  email: string;
  dob: string;
  gender: string;
  state: StateType;
  district: string;
  assignedFranchiseId: string;
  assignedFranchiseName: string;
  assignedZone: string;
  primaryRole: PlayerRole;
  battingHand: 'Right-hand bat' | 'Left-hand bat';
  bowlingStyle: string;
  cricHeroesProfile?: string;
  previousExperience: string;
  videoHighlightsUrl?: string;
  aadhaarProofName: string;
  status: 'UNDER_REVIEW' | 'VERIFIED' | 'TRIAL_SCHEDULED' | 'SHORTLISTED' | 'REJECTED';
  trialDate?: string;
  trialVenue?: string;
  submittedAt: string;
}

export interface InfluencerApplication {
  applicationId: string;
  fullName: string;
  mobile: string;
  email: string;
  city: string;
  state: StateType;
  primaryPlatform: 'Instagram' | 'YouTube' | 'Facebook' | 'Twitter/X';
  platformHandle: string;
  followerCount: string;
  avgReelViews: string;
  contentNiche: 'Cricket Commentary' | 'Comedy & Entertainment' | 'Vlogs & Lifestyle' | 'Youth & Fan Zone';
  collaborationPreference: 'Matchday Live Dugout Presenter' | 'Digital Team Creator' | 'Fan Hub Host';
  status: 'UNDER_REVIEW' | 'VERIFIED' | 'SELECTED' | 'REJECTED';
  submittedAt: string;
}

export interface NewsItem {
  id: string;
  title: string;
  category: 'Official' | 'Squads' | 'Matches' | 'Franchise';
  excerpt: string;
  date: string;
  readTime: string;
  author: string;
  imageUrl: string;
  content: string[];
}

export interface Partner {
  id: string;
  name: string;
  tier: 'Title Partner' | 'Powered By' | 'Official Broadcast Partner' | 'Broadcast Partner' | 'Digital Scoring Partner' | 'Scoring Partner' | 'Official Kit Partner' | 'Kit Partner' | 'Healthcare Partner';
  tagline: string;
  logo: string;
  logoUrl?: string;
  logoDarkUrl?: string;
  website: string;
}

export interface FAQ {
  id: string;
  category: 'Registrations' | 'Catchments & Franchises' | 'Tickets' | 'Kreeda App';
  question: string;
  answer: string;
}
