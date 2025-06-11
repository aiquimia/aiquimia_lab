// /home/ubuntu/app/chemai_lab/src/pages/sign-in-authentication-gateway/components/SecurityInfo.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const SecurityInfo = () => {
  return (
    <div className="space-y-5">
      {/* Security Indicators */}
      <div className="border border-border-light rounded-molecular p-4 bg-surface-50">
        <div className="flex items-start">
          <div className="flex-shrink-0 mt-0.5">
            <Icon name="Shield" className="text-success" size={20} />
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-text-primary">Secure Authentication</h3>
            <p className="mt-1 text-sm text-text-secondary">
              Your connection to ChemAI Lab is encrypted and secured with SSL certification.
            </p>
          </div>
        </div>
      </div>
      
      {/* Organization/Institution Section */}
      <div className="border-t border-border-light pt-4">
        <h3 className="text-sm font-medium text-text-primary mb-2">Institutional Access</h3>
        <div className="space-y-2">
          <button className="text-sm w-full text-left text-primary hover:text-primary-600 scientific-transition flex items-center">
            <Icon name="Building2" size={16} className="mr-2" />
            Sign in with your organization
          </button>
          <button className="text-sm w-full text-left text-primary hover:text-primary-600 scientific-transition flex items-center">
            <Icon name="School" size={16} className="mr-2" />
            Academic institution login
          </button>
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

export default SecurityInfo;