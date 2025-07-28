import React from 'react';

// Import all the section components
import Navbar from "../components/landing/Navbar";
import HeroSection from "../components/landing/HeroSection";
import SocialProof from "../components/landing/SocialProof";
import FeaturedTours from "../components/landing/FeaturedTours";
import HowItWorks from "../components/landing/HowItWorks";
import WhyChooseUs from "../components/landing/WhyChooseUs";
import TourCategories from "../components/landing/TourCategories";
import Testimonials from "../components/landing/Testimonials";
import InspirationSection from "../components/landing/InspirationSection";
import MeetTheGuides from "../components/landing/MeetTheGuides";
import NewsletterSignup from "../components/landing/NewsletterSignup";
import FinalCTA from "../components/landing/FinalCTA";
import Footer from "../components/landing/Footer";

export default function LandingPage() {
  return (
    // Using a main tag for semantic HTML and better structure
    <main className="bg-white dark:bg-gray-900">
      <Navbar />
      <HeroSection />
      <SocialProof />
      <FeaturedTours />
      <HowItWorks />
      <WhyChooseUs />
      <TourCategories />
      <Testimonials />
      <InspirationSection />
      <MeetTheGuides />
      <NewsletterSignup />
      <FinalCTA />
      <Footer />
    </main>
  );
}
