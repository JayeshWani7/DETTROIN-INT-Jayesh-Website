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
        badge="OUR STORY & LEGACY • EST. 1998"
        title="More Than a School. A Place to Discover Who You Are."
        subtitle="Founded in 1998 by Shri Pawan Jain and formerly known as Delhi Public School (DPS) Aligarh, Pavna School is dedicated to holistic learning, individual confidence, and ethical leadership."
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
