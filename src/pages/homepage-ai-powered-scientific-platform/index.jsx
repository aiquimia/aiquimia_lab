import React, { useState, useEffect } from 'react';



import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import AccuracyShowcase from './components/AccuracyShowcase';
import PlatformCapabilities from './components/PlatformCapabilities';
import SocialProof from './components/SocialProof';
import CaseStudyCarousel from './components/CaseStudyCarousel';
import ScientificCommunity from './components/ScientificCommunity';
import Footer from './components/Footer';

const Homepage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`min-h-screen bg-background scientific-transition ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Header />
      
      <main className="pt-16 lg:pt-20">
        {/* Hero Section */}
        <HeroSection />
        
        {/* Accuracy Showcase */}
        <AccuracyShowcase />
        
        {/* Platform Capabilities */}
        <PlatformCapabilities />
        
        {/* Social Proof */}
        <SocialProof />
        
        {/* Case Study Carousel */}
        <CaseStudyCarousel />
        
        {/* Scientific Community */}
        <ScientificCommunity />
      </main>
      
      <Footer />
    </div>
  );
};

export default Homepage;