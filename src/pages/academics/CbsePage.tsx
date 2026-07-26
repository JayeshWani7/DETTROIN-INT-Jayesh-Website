import React from 'react';
import { PageHeader } from '../../components/PageHeader';
import { AdmissionCTA } from '../../components/AdmissionCTA';
import { BookOpen, CheckCircle2, Award, Sparkles, GraduationCap } from 'lucide-react';

interface CbsePageProps {
  onOpenApplyModal: () => void;
}

export const CbsePage: React.FC<CbsePageProps> = ({ onOpenApplyModal }) => {
  const streams = [
    {
      title: "Science Stream (PCM / PCB)",
      description: "Physics, Chemistry, Mathematics, Biology, Computer Science, and Artificial Intelligence with practical lab work.",
      subjects: ["Physics & Chemistry", "Mathematics & Applied Biology", "Computer Science & AI", "English Core & Physical Ed"]
    },
    {
      title: "Commerce Stream",
      description: "Accountancy, Business Studies, Economics, Applied Mathematics, and Informatics Practices for future entrepreneurs.",
      subjects: ["Financial Accountancy", "Business Studies & Law", "Micro & Macro Economics", "Informatics Practices"]
    },
    {
      title: "Humanities / Arts Stream",
      description: "Psychology, Political Science, History, Sociology, Fine Arts, and English Literature fostering critical thinkers.",
      subjects: ["Psychology & Human Behavior", "Political Science & Civics", "History & Culture", "Fine Arts & Digital Design"]
    }
  ];

  return (
    <div className="w-full">
      <PageHeader
        badge="ACADEMIC CURRICULUM • CBSE AFFILIATED"
        title="CBSE Academic Foundations & Pedagogy."
        subtitle="Pavna School delivers an enriched Central Board of Secondary Education (CBSE) curriculum from Nursery to Class XII, fostering conceptual clarity and competitive edge."
        backgroundImageUrl="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=2000&q=80"
        breadcrumbs={[
          { label: 'Academics', href: '/academics' },
          { label: 'CBSE Curriculum' }
        ]}
      />

      <section className="py-24 bg-ivory-100 text-charcoal-900">
        <div className="max-w-[1600px] w-full mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 space-y-16">
          
          {/* Overview Statement */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-forest-700 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-gold-500" />
                NATIONALLY ACCREDITED PEDAGOGY
              </span>
              <h2 className="heading-section font-serif text-forest-900 font-normal">
                Structured Inquiry & Rigorous Academics.
              </h2>
              <p className="text-charcoal-700 text-base sm:text-lg font-light leading-relaxed">
                Affiliated with the Central Board of Secondary Education (CBSE), New Delhi, Pavna School follows NCERT guidelines integrated with modern active learning, digital smart boards, and hands-on laboratory experimentation.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-ivory-200 border border-forest-800/10 space-y-1">
                  <div className="flex items-center gap-2 text-forest-800 font-bold text-sm">
                    <BookOpen className="w-4 h-4 text-gold-600" />
                    <span>NCERT Framework Alignment</span>
                  </div>
                  <p className="text-xs text-charcoal-700 font-light">Thorough preparation for CBSE Board examinations and national entrance tests.</p>
                </div>
                <div className="p-4 rounded-2xl bg-ivory-200 border border-forest-800/10 space-y-1">
                  <div className="flex items-center gap-2 text-forest-800 font-bold text-sm">
                    <Award className="w-4 h-4 text-gold-600" />
                    <span>100% Board Pass Record</span>
                  </div>
                  <p className="text-xs text-charcoal-700 font-light">Consistent top scores and distinctions across Science, Commerce, and Humanities.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-editorial border border-forest-800/10 aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=80"
                  alt="Students studying CBSE curriculum"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Senior Secondary Streams Showcase */}
          <div className="space-y-8">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-forest-700 text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2">
                <GraduationCap className="w-4 h-4 text-gold-500" />
                CLASS XI & XII STREAMS
              </span>
              <h2 className="heading-section font-serif text-forest-900 font-normal">
                Senior Secondary Pathways.
              </h2>
              <p className="text-charcoal-700 text-base font-light">
                Tailored academic streams empowering students to pursue engineering, medicine, finance, law, design, or public policy.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {streams.map((stream, idx) => (
                <div key={idx} className="bg-ivory-200 rounded-3xl p-8 shadow-editorial border border-forest-800/10 space-y-6 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-forest-900 text-gold-400 font-bold text-xl flex items-center justify-center">
                      0{idx + 1}
                    </div>
                    <h3 className="font-serif font-bold text-2xl text-forest-900">{stream.title}</h3>
                    <p className="text-xs text-charcoal-700 font-light leading-relaxed">{stream.description}</p>
                    <div className="space-y-2 pt-4 border-t border-forest-800/10">
                      {stream.subjects.map((sub, sIdx) => (
                        <div key={sIdx} className="flex items-center gap-2 text-xs text-charcoal-800 font-medium">
                          <CheckCircle2 className="w-4 h-4 text-forest-700 flex-shrink-0" />
                          <span>{sub}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      <AdmissionCTA onOpenApplyModal={onOpenApplyModal} />
    </div>
  );
};
