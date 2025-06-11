// /home/ubuntu/app/chemai_lab/src/components/ui/Header.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: 'Home', path: '/homepage-ai-powered-scientific-platform', icon: 'Home' },
    { name: 'Prediction Studio', path: '/prediction-studio-core-analysis-workspace', icon: 'Atom' },
    { name: 'Results Dashboard', path: '/results-dashboard-comprehensive-data-visualization', icon: 'BarChart3' },
    { name: 'Scientific Resources', path: '/scientific-resources-methodology-validation', icon: 'BookOpen' },
    { name: 'Pricing', path: '/pricing-flexible-scientific-access', icon: 'CreditCard' },
    { name: 'About', path: '/about-scientific-innovation-story', icon: 'Users' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 scientific-transition ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md shadow-molecular border-b border-border' 
          : 'bg-background/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link 
            to="/homepage-ai-powered-scientific-platform" 
            className="flex items-center space-x-3 group"
            onClick={closeMenu}
          >
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-molecular flex items-center justify-center molecular-hover scientific-transition">
                <Icon name="Atom" size={24} color="white" strokeWidth={2.5} />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-pulse-gentle"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-primary font-inter tracking-tight">
                ChemAI Lab
              </span>
              <span className="text-xs text-text-secondary font-medium -mt-1">
                Scientific Intelligence
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-molecular text-sm font-medium scientific-transition flex items-center space-x-2 ${
                  isActivePath(item.path)
                    ? 'bg-primary text-white shadow-molecular'
                    : 'text-text-primary hover:text-primary hover:bg-primary-50'
                }`}
              >
                <Icon name={item.icon} size={16} strokeWidth={2} />
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link 
              to="/sign-in-authentication-gateway"
              className="px-4 py-2 text-sm font-semibold text-primary border border-primary rounded-molecular hover:bg-primary-50 scientific-transition"
            >
              Sign In
            </Link>
            <button className="px-6 py-2 text-sm font-semibold text-white bg-accent hover:bg-accent-600 rounded-molecular shadow-molecular scientific-transition flex items-center space-x-2">
              <Icon name="Zap" size={16} strokeWidth={2} />
              <span>Start Free Trial</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-molecular text-text-primary hover:text-primary hover:bg-primary-50 scientific-transition"
            aria-label="Toggle menu"
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={24} strokeWidth={2} />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`lg:hidden transition-all duration-300 scientific-transition ${
          isMenuOpen 
            ? 'max-h-screen opacity-100 visible' :'max-h-0 opacity-0 invisible overflow-hidden'
        }`}
      >
        <div className="bg-background border-t border-border shadow-molecular-lg">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-2">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={closeMenu}
                className={`flex items-center space-x-3 px-4 py-3 rounded-molecular text-base font-medium scientific-transition ${
                  isActivePath(item.path)
                    ? 'bg-primary text-white shadow-molecular'
                    : 'text-text-primary hover:text-primary hover:bg-primary-50'
                }`}
              >
                <Icon name={item.icon} size={20} strokeWidth={2} />
                <span>{item.name}</span>
              </Link>
            ))}
            
            {/* Mobile CTA Buttons */}
            <div className="pt-4 border-t border-border space-y-3">
              <Link
                to="/sign-in-authentication-gateway"
                onClick={closeMenu}
                className="w-full px-4 py-3 text-base font-semibold text-primary border border-primary rounded-molecular hover:bg-primary-50 scientific-transition flex items-center justify-center"
              >
                <Icon name="LogIn" size={18} className="mr-2" />
                Sign In
              </Link>
              <button className="w-full px-4 py-3 text-base font-semibold text-white bg-accent hover:bg-accent-600 rounded-molecular shadow-molecular scientific-transition flex items-center justify-center space-x-2">
                <Icon name="Zap" size={20} strokeWidth={2} />
                <span>Start Free Trial</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;