import { Fixture, StandCategory } from '../types';

export const FIXTURES_DATA: Fixture[] = [
  {
    id: 'match-1',
    matchNo: 1,
    stage: 'League Match',
    team1Id: 'deccan-capitals',
    team2Id: 'vizag-strikers',
    date: 'Today, 06 Nov 2026',
    time: '03:30 PM IST',
    venue: 'Rajiv Gandhi International Cricket Stadium, Uppal',
    city: 'Hyderabad',
    status: 'live',
    team1Score: '118/4 (9.4 ov)',
    team2Score: '114/6 (10.0 ov)',
    result: 'Deccan Capitals need 1 run in 2 balls to win',
    kreedaMatchId: 'kreeda-icl-live-101',
    ticketsAvailable: false
  },
  {
    id: 'match-2',
    matchNo: 2,
    stage: 'League Match',
    team1Id: 'amaravathi-warriors',
    team2Id: 'warangal-panthers',
    date: 'Today, 06 Nov 2026',
    time: '07:30 PM IST',
    venue: 'ACA International Cricket Ground, Mangalagiri',
    city: 'Amaravati',
    status: 'upcoming',
    kreedaMatchId: 'kreeda-icl-sch-102',
    ticketsAvailable: true
  },
  {
    id: 'match-3',
    matchNo: 3,
    stage: 'League Match',
    team1Id: 'kadapa-kings',
    team2Id: 'nijamabad-lions',
    date: 'Tomorrow, 07 Nov 2026',
    time: '03:30 PM IST',
    venue: 'YSR International Stadium',
    city: 'Kadapa',
    status: 'upcoming',
    kreedaMatchId: 'kreeda-icl-sch-103',
    ticketsAvailable: true
  },
  {
    id: 'match-4',
    matchNo: 4,
    stage: 'League Match',
    team1Id: 'tirupati-titans',
    team2Id: 'mahabubnagar-royals',
    date: 'Tomorrow, 07 Nov 2026',
    time: '07:30 PM IST',
    venue: 'SV University Cricket Grounds',
    city: 'Tirupati',
    status: 'upcoming',
    kreedaMatchId: 'kreeda-icl-sch-104',
    ticketsAvailable: true
  },
  {
    id: 'match-5',
    matchNo: 5,
    stage: 'League Match',
    team1Id: 'vizag-strikers',
    team2Id: 'amaravathi-warriors',
    date: '09 Nov 2026',
    time: '07:30 PM IST',
    venue: 'Dr. Y.S. Rajasekhara Reddy ACA-VDCA Stadium',
    city: 'Visakhapatnam',
    status: 'upcoming',
    kreedaMatchId: 'kreeda-icl-sch-105',
    ticketsAvailable: true
  },
  {
    id: 'match-6',
    matchNo: 6,
    stage: 'League Match',
    team1Id: 'deccan-capitals',
    team2Id: 'warangal-panthers',
    date: '11 Nov 2026',
    time: '07:30 PM IST',
    venue: 'Rajiv Gandhi International Cricket Stadium, Uppal',
    city: 'Hyderabad',
    status: 'upcoming',
    kreedaMatchId: 'kreeda-icl-sch-106',
    ticketsAvailable: true
  },
  {
    id: 'match-7',
    matchNo: 7,
    stage: 'Qualifier 1',
    team1Id: 'deccan-capitals',
    team2Id: 'amaravathi-warriors',
    date: '18 Nov 2026',
    time: '07:30 PM IST',
    venue: 'Dr. Y.S. Rajasekhara Reddy ACA-VDCA Stadium',
    city: 'Visakhapatnam',
    status: 'upcoming',
    kreedaMatchId: 'kreeda-icl-sch-107',
    ticketsAvailable: true
  },
  {
    id: 'match-8',
    matchNo: 8,
    stage: 'Grand Finale',
    team1Id: 'deccan-capitals',
    team2Id: 'kadapa-kings',
    date: '22 Nov 2026',
    time: '07:30 PM IST',
    venue: 'Rajiv Gandhi International Cricket Stadium, Uppal',
    city: 'Hyderabad',
    status: 'upcoming',
    kreedaMatchId: 'kreeda-icl-sch-108',
    ticketsAvailable: true
  }
];

export const STAND_CATEGORIES: StandCategory[] = [
  {
    id: 'vip-box',
    name: 'VIP Platinum Lounge',
    price: 2499,
    description: 'Direct dugout line view with luxury AC lounge and dining hospitality.',
    perks: ['Gourmet High Tea & Buffet', 'Dugout Level View', 'Reserved VIP Car Parking', 'Commemorative ICL T10 Jersey'],
    availableSeats: 48
  },
  {
    id: 'pavilion-east',
    name: 'Pavilion East Club',
    price: 999,
    description: 'Elevated premium mid-wicket angle with cushioned stadium seating.',
    perks: ['Mid-Wicket Elevated Sightlines', 'Complimentary Team Cap', 'Dedicated Fast-Track Entry Gate'],
    availableSeats: 160
  },
  {
    id: 'fan-stand-north',
    name: 'North Stand Fan Army',
    price: 499,
    description: 'High energy cheering bay behind long-off boundary with cheerleaders and DJ.',
    perks: ['Cheer Clappers & Foam Fingers', 'DJ Music Audio Zone', 'Exclusive Fan Merchandise Coupon'],
    availableSeats: 320
  },
  {
    id: 'general-bleachers',
    name: 'South Bleachers General',
    price: 249,
    description: 'Accessible stadium entry for grass-roots fans to enjoy high octane T10 action.',
    perks: ['Unreserved Stadium Terrace', 'Digital QR Entry', 'Drinking Water & First Aid Access'],
    availableSeats: 550
  }
];
