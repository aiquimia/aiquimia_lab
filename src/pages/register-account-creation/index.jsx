import React, { useState } from 'react';
import Header from '../../components/ui/Header';
import Footer from '../homepage-ai-powered-scientific-platform/components/Footer';
import RegistrationForm from './components/RegistrationForm';
import RegistrationVisualization from './components/RegistrationVisualization';
import RegistrationSecurity from './components/RegistrationSecurity';

const RegisterAccountCreation = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [authError, setAuthError] = useState(null);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleRegistration = (data) => {
    setIsSubmitting(true);
    setAuthError(null);
    
    // Mock API call - would be replaced with actual registration service
    setTimeout(() => {
      // Simulate registration validation
      if (data.email === 'existing@example.com') {
        setAuthError('An account with this email already exists. Please sign in instead.');
        setIsSubmitting(false);
      } else {
        // Success - show confirmation
        setRegistrationSuccess(true);
        setIsSubmitting(false);
        
        // Redirect after showing success message
        setTimeout(() => {
          window.location.href = '/sign-in-authentication-gateway';
        }, 2000);
      }
    }, 1500);
  };

  if (registrationSuccess) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        
        <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 mt-16">
          <div className="max-w-md w-full text-center">
            <div className="bg-white rounded-2xl shadow-molecular-lg p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-success to-success-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="CheckCircle" size={32} color="white" strokeWidth={2} />
              </div>
              
              <h1 className="text-2xl font-bold text-text-primary mb-4">
                Account Created Successfully!
              </h1>
              
              <p className="text-text-secondary mb-6">
                Welcome to ChemAI Lab! We've sent a verification email to your inbox. Please verify your email to get started.
              </p>
              
              <div className="space-y-3">
                <button className="w-full px-4 py-2 bg-primary text-white rounded-molecular hover:bg-primary-700 scientific-transition">
                  Check Email
                </button>
                
                <p className="text-sm text-text-secondary">
                  Redirecting to sign in page...
                </p>
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 mt-16">
        <div className="flex w-full max-w-6xl shadow-molecular-lg rounded-molecular overflow-hidden bg-white">
          {/* Left Panel - Registration Visualization */}
          <div className="hidden lg:block w-2/5 bg-secondary-50 relative overflow-hidden">
            <RegistrationVisualization />
          </div>
          
          {/* Right Panel - Registration Form */}
          <div className="w-full lg:w-3/5 p-8 md:p-12">
            <div className="max-w-md mx-auto">
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-primary mb-2">Create Your Account</h1>
                <p className="text-text-secondary">Join thousands of researchers advancing chemistry with AI</p>
              </div>
              
              <RegistrationForm 
                onSubmit={handleRegistration} 
                isSubmitting={isSubmitting} 
                authError={authError}
              />
              
              <div className="mt-8">
                <RegistrationSecurity />
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default RegisterAccountCreation;