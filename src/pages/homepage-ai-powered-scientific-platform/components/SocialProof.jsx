import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const SocialProof = () => {
  const [currentTicker, setCurrentTicker] = useState(0);

  const universityPartners = [
    { name: 'MIT', logo: 'https://images.unsplash.com/photo-1562774053-701939374585?w=120&h=60&fit=crop' },
    { name: 'Stanford', logo: 'https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=120&h=60&fit=crop' },
    { name: 'Harvard', logo: 'https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=120&h=60&fit=crop' },
    { name: 'Caltech', logo: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=120&h=60&fit=crop' },
    { name: 'Oxford', logo: 'https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=120&h=60&fit=crop' },
    { name: 'Cambridge', logo: 'https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=120&h=60&fit=crop' }
  ];

  const recentPredictions = [
    { location: 'Boston, MA', compound: 'Novel Antibiotic Compound', time: '2 min ago' },
    { location: 'London, UK', compound: 'Polymer Catalyst', time: '5 min ago' },
    { location: 'Tokyo, JP', compound: 'Drug Metabolite', time: '8 min ago' },
    { location: 'Berlin, DE', compound: 'Organic Semiconductor', time: '12 min ago' },
    { location: 'Sydney, AU', compound: 'Pharmaceutical Intermediate', time: '15 min ago' },
    { location: 'Toronto, CA', compound: 'Green Chemistry Solvent', time: '18 min ago' }
  ];

  const researchCitations = [
    {
      title: "AI-Driven Molecular Property Prediction in Drug Discovery",
      journal: "Nature Chemistry",
      year: 2024,
      citations: 127,
      impact: 9.4
    },
    {
      title: "Machine Learning Approaches to ADMET Prediction",
      journal: "Journal of Chemical Information and Modeling",
      year: 2024,
      citations: 89,
      impact: 4.8
    },
    {
      title: "Quantum-Enhanced Molecular Descriptors for Property Prediction",
      journal: "Chemical Science",
      year: 2023,
      citations: 156,
      impact: 9.9
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTicker((prev) => (prev + 1) % recentPredictions.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* University Partnerships */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-secondary-50 text-secondary-700 rounded-full text-sm font-semibold mb-6">
            <Icon name="Award" size={16} className="mr-2" />
            Trusted by Leading Institutions
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-8">
            Powering Research at{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              World-Class Universities
            </span>
          </h2>

          {/* University Logos */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center mb-12">
            {universityPartners.map((university, index) => (
              <div key={index} className="group">
                <div className="w-20 h-12 bg-white rounded-molecular shadow-molecular p-2 group-hover:shadow-molecular-lg scientific-transition overflow-hidden">
                  <Image
                    src={university.logo}
                    alt={university.name}
                    className="w-full h-full object-contain opacity-60 group-hover:opacity-100 scientific-transition"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Research Citations */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Icon name="BookOpen" size={24} color="var(--color-primary)" strokeWidth={2} />
              <h3 className="text-2xl font-bold text-text-primary">Published Research</h3>
            </div>

            <div className="bg-white rounded-2xl shadow-molecular p-6 border border-border">
              <div className="flex items-center justify-between mb-6">
                <div className="text-3xl font-bold text-primary">150+</div>
                <div className="text-right">
                  <div className="text-sm text-text-secondary">Peer-reviewed</div>
                  <div className="text-sm font-semibold text-text-primary">Publications</div>
                </div>
              </div>

              <div className="space-y-4">
                {researchCitations.map((citation, index) => (
                  <div key={index} className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold text-text-primary text-sm mb-1">
                      {citation.title}
                    </h4>
                    <div className="flex items-center justify-between text-xs text-text-secondary">
                      <span>{citation.journal} ({citation.year})</span>
                      <div className="flex items-center space-x-3">
                        <span>{citation.citations} citations</span>
                        <span>IF: {citation.impact}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-border">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-text-secondary">Total Citations</span>
                  <span className="font-bold text-primary">2,847</span>
                </div>
              </div>
            </div>
          </div>

          {/* Live Activity Ticker */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-3 h-3 bg-success rounded-full animate-pulse-gentle"></div>
              <h3 className="text-2xl font-bold text-text-primary">Live Global Activity</h3>
            </div>

            <div className="bg-white rounded-2xl shadow-molecular p-6 border border-border">
              <div className="flex items-center justify-between mb-6">
                <div className="text-3xl font-bold text-success">2.3M+</div>
                <div className="text-right">
                  <div className="text-sm text-text-secondary">Predictions</div>
                  <div className="text-sm font-semibold text-text-primary">This Month</div>
                </div>
              </div>

              {/* Recent Predictions Ticker */}
              <div className="space-y-3 mb-6">
                <div className="text-sm font-semibold text-text-primary mb-3">Recent Predictions</div>
                
                {recentPredictions.slice(currentTicker, currentTicker + 3).map((prediction, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-surface rounded-molecular scientific-transition">
                    <div className="w-2 h-2 bg-success rounded-full animate-pulse-gentle"></div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-text-primary truncate">
                        {prediction.compound}
                      </div>
                      <div className="text-xs text-text-secondary">
                        {prediction.location} • {prediction.time}
                      </div>
                    </div>
                    <Icon name="Atom" size={16} color="var(--color-primary)" strokeWidth={2} />
                  </div>
                ))}
              </div>

              {/* Global Stats */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                <div className="text-center">
                  <div className="text-lg font-bold text-secondary">47</div>
                  <div className="text-xs text-text-secondary">Countries</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-accent">24/7</div>
                  <div className="text-xs text-text-secondary">Active</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Join the Scientific Revolution</h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Be part of the growing community of researchers advancing chemistry through AI-powered insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-white text-primary rounded-molecular hover:bg-surface scientific-transition font-semibold">
                Start Free Trial
              </button>
              <button className="px-8 py-3 border-2 border-white text-white rounded-molecular hover:bg-white hover:text-primary scientific-transition font-semibold">
                Request Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;