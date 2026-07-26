import React from 'react';
import { Hero } from '../components/Hero';
import { LegacyStats } from '../components/LegacyStats';
import { AboutSection } from '../components/AboutSection';
import { LearningBento } from '../components/LearningBento';
import { FutureReady } from '../components/FutureReady';
import { SEELSection } from '../components/SEELSection';
import { SportsMasonry } from '../components/SportsMasonry';
import { BeyondAcademics } from '../components/BeyondAcademics';
import { BoardingSection } from '../components/BoardingSection';
import { LeadershipSection } from '../components/LeadershipSection';
import { DistinguishedVisitors } from '../components/DistinguishedVisitors';
import { CampusGallery } from '../components/CampusGallery';
import { Testimonials } from '../components/Testimonials';
import { AdmissionsJourney } from '../components/AdmissionsJourney';
import { FAQAccordion } from '../components/FAQAccordion';
import { AdmissionCTA } from '../components/AdmissionCTA';

interface HomePageProps {
  onOpenApplyModal: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenApplyModal }) => {
  return (
    <div className="w-full">
      <Hero onOpenApplyModal={onOpenApplyModal} />
      <LegacyStats />
      <AboutSection />
      <LearningBento />
      <FutureReady />
      <SEELSection />
      <SportsMasonry />
      <BeyondAcademics />
      <BoardingSection onOpenApplyModal={onOpenApplyModal} />
      <LeadershipSection />
      <DistinguishedVisitors />
      <CampusGallery />
      <Testimonials />
      <AdmissionsJourney onOpenApplyModal={onOpenApplyModal} />
      <FAQAccordion />
      <AdmissionCTA onOpenApplyModal={onOpenApplyModal} />
    </div>
  );
};
