// /home/ubuntu/app/chemai_lab/src/pages/sign-in-authentication-gateway/components/MolecularVisualization.jsx
import React, { useEffect, useState } from 'react';
import Icon from '../../../components/AppIcon';

const MolecularVisualization = () => {
  const [currentVisual, setCurrentVisual] = useState(0);
  
  // Array of achievements/visuals to display
  const achievements = [
    {
      icon: 'Atom',
      title: 'Advanced Molecular Modeling',
      description: 'Our AI predicts complex molecular properties with 94% accuracy'
    },
    {
      icon: 'PenTool',
      title: 'Precision Chemistry',
      description: 'Design compounds with specific target properties using our predictive algorithms'
    },
    {
      icon: 'Activity',
      title: 'Research Acceleration',
      description: 'Reduce experimental iterations by 60% with AI-guided insights'
    }
  ];
  
  // Auto-rotate through achievements
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVisual((prev) => (prev + 1) % achievements.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="h-full flex flex-col justify-between p-8">
      {/* Molecular Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 rounded-full border-4 border-primary animate-pulse-gentle"></div>
        <div className="absolute top-40 right-20 w-16 h-16 rounded-full border-4 border-secondary animate-pulse-gentle" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 rounded-full border-4 border-accent animate-pulse-gentle" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 right-30 w-14 h-14 rounded-full border-4 border-primary-500 animate-pulse-gentle" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute h-full w-full flex items-center justify-center">
          <div className="relative w-40 h-40">
            <div className="absolute inset-0 border-2 border-primary/30 rounded-full animate-molecular-rotate" style={{ animationDuration: '30s' }}></div>
            <div className="absolute inset-0 border-2 border-secondary/30 rounded-full animate-molecular-rotate" style={{ animationDirection: 'reverse', animationDuration: '25s' }}></div>
            <div className="absolute inset-0 border-2 border-accent/30 rounded-full animate-molecular-rotate" style={{ animationDirection: 'alternate', animationDuration: '20s' }}></div>
          </div>
        </div>
      </div>
      
      {/* Logo */}
      <div className="relative z-10">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-molecular flex items-center justify-center">
            <Icon name="Flask" size={24} color="white" strokeWidth={2.5} />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-primary font-inter tracking-tight">
              AIquimia Lab
            </span>
            <span className="text-sm text-primary-600 font-medium -mt-1">
              Scientific Intelligence Platform
            
            </span>
          </div>
        </div>
      </div>
      
      {/* Achievement Carousel */}
      <div className="relative z-10 py-8">
        {achievements.map((achievement, index) => (
          <div 
            key={index}
            className={`transition-all duration-300 transform ${index === currentVisual ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 absolute'}`}
            style={{ display: index === currentVisual ? 'block' : 'none' }}
          >
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-molecular">
                <Icon name={achievement.icon} size={20} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-primary">{achievement.title}</h3>
            </div>
            <p className="text-primary-700">{achievement.description}</p>
          </div>
        ))}
        
        {/* Indicators */}
        <div className="flex space-x-2 mt-6">
          {achievements.map((_, index) => (
            <button 
              key={index}
              onClick={() => setCurrentVisual(index)}
              className={`h-2 rounded-full transition-all scientific-transition ${index === currentVisual ? 'w-8 bg-primary' : 'w-2 bg-primary/30'}`}
              aria-label={`View achievement ${index + 1}`}
            />
          ))}
        </div>
      </div>
      
      {/* Trust Badges */}
      <div className="relative z-10">
        <p className="text-sm font-medium text-primary mb-3">Trusted by researchers at:</p>
        <div className="flex space-x-4 items-center">
          <div className="text-sm text-primary-700 bg-white/80 py-1 px-3 rounded-molecular shadow-scientific">
            MIT
          </div>
          <div className="text-sm text-primary-700 bg-white/80 py-1 px-3 rounded-molecular shadow-scientific">
            Stanford
          </div>
          <div className="text-sm text-primary-700 bg-white/80 py-1 px-3 rounded-molecular shadow-scientific">
            Caltech
          </div>
        </div>
      </div>
    </div>
  );
};

export default MolecularVisualization;