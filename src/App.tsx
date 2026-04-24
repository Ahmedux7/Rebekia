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

export default function App() {
  return (
    <div dir="rtl" className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <Hero onRequestClick={() => {}} />
        <HowItWorks />
        <Ambassadors />
        <JoinAmbassador />
      </main>
      <Footer />
      <FloatingRequestButton />
    </div>
  );
}
