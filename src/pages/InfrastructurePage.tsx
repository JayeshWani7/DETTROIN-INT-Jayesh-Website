import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { SportsMasonry } from '../components/SportsMasonry';
import { AdmissionCTA } from '../components/AdmissionCTA';
import { Cpu, BookOpen, Trophy, Home, Bus, ShieldCheck, HeartPulse, Sparkles } from 'lucide-react';

interface InfrastructurePageProps {
  onOpenApplyModal: () => void;
}

export const InfrastructurePage: React.FC<InfrastructurePageProps> = ({ onOpenApplyModal }) => {
  const facilities = [
    {
      title: "Smart Digital Classrooms",
      description: "Interactive smart touchscreens, high-speed fiber connectivity, ergonomic single-seater seating, and climate control in all 75+ learning rooms.",
      icon: <BookOpen className="w-6 h-6 text-gold-500" />,
      tag: "DIGITAL PEDAGOGY"
    },
    {
      title: "AI & STEM Robotics Center",
      description: "Dedicated micro-controller hardware kits, 3D printing stations, Python coding consoles, and autonomous rover testing tracks.",
      icon: <Cpu className="w-6 h-6 text-gold-500" />,
      tag: "INNOVATION HUB"
    },
    {
      title: "Olympic Aquatic & Sports Arena",
      description: "Half-Olympic temperature-controlled swimming pool, synthetic basketball courts, cricket turf nets, and lawn tennis facilities.",
      icon: <Trophy className="w-6 h-6 text-gold-500" />,
      tag: "PHYSICAL EXCELLENCE"
    },
    {
      title: "Air-Conditioned Boarding Houses",
      description: "Separate residence halls for boys and girls with attached bathrooms, study alcoves, resident housemasters, and nutritional dining.",
      icon: <Home className="w-6 h-6 text-gold-500" />,
      tag: "RESIDENTIAL CARE"
    },
    {
      title: "GPS-Tracked AC Bus Fleet",
      description: "Fleet of air-conditioned buses covering all major Aligarh routes with real-time GPS tracking, speed governors, and female attendants.",
      icon: <Bus className="w-6 h-6 text-gold-500" />,
      tag: "TRANSPORT SAFETY"
    },
    {
      title: "Medical Infirmary & 24/7 Nurse",
      description: "On-campus health center with full-time registered nursing staff, emergency doctor-on-call, and ambulance facility.",
      icon: <HeartPulse className="w-6 h-6 text-gold-500" />,
      tag: "HEALTHCARE"
    }
  ];

  return (
    <div className="w-full">
      <PageHeader
        badge="25-ACRE GREEN CAMPUS • INFRASTRUCTURE"
        title="Facilities Designed for Holistic Excellence."
        subtitle="Sprawling green grounds, smart digital classrooms, AI robotics laboratories, half-Olympic pool, and secure residential living on Agra Highway, Aligarh."
        backgroundImageUrl="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=2000&q=80"
        breadcrumbs={[{ label: 'Infrastructure & Facilities' }]}
      />

      <section className="py-24 bg-ivory-100 text-charcoal-900">
        <div className="max-w-[1600px] w-full mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-forest-700 text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2">
              <Sparkles className="w-4 h-4 text-gold-500" />
              WORLD-CLASS CAMPUS AMENITIES
            </span>
            <h2 className="heading-section font-serif text-forest-900 font-normal">
              Every Space Inspires Discovery.
            </h2>
            <p className="text-charcoal-700 text-base font-light">
              Explore how our modern architecture, green spaces, and technology infrastructure create an uplifting environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((f, idx) => (
              <div key={idx} className="bg-ivory-200 rounded-3xl p-8 shadow-editorial border border-forest-800/10 space-y-4 flex flex-col justify-between hover:-translate-y-1 transition-transform">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-forest-900 flex items-center justify-center border border-gold-500/30">
                      {f.icon}
                    </div>
                    <span className="text-[10px] font-mono font-bold tracking-widest text-gold-600 uppercase bg-gold-500/10 px-3 py-1 rounded-full">
                      {f.tag}
                    </span>
                  </div>
                  <h3 className="font-serif font-bold text-2xl text-forest-900">{f.title}</h3>
                  <p className="text-xs text-charcoal-700 font-light leading-relaxed">{f.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SportsMasonry />
      <AdmissionCTA onOpenApplyModal={onOpenApplyModal} />
    </div>
  );
};
