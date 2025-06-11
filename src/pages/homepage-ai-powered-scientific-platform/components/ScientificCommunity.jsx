import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ScientificCommunity = () => {
  const [activeTab, setActiveTab] = useState('collections');

  const molecularCollections = [
    {
      id: 'drug-compounds',
      title: 'FDA Approved Drug Compounds',
      description: 'Comprehensive collection of FDA-approved pharmaceutical compounds with complete property profiles.',
      author: 'Dr. Maria Santos',
      institution: 'Harvard Medical School',
      compounds: 2847,
      downloads: 15420,
      tags: ['Pharmaceuticals', 'FDA', 'Drug Discovery'],
      image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=300&h=200&fit=crop',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
      id: 'natural-products',
      title: 'Natural Product Library',
      description: 'Curated database of natural compounds from plants, fungi, and marine organisms.',
      author: 'Prof. James Wilson',
      institution: 'Stanford University',
      compounds: 1923,
      downloads: 8765,
      tags: ['Natural Products', 'Bioactive', 'Traditional Medicine'],
      image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=300&h=200&fit=crop',
      avatar: 'https://randomuser.me/api/portraits/men/52.jpg'
    },
    {
      id: 'polymers',
      title: 'Sustainable Polymer Database',
      description: 'Collection of biodegradable and eco-friendly polymer structures for materials research.',
      author: 'Dr. Lisa Chen',
      institution: 'MIT Materials Lab',
      compounds: 756,
      downloads: 4321,
      tags: ['Polymers', 'Sustainability', 'Materials'],
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=200&fit=crop',
      avatar: 'https://randomuser.me/api/portraits/women/36.jpg'
    }
  ];

  const forumDiscussions = [
    {
      id: 'admet-prediction',
      title: 'Best Practices for ADMET Property Prediction',
      author: 'Dr. Robert Kim',
      replies: 23,
      views: 1247,
      lastActivity: '2 hours ago',
      tags: ['ADMET', 'Drug Discovery', 'Best Practices'],
      isHot: true
    },
    {
      id: 'spectral-analysis',
      title: 'Interpreting IR Spectra for Complex Molecules',
      author: 'Prof. Sarah Johnson',
      replies: 18,
      views: 892,
      lastActivity: '4 hours ago',
      tags: ['IR Spectroscopy', 'Analysis', 'Interpretation'],
      isHot: false
    },
    {
      id: 'collaboration-tips',
      title: 'Tips for Effective Team Collaboration in ChemAI Lab',
      author: 'Dr. Michael Brown',
      replies: 31,
      views: 1563,
      lastActivity: '6 hours ago',
      tags: ['Collaboration', 'Workflow', 'Teams'],
      isHot: true
    },
    {
      id: 'api-integration',
      title: 'Integrating ChemAI Lab API with Laboratory Systems',
      author: 'Alex Thompson',
      replies: 12,
      views: 634,
      lastActivity: '1 day ago',
      tags: ['API', 'Integration', 'Automation'],
      isHot: false
    }
  ];

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-secondary-50 text-secondary-700 rounded-full text-sm font-semibold mb-6">
            <Icon name="Users" size={16} className="mr-2" />
            Scientific Community
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-6">
            Connect, Share, and{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Collaborate
            </span>
          </h2>
          
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Join a thriving community of researchers sharing molecular collections, discussing methodologies, and advancing chemistry together.
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center p-6 bg-white rounded-2xl shadow-molecular border border-border">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-600 rounded-molecular flex items-center justify-center mx-auto mb-3">
              <Icon name="Users" size={24} color="white" strokeWidth={2} />
            </div>
            <div className="text-2xl font-bold text-primary mb-1">12,847</div>
            <div className="text-sm text-text-secondary">Active Researchers</div>
          </div>
          
          <div className="text-center p-6 bg-white rounded-2xl shadow-molecular border border-border">
            <div className="w-12 h-12 bg-gradient-to-br from-secondary to-secondary-600 rounded-molecular flex items-center justify-center mx-auto mb-3">
              <Icon name="Database" size={24} color="white" strokeWidth={2} />
            </div>
            <div className="text-2xl font-bold text-secondary mb-1">5,623</div>
            <div className="text-sm text-text-secondary">Shared Collections</div>
          </div>
          
          <div className="text-center p-6 bg-white rounded-2xl shadow-molecular border border-border">
            <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent-600 rounded-molecular flex items-center justify-center mx-auto mb-3">
              <Icon name="MessageSquare" size={24} color="white" strokeWidth={2} />
            </div>
            <div className="text-2xl font-bold text-accent mb-1">28,394</div>
            <div className="text-sm text-text-secondary">Forum Discussions</div>
          </div>
          
          <div className="text-center p-6 bg-white rounded-2xl shadow-molecular border border-border">
            <div className="w-12 h-12 bg-gradient-to-br from-success to-success-600 rounded-molecular flex items-center justify-center mx-auto mb-3">
              <Icon name="Download" size={24} color="white" strokeWidth={2} />
            </div>
            <div className="text-2xl font-bold text-success mb-1">156K</div>
            <div className="text-sm text-text-secondary">Data Downloads</div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-white rounded-molecular p-1 shadow-molecular border border-border">
            <button
              onClick={() => setActiveTab('collections')}
              className={`px-6 py-3 rounded-molecular scientific-transition font-medium ${
                activeTab === 'collections' ?'bg-primary text-white shadow-molecular' :'text-text-primary hover:text-primary'
              }`}
            >
              <Icon name="Database" size={18} className="mr-2 inline" strokeWidth={2} />
              Molecular Collections
            </button>
            <button
              onClick={() => setActiveTab('discussions')}
              className={`px-6 py-3 rounded-molecular scientific-transition font-medium ${
                activeTab === 'discussions' ?'bg-primary text-white shadow-molecular' :'text-text-primary hover:text-primary'
              }`}
            >
              <Icon name="MessageSquare" size={18} className="mr-2 inline" strokeWidth={2} />
              Forum Discussions
            </button>
          </div>
        </div>

        {/* Content Sections */}
        {activeTab === 'collections' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {molecularCollections.map((collection) => (
              <div key={collection.id} className="bg-white rounded-2xl shadow-molecular hover:shadow-molecular-lg scientific-transition border border-border overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={collection.image}
                    alt={collection.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 text-sm font-semibold text-primary">
                    {collection.compounds} compounds
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-bold text-text-primary mb-2">
                    {collection.title}
                  </h3>
                  
                  <p className="text-text-secondary text-sm mb-4 line-clamp-2">
                    {collection.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {collection.tags.map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-primary-50 text-primary text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Author Info */}
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-8 h-8 rounded-full overflow-hidden">
                      <Image
                        src={collection.avatar}
                        alt={collection.author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-text-primary">
                        {collection.author}
                      </div>
                      <div className="text-xs text-text-secondary">
                        {collection.institution}
                      </div>
                    </div>
                  </div>
                  
                  {/* Stats */}
                  <div className="flex items-center justify-between text-sm text-text-secondary mb-4">
                    <div className="flex items-center space-x-1">
                      <Icon name="Download" size={14} strokeWidth={2} />
                      <span>{collection.downloads.toLocaleString()} downloads</span>
                    </div>
                  </div>
                  
                  <button className="w-full px-4 py-2 bg-primary text-white rounded-molecular hover:bg-primary-700 scientific-transition font-medium">
                    View Collection
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'discussions' && (
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-molecular border border-border overflow-hidden">
              <div className="p-6 border-b border-border">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-text-primary">Recent Discussions</h3>
                  <button className="px-4 py-2 bg-primary text-white rounded-molecular hover:bg-primary-700 scientific-transition font-medium">
                    Start Discussion
                  </button>
                </div>
              </div>
              
              <div className="divide-y divide-border">
                {forumDiscussions.map((discussion) => (
                  <div key={discussion.id} className="p-6 hover:bg-surface scientific-transition">
                    <div className="flex items-start space-x-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h4 className="font-semibold text-text-primary hover:text-primary cursor-pointer">
                            {discussion.title}
                          </h4>
                          {discussion.isHot && (
                            <span className="px-2 py-1 bg-accent text-white text-xs rounded-full">
                              Hot
                            </span>
                          )}
                        </div>
                        
                        <div className="flex flex-wrap gap-2 mb-3">
                          {discussion.tags.map((tag, index) => (
                            <span key={index} className="px-2 py-1 bg-surface text-text-secondary text-xs rounded-full">
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex items-center space-x-4 text-sm text-text-secondary">
                          <span>by {discussion.author}</span>
                          <div className="flex items-center space-x-1">
                            <Icon name="MessageSquare" size={14} strokeWidth={2} />
                            <span>{discussion.replies} replies</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Icon name="Eye" size={14} strokeWidth={2} />
                            <span>{discussion.views} views</span>
                          </div>
                          <span>{discussion.lastActivity}</span>
                        </div>
                      </div>
                      
                      <Icon name="ChevronRight" size={20} color="var(--color-text-tertiary)" strokeWidth={2} />
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="p-6 border-t border-border text-center">
                <Link
                  to="/scientific-resources-methodology-validation"
                  className="inline-flex items-center space-x-2 text-primary hover:text-primary-700 scientific-transition font-medium"
                >
                  <span>View All Discussions</span>
                  <Icon name="ArrowRight" size={16} strokeWidth={2} />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-secondary to-accent rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Join the Community?</h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Connect with fellow researchers, share your discoveries, and accelerate scientific progress together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-white text-secondary rounded-molecular hover:bg-surface scientific-transition font-semibold">
                Create Account
              </button>
              <button className="px-8 py-3 border-2 border-white text-white rounded-molecular hover:bg-white hover:text-secondary scientific-transition font-semibold">
                Explore Community
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScientificCommunity;