import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { BeyondAcademics } from '../components/BeyondAcademics';
import { SportsMasonry } from '../components/SportsMasonry';
import { CampusGallery } from '../components/CampusGallery';
import { AdmissionCTA } from '../components/AdmissionCTA';

interface BeyondAcademicsPageProps {
  onOpenApplyModal: () => void;
}

export const BeyondAcademicsPage: React.FC<BeyondAcademicsPageProps> = ({ onOpenApplyModal }) => {
  return (
    <div className="w-full">
      <PageHeader
        badge="BEYOND ACADEMICS & CLUBS"
        title="Talent Doesn’t Live Inside Textbooks."
        subtitle="Unleash artistic expression, athletic stamina, oratorical debate, and ecological leadership across our dedicated studios and multi-sport complexes."
        backgroundImageUrl="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=2000&q=80"
        breadcrumbs={[{ label: 'Beyond Academics' }]}
      />
      <BeyondAcademics />
      <SportsMasonry />
      <CampusGallery />
      <AdmissionCTA onOpenApplyModal={onOpenApplyModal} />
    </div>
  );
};
