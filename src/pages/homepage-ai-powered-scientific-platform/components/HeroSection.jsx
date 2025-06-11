import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import MolecularDemo from './MolecularDemo';

const HeroSection = () => {
  const [currentDemo, setCurrentDemo] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const demoMolecules = [
    {
      name: "Caffeine",
      smiles: "CN1C=NC2=C1C(=O)N(C(=O)N2C)C",
      properties: ["Molecular Weight: 194.19 g/mol", "LogP: -0.07", "Solubility: High"]
    },
    {
      name: "Aspirin",
      smiles: "CC(=O)OC1=CC=CC=C1C(=O)O",
      properties: ["Molecular Weight: 180.16 g/mol", "LogP: 1.19", "Solubility: Low"]
    },
    {
      name: "Ibuprofen",
      smiles: "CC(C)CC1=CC=C(C=C1)C(C)C(=O)O",
      properties: ["Molecular Weight: 206.28 g/mol", "LogP: 3.97", "Solubility: Low"]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentDemo((prev) => (prev + 1) % demoMolecules.length);
        setIsAnimating(false);
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-primary-50 to-secondary-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border border-primary rounded-full animate-pulse-gentle"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border border-secondary rounded-full animate-pulse-gentle delay-1000"></div>
        <div className="absolute bottom-32 left-40 w-20 h-20 border border-accent rounded-full animate-pulse-gentle delay-2000"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 border border-primary rounded-full animate-pulse-gentle delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 bg-accent-50 text-accent-700 rounded-full text-sm font-semibold">
                <Icon name="Zap" size={16} className="mr-2" />
                AI-Powered Chemistry Platform
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary mb-6 leading-tight">
              Transform Hours of{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Lab Work
              </span>{' '}
              Into Instant{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">
                Molecular Insights
              </span>
            </h1>

            <p className="text-xl text-text-secondary mb-8 max-w-2xl">
              ChemAI Lab revolutionizes molecular analysis with AI-powered predictions. Get instant property calculations, spectral analysis, and molecular insights that traditionally require hours of laboratory work.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                to="/prediction-studio-core-analysis-workspace"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white rounded-molecular hover:bg-primary-700 scientific-transition shadow-molecular-lg text-lg font-semibold"
              >
                <Icon name="Play" size={20} className="mr-2" />
                Start Free Prediction
              </Link>
              
              <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary rounded-molecular hover:bg-primary-50 scientific-transition text-lg font-semibold">
                <Icon name="PlayCircle" size={20} className="mr-2" />
                Watch 2-Min Demo
              </button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 text-center lg:text-left">
              <div>
                <div className="text-2xl font-bold text-primary">99.2%</div>
                <div className="text-sm text-text-secondary">Accuracy Rate</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-secondary">2.3M+</div>
                <div className="text-sm text-text-secondary">Predictions Made</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent">500+</div>
                <div className="text-sm text-text-secondary">Research Teams</div>
              </div>
            </div>
          </div>

          {/* Live Demo */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-molecular-lg p-8 border border-border">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-text-primary">Live Molecular Prediction</h3>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-success rounded-full animate-pulse-gentle"></div>
                  <span className="text-sm text-text-secondary">Real-time</span>
                </div>
              </div>

              <MolecularDemo 
                molecule={demoMolecules[currentDemo]}
                isAnimating={isAnimating}
              />

              {/* Demo Controls */}
              <div className="flex items-center justify-center space-x-2 mt-6">
                {demoMolecules.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentDemo(index)}
                    className={`w-3 h-3 rounded-full scientific-transition ${
                      index === currentDemo ? 'bg-primary' : 'bg-border hover:bg-primary-200'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-accent to-accent-600 rounded-full flex items-center justify-center shadow-molecular animate-bounce-gentle">
              <Icon name="Atom" size={24} color="white" strokeWidth={2} />
            </div>
            
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-secondary to-secondary-600 rounded-full flex items-center justify-center shadow-molecular animate-pulse-gentle">
              <Icon name="Zap" size={16} color="white" strokeWidth={2} />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={24} color="var(--color-text-secondary)" strokeWidth={2} />
      </div>
    </section>
  );
};

export default HeroSection;