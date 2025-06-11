import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const RegistrationSecurity = () => {
  return (
    <div className="space-y-5">
      {/* Security Features */}
      <div className="border border-border-light rounded-molecular p-4 bg-surface-50">
        <div className="flex items-start">
          <div className="flex-shrink-0 mt-0.5">
            <Icon name="Shield" className="text-success" size={20} />
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-text-primary">Secure Registration</h3>
            <p className="mt-1 text-sm text-text-secondary">
              Your data is encrypted and protected with enterprise-grade security measures.
            </p>
          </div>
        </div>
      </div>

      {/* Account Benefits */}
      <div className="space-y-3">
        <h3 className="text-sm font-medium text-text-primary">What you get with your account:</h3>
        <div className="space-y-2">
          <div className="flex items-center text-sm text-text-secondary">
            <Icon name="Check" size={16} className="mr-2 text-success" />
            <span>Free molecular predictions (50/month)</span>
          </div>
          <div className="flex items-center text-sm text-text-secondary">
            <Icon name="Check" size={16} className="mr-2 text-success" />
            <span>Access to community resources</span>
          </div>
          <div className="flex items-center text-sm text-text-secondary">
            <Icon name="Check" size={16} className="mr-2 text-success" />
            <span>Educational materials and tutorials</span>
          </div>
          <div className="flex items-center text-sm text-text-secondary">
            <Icon name="Check" size={16} className="mr-2 text-success" />
            <span>14-day free trial of premium features</span>
          </div>
        </div>
      </div>
      
      {/* Academic Benefits */}
      <div className="border-t border-border-light pt-4">
        <h3 className="text-sm font-medium text-text-primary mb-2">Academic Benefits</h3>
        <div className="space-y-2">
          <div className="flex items-center text-sm text-text-secondary">
            <Icon name="GraduationCap" size={16} className="mr-2 text-primary" />
            <span>50% discount with .edu email</span>
          </div>
          <div className="flex items-center text-sm text-text-secondary">
            <Icon name="BookOpen" size={16} className="mr-2 text-primary" />
            <span>Access to research publications</span>
          </div>
          <div className="flex items-center text-sm text-text-secondary">
            <Icon name="Users" size={16} className="mr-2 text-primary" />
            <span>Collaboration tools for research teams</span>
          </div>
        </div>
      </div>
      
      {/* Help & Info Links */}
      <div className="text-center text-xs text-text-tertiary">
        <div className="flex items-center justify-center space-x-3 mb-2">
          <Link to="/help" className="hover:text-text-secondary scientific-transition">Help</Link>
          <span>•</span>
          <Link to="/privacy" className="hover:text-text-secondary scientific-transition">Privacy Policy</Link>
          <span>•</span>
          <Link to="/terms" className="hover:text-text-secondary scientific-transition">Terms of Use</Link>
        </div>
        <p>© {new Date().getFullYear()} ChemAI Lab. All rights reserved.</p>
      </div>
    </div>
  );
};

export default RegistrationSecurity;