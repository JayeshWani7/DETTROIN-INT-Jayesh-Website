import React from 'react';
import { PageHeader } from '../../components/PageHeader';
import { FAQAccordion } from '../../components/FAQAccordion';
import { AdmissionCTA } from '../../components/AdmissionCTA';

interface FaqPageProps {
  onOpenApplyModal: () => void;
}

export const FaqPage: React.FC<FaqPageProps> = ({ onOpenApplyModal }) => {
  return (
    <div className="w-full">
      <PageHeader
        badge="HELP & FAQ"
        title="Frequently Asked Questions."
        subtitle="Answers to common questions about Pavna School's CBSE curriculum, boarding houses, transport routes, and admissions."
        backgroundImageUrl="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=2000&q=80"
        breadcrumbs={[
          { label: 'Admissions', href: '/admissions' },
          { label: 'FAQ' }
        ]}
      />
      <FAQAccordion />
      <AdmissionCTA onOpenApplyModal={onOpenApplyModal} />
    </div>
  );
};
