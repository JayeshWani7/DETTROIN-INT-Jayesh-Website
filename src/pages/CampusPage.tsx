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
        badge="25-ACRE GREEN CAMPUS • GALLERY & ARCHIVES"
        title="Life, Unscripted Across 25 Acres."
        subtitle="A visual archives gallery into everyday moments, hands-on scientific discoveries, sports meets, and artistic celebrations at Pavna School, Aligarh."
        backgroundImageUrl="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=2000&q=80"
        breadcrumbs={[{ label: 'Campus & Gallery' }]}
      />
      <CampusGallery />
      <SportsMasonry />
      <AdmissionCTA onOpenApplyModal={onOpenApplyModal} />
    </div>
  );
};
