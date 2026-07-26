import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { CampusGallery } from '../components/CampusGallery';
import { SportsMasonry } from '../components/SportsMasonry';
import { AdmissionCTA } from '../components/AdmissionCTA';

interface CampusPageProps {
  onOpenApplyModal: () => void;
}

export const CampusPage: React.FC<CampusPageProps> = ({ onOpenApplyModal }) => {
  return (
    <div className="w-full">
      <PageHeader
        badge="25-ACRE GREEN CAMPUS • ALIGARH"
        title="World-Class Facilities Designed For Growth."
        subtitle="Explore our sprawling campus featuring smart classrooms, AI laboratories, synthetic athletics arenas, acoustic music halls, and residential boarding houses."
        backgroundImageUrl="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=2000&q=80"
        breadcrumbs={[{ label: 'Campus' }]}
      />
      <CampusGallery />
      <SportsMasonry />
      <AdmissionCTA onOpenApplyModal={onOpenApplyModal} />
    </div>
  );
};
