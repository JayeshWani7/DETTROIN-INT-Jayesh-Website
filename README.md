# Pavna School, Aligarh — Website Redesign

> **Redesign & Frontend Engineering Challenge for Pavna School, Aligarh (Est. 1998, Formerly DPS Aligarh).**  
> A modern, ultra-premium, full-width responsive web application built with **React 19, TypeScript, Vite, Tailwind CSS v4, Framer Motion, and React Router DOM**.

---

## 📌 Candidate & Project Information

* **Full Name**: Jayesh Wani
* **Intern ID**: `DETTROIN-INT-JAYESH`
* **Email Address**: `wanijayesh0@gmail.com` 
* **GitHub Username**: [JayeshWani7](https://github.com/JayeshWani7)
* **Selected Website**: [Pavna School, Aligarh](https://pavnaschoolaligarh.com/)
* **Live Demo Link**: [https://pavanschoolrevamp-hdcsbno5i-jayesh-wanis-projects.vercel.app/](https://github.com/JayeshWani7/DETTROIN-INT-Jayesh-Website)
* **Repository**: [JayeshWani7/DETTROIN-INT-Jayesh-Website](https://github.com/JayeshWani7/DETTROIN-INT-Jayesh-Website)

---

## 🚀 Technologies Used

- **Core Framework**: React 19 (`react`, `react-dom`)
- **Language**: TypeScript (`^7.0.2`)
- **Build Tooling & Bundler**: Vite 8 (`vite`, `@vitejs/plugin-react`)
- **Styling & Design System**: Tailwind CSS v4 (`@tailwindcss/vite`, `@tailwindcss/postcss`, `autoprefixer`, custom HSL color tokens)
- **Routing**: React Router DOM (`react-router-dom` v7)
- **Animations & Micro-interactions**: Framer Motion (`framer-motion` v12)
- **Iconography**: Lucide React (`lucide-react`)
- **State Management & Utilities**: React Hooks, `clsx`, `tailwind-merge`

---

## 💎 Key Improvements & Architectural Highlights

### 1. 🏢 Complete UI/UX Redesign & Editorial Aesthetics
- Replaced outdated single-page WordPress layout with an **ultra-wide editorial presentation** (`max-w-[1600px] w-full px-4 sm:px-8 lg:px-12 xl:px-16`).
- Integrated a bespoke luxury color palette:
  - **Deep Emerald (`#0A2E1F` / `#051810`)** for grounding authority & heritage.
  - **Warm Ivory & Cream (`#FDFBF7` / `#F7F4EE`)** for soft, non-fatiguing reading contrast.
  - **Refined Gold (`#D4AF37` / `#F3E5AB`)** for badges, accents, and call-to-action highlights.
- Implemented serif display typography (`Playfair Display` / `DM Serif`) paired with crisp sans-serif body copy.

### 2. 🔀 Dedicated Multi-Page Navigation Architecture
Rather than scrolling a single cluttered home page, every section and dropdown menu item is mapped to its own **standalone, accessible page route**:

- **Home (`/`)**: High-impact Hero, Legacy Stats, Highlights, Bento Experience, AI STEM Lab preview, and CTAs.
- **About (`/about`)**: 28-year history (Est. 1998, former DPS Aligarh), founder Shri Pawan Jain's vision, leadership messages from Priya Jain & Arti Jha, and distinguished guest visits.
- **Academics (`/academics`)**: CBSE curriculum overview, assessment framework, and STEM labs.
  - **[CBSE Curriculum (`/academics/cbse`)](file:///c:/Users/priya/OneDrive/Desktop/Pavna%20School%20Revamp/src/pages/academics/CbsePage.tsx)**: Science (PCM/PCB), Commerce, and Humanities streams breakdown.
  - **[Assessment & Pedagogy (`/academics/assessment`)](file:///c:/Users/priya/OneDrive/Desktop/Pavna%20School%20Revamp/src/pages/academics/AssessmentPage.tsx)**: Continuous evaluation & JEE/NEET/Olympiad foundation.
  - **[Expert Faculty (`/academics/faculty`)](file:///c:/Users/priya/OneDrive/Desktop/Pavna%20School%20Revamp/src/pages/academics/FacultyPage.tsx)**: 250+ educators, 1:15 teacher-student ratio, and mentors.
  - **[AI & STEM Labs (`/academics/ai-robotics`)](file:///c:/Users/priya/OneDrive/Desktop/Pavna%20School%20Revamp/src/pages/academics/AiRoboticsPage.tsx)**: Python coding, IoT microcontrollers, 3D printing, and robotics.
- **Beyond Academics (`/beyond-academics`)**: Music, drama, public speaking, fine arts, eco club, and sports academies.
- **Residential Boarding (`/boarding`)**: Class IV onwards AC boarding suites, 24/7 pastoral care, female wardens, and nutritionist-planned dining.
- **Campus & Gallery (`/campus`)**: Filterable photo gallery (*All, Academics, Technology, Sports, Arts*) with interactive Lightbox viewer modal.
- **Infrastructure (`/infrastructure`)**: 25-acre green campus facilities, smart digital classrooms, sports complexes, and GPS bus transport.
- **CBSE Mandatory Disclosure (`/cbse-disclosure`)**: Statutory compliance tables, affiliation approvals, safety certificates, and staff metrics.
- **News & Campus Events (`/news-events`)**: Bulletins, athletic meets, academic expos, and school announcements.
- **Admissions (`/admissions`)**: Session 2026–27 roadmap.
  - **[Admission Process (`/admissions/process`)](file:///c:/Users/priya/OneDrive/Desktop/Pavna%20School%20Revamp/src/pages/admissions/ProcessPage.tsx)**: 5-step journey & required document checklist.
  - **[Fee Structure & Policy (`/admissions/fees`)](file:///c:/Users/priya/OneDrive/Desktop/Pavna%20School%20Revamp/src/pages/admissions/FeesPage.tsx)**: Quarterly installment schedules & prospectus request.
  - **[Admissions FAQ (`/admissions/faq`)](file:///c:/Users/priya/OneDrive/Desktop/Pavna%20School%20Revamp/src/pages/admissions/FaqPage.tsx)**: Comprehensive accordion FAQs.
- **Contact Us (`/contact`)**: Agra Highway, Aligarh map location details, direct inquiry form, and instant call/email channels.

### 3. 📱 Flawless Responsive & Accessibility Engineering
- **Glassmorphism Navbar**: Transparent over dark hero banners at page top, smoothly transitioning to warm off-white glass (`glass-header`) on scroll.
- **Mobile Clutter Reduction**: Top utility bar auto-collapses on mobile screens (`<768px`) for a clean, single-row logo & action header.
- **Accessible Interactions**: Keyboard-navigable modals, Lightbox gallery overlay, and mobile drawer menu.

---

## 🛠️ Project Setup & Local Development

### Prerequisites
- Node.js `v18+` or `v20+`
- npm `v9+` or `v10+`

### Installation & Startup Commands

```bash
# 1. Clone the repository
git clone https://github.com/JayeshWani7/DETTROIN-INT-Jayesh-Website.git

# 2. Navigate to project directory
cd DETTROIN-INT-Jayesh-Website

# 3. Install dependencies
npm install

# 4. Start local development server
npm run dev

# 5. Build for production compilation
npm run build
```

---

## 📁 Repository Directory Structure

```
Pavna School Revamp/
├── public/                  # Public static assets & favicon
├── src/
│   ├── components/          # Reusable UI Components
│   │   ├── Navbar.tsx       # Fixed glassmorphism header & navigation dropdowns
│   │   ├── PageHeader.tsx   # Interior page cinematic banner & breadcrumbs
│   │   ├── Hero.tsx         # High-impact home hero section
│   │   ├── LegacyStats.tsx  # Interactive animated stat counter grid
│   │   ├── AboutSection.tsx # School heritage & founder story
│   │   ├── LearningBento.tsx# Bento grid experience of academic pillars
│   │   ├── FutureReady.tsx  # STEM, AI & Robotics laboratory section
│   │   ├── SEELSection.tsx  # Social, Emotional & Ethical Learning
│   │   ├── SportsMasonry.tsx# Sports & athletic facility showcase
│   │   ├── BeyondAcademics.tsx # Co-curricular clubs & arts interactive selector
│   │   ├── BoardingSection.tsx # Residential boarding life & pastoral care
│   │   ├── LeadershipSection.tsx # Directors Priya Jain & Principal Arti Jha quotes
│   │   ├── CampusGallery.tsx # Filterable photo gallery with Lightbox modal
│   │   ├── AdmissionsJourney.tsx # 5-step admission roadmap
│   │   ├── FAQAccordion.tsx # Accessible FAQ accordion
│   │   ├── AdmissionCTA.tsx # Global session 2026-27 admission call-to-action
│   │   ├── ApplyModal.tsx   # Interactive online application modal dialog
│   │   └── Footer.tsx       # Multi-column footer & contact details
│   │
│   ├── pages/               # Standalone Dedicated Page Components
│   │   ├── HomePage.tsx
│   │   ├── AboutPage.tsx
│   │   ├── AcademicsPage.tsx
│   │   ├── BeyondAcademicsPage.tsx
│   │   ├── BoardingPage.tsx
│   │   ├── CampusPage.tsx
│   │   ├── InfrastructurePage.tsx
│   │   ├── CbseDisclosurePage.tsx
│   │   ├── NewsEventsPage.tsx
│   │   ├── AdmissionsPage.tsx
│   │   ├── ContactPage.tsx
│   │   ├── academics/       # Academic Sub-Pages
│   │   │   ├── CbsePage.tsx
│   │   │   ├── AssessmentPage.tsx
│   │   │   ├── FacultyPage.tsx
│   │   │   └── AiRoboticsPage.tsx
│   │   └── admissions/      # Admissions Sub-Pages
│   │       ├── ProcessPage.tsx
│   │       ├── FeesPage.tsx
│   │       └── FaqPage.tsx
│   │
│   ├── data/
│   │   └── schoolData.ts    # Authoritative grounded school facts & data
│   │
│   ├── App.tsx              # BrowserRouter router configuration
│   ├── index.css            # Tailwind v4 import & design system tokens
│   └── main.tsx             # Application DOM entry point
│
├── .gitignore               # Clean git ignore configuration
├── package.json             # Project dependencies & build scripts
├── vite.config.ts           # Vite bundler & Tailwind CSS v4 config
└── README.md                # Submission documentation
```

---

## 📜 License & Acknowledgments

- **Reference Website**: [Pavna School, Aligarh](https://pavnaschoolaligarh.com/)
- Built as part of the **Frontend Engineering & Redesign Challenge**.
