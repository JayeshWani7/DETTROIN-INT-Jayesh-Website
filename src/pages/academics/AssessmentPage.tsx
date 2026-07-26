import React from 'react';
import { PageHeader } from '../../components/PageHeader';
import { AdmissionCTA } from '../../components/AdmissionCTA';
import { Target, CheckCircle2, Award, Sparkles } from 'lucide-react';

interface AssessmentPageProps {
  onOpenApplyModal: () => void;
}

export const AssessmentPage: React.FC<AssessmentPageProps> = ({ onOpenApplyModal }) => {
  const pillars = [
    {
      title: "Continuous Formative Assessment",
      description: "Regular diagnostic quizzes, peer presentations, lab practical evaluations, and project portfolios instead of stress-heavy exam systems."
    },
    {
      title: "Competitive Foundation (JEE / NEET / CLAT)",
      description: "Integrated competitive exam foundation starting from Class IX, helping students build problem-solving speed and analytical accuracy."
    },
    {
      title: "Olympiad & National Talent Exposure",
      description: "Dedicated mentorship for Science Olympiads, Mathematics Olympiads, Spell Bee, and national talent search examinations."
    }
  ];

  return (
    <div className="w-full">
      <PageHeader
        badge="ASSESSMENT & EVALUATION"
        title="Measuring Understanding, Fostering Growth."
        subtitle="Our holistic evaluation system combines continuous diagnostic assessment with competitive exam foundation and Olympiad preparation."
        backgroundImageUrl="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=2000&q=80"
        breadcrumbs={[
          { label: 'Academics', href: '/academics' },
          { label: 'Assessment & Pedagogy' }
        ]}
      />

      <section className="py-24 bg-ivory-100 text-charcoal-900">
        <div className="max-w-[1600px] w-full mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-forest-700 text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2">
              <Sparkles className="w-4 h-4 text-gold-500" />
              INNOVATIVE EVALUATION
            </span>
            <h2 className="heading-section font-serif text-forest-900 font-normal">
              Beyond Traditional Testing.
            </h2>
            <p className="text-charcoal-700 text-base font-light">
              We evaluate conceptual clarity, analytical application, and creative problem solving rather than simple memory recall.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((p, idx) => (
              <div key={idx} className="bg-ivory-200 rounded-3xl p-8 shadow-editorial border border-forest-800/10 space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-forest-900 text-gold-400 flex items-center justify-center font-bold text-lg">
                  0{idx + 1}
                </div>
                <h3 className="font-serif font-bold text-xl text-forest-900">{p.title}</h3>
                <p className="text-xs text-charcoal-700 font-light leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AdmissionCTA onOpenApplyModal={onOpenApplyModal} />
    </div>
  );
};
