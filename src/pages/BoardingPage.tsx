import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { BoardingSection } from '../components/BoardingSection';
import { Testimonials } from '../components/Testimonials';
import { FAQAccordion } from '../components/FAQAccordion';
import { AdmissionCTA } from '../components/AdmissionCTA';

interface BoardingPageProps {
  onOpenApplyModal: () => void;
}

export const BoardingPage: React.FC<BoardingPageProps> = ({ onOpenApplyModal }) => {
  return (
    <div className="w-full">
      <PageHeader
        badge="RESIDENTIAL BOARDING LIFE"
        title="A Safe, Nurturing Home Away From Home."
        subtitle="World-class residential boarding for boys and girls from Class IV onwards featuring AC rooms, attached bathrooms, 24/7 pastoral care, female wardens, and gourmet dining."
        backgroundImageUrl="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=2000&q=80"
        breadcrumbs={[{ label: 'Boarding' }]}
      />
      <BoardingSection onOpenApplyModal={onOpenApplyModal} />
      <Testimonials />
      <FAQAccordion />
      <AdmissionCTA onOpenApplyModal={onOpenApplyModal} />
    </div>
  );
};
