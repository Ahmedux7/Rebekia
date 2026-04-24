/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Ambassadors from './components/Ambassadors';
import JoinAmbassador from './components/JoinAmbassador';
import Footer from './components/Footer';
import FloatingRequestButton from './components/FloatingRequestButton';
import RequestFormModal from './components/RequestFormModal';

export default function App() {
  const [isRequestModalOpen, setIsRequestModalOpen] = useState(false);

  return (
    <div dir="rtl" className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <Hero onRequestClick={() => setIsRequestModalOpen(true)} />
        <HowItWorks />
        <Ambassadors />
        <JoinAmbassador />
      </main>
      <Footer />
      <FloatingRequestButton onOpenRequest={() => setIsRequestModalOpen(true)} />
      <RequestFormModal isOpen={isRequestModalOpen} onClose={() => setIsRequestModalOpen(false)} />
    </div>
  );
}
