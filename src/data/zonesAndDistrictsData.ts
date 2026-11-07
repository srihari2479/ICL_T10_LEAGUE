import { ZoneCatchment, StateType } from '../types';

export const ZONES_AND_DISTRICTS: ZoneCatchment[] = [
  // ANDHRA PRADESH ZONES
  {
    zoneId: 'ap-north-coast',
    zoneName: 'North Coast Zone',
    state: 'Andhra Pradesh',
    hub: 'Visakhapatnam',
    franchiseId: 'vizag-strikers',
    franchiseName: 'Vizag Strikers',
    districts: [
      'Visakhapatnam',
      'Anakapalli',
      'Vizianagaram',
      'Srikakulam',
      'Alluri Sitharama Raju'
    ]
  },
  {
    zoneId: 'ap-central-delta',
    zoneName: 'Central Delta Zone',
    state: 'Andhra Pradesh',
    hub: 'Amaravati',
    franchiseId: 'amaravathi-warriors',
    franchiseName: 'Amaravathi Warriors',
    districts: [
      'NTR',
      'Guntur',
      'Krishna',
      'Palnadu',
      'Bapatla',
      'Eluru',
      'West Godavari',
      'East Godavari',
      'Kakinada'
    ]
  },
  {
    zoneId: 'ap-rayalaseema',
    zoneName: 'Rayalaseema Heartland',
    state: 'Andhra Pradesh',
    hub: 'Kadapa',
    franchiseId: 'kadapa-kings',
    franchiseName: 'Kadapa Kings',
    districts: [
      'YSR (Kadapa)',
      'Annamayya',
      'Sri Sathya Sai',
      'Anantapuramu',
      'Nandyal',
      'Kurnool'
    ]
  },
  {
    zoneId: 'ap-southern-border',
    zoneName: 'Southern Border Zone',
    state: 'Andhra Pradesh',
    hub: 'Tirupati',
    franchiseId: 'tirupati-titans',
    franchiseName: 'Tirupati Titans',
    districts: [
      'Tirupati',
      'Chittoor',
      'SPSR Nellore',
      'Prakasam'
    ]
  },

  // TELANGANA ZONES
  {
    zoneId: 'tg-capital-core',
    zoneName: 'Capital Core & West',
    state: 'Telangana',
    hub: 'Hyderabad & Secunderabad',
    franchiseId: 'deccan-capitals',
    franchiseName: 'Deccan Capitals',
    districts: [
      'Hyderabad',
      'Ranga Reddy',
      'Medchal-Malkajgiri',
      'Sangareddy',
      'Medak',
      'Siddipet',
      'Yadadri Bhuvanagiri',
      'Nalgonda'
    ]
  },
  {
    zoneId: 'tg-eastern-belt',
    zoneName: 'Eastern Regional Belt',
    state: 'Telangana',
    hub: 'Warangal',
    franchiseId: 'warangal-panthers',
    franchiseName: 'Warangal Panthers',
    districts: [
      'Warangal',
      'Hanumakonda',
      'Jangaon',
      'Mahabubabad',
      'Jayashankar Bhupalpally',
      'Mulugu',
      'Karimnagar',
      'Rajanna Sircilla',
      'Jagtial',
      'Suryapet',
      'Khammam',
      'Bhadradri Kothagudem'
    ]
  },
  {
    zoneId: 'tg-northern-grid',
    zoneName: 'Northern Border Grid',
    state: 'Telangana',
    hub: 'Nizamabad',
    franchiseId: 'nijamabad-lions',
    franchiseName: 'Nijamabad Lions',
    districts: [
      'Nizamabad',
      'Kamareddy',
      'Nirmal',
      'Adilabad',
      'Komaram Bheem Asifabad',
      'Mancherial',
      'Peddapalli'
    ]
  },
  {
    zoneId: 'tg-southern-plains',
    zoneName: 'Southern Plains Grid',
    state: 'Telangana',
    hub: 'Mahabubnagar',
    franchiseId: 'mahabubnagar-royals',
    franchiseName: 'Mahabubnagar Royals',
    districts: [
      'Mahabubnagar',
      'Nagarkurnool',
      'Wanaparthy',
      'Jogulamba Gadwal',
      'Narayanpet',
      'Vikarabad'
    ]
  }
];

export const ALL_DISTRICTS_LIST = ZONES_AND_DISTRICTS.flatMap(z => 
  z.districts.map(d => ({
    name: d,
    state: z.state,
    zoneId: z.zoneId,
    zoneName: z.zoneName,
    hub: z.hub,
    franchiseId: z.franchiseId,
    franchiseName: z.franchiseName
  }))
);

export function findCatchmentByDistrict(districtName: string) {
  const normalized = districtName.trim().toLowerCase();
  for (const zone of ZONES_AND_DISTRICTS) {
    for (const d of zone.districts) {
      if (d.toLowerCase() === normalized || d.toLowerCase().includes(normalized)) {
        return {
          district: d,
          zoneName: zone.zoneName,
          hub: zone.hub,
          state: zone.state,
          franchiseId: zone.franchiseId,
          franchiseName: zone.franchiseName
        };
      }
    }
  }
  return null;
}
