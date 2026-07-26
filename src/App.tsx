import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { LegacyStats } from './components/LegacyStats';
import { AboutSection } from './components/AboutSection';
import { LearningBento } from './components/LearningBento';
import { FutureReady } from './components/FutureReady';
import { SEELSection } from './components/SEELSection';
import { SportsMasonry } from './components/SportsMasonry';
import { BeyondAcademics } from './components/BeyondAcademics';
import { BoardingSection } from './components/BoardingSection';
import { LeadershipSection } from './components/LeadershipSection';
import { DistinguishedVisitors } from './components/DistinguishedVisitors';
import { CampusGallery } from './components/CampusGallery';
import { Testimonials } from './components/Testimonials';
import { AdmissionsJourney } from './components/AdmissionsJourney';
import { FAQAccordion } from './components/FAQAccordion';
import { AdmissionCTA } from './components/AdmissionCTA';
import { Footer } from './components/Footer';
import { ApplyModal } from './components/ApplyModal';

export const App: React.FC = () => {
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);

  const handleOpenApplyModal = () => {
    setIsApplyModalOpen(true);
  };

  const handleCloseApplyModal = () => {
    setIsApplyModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-ivory-100 text-charcoal-900 font-sans selection:bg-gold-500 selection:text-forest-900 relative">
      {/* Sticky Header Navigation */}
      <Navbar onOpenApplyModal={handleOpenApplyModal} />

      {/* Main Content Sections Flowing in Story Order */}
      <main>
        {/* 1. Hero */}
        <Hero onOpenApplyModal={handleOpenApplyModal} />

        {/* 2. Pavna Legacy Statistics */}
        <LegacyStats />

        {/* 3. About Pavna & Educational Philosophy */}
        <AboutSection />

        {/* 4. Bento Learning Experience Grid */}
        <LearningBento />

        {/* 5. Future Ready Education: AI & Robotics */}
        <FutureReady />

        {/* 6. Signature SEEL Pillars Section */}
        <SEELSection />

        {/* 7. Sports & Campus Life Masonry */}
        <SportsMasonry />

        {/* 8. Beyond Academics Interactive Categories */}
        <BeyondAcademics />

        {/* 9. Residential Boarding Life */}
        <BoardingSection onOpenApplyModal={handleOpenApplyModal} />

        {/* 10. Visionary Leadership */}
        <LeadershipSection />

        {/* 11. Distinguished Visitors Showcase */}
        <DistinguishedVisitors />

        {/* 12. Asymmetric Campus Gallery with Lightbox */}
        <CampusGallery />

        {/* 13. Testimonials from Parent & Alumni Community */}
        <Testimonials />

        {/* 14. 5-Step Admissions Journey */}
        <AdmissionsJourney onOpenApplyModal={handleOpenApplyModal} />

        {/* 15. Accessible FAQ Accordion */}
        <FAQAccordion />

        {/* 16. Dramatic Final Admission CTA */}
        <AdmissionCTA onOpenApplyModal={handleOpenApplyModal} />
      </main>

      {/* Footer */}
      <Footer onOpenApplyModal={handleOpenApplyModal} />

      {/* Global Admission Enquiry Modal */}
      <ApplyModal isOpen={isApplyModalOpen} onClose={handleCloseApplyModal} />
    </div>
  );
};

export default App;
