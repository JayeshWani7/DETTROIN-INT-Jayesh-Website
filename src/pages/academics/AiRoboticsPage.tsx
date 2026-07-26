import React from 'react';
import { PageHeader } from '../../components/PageHeader';
import { FutureReady } from '../../components/FutureReady';
import { AdmissionCTA } from '../../components/AdmissionCTA';

interface AiRoboticsPageProps {
  onOpenApplyModal: () => void;
}

export const AiRoboticsPage: React.FC<AiRoboticsPageProps> = ({ onOpenApplyModal }) => {
  return (
    <div className="w-full">
      <PageHeader
        badge="FUTURE READY STEM • AI & ROBOTICS"
        title="Building Tomorrow’s Innovators."
        subtitle="Hands-on exposure to computational thinking, Python/C++ coding, IoT microcontrollers, 3D printing, and autonomous robotics prototypes."
        backgroundImageUrl="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=2000&q=80"
        breadcrumbs={[
          { label: 'Academics', href: '/academics' },
          { label: 'AI & STEM Labs' }
        ]}
      />
      <FutureReady />
      <AdmissionCTA onOpenApplyModal={onOpenApplyModal} />
    </div>
  );
};
