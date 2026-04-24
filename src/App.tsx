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
import CheckoutPage from './components/CheckoutPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'checkout'>('home');

  if (currentPage === 'checkout') {
    return <CheckoutPage onBack={() => setCurrentPage('home')} />;
  }

  return (
    <div dir="rtl" className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <Hero onRequestClick={() => setCurrentPage('checkout')} />
        <HowItWorks />
        <Ambassadors />
        <JoinAmbassador />
      </main>
      <Footer />
      <FloatingRequestButton onOpenRequest={() => setCurrentPage('checkout')} />
    </div>
  );
}
