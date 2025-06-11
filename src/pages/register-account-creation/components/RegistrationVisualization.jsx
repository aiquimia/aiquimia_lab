import React, { useEffect, useState } from 'react';
import Icon from '../../../components/AppIcon';

const RegistrationVisualization = () => {
  const [currentVisual, setCurrentVisual] = useState(0);
  
  // Array of benefits/features to display
  const benefits = [
    {
      icon: 'Zap',
      title: 'Instant Molecular Analysis',
      description: 'Get comprehensive molecular properties and predictions in seconds, not hours'
    },
    {
      icon: 'Users',
      title: 'Collaborative Research',
      description: 'Work seamlessly with your team through shared workspaces and real-time collaboration'
    },
    {
      icon: 'Database',
      title: 'Extensive Molecular Library',
      description: 'Access millions of pre-computed structures and contribute to the scientific community'
    },
    {
      icon: 'Shield',
      title: 'Secure & Compliant',
      description: 'Enterprise-grade security with compliance features for academic and industry use'
    }
  ];
  
  // Auto-rotate through benefits
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVisual((prev) => (prev + 1) % benefits.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="h-full flex flex-col justify-between p-8">
      {/* Molecular Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 rounded-full border-4 border-secondary animate-pulse-gentle"></div>
        <div className="absolute top-40 right-20 w-16 h-16 rounded-full border-4 border-accent animate-pulse-gentle" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 rounded-full border-4 border-primary animate-pulse-gentle" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 right-30 w-14 h-14 rounded-full border-4 border-secondary-500 animate-pulse-gentle" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute h-full w-full flex items-center justify-center">
          <div className="relative w-40 h-40">
            <div className="absolute inset-0 border-2 border-secondary/30 rounded-full animate-molecular-rotate" style={{ animationDuration: '30s' }}></div>
            <div className="absolute inset-0 border-2 border-accent/30 rounded-full animate-molecular-rotate" style={{ animationDirection: 'reverse', animationDuration: '25s' }}></div>
            <div className="absolute inset-0 border-2 border-primary/30 rounded-full animate-molecular-rotate" style={{ animationDirection: 'alternate', animationDuration: '20s' }}></div>
          </div>
        </div>
      </div>
      
      {/* Logo */}
      <div className="relative z-10">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-molecular flex items-center justify-center">
            <Icon name="Atom" size={24} color="white" strokeWidth={2.5} />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-secondary font-inter tracking-tight">
              AIquimia Lab
            </span>
            <span className="text-sm text-secondary-600 font-medium -mt-1">
              Join the Scientific Revolution
            </span>
          </div>
        </div>
      </div>
      
      {/* Benefits Carousel */}
      <div className="relative z-10 py-8">
        {benefits.map((benefit, index) => (
          <div 
            key={index}
            className={`transition-all duration-300 transform ${index === currentVisual ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 absolute'}`}
            style={{ display: index === currentVisual ? 'block' : 'none' }}
          >
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-molecular">
                <Icon name={benefit.icon} size={20} className="text-secondary" />
              </div>
              <h3 className="text-lg font-semibold text-secondary">{benefit.title}</h3>
            </div>
            <p className="text-secondary-700">{benefit.description}</p>
          </div>
        ))}
        
        {/* Indicators */}
        <div className="flex space-x-2 mt-6">
          {benefits.map((_, index) => (
            <button 
              key={index}
              onClick={() => setCurrentVisual(index)}
              className={`h-2 rounded-full transition-all scientific-transition ${index === currentVisual ? 'w-8 bg-secondary' : 'w-2 bg-secondary/30'}`}
              aria-label={`View benefit ${index + 1}`}
            />
          ))}
        </div>
      </div>
      
      {/* Statistics */}
      <div className="relative z-10">
        <p className="text-sm font-medium text-secondary mb-3">Join thousands of researchers:</p>
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center bg-white/80 py-3 px-2 rounded-molecular shadow-scientific">
            <div className="text-lg font-bold text-secondary">12,847</div>
            <div className="text-xs text-secondary-700">Active Users</div>
          </div>
          <div className="text-center bg-white/80 py-3 px-2 rounded-molecular shadow-scientific">
            <div className="text-lg font-bold text-secondary">2.3M+</div>
            <div className="text-xs text-secondary-700">Predictions Made</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationVisualization;