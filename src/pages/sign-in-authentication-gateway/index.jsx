// /home/ubuntu/app/chemai_lab/src/pages/sign-in-authentication-gateway/index.jsx
import React, { useState } from 'react';


import Header from '../../components/ui/Header';
import Footer from '../homepage-ai-powered-scientific-platform/components/Footer';
import AuthenticationForm from './components/AuthenticationForm';
import MolecularVisualization from './components/MolecularVisualization';
import SecurityInfo from './components/SecurityInfo';

const SignInAuthenticationGateway = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [authError, setAuthError] = useState(null);

  const handleSignIn = (data) => {
    setIsSubmitting(true);
    setAuthError(null);
    
    // Mock API call - would be replaced with actual authentication service
    setTimeout(() => {
      // Simulate authentication
      if (data.email === 'demo@chemai.lab' && data.password === 'password123') {
        // Success - redirect would happen here
        window.location.href = '/prediction-studio-core-analysis-workspace';
      } else {
        // Show error
        setAuthError('Invalid email or password. Please try again.');
      }
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 mt-16">
        <div className="flex w-full max-w-6xl shadow-molecular-lg rounded-molecular overflow-hidden bg-white">
          {/* Left Panel - Molecular Visualization */}
          <div className="hidden lg:block w-2/5 bg-primary-50 relative overflow-hidden">
            <MolecularVisualization />
          </div>
          
          {/* Right Panel - Authentication Form */}
          <div className="w-full lg:w-3/5 p-8 md:p-12">
            <div className="max-w-md mx-auto">
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-primary mb-2">Sign In to ChemAI Lab</h1>
                <p className="text-text-secondary">Access your scientific workspace and continue your research</p>
              </div>
              
              <AuthenticationForm 
                onSubmit={handleSignIn} 
                isSubmitting={isSubmitting} 
                authError={authError}
              />
              
              <div className="mt-8">
                <SecurityInfo />
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SignInAuthenticationGateway;