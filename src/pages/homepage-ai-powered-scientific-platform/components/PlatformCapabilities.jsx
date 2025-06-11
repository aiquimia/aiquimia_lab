import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const PlatformCapabilities = () => {
  const [activeCapability, setActiveCapability] = useState(0);

  const capabilities = [
    {
      id: 'prediction',
      title: 'Instant Property Prediction',
      description: 'Get comprehensive molecular properties in seconds including physicochemical parameters, ADMET properties, and toxicity predictions.',
      features: [
        'Molecular Weight & Formula',
        'LogP & Solubility Calculations',
        'ADMET Property Prediction',
        'Toxicity Risk Assessment',
        'Bioavailability Scoring'
      ],
      icon: 'Zap',
      image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&h=400&fit=crop',
      spectra: ['IR', 'UV-Vis', 'NMR'],
      color: 'primary'
    },
    {
      id: 'library',
      title: 'Molecular Library',
      description: 'Access millions of pre-computed molecular structures with community contributions and collaborative research datasets.',
      features: [
        '2.5M+ Molecular Structures',
        'Community Contributions',
        'Custom Collections',
        'Advanced Search & Filtering',
        'Export & Integration Tools'
      ],
      icon: 'Database',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop',
      spectra: ['Database', 'Search', 'Filter'],
      color: 'secondary'
    },
    {
      id: 'collaboration',
      title: 'Collaborative Research',
      description: 'Work seamlessly with your research team through shared workspaces, real-time collaboration, and integrated project management.',
      features: [
        'Team Workspaces',
        'Real-time Collaboration',
        'Project Management',
        'Version Control',
        'Peer Review System'
      ],
      icon: 'Users',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
      spectra: ['Teams', 'Share', 'Review'],
      color: 'accent'
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-semibold mb-6">
            <Icon name="Cpu" size={16} className="mr-2" />
            Platform Capabilities
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-6">
            Everything You Need for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Modern Chemistry
            </span>
          </h2>
          
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            From instant predictions to collaborative research, ChemAI Lab provides a comprehensive suite of tools designed for the modern chemistry workflow.
          </p>
        </div>

        {/* Capability Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {capabilities.map((capability, index) => (
            <button
              key={capability.id}
              onClick={() => setActiveCapability(index)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-molecular scientific-transition font-medium ${
                activeCapability === index
                  ? `bg-${capability.color} text-white shadow-molecular`
                  : 'bg-surface text-text-primary hover:bg-surface-100'
              }`}
            >
              <Icon 
                name={capability.icon} 
                size={18} 
                strokeWidth={2}
                color={activeCapability === index ? 'white' : 'var(--color-text-primary)'}
              />
              <span>{capability.title}</span>
            </button>
          ))}
        </div>

        {/* Active Capability Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <div className="mb-6">
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-${capabilities[activeCapability].color} to-${capabilities[activeCapability].color}-600 rounded-2xl mb-4`}>
                <Icon 
                  name={capabilities[activeCapability].icon} 
                  size={32} 
                  color="white" 
                  strokeWidth={2} 
                />
              </div>
              
              <h3 className="text-2xl font-bold text-text-primary mb-4">
                {capabilities[activeCapability].title}
              </h3>
              
              <p className="text-lg text-text-secondary mb-6">
                {capabilities[activeCapability].description}
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-3 mb-8">
              {capabilities[activeCapability].features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className={`w-5 h-5 bg-${capabilities[activeCapability].color} rounded-full flex items-center justify-center flex-shrink-0`}>
                    <Icon name="Check" size={12} color="white" strokeWidth={3} />
                  </div>
                  <span className="text-text-primary">{feature}</span>
                </div>
              ))}
            </div>

            {/* Spectral Tags */}
            <div className="flex items-center space-x-2 mb-8">
              <span className="text-sm text-text-secondary">Available:</span>
              {capabilities[activeCapability].spectra.map((spectrum, index) => (
                <span 
                  key={index}
                  className={`px-3 py-1 bg-${capabilities[activeCapability].color}-50 text-${capabilities[activeCapability].color}-700 rounded-full text-sm font-medium`}
                >
                  {spectrum}
                </span>
              ))}
            </div>

            {/* CTA */}
            <Link
              to="/prediction-studio-core-analysis-workspace"
              className={`inline-flex items-center space-x-2 px-6 py-3 bg-${capabilities[activeCapability].color} text-white rounded-molecular hover:bg-${capabilities[activeCapability].color}-700 scientific-transition shadow-molecular`}
            >
              <Icon name="ArrowRight" size={18} strokeWidth={2} />
              <span>Explore {capabilities[activeCapability].title}</span>
            </Link>
          </div>

          {/* Visual */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="overflow-hidden rounded-2xl shadow-molecular-lg">
                <Image
                  src={capabilities[activeCapability].image}
                  alt={capabilities[activeCapability].title}
                  className="w-full h-80 object-cover scientific-transition"
                />
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-accent to-accent-600 rounded-full flex items-center justify-center shadow-molecular animate-pulse-gentle">
                <Icon name="Sparkles" size={20} color="white" strokeWidth={2} />
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white rounded-2xl shadow-molecular flex items-center justify-center">
                <div className="text-center">
                  <div className="text-lg font-bold text-primary">AI</div>
                  <div className="text-xs text-text-secondary">Powered</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-primary mb-2">99.2%</div>
            <div className="text-text-secondary">Prediction Accuracy</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-secondary mb-2">&lt;2s</div>
            <div className="text-text-secondary">Average Response Time</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-accent mb-2">24/7</div>
            <div className="text-text-secondary">Platform Availability</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-success mb-2">500+</div>
            <div className="text-text-secondary">Research Teams</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformCapabilities;