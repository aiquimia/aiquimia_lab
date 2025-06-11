import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const CaseStudyCarousel = () => {
  const [currentCase, setCurrentCase] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const caseStudies = [
    {
      id: 'drug-discovery',
      title: 'Accelerated Drug Discovery at BioPharma Labs',
      category: 'Pharmaceutical Research',
      description: `Our team reduced compound screening time from 6 months to 2 weeks using ChemAI Lab's ADMET predictions. The platform's accuracy allowed us to focus resources on the most promising candidates, ultimately leading to a breakthrough in Alzheimer's treatment research.`,
      results: [
        { metric: 'Time Reduction', value: '92%', icon: 'Clock' },
        { metric: 'Cost Savings', value: '$2.4M', icon: 'DollarSign' },
        { metric: 'Success Rate', value: '340%', icon: 'TrendingUp' }
      ],
      researcher: {
        name: 'Dr. Sarah Chen',title: 'Lead Medicinal Chemist',company: 'BioPharma Labs',avatar: 'https://randomuser.me/api/portraits/women/32.jpg'
      },
      image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&h=400&fit=crop',color: 'primary'
    },
    {
      id: 'materials-science',title: 'Novel Polymer Development for Sustainable Packaging',category: 'Materials Science',description: `ChemAI Lab's molecular property predictions enabled us to design biodegradable polymers with specific mechanical properties. The platform's spectral analysis tools were crucial in validating our theoretical models against experimental data.`,
      results: [
        { metric: 'Development Speed', value: '75%', icon: 'Zap' },
        { metric: 'Material Performance', value: '45%', icon: 'Shield' },
        { metric: 'Environmental Impact', value: '80%', icon: 'Leaf' }
      ],
      researcher: {
        name: 'Prof. Michael Rodriguez',title: 'Materials Science Professor',company: 'Tech University',avatar: 'https://randomuser.me/api/portraits/men/45.jpg'
      },
      image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&h=400&fit=crop',color: 'secondary'
    },
    {
      id: 'green-chemistry',title: 'Sustainable Catalyst Design for Industrial Processes',category: 'Green Chemistry',description: `Using ChemAI Lab's collaborative features, our international team designed environmentally friendly catalysts that reduced industrial waste by 60%. The platform's real-time collaboration tools were essential for coordinating across time zones.`,
      results: [
        { metric: 'Waste Reduction', value: '60%', icon: 'Recycle' },
        { metric: 'Energy Efficiency', value: '35%', icon: 'Battery' },
        { metric: 'Team Productivity', value: '120%', icon: 'Users' }
      ],
      researcher: {
        name: 'Dr. Emma Thompson',title: 'Green Chemistry Director',company: 'EcoTech Solutions',avatar: 'https://randomuser.me/api/portraits/women/28.jpg'
      },
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop',color: 'accent'
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentCase((prev) => (prev + 1) % caseStudies.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextCase = () => {
    setCurrentCase((prev) => (prev + 1) % caseStudies.length);
    setIsAutoPlaying(false);
  };

  const prevCase = () => {
    setCurrentCase((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
    setIsAutoPlaying(false);
  };

  const currentStudy = caseStudies[currentCase];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-accent-50 text-accent-700 rounded-full text-sm font-semibold mb-6">
            <Icon name="Star" size={16} className="mr-2" />
            Success Stories
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-6">
            Breakthrough Discoveries Made with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              ChemAI Lab
            </span>
          </h2>
          
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Real research teams sharing how ChemAI Lab accelerated their discoveries and transformed their workflows.
          </p>
        </div>

        {/* Case Study Content */}
        <div className="relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="order-2 lg:order-1">
              <div className="mb-6">
                <div className={`inline-flex items-center px-3 py-1 bg-${currentStudy.color}-50 text-${currentStudy.color}-700 rounded-full text-sm font-medium mb-4`}>
                  {currentStudy.category}
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4">
                  {currentStudy.title}
                </h3>
                
                <blockquote className="text-lg text-text-secondary leading-relaxed mb-8 italic">
                  "{currentStudy.description}"
                </blockquote>
              </div>

              {/* Results Grid */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {currentStudy.results.map((result, index) => (
                  <div key={index} className="text-center p-4 bg-surface rounded-molecular">
                    <div className={`w-10 h-10 bg-${currentStudy.color} rounded-molecular flex items-center justify-center mx-auto mb-2`}>
                      <Icon name={result.icon} size={20} color="white" strokeWidth={2} />
                    </div>
                    <div className={`text-2xl font-bold text-${currentStudy.color} mb-1`}>
                      {result.value}
                    </div>
                    <div className="text-xs text-text-secondary">
                      {result.metric}
                    </div>
                  </div>
                ))}
              </div>

              {/* Researcher Info */}
              <div className="flex items-center space-x-4 p-4 bg-white rounded-molecular shadow-molecular border border-border">
                <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={currentStudy.researcher.avatar}
                    alt={currentStudy.researcher.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-text-primary">
                    {currentStudy.researcher.name}
                  </div>
                  <div className="text-sm text-text-secondary">
                    {currentStudy.researcher.title}
                  </div>
                  <div className="text-sm font-medium text-primary">
                    {currentStudy.researcher.company}
                  </div>
                </div>
              </div>
            </div>

            {/* Visual */}
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="overflow-hidden rounded-2xl shadow-molecular-lg">
                  <Image
                    src={currentStudy.image}
                    alt={currentStudy.title}
                    className="w-full h-96 object-cover"
                  />
                </div>
                
                {/* Floating Badge */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-success to-success-600 rounded-full flex items-center justify-center shadow-molecular">
                  <Icon name="Award" size={24} color="white" strokeWidth={2} />
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-12">
            <button
              onClick={prevCase}
              className="w-12 h-12 bg-white rounded-full shadow-molecular flex items-center justify-center hover:shadow-molecular-lg scientific-transition border border-border"
            >
              <Icon name="ChevronLeft" size={20} color="var(--color-text-primary)" strokeWidth={2} />
            </button>

            {/* Indicators */}
            <div className="flex items-center space-x-2">
              {caseStudies.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentCase(index);
                    setIsAutoPlaying(false);
                  }}
                  className={`w-3 h-3 rounded-full scientific-transition ${
                    index === currentCase ? 'bg-primary' : 'bg-border hover:bg-primary-200'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextCase}
              className="w-12 h-12 bg-white rounded-full shadow-molecular flex items-center justify-center hover:shadow-molecular-lg scientific-transition border border-border"
            >
              <Icon name="ChevronRight" size={20} color="var(--color-text-primary)" strokeWidth={2} />
            </button>
          </div>

          {/* Auto-play Control */}
          <div className="text-center mt-6">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="inline-flex items-center space-x-2 px-4 py-2 text-sm text-text-secondary hover:text-primary scientific-transition"
            >
              <Icon 
                name={isAutoPlaying ? "Pause" : "Play"} 
                size={16} 
                strokeWidth={2} 
              />
              <span>{isAutoPlaying ? 'Pause' : 'Play'} Auto-rotation</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyCarousel;