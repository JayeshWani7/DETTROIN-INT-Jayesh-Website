import React from 'react';
import { PageHeader } from '../../components/PageHeader';
import { AdmissionsJourney } from '../../components/AdmissionsJourney';
import { AdmissionCTA } from '../../components/AdmissionCTA';
import { FileText, CheckCircle2, Calendar, Sparkles } from 'lucide-react';

interface ProcessPageProps {
  onOpenApplyModal: () => void;
}

export const ProcessPage: React.FC<ProcessPageProps> = ({ onOpenApplyModal }) => {
  const documentChecklist = [
    "Birth Certificate issued by Municipal Corporation",
    "Past 2 Years Academic Report Cards / Marksheets",
    "Transfer Certificate (TC) from previous school",
    "Passport size photographs of Student & Parents",
    "Aadhaar Card / ID Proof of Student & Parents"
  ];

  return (
    <div className="w-full">
      <PageHeader
        badge="ADMISSION PROCESS 2026–27"
        title="A Transparent 5-Step Admissions Journey."
        subtitle="We welcome parents to visit our 25-acre campus on Agra Highway, Aligarh or submit an online enquiry for instant registration."
        backgroundImageUrl="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=2000&q=80"
        breadcrumbs={[
          { label: 'Admissions', href: '/admissions' },
          { label: 'Admission Process' }
        ]}
      />

      <AdmissionsJourney onOpenApplyModal={onOpenApplyModal} />

      <section className="py-24 bg-ivory-200 text-charcoal-900">
        <div className="max-w-[1600px] w-full mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-forest-700 text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2">
              <FileText className="w-4 h-4 text-gold-500" />
              DOCUMENTATION & VERIFICATION
            </span>
            <h2 className="heading-section font-serif text-forest-900 font-normal">
              Required Documents Checklist.
            </h2>
            <p className="text-charcoal-700 text-base font-light">
              Please keep the following authentic documents ready for formal verification during the admission interaction.
            </p>
          </div>

          <div className="max-w-2xl mx-auto bg-ivory-100 rounded-3xl p-8 shadow-editorial border border-forest-800/10 space-y-4">
            {documentChecklist.map((doc, idx) => (
              <div key={idx} className="flex items-center gap-3 p-3.5 rounded-2xl bg-ivory-200 border border-forest-800/10 text-sm font-medium text-forest-900">
                <CheckCircle2 className="w-5 h-5 text-gold-600 flex-shrink-0" />
                <span>{doc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AdmissionCTA onOpenApplyModal={onOpenApplyModal} />
    </div>
  );
};
