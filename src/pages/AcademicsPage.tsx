import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { LearningBento } from '../components/LearningBento';
import { FutureReady } from '../components/FutureReady';
import { SEELSection } from '../components/SEELSection';
import { AdmissionCTA } from '../components/AdmissionCTA';

interface AcademicsPageProps {
  onOpenApplyModal: () => void;
}

export const AcademicsPage: React.FC<AcademicsPageProps> = ({ onOpenApplyModal }) => {
  return (
    <div className="w-full">
      <PageHeader
        badge="ACADEMICS & CURRICULUM"
        title="Academic Rigor Meets Inquiry & Technology."
        subtitle="Pavna School delivers an enriched CBSE curriculum integrated with Social, Emotional & Ethical Learning (SEEL) and hands-on AI & Robotics STEM laboratories."
        backgroundImageUrl="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=2000&q=80"
        breadcrumbs={[{ label: 'Academics' }]}
      />
      <LearningBento />
      <FutureReady />
      <SEELSection />
      <AdmissionCTA onOpenApplyModal={onOpenApplyModal} />
    </div>
  );
};
