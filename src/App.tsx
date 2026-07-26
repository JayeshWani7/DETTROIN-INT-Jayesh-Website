import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ApplyModal } from './components/ApplyModal';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { AcademicsPage } from './pages/AcademicsPage';
import { CbsePage } from './pages/academics/CbsePage';
import { AssessmentPage } from './pages/academics/AssessmentPage';
import { FacultyPage } from './pages/academics/FacultyPage';
import { AiRoboticsPage } from './pages/academics/AiRoboticsPage';
import { BeyondAcademicsPage } from './pages/BeyondAcademicsPage';
import { BoardingPage } from './pages/BoardingPage';
import { CampusPage } from './pages/CampusPage';
import { AdmissionsPage } from './pages/AdmissionsPage';
import { ProcessPage } from './pages/admissions/ProcessPage';
import { FeesPage } from './pages/admissions/FeesPage';
import { FaqPage } from './pages/admissions/FaqPage';
import { ContactPage } from './pages/ContactPage';

export const App: React.FC = () => {
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);

  const handleOpenApplyModal = () => {
    setIsApplyModalOpen(true);
  };

  const handleCloseApplyModal = () => {
    setIsApplyModalOpen(false);
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-ivory-100 text-charcoal-900 font-sans selection:bg-gold-500 selection:text-forest-900 relative w-full overflow-x-hidden flex flex-col justify-between">
        
        {/* Sticky Header Navbar */}
        <Navbar onOpenApplyModal={handleOpenApplyModal} />

        {/* Dynamic Page Router */}
        <main className="flex-grow w-full">
          <Routes>
            <Route path="/" element={<HomePage onOpenApplyModal={handleOpenApplyModal} />} />
            <Route path="/about" element={<AboutPage onOpenApplyModal={handleOpenApplyModal} />} />
            
            {/* Academics & Sub-Pages */}
            <Route path="/academics" element={<AcademicsPage onOpenApplyModal={handleOpenApplyModal} />} />
            <Route path="/academics/cbse" element={<CbsePage onOpenApplyModal={handleOpenApplyModal} />} />
            <Route path="/academics/assessment" element={<AssessmentPage onOpenApplyModal={handleOpenApplyModal} />} />
            <Route path="/academics/faculty" element={<FacultyPage onOpenApplyModal={handleOpenApplyModal} />} />
            <Route path="/academics/ai-robotics" element={<AiRoboticsPage onOpenApplyModal={handleOpenApplyModal} />} />
            
            <Route path="/beyond-academics" element={<BeyondAcademicsPage onOpenApplyModal={handleOpenApplyModal} />} />
            <Route path="/boarding" element={<BoardingPage onOpenApplyModal={handleOpenApplyModal} />} />
            <Route path="/campus" element={<CampusPage onOpenApplyModal={handleOpenApplyModal} />} />
            
            {/* Admissions & Sub-Pages */}
            <Route path="/admissions" element={<AdmissionsPage onOpenApplyModal={handleOpenApplyModal} />} />
            <Route path="/admissions/process" element={<ProcessPage onOpenApplyModal={handleOpenApplyModal} />} />
            <Route path="/admissions/fees" element={<FeesPage onOpenApplyModal={handleOpenApplyModal} />} />
            <Route path="/admissions/faq" element={<FaqPage onOpenApplyModal={handleOpenApplyModal} />} />
            
            <Route path="/contact" element={<ContactPage onOpenApplyModal={handleOpenApplyModal} />} />
          </Routes>
        </main>

        {/* Multi-column Footer */}
        <Footer onOpenApplyModal={handleOpenApplyModal} />

        {/* Global Admission Modal */}
        <ApplyModal isOpen={isApplyModalOpen} onClose={handleCloseApplyModal} />

      </div>
    </BrowserRouter>
  );
};

export default App;
