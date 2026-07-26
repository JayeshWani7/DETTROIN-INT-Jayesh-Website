import React from 'react';
import { PageHeader } from '../../components/PageHeader';
import { AdmissionCTA } from '../../components/AdmissionCTA';
import { CreditCard, Sparkles } from 'lucide-react';

interface FeesPageProps {
  onOpenApplyModal: () => void;
}

export const FeesPage: React.FC<FeesPageProps> = ({ onOpenApplyModal }) => {
  const policies = [
    { title: "Transparent Fee Structure", desc: "No hidden charges or unexpected mid-term levies. All tuition, lab, and activity fees are documented upfront." },
    { title: "Quarterly Installment Schedule", desc: "Fees are payable across four quarterly installments to ensure ease of planning for families." },
    { title: "Merit & Sports Scholarships", desc: "Financial concessions for exceptional state/national athletic champions and academic top scorers." },
    { title: "Transport & Boarding Options", desc: "Flexible billing depending on whether your child avails GPS AC bus transport or residential boarding." }
  ];

  return (
    <div className="w-full">
      <PageHeader
        badge="FEE STRUCTURE & GUIDELINES"
        title="Transparent Fee Policies & Financial Ease."
        subtitle="Pavna School maintains complete financial transparency with structured quarterly payments and merit scholarship opportunities."
        backgroundImageUrl="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=2000&q=80"
        breadcrumbs={[
          { label: 'Admissions', href: '/admissions' },
          { label: 'Fee Structure' }
        ]}
      />

      <section className="py-24 bg-ivory-100 text-charcoal-900">
        <div className="max-w-[1600px] w-full mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-forest-700 text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2">
              <Sparkles className="w-4 h-4 text-gold-500" />
              FINANCIAL TRANSPARENCY
            </span>
            <h2 className="heading-section font-serif text-forest-900 font-normal">
              Fee Guidelines for Session 2026–27.
            </h2>
            <p className="text-charcoal-700 text-base font-light">
              To request a complete fee schedule tailored to your child's grade and transport/boarding choice, please connect with our admissions office.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {policies.map((p, idx) => (
              <div key={idx} className="bg-ivory-200 rounded-3xl p-6 shadow-editorial border border-forest-800/10 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-forest-900 text-gold-400 flex items-center justify-center font-bold text-base">
                  0{idx + 1}
                </div>
                <h3 className="font-serif font-bold text-lg text-forest-900">{p.title}</h3>
                <p className="text-xs text-charcoal-700 font-light leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

          <div className="p-8 rounded-3xl bg-forest-900 text-ivory-100 max-w-3xl mx-auto text-center space-y-4 shadow-xl border border-gold-500/30">
            <CreditCard className="w-10 h-10 text-gold-400 mx-auto" />
            <h3 className="font-serif font-bold text-2xl text-ivory-100">Request Official Fee Breakdown</h3>
            <p className="text-xs text-forest-200 font-light max-w-xl mx-auto">
              Our team will send you the detailed fee booklet including tuition, laboratory fees, sports academy passes, and bus/boarding charges.
            </p>
            <button
              onClick={onOpenApplyModal}
              className="px-8 py-3.5 rounded-full bg-gold-500 hover:bg-gold-600 text-forest-950 font-bold text-sm transition-colors cursor-pointer"
            >
              Request Prospectus & Fee Sheet
            </button>
          </div>
        </div>
      </section>

      <AdmissionCTA onOpenApplyModal={onOpenApplyModal} />
    </div>
  );
};
