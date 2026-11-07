import { Partner } from '../types';
import { getAssetUrl } from '../utils/assetHelper';

export const PARTNERS_DATA: Partner[] = [
  {
    id: 'partner-title',
    name: 'AMARA RAJA INFRA',
    tier: 'Title Partner',
    tagline: 'Powering Telugu Sporting Excellence & Future Infrastructure',
    logo: '⚡',
    logoUrl: getAssetUrl('assets/sponsors/amara_raja_light.png'),
    logoDarkUrl: getAssetUrl('assets/sponsors/amara_raja_dark.png'),
    website: 'https://amararaja.com',
    categoryScope: 'Energy & Infrastructure',
    brandColor: '#00A3E0',
    accentGradient: 'from-cyan-500/20 via-amber-500/10 to-transparent'
  },
  {
    id: 'partner-powered',
    name: 'MY HOME CONSTRUCTIONS',
    tier: 'Powered By',
    tagline: 'Building Dreams, Championing Telugu Talent',
    logo: '🏢',
    logoUrl: getAssetUrl('assets/sponsors/my_home_light.png'),
    logoDarkUrl: getAssetUrl('assets/sponsors/my_home_dark.png'),
    website: 'https://myhomeconstructions.com',
    categoryScope: 'Real Estate & Infrastructure',
    brandColor: '#EF4444',
    accentGradient: 'from-rose-500/20 via-orange-500/10 to-transparent'
  },
  {
    id: 'partner-scoring',
    name: 'KREEDA APP',
    tier: 'Digital Scoring Partner',
    tagline: 'Official System of Record for Live Cricket Scores & Analytics',
    logo: '🏏',
    logoUrl: getAssetUrl('assets/kreeda/4_1_ratio.png'),
    logoDarkUrl: getAssetUrl('assets/kreeda/4_1_ratio_dark.png'),
    website: 'https://kreedaapp.com',
    categoryScope: 'Match Telemetry & Scores',
    brandColor: '#FF5500',
    accentGradient: 'from-orange-500/20 via-amber-500/10 to-transparent'
  },
  {
    id: 'partner-broadcast',
    name: 'STAR MAA & ETV PLUS',
    tier: 'Broadcast Partner',
    tagline: 'Exclusive High-Definition Regional Live Telecast',
    logo: '📺',
    logoUrl: getAssetUrl('assets/sponsors/star_maa_etv_light.png'),
    logoDarkUrl: getAssetUrl('assets/sponsors/star_maa_etv_dark.png'),
    website: 'https://disneystar.com',
    categoryScope: 'Regional HD Broadcast',
    brandColor: '#E50914',
    accentGradient: 'from-red-500/20 via-amber-500/10 to-transparent'
  },
  {
    id: 'partner-kit',
    name: 'SG CRICKET INDIA',
    tier: 'Kit Partner',
    tagline: 'Precision Crafted Cricket Armor & Match Gear',
    logo: '🛡️',
    logoUrl: getAssetUrl('assets/sponsors/sg_cricket_light.png'),
    logoDarkUrl: getAssetUrl('assets/sponsors/sg_cricket_dark.png'),
    website: 'https://sgcricket.com',
    categoryScope: 'Armor & Equipment',
    brandColor: '#2563EB',
    accentGradient: 'from-blue-500/20 via-cyan-500/10 to-transparent'
  },
  {
    id: 'partner-health',
    name: 'YASHODA HOSPITALS',
    tier: 'Healthcare Partner',
    tagline: 'World-Class Sports Medicine & Pitchside Emergency Care',
    logo: '🏥',
    logoUrl: getAssetUrl('assets/sponsors/yashoda_hospitals_light.png'),
    logoDarkUrl: getAssetUrl('assets/sponsors/yashoda_hospitals_dark.png'),
    website: 'https://yashodahospitals.com',
    categoryScope: 'Sports Medicine & Trauma',
    brandColor: '#D97706',
    accentGradient: 'from-amber-500/20 via-rose-500/10 to-transparent'
  }
];
