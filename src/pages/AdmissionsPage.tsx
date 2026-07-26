import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { AdmissionsJourney } from '../components/AdmissionsJourney';
import { FAQAccordion } from '../components/FAQAccordion';
import { AdmissionCTA } from '../components/AdmissionCTA';

interface AdmissionsPageProps {
  onOpenApplyModal: () => void;
}

export const AdmissionsPage: React.FC<AdmissionsPageProps> = ({ onOpenApplyModal }) => {
  return (
    <div className="w-full">
      <PageHeader
        badge="ADMISSIONS OPEN • SESSION 2026–27"
        title="Your Pavna Journey Starts Here."
        subtitle="We invite parents and prospective learners to explore our admissions roadmap, schedule a campus visit on Agra Highway, and apply online."
        backgroundImageUrl="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=2000&q=80"
        breadcrumbs={[{ label: 'Admissions' }]}
      />
      <AdmissionsJourney onOpenApplyModal={onOpenApplyModal} />
      <FAQAccordion />
      <AdmissionCTA onOpenApplyModal={onOpenApplyModal} />
    </div>
  );
};
