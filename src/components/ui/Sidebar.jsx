import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { 
      name: 'Home', 
      path: '/homepage-ai-powered-scientific-platform', 
      icon: 'Home',
      description: 'AI-Powered Platform Overview'
    },
    { 
      name: 'Prediction Studio', 
      path: '/prediction-studio-core-analysis-workspace', 
      icon: 'Atom',
      description: 'Core Analysis Workspace'
    },
    { 
      name: 'Results Dashboard', 
      path: '/results-dashboard-comprehensive-data-visualization', 
      icon: 'BarChart3',
      description: 'Data Visualization Hub'
    },
    { 
      name: 'Scientific Resources', 
      path: '/scientific-resources-methodology-validation', 
      icon: 'BookOpen',
      description: 'Methodology & Validation'
    },
    { 
      name: 'Pricing', 
      path: '/pricing-flexible-scientific-access', 
      icon: 'CreditCard',
      description: 'Flexible Access Plans'
    },
    { 
      name: 'About', 
      path: '/about-scientific-innovation-story', 
      icon: 'Users',
      description: 'Innovation Story'
    },
  ];

  const quickActions = [
    { name: 'New Prediction', icon: 'Plus', action: 'prediction' },
    { name: 'Import Data', icon: 'Upload', action: 'import' },
    { name: 'Export Results', icon: 'Download', action: 'export' },
    { name: 'Share Analysis', icon: 'Share2', action: 'share' },
  ];

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  const handleQuickAction = (action) => {
    console.log(`Quick action: ${action}`);
  };

  return (
    <aside 
      className={`lg:fixed left-0 top-0 h-full bg-surface border-r border-border z-40 scientific-transition ${
        isCollapsed ? 'w-16' : 'w-64'
      }`}
    >
      {/* Sidebar Header */}
      <div className="flex items-center justify-between p-4 border-b border-border bg-background">
        {!isCollapsed && (
          <Link 
            to="/homepage-ai-powered-scientific-platform" 
            className="flex items-center space-x-3 group"
          >
            <div className="relative">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-molecular flex items-center justify-center molecular-hover scientific-transition">
                <Icon name="Atom" size={18} color="white" strokeWidth={2.5} />
              </div>
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-accent rounded-full animate-pulse-gentle"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-primary font-inter tracking-tight">
                AIquimia Lab
              </span>
              <span className="text-xs text-text-secondary font-medium -mt-1">
                Scientific Intelligence
              </span>
            </div>
          </Link>
        )}
        
        <button
          onClick={toggleCollapse}
          className="p-2 rounded-molecular text-text-secondary hover:text-primary hover:bg-primary-50 scientific-transition"
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          <Icon name={isCollapsed ? "ChevronRight" : "ChevronLeft"} size={18} strokeWidth={2} />
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        <div className={`${isCollapsed ? 'hidden' : 'block'} mb-6`}>
          <h3 className="text-xs font-semibold text-text-secondary uppercase tracking-wider mb-3">
            Navigation
          </h3>
        </div>

        {navigationItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center space-x-3 px-3 py-3 rounded-molecular text-sm font-medium scientific-transition group ${
              isActivePath(item.path)
                ? 'bg-primary text-white shadow-molecular'
                : 'text-text-primary hover:text-primary hover:bg-primary-50'
            }`}
            title={isCollapsed ? item.name : ''}
          >
            <Icon 
              name={item.icon} 
              size={20} 
              strokeWidth={2}
              className={`flex-shrink-0 ${isActivePath(item.path) ? 'text-white' : ''}`}
            />
            {!isCollapsed && (
              <div className="flex-1 min-w-0">
                <div className="font-medium truncate">{item.name}</div>
                <div className={`text-xs truncate ${
                  isActivePath(item.path) ? 'text-white/80' : 'text-text-secondary'
                }`}>
                  {item.description}
                </div>
              </div>
            )}
          </Link>
        ))}
      </nav>

      {/* Quick Actions */}
      <div className="p-4 border-t border-border">
        <div className={`${isCollapsed ? 'hidden' : 'block'} mb-4`}>
          <h3 className="text-xs font-semibold text-text-secondary uppercase tracking-wider">
            Quick Actions
          </h3>
        </div>

        <div className="space-y-2">
          {quickActions.map((action) => (
            <button
              key={action.action}
              onClick={() => handleQuickAction(action.action)}
              className="w-full flex items-center space-x-3 px-3 py-2 rounded-molecular text-sm font-medium text-text-primary hover:text-primary hover:bg-primary-50 scientific-transition group"
              title={isCollapsed ? action.name : ''}
            >
              <Icon 
                name={action.icon} 
                size={18} 
                strokeWidth={2}
                className="flex-shrink-0"
              />
              {!isCollapsed && (
                <span className="truncate">{action.name}</span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* User Section */}
      <div className="p-4 border-t border-border bg-background">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-br from-accent to-accent-600 rounded-full flex items-center justify-center">
            <Icon name="User" size={16} color="white" strokeWidth={2} />
          </div>
          {!isCollapsed && (
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium text-text-primary truncate">
                Dr. Research
              </div>
              <div className="text-xs text-text-secondary truncate">
                Premium Account
              </div>
            </div>
          )}
        </div>

        {!isCollapsed && (
          <div className="mt-3 space-y-1">
            <button className="w-full text-left px-3 py-2 text-sm text-text-secondary hover:text-primary hover:bg-primary-50 rounded-molecular scientific-transition flex items-center space-x-2">
              <Icon name="Settings" size={16} strokeWidth={2} />
              <span>Settings</span>
            </button>
            <button className="w-full text-left px-3 py-2 text-sm text-text-secondary hover:text-primary hover:bg-primary-50 rounded-molecular scientific-transition flex items-center space-x-2">
              <Icon name="LogOut" size={16} strokeWidth={2} />
              <span>Sign Out</span>
            </button>
          </div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;