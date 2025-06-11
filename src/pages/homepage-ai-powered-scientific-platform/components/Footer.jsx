import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Platform',
      links: [
        { name: 'Prediction Studio', path: '/prediction-studio-core-analysis-workspace' },
        { name: 'Results Dashboard', path: '/results-dashboard-comprehensive-data-visualization' },
        { name: 'Scientific Resources', path: '/scientific-resources-methodology-validation' },
        { name: 'API Documentation', path: '#' }
      ]
    },
    {
      title: 'Research',
      links: [
        { name: 'Molecular Library', path: '#' },
        { name: 'Case Studies', path: '#' },
        { name: 'Publications', path: '#' },
        { name: 'Methodology', path: '#' }
      ]
    },
    {
      title: 'Community',
      links: [
        { name: 'Forum Discussions', path: '#' },
        { name: 'User Collections', path: '#' },
        { name: 'Collaboration Hub', path: '#' },
        { name: 'Events & Webinars', path: '#' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', path: '/about-scientific-innovation-story' },
        { name: 'Pricing', path: '/pricing-flexible-scientific-access' },
        { name: 'Contact', path: '#' },
        { name: 'Careers', path: '#' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'Twitter', icon: 'Twitter', url: '#' },
    { name: 'LinkedIn', icon: 'Linkedin', url: '#' },
    { name: 'GitHub', icon: 'Github', url: '#' },
    { name: 'ResearchGate', icon: 'BookOpen', url: '#' }
  ];

  return (
    <footer className="bg-text-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <Link to="/homepage-ai-powered-scientific-platform" className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-molecular flex items-center justify-center">
                    <Icon name="Atom" size={24} color="white" strokeWidth={2.5} />
                  </div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-pulse-gentle"></div>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-white font-inter tracking-tight">
                    ChemAI Lab
                  </span>
                  <span className="text-xs text-white/70 font-medium -mt-1">
                    Scientific Intelligence
                  </span>
                </div>
              </Link>
              
              <p className="text-white/80 mb-6 max-w-md leading-relaxed">
                Transforming molecular analysis through AI-powered predictions. Join thousands of researchers advancing chemistry with intelligent insights.
              </p>
              
              {/* Newsletter Signup */}
              <div className="mb-6">
                <h4 className="font-semibold text-white mb-3">Stay Updated</h4>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-l-molecular text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                  <button className="px-6 py-2 bg-primary hover:bg-primary-700 rounded-r-molecular scientific-transition font-medium">
                    Subscribe
                  </button>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="flex items-center space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-molecular flex items-center justify-center scientific-transition"
                    aria-label={social.name}
                  >
                    <Icon name={social.icon} size={18} color="white" strokeWidth={2} />
                  </a>
                ))}
              </div>
            </div>
            
            {/* Footer Links */}
            {footerSections.map((section) => (
              <div key={section.title}>
                <h4 className="font-semibold text-white mb-4">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.path}
                        className="text-white/70 hover:text-white scientific-transition"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="py-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6 text-sm text-white/70">
              <span>© {currentYear} ChemAI Lab. All rights reserved.</span>
              <Link to="#" className="hover:text-white scientific-transition">Privacy Policy</Link>
              <Link to="#" className="hover:text-white scientific-transition">Terms of Service</Link>
              <Link to="#" className="hover:text-white scientific-transition">Cookie Policy</Link>
            </div>
            
            <div className="flex items-center space-x-4 text-sm text-white/70">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse-gentle"></div>
                <span>All systems operational</span>
              </div>
              <div className="flex items-center space-x-1">
                <Icon name="Shield" size={14} color="white" strokeWidth={2} />
                <span>SOC 2 Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;