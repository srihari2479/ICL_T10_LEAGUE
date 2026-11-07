import { FAQ } from '../types';

export const FAQ_DATA: FAQ[] = [
  {
    id: 'faq-1',
    category: 'Registrations',
    question: 'Who is eligible to register as a player in ICL T10?',
    answer: 'Any cricket player residing in Andhra Pradesh or Telangana with valid address proof (Aadhaar or Voter ID) is eligible. There is no strict age bar, though applicants must be at least 16 years old at the time of registration. Both club-level and unrepresented grassroot players are welcome.'
  },
  {
    id: 'faq-2',
    category: 'Catchments & Franchises',
    question: 'How is my regional franchise decided when I apply?',
    answer: 'Franchise assignment is strictly automated according to the official DPR Catchment Matrix. When you select your native or permanent residence district, our system maps you directly to the assigned franchise (e.g., Srikakulam maps to Vizag Strikers, NTR maps to Amaravathi Warriors, Warangal maps to Warangal Panthers).'
  },
  {
    id: 'faq-3',
    category: 'Kreeda App',
    question: 'Why are live points table and commentary viewed on Kreeda App?',
    answer: 'As outlined in the official technical scope boundary (DPR Section 1.3), Kreeda App serves as the dedicated system of record for live match scoring, ball-by-ball trajectory, net run rate (NRR), and tournament standings. The ICL website provides verified schedule information, match previews, and approved direct deep-links into the Kreeda match center without redundant duplication.'
  },
  {
    id: 'faq-4',
    category: 'Tickets',
    question: 'How do digital QR E-Tickets work at the stadium turnstiles?',
    answer: 'Upon completing your ticket booking, you receive an official E-Ticket with an encrypted QR Code and unique booking identifier. At the stadium gates, security personnel scan your digital QR code (either on your phone screen or printed paper) using the ICL Turnstile Scanner. Each QR token is single-entry verified.'
  },
  {
    id: 'faq-5',
    category: 'Registrations',
    question: 'What is the role of digital creators in the Influencer Portal?',
    answer: 'Creators approved through the Influencer Portal get exclusive dugout access, press box accreditation, and collaborative opportunities to generate engaging behind-the-scenes content, locker room interviews, and fan challenge videos for the 8 franchise communities.'
  },
  {
    id: 'faq-6',
    category: 'Catchments & Franchises',
    question: 'Can a player from Telangana play for an Andhra Pradesh franchise?',
    answer: 'Official catchment rules assign primary open trials based on geographical residency to democratize local talent. However, franchises may draft wildcard players during the centralized auction draft under approved tournament governance quotas.'
  }
];
