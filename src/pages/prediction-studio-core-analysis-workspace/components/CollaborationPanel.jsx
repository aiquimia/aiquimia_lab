import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const CollaborationPanel = () => {
  const [activeTab, setActiveTab] = useState('team');
  const [shareSettings, setShareSettings] = useState({
    visibility: 'team',
    allowComments: true,
    allowEditing: false,
    expiresIn: '7days'
  });

  const teamMembers = [
    {
      id: 1,
      name: "Dr. Sarah Chen",
      email: "sarah.chen@chemlab.edu",
      role: "Principal Investigator",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg",
      status: "online",
      permissions: "admin"
    },
    {
      id: 2,
      name: "Dr. Michael Rodriguez",
      email: "m.rodriguez@chemlab.edu",
      role: "Research Scientist",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
      status: "offline",
      permissions: "editor"
    },
    {
      id: 3,
      name: "Emma Thompson",
      email: "emma.t@chemlab.edu",
      role: "Graduate Student",
      avatar: "https://randomuser.me/api/portraits/women/28.jpg",
      status: "online",
      permissions: "viewer"
    },
    {
      id: 4,
      name: "Dr. James Wilson",
      email: "j.wilson@chemlab.edu",
      role: "Postdoc Researcher",
      avatar: "https://randomuser.me/api/portraits/men/38.jpg",
      status: "away",
      permissions: "editor"
    }
  ];

  const recentActivity = [
    {
      id: 1,
      user: "Dr. Sarah Chen",
      action: "commented on",
      target: "Caffeine Analysis",
      timestamp: "2 hours ago",
      type: "comment"
    },
    {
      id: 2,
      user: "Emma Thompson",
      action: "shared",
      target: "Aspirin Prediction Results",
      timestamp: "4 hours ago",
      type: "share"
    },
    {
      id: 3,
      user: "Dr. Michael Rodriguez",
      action: "updated",
      target: "Batch Analysis Protocol",
      timestamp: "1 day ago",
      type: "edit"
    },
    {
      id: 4,
      user: "Dr. James Wilson",
      action: "created",
      target: "New Molecular Library",
      timestamp: "2 days ago",
      type: "create"
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'online': return 'bg-success';
      case 'away': return 'bg-warning';
      case 'offline': return 'bg-text-tertiary';
      default: return 'bg-text-tertiary';
    }
  };

  const getPermissionIcon = (permission) => {
    switch (permission) {
      case 'admin': return 'Crown';
      case 'editor': return 'Edit';
      case 'viewer': return 'Eye';
      default: return 'User';
    }
  };

  const getActivityIcon = (type) => {
    switch (type) {
      case 'comment': return 'MessageCircle';
      case 'share': return 'Share2';
      case 'edit': return 'Edit';
      case 'create': return 'Plus';
      default: return 'Activity';
    }
  };

  const tabs = [
    { id: 'team', name: 'Team', icon: 'Users' },
    { id: 'share', name: 'Share', icon: 'Share2' },
    { id: 'activity', name: 'Activity', icon: 'Activity' }
  ];

  return (
    <div className="space-y-6">
      {/* Tab Navigation */}
      <div className="flex space-x-1 p-1 bg-background rounded-molecular">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 px-3 py-2 text-sm font-medium rounded-molecular scientific-transition flex items-center justify-center space-x-2 ${
              activeTab === tab.id
                ? 'bg-primary text-white shadow-molecular'
                : 'text-text-secondary hover:text-text-primary'
            }`}
          >
            <Icon name={tab.icon} size={14} strokeWidth={2} />
            <span>{tab.name}</span>
          </button>
        ))}
      </div>

      {/* Team Tab */}
      {activeTab === 'team' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="font-medium text-text-primary">Team Members</h4>
            <button className="text-sm text-primary hover:text-primary-700 scientific-transition flex items-center space-x-1">
              <Icon name="UserPlus" size={14} strokeWidth={2} />
              <span>Invite</span>
            </button>
          </div>
          
          <div className="space-y-3">
            {teamMembers.map((member) => (
              <div key={member.id} className="flex items-center space-x-3 p-3 bg-background rounded-molecular border border-border hover:border-primary-200 scientific-transition">
                <div className="relative">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white ${getStatusColor(member.status)}`}></div>
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2">
                    <p className="text-sm font-medium text-text-primary truncate">
                      {member.name}
                    </p>
                    <Icon 
                      name={getPermissionIcon(member.permissions)} 
                      size={12} 
                      strokeWidth={2} 
                      className="text-text-secondary flex-shrink-0" 
                    />
                  </div>
                  <p className="text-xs text-text-secondary truncate">
                    {member.role}
                  </p>
                </div>
                
                <button className="p-1 text-text-secondary hover:text-text-primary scientific-transition">
                  <Icon name="MoreVertical" size={14} strokeWidth={2} />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Share Tab */}
      {activeTab === 'share' && (
        <div className="space-y-4">
          <h4 className="font-medium text-text-primary">Share Settings</h4>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">
                Visibility
              </label>
              <select
                value={shareSettings.visibility}
                onChange={(e) => setShareSettings(prev => ({ ...prev, visibility: e.target.value }))}
                className="w-full px-3 py-2 text-sm border border-border rounded-molecular focus:ring-2 focus:ring-primary focus:border-transparent scientific-transition"
              >
                <option value="private">Private (Only me)</option>
                <option value="team">Team Members</option>
                <option value="organization">Organization</option>
                <option value="public">Public</option>
              </select>
            </div>
            
            <div className="space-y-3">
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={shareSettings.allowComments}
                  onChange={(e) => setShareSettings(prev => ({ ...prev, allowComments: e.target.checked }))}
                  className="w-4 h-4 text-primary border-border rounded focus:ring-primary"
                />
                <span className="text-sm text-text-primary">Allow comments</span>
              </label>
              
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={shareSettings.allowEditing}
                  onChange={(e) => setShareSettings(prev => ({ ...prev, allowEditing: e.target.checked }))}
                  className="w-4 h-4 text-primary border-border rounded focus:ring-primary"
                />
                <span className="text-sm text-text-primary">Allow editing</span>
              </label>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">
                Link expires in
              </label>
              <select
                value={shareSettings.expiresIn}
                onChange={(e) => setShareSettings(prev => ({ ...prev, expiresIn: e.target.value }))}
                className="w-full px-3 py-2 text-sm border border-border rounded-molecular focus:ring-2 focus:ring-primary focus:border-transparent scientific-transition"
              >
                <option value="1day">1 day</option>
                <option value="7days">7 days</option>
                <option value="30days">30 days</option>
                <option value="never">Never</option>
              </select>
            </div>
          </div>
          
          <div className="pt-4 border-t border-border">
            <button className="w-full px-4 py-2 bg-primary text-white rounded-molecular hover:bg-primary-700 scientific-transition flex items-center justify-center space-x-2">
              <Icon name="Link" size={16} strokeWidth={2} />
              <span>Generate Share Link</span>
            </button>
          </div>
        </div>
      )}

      {/* Activity Tab */}
      {activeTab === 'activity' && (
        <div className="space-y-4">
          <h4 className="font-medium text-text-primary">Recent Activity</h4>
          
          <div className="space-y-3">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-start space-x-3 p-3 bg-background rounded-molecular border border-border">
                <div className="w-8 h-8 bg-surface rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon 
                    name={getActivityIcon(activity.type)} 
                    size={14} 
                    strokeWidth={2} 
                    className="text-text-secondary" 
                  />
                </div>
                
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-text-primary">
                    <span className="font-medium">{activity.user}</span>
                    {' '}
                    <span className="text-text-secondary">{activity.action}</span>
                    {' '}
                    <span className="font-medium">{activity.target}</span>
                  </p>
                  <p className="text-xs text-text-tertiary mt-1">
                    {activity.timestamp}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <button className="w-full text-sm text-text-secondary hover:text-primary scientific-transition py-2">
            View all activity
          </button>
        </div>
      )}

      {/* Quick Actions */}
      <div className="pt-4 border-t border-border">
        <h5 className="font-medium text-text-primary mb-3">Quick Actions</h5>
        <div className="grid grid-cols-2 gap-2">
          <button className="flex items-center space-x-2 px-3 py-2 bg-background rounded-molecular hover:bg-surface-100 scientific-transition text-sm">
            <Icon name="MessageCircle" size={14} strokeWidth={2} className="text-primary" />
            <span>Comment</span>
          </button>
          <button className="flex items-center space-x-2 px-3 py-2 bg-background rounded-molecular hover:bg-surface-100 scientific-transition text-sm">
            <Icon name="Bell" size={14} strokeWidth={2} className="text-secondary" />
            <span>Notify</span>
          </button>
          <button className="flex items-center space-x-2 px-3 py-2 bg-background rounded-molecular hover:bg-surface-100 scientific-transition text-sm">
            <Icon name="Calendar" size={14} strokeWidth={2} className="text-accent" />
            <span>Schedule</span>
          </button>
          <button className="flex items-center space-x-2 px-3 py-2 bg-background rounded-molecular hover:bg-surface-100 scientific-transition text-sm">
            <Icon name="Archive" size={14} strokeWidth={2} className="text-text-secondary" />
            <span>Archive</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CollaborationPanel;