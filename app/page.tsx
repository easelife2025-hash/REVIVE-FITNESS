'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ServicesSection from '@/components/ServicesSection';
import EquipmentSection from '@/components/EquipmentSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import ReviewsSection from '@/components/ReviewsSection';
import FitnessCalculator from '@/components/FitnessCalculator';
import LocationSection from '@/components/LocationSection';
import FaqSection from '@/components/FaqSection';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';
import FloatingContactButtons from '@/components/FloatingContactButtons';
import BookVisitModal from '@/components/BookVisitModal';

export default function Home() {
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);

  const handleOpenBookModal = (service?: string) => {
    setSelectedService(service);
    setIsBookModalOpen(true);
  };

  const handleCloseBookModal = () => {
    setIsBookModalOpen(false);
    setSelectedService(undefined);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col antialiased selection:bg-amber-400 selection:text-zinc-950">
      {/* Navigation */}
      <Navbar onOpenBookModal={handleOpenBookModal} />

      {/* Main Content */}
      <main className="flex-1">
        {/* Powerful Hero with 4 Auto-looping Slides & Contextual Media Card */}
        <Hero onOpenBookModal={() => handleOpenBookModal()} />

        {/* Services (CrossFit, Cycling, Nutrition Consulting, Personal Training, Weight Training) */}
        <ServicesSection onOpenBookModal={handleOpenBookModal} />

        {/* Modern Equipment & Facilities */}
        <EquipmentSection />

        {/* Why People Choose Revive */}
        <WhyChooseUsSection onOpenBookModal={() => handleOpenBookModal()} />

        {/* Real Reviews (4.9★ from 192 reviews) */}
        <ReviewsSection />

        {/* Interactive Baseline Fitness & BMI Tool */}
        <FitnessCalculator onOpenBookModal={handleOpenBookModal} />

        {/* Location & Directions */}
        <LocationSection />

        {/* FAQs */}
        <FaqSection />

        {/* Strong CTA */}
        <CtaSection onOpenBookModal={() => handleOpenBookModal()} />
      </main>

      {/* Footer */}
      <Footer onOpenBookModal={handleOpenBookModal} />

      {/* Floating WhatsApp and Call Action Buttons at Right Bottom */}
      <FloatingContactButtons />

      {/* Interactive Booking & Consultation Modal */}
      <BookVisitModal
        isOpen={isBookModalOpen}
        onClose={handleCloseBookModal}
        preselectedService={selectedService}
      />
    </div>
  );
}
