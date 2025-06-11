import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../components/AppIcon';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6 molecular-hover scientific-transition">
            <Icon name="Atom" size={48} color="white" strokeWidth={2} />
          </div>
          <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-text-primary mb-4">
            Molecule Not Found
          </h2>
          <p className="text-text-secondary mb-8">
            The molecular structure you're looking for seems to have bonded with another page. Let's get you back to the lab.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link
            to="/homepage-ai-powered-scientific-platform"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-primary text-white rounded-molecular hover:bg-primary-700 scientific-transition shadow-molecular"
          >
            <Icon name="Home" size={20} strokeWidth={2} />
            <span>Return to Lab</span>
          </Link>
          
          <div className="text-sm text-text-secondary">
            <p>Need help? Contact our scientific support team.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;