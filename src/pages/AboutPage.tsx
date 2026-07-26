import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { AboutSection } from '../components/AboutSection';
import { LegacyStats } from '../components/LegacyStats';
import { LeadershipSection } from '../components/LeadershipSection';
import { DistinguishedVisitors } from '../components/DistinguishedVisitors';
import { AdmissionCTA } from '../components/AdmissionCTA';

interface AboutPageProps {
  onOpenApplyModal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenApplyModal }) => {
  return (
    <div className="w-full">
      <PageHeader
        badge="OUR STORY & HERITAGE • EST. 1998"
        title="A 28-Year Legacy of Nurturing Confident Leaders."
        subtitle="Founded in 1998 by Shri Pawan Jain in Aligarh and formerly known as Delhi Public School (DPS) Aligarh, Pavna School is built around curiosity, character, and holistic development."
        backgroundImageUrl="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=2000&q=80"
        breadcrumbs={[{ label: 'About Us' }]}
      />
      <AboutSection />
      <LegacyStats />
      <LeadershipSection />
      <DistinguishedVisitors />
      <AdmissionCTA onOpenApplyModal={onOpenApplyModal} />
    </div>
  );
};
