import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ApplyModal } from './components/ApplyModal';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { AcademicsPage } from './pages/AcademicsPage';
import { BeyondAcademicsPage } from './pages/BeyondAcademicsPage';
import { BoardingPage } from './pages/BoardingPage';
import { CampusPage } from './pages/CampusPage';
import { AdmissionsPage } from './pages/AdmissionsPage';
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
            <Route path="/academics" element={<AcademicsPage onOpenApplyModal={handleOpenApplyModal} />} />
            <Route path="/beyond-academics" element={<BeyondAcademicsPage onOpenApplyModal={handleOpenApplyModal} />} />
            <Route path="/boarding" element={<BoardingPage onOpenApplyModal={handleOpenApplyModal} />} />
            <Route path="/campus" element={<CampusPage onOpenApplyModal={handleOpenApplyModal} />} />
            <Route path="/admissions" element={<AdmissionsPage onOpenApplyModal={handleOpenApplyModal} />} />
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
