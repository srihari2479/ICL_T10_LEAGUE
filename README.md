# ICL T10 Official Website & Digital Platform

> **Indian Champions League T10 (Season 1)**  
> Official Digital Platform, Franchise Portals, Registration Engines & Box Office

---

## ⚡ Key Highlights & DPR Compliance

- **No Dummy / Unwanted Content:** Every single player, coach, district, franchise, rule, and schedule is directly derived from the official **ICL T10 Detailed Project Report (DPR)**.
- **Ultra-Responsive (300px min width):** Designed with fluid flexboxes, compact grids, and zero horizontal overflows, fully responsive from **300px mobile screens** to 4K displays.
- **Low-Opacity Soft UI Aesthetic:** Frosted glassmorphism (`backdrop-filter: blur(12px)`), soft stadium illumination blurs, and gold/cyan neon accents without bulky containers.
- **Kreeda App Boundary Compliance (DPR Section 1.3):** Live ball-by-ball commentary, points table, net run rate (NRR), and player telemetry are maintained in Kreeda App, linked through high-visibility deep links and interactive match tickers.
- **Automated District Catchment Engine:** Maps 45+ districts across Andhra Pradesh and Telangana to the 8 official franchises automatically as per DPR Tables 19 & 20.
- **Interactive Ticket Booking & Scannable QR E-Tickets:** Match selection, stand tier pricing, checkout simulation, and generated E-Tickets with single-entry turnstile validation.
- **Admin & Scrutiny Operations Console:** Role switcher (Super Admin, Franchise Manager, Scrutiny Officer), real-time applicant review pipeline, and an interactive Turnstile QR Scanner simulator.

---

## 🛠️ Technology Stack

- **Framework:** React 18 with TypeScript
- **Bundler:** Vite 6
- **Styling:** Tailwind CSS with custom Soft Dark Stadium Glass tokens
- **Icons:** Lucide React
- **Celebration Effects:** Canvas Confetti
- **Typography:** Plus Jakarta Sans & Cabinet Grotesk

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build & Verification
```bash
npm run build
```
Creates an optimized, production-ready static bundle in `dist/`.

---

## 📖 Documentation Artifacts

1. `ICL_T10_DPR_Implementation_Spec.md` - Module-by-module mapping against the Detailed Project Report.
2. `ICL_T10_Design_System_And_Architecture.md` - Design tokens, typography, 300px responsive architecture, and DRY guidelines.
3. `ICL_T10_User_And_Admin_Guide.md` - Complete operations manual for Fans, Players, Creators, and Administrators.
