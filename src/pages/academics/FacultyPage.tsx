import React from 'react';
import { PageHeader } from '../../components/PageHeader';
import { LeadershipSection } from '../../components/LeadershipSection';
import { AdmissionCTA } from '../../components/AdmissionCTA';
import { Users, Award, Sparkles, CheckCircle2 } from 'lucide-react';

interface FacultyPageProps {
  onOpenApplyModal: () => void;
}

export const FacultyPage: React.FC<FacultyPageProps> = ({ onOpenApplyModal }) => {
  const highlights = [
    { title: "1:15 Teacher-Student Ratio", desc: "Ensuring individualized attention and close personal mentorship for every learner." },
    { title: "250+ Accomplished Educators", desc: "Post-graduate subject experts with decades of teaching experience across CBSE schools." },
    { title: "Continuous Pedagogy Workshops", desc: "Regular training in active learning, digital technology, and child psychology." },
    { title: "Dedicated Department Heads", desc: "Senior faculty guiding curriculum delivery across Sciences, Mathematics, Humanities, and AI." }
  ];

  return (
    <div className="w-full">
      <PageHeader
        badge="EXPERT FACULTY & MENTORS"
        title="Accomplished Educators Driven by Purpose."
        subtitle="Our 250+ dedicated faculty members combine subject expertise with warmth, empathy, and active mentorship."
        backgroundImageUrl="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=2000&q=80"
        breadcrumbs={[
          { label: 'Academics', href: '/academics' },
          { label: 'Expert Faculty' }
        ]}
      />

      <section className="py-24 bg-ivory-100 text-charcoal-900">
        <div className="max-w-[1600px] w-full mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-forest-700 text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2">
              <Sparkles className="w-4 h-4 text-gold-500" />
              FACULTY EXCELLENCE
            </span>
            <h2 className="heading-section font-serif text-forest-900 font-normal">
              Mentors Who Inspire Confidence.
            </h2>
            <p className="text-charcoal-700 text-base font-light">
              Teachers at Pavna don't just teach subjects—they spark curiosity, encourage bold questions, and nurture individual growth.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((h, idx) => (
              <div key={idx} className="bg-ivory-200 rounded-3xl p-6 shadow-editorial border border-forest-800/10 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-forest-900 text-gold-400 flex items-center justify-center font-bold text-base">
                  0{idx + 1}
                </div>
                <h3 className="font-serif font-bold text-lg text-forest-900">{h.title}</h3>
                <p className="text-xs text-charcoal-700 font-light leading-relaxed">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LeadershipSection />
      <AdmissionCTA onOpenApplyModal={onOpenApplyModal} />
    </div>
  );
};
