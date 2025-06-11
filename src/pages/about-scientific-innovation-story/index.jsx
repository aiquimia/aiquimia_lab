import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Image from '../../components/AppImage';

const AboutPage = () => {
  const [activeSection, setActiveSection] = useState('mission');
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('[data-section]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const navigationSections = [
    { id: 'mission', name: 'Our Mission', icon: 'Target' },
    { id: 'story', name: 'Our Story', icon: 'BookOpen' },
    { id: 'team', name: 'Team', icon: 'Users' },
    { id: 'technology', name: 'Technology', icon: 'Cpu' },
    { id: 'timeline', name: 'Timeline', icon: 'Clock' },
    { id: 'values', name: 'Values', icon: 'Heart' },
    { id: 'vision', name: 'Vision', icon: 'Eye' }
  ];

  const teamMembers = [
    {
      id: 1,
      name: "Dr. Sarah Chen",
      role: "Co-Founder & Chief Scientific Officer",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      bio: `PhD in Computational Chemistry from MIT with 15+ years in molecular modeling and AI applications. Former research scientist at pharmaceutical giants, published 50+ peer-reviewed papers on quantum chemistry and machine learning integration.`,
      expertise: ["Quantum Chemistry", "Machine Learning", "Molecular Modeling"]
    },
    {
      id: 2,
      name: "Dr. Michael Rodriguez",
      role: "Co-Founder & CEO",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      bio: `Former VP of Engineering at leading biotech companies, PhD in Computer Science from Stanford. Expert in scaling scientific software platforms and building high-performance computing systems for molecular analysis.`,
      expertise: ["Software Architecture", "Scientific Computing", "Team Leadership"]
    },
    {
      id: 3,
      name: "Dr. Emily Watson",
      role: "Head of AI Research",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      bio: `PhD in Machine Learning from Carnegie Mellon, specializing in deep learning for scientific applications. Previously led AI research teams at Google DeepMind, focusing on protein folding and molecular property prediction.`,
      expertise: ["Deep Learning", "Neural Networks", "Scientific AI"]
    },
    {
      id: 4,
      name: "Dr. James Park",
      role: "Director of Chemistry",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      bio: `PhD in Organic Chemistry from Harvard, 20+ years in pharmaceutical research and development. Expert in medicinal chemistry, drug discovery, and molecular property optimization with extensive industry experience.`,
      expertise: ["Medicinal Chemistry", "Drug Discovery", "Molecular Properties"]
    }
  ];

  const advisoryBoard = [
    {
      name: "Prof. Robert Johnson",
      role: "Nobel Laureate in Chemistry",
      affiliation: "Stanford University",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Dr. Lisa Zhang",
      role: "Former CTO, Pharmaceutical Research",
      affiliation: "Industry Veteran",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Prof. David Kumar",
      role: "Director of Computational Sciences",
      affiliation: "MIT",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&h=300&fit=crop&crop=face"
    }
  ];

  const timelineEvents = [
    {
      year: "2019",
      title: "Foundation & Vision",
      description: "AIquimia Lab founded with mission to democratize molecular analysis through AI innovation.",
      icon: "Lightbulb",
      color: "from-primary to-primary-600"
    },
    {
      year: "2020",
      title: "Core AI Development",
      description: "First molecular property prediction models developed and trained on extensive chemical databases.",
      icon: "Brain",
      color: "from-secondary to-secondary-600"
    },
    {
      year: "2021",
      title: "Platform Launch",
      description: "Beta platform launched with 95% accuracy in molecular property predictions across 10,000+ compounds.",
      icon: "Rocket",
      color: "from-accent to-accent-600"
    },
    {
      year: "2022",
      title: "University Partnerships",
      description: "Partnerships established with 25+ leading universities for research collaboration and validation.",
      icon: "GraduationCap",
      color: "from-success to-success-600"
    },
    {
      year: "2023",
      title: "Industry Adoption",
      description: "Major pharmaceutical companies integrate AIquimia Lab into their drug discovery workflows.",
      icon: "Building2",
      color: "from-primary-500 to-primary-700"
    },
    {
      year: "2024",
      title: "Global Expansion",
      description: "Platform serves 100,000+ researchers worldwide with 99.2% prediction accuracy and real-time analysis.",
      icon: "Globe",
      color: "from-secondary-500 to-secondary-700"
    }
  ];

  const coreValues = [
    {
      title: "Scientific Integrity",
      description: "Every prediction backed by rigorous validation and transparent methodology.",
      icon: "Shield",
      color: "bg-primary-50 text-primary"
    },
    {
      title: "Open Collaboration",
      description: "Fostering global scientific community through shared knowledge and resources.",
      icon: "Users",
      color: "bg-secondary-50 text-secondary"
    },
    {
      title: "Accessibility",
      description: "Making advanced chemistry tools available to researchers regardless of resources.",
      icon: "Heart",
      color: "bg-accent-50 text-accent"
    },
    {
      title: "Innovation",
      description: "Continuously pushing boundaries of what\'s possible in computational chemistry.",
      icon: "Zap",
      color: "bg-success-50 text-success"
    }
  ];

  const achievements = [
    {
      title: "99.2% Prediction Accuracy",
      description: "Industry-leading accuracy across molecular property predictions",
      icon: "Target",
      metric: "99.2%"
    },
    {
      title: "100,000+ Active Users",
      description: "Researchers worldwide trust our platform for critical analysis",
      icon: "Users",
      metric: "100K+"
    },
    {
      title: "1M+ Predictions Daily",
      description: "Processing millions of molecular analyses every day",
      icon: "Activity",
      metric: "1M+"
    },
    {
      title: "25+ University Partners",
      description: "Collaborating with leading academic institutions globally",
      icon: "GraduationCap",
      metric: "25+"
    }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-20 lg:pt-24 pb-16 bg-gradient-to-br from-primary-50 via-background to-secondary-50 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Icon name="Atom" size={16} strokeWidth={2} />
              <span>Scientific Innovation Story</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6 leading-tight">
              Democratizing
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Chemistry </span>
              Through AI
            </h1>
            
            <p className="text-xl text-text-secondary mb-8 leading-relaxed">
              Our mission is to transform molecular analysis from time-intensive laboratory processes into instant, accessible insights without compromising scientific accuracy or rigor.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button 
                onClick={() => scrollToSection('story')}
                className="px-8 py-4 bg-primary text-white rounded-molecular hover:bg-primary-700 scientific-transition shadow-molecular flex items-center space-x-2"
              >
                <Icon name="BookOpen" size={20} strokeWidth={2} />
                <span>Our Story</span>
              </button>
              <button 
                onClick={() => scrollToSection('team')}
                className="px-8 py-4 border border-primary text-primary rounded-molecular hover:bg-primary-50 scientific-transition flex items-center space-x-2"
              >
                <Icon name="Users" size={20} strokeWidth={2} />
                <span>Meet the Team</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Pills */}
      <div className="sticky top-16 lg:top-20 z-30 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center py-4">
            <div className="flex items-center space-x-2 bg-surface rounded-full p-2 overflow-x-auto">
              {navigationSections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium scientific-transition whitespace-nowrap ${
                    activeSection === section.id
                      ? 'bg-primary text-white shadow-molecular'
                      : 'text-text-secondary hover:text-primary hover:bg-primary-50'
                  }`}
                >
                  <Icon name={section.icon} size={16} strokeWidth={2} />
                  <span className="hidden sm:inline">{section.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <section 
        id="mission" 
        data-section
        className={`py-16 lg:py-24 scientific-transition ${
          isVisible.mission ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-6">
                Our Mission
              </h2>
              <div className="prose prose-lg max-w-none text-text-secondary mb-8">
                <p className="mb-4">
                  At AIquimia Lab, we believe that advanced chemistry should be accessible to every researcher, educator, and innovator worldwide. Our mission is to break down the barriers that have traditionally limited molecular analysis to well-funded laboratories with expensive equipment and specialized expertise.
                </p>
                <p className="mb-4">
                  We're transforming the landscape of chemical research by providing instant, accurate molecular property predictions that maintain the rigor and precision that chemistry demands. Through cutting-edge AI technology, we're making it possible for a graduate student in any part of the world to access the same level of molecular insight as researchers at the most prestigious institutions.
                </p>
                <p>
                  Our platform serves as an intelligent laboratory assistant that never sleeps, combining the reliability of established scientific methods with the speed and scalability of modern artificial intelligence.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="text-center p-4 bg-surface rounded-molecular">
                    <div className={`w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center ${
                      index % 2 === 0 ? 'bg-primary-100 text-primary' : 'bg-secondary-100 text-secondary'
                    }`}>
                      <Icon name={achievement.icon} size={24} strokeWidth={2} />
                    </div>
                    <div className="text-2xl font-bold text-text-primary mb-1">
                      {achievement.metric}
                    </div>
                    <div className="text-sm text-text-secondary">
                      {achievement.title}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary-100 to-secondary-100 rounded-molecular p-8 molecular-hover scientific-transition">
                <div className="w-full h-full bg-background rounded-molecular shadow-molecular-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6 molecular-hover scientific-transition">
                      <Icon name="Atom" size={48} color="white" strokeWidth={2} />
                    </div>
                    <h3 className="text-xl font-bold text-text-primary mb-2">
                      AI-Powered Chemistry
                    </h3>
                    <p className="text-text-secondary">
                      Transforming molecular analysis through intelligent automation
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section 
        id="story" 
        data-section
        className={`py-16 lg:py-24 bg-surface scientific-transition ${
          isVisible.story ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-6">
              Our Story
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              The journey from laboratory frustration to AI-powered innovation
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-background rounded-molecular p-8 shadow-molecular scientific-transition hover:shadow-molecular-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-600 rounded-molecular flex items-center justify-center mb-6">
                <Icon name="FlaskConical" size={32} color="white" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-4">
                The Problem
              </h3>
              <p className="text-text-secondary">
                Traditional molecular analysis required weeks of laboratory work, expensive equipment, and specialized expertise. Researchers spent more time waiting for results than actually researching, creating bottlenecks in scientific discovery and innovation.
              </p>
            </div>
            
            <div className="bg-background rounded-molecular p-8 shadow-molecular scientific-transition hover:shadow-molecular-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-secondary-600 rounded-molecular flex items-center justify-center mb-6">
                <Icon name="Lightbulb" size={32} color="white" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-4">
                The Insight
              </h3>
              <p className="text-text-secondary">
                Our founders realized that decades of chemical data could train AI models to predict molecular properties with unprecedented accuracy. By combining computational chemistry expertise with machine learning innovation, we could democratize access to molecular insights.
              </p>
            </div>
            
            <div className="bg-background rounded-molecular p-8 shadow-molecular scientific-transition hover:shadow-molecular-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent-600 rounded-molecular flex items-center justify-center mb-6">
                <Icon name="Rocket" size={32} color="white" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-4">
                The Solution
              </h3>
              <p className="text-text-secondary">
                AIquimia Lab was born from this vision - an intelligent platform that transforms hours of laboratory work into instant, accurate predictions while maintaining the rigor and precision that chemistry demands. Today, we serve researchers worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section 
        id="team" 
        data-section
        className={`py-16 lg:py-24 scientific-transition ${
          isVisible.team ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Interdisciplinary experts combining computational chemistry, machine learning, and software engineering
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-surface rounded-molecular p-8 shadow-molecular scientific-transition hover:shadow-molecular-lg molecular-hover">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <Image
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full object-cover shadow-molecular"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-text-primary mb-2">
                      {member.name}
                    </h3>
                    <p className="text-primary font-semibold mb-4">
                      {member.role}
                    </p>
                    <p className="text-text-secondary text-sm mb-4 leading-relaxed">
                      {member.bio}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-primary-100 text-primary text-xs font-medium rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Advisory Board */}
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-text-primary mb-6">
              Advisory Board
            </h3>
            <p className="text-text-secondary max-w-2xl mx-auto mb-8">
              Distinguished experts from academia and industry providing strategic guidance and scientific validation
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {advisoryBoard.map((advisor, index) => (
              <div key={index} className="text-center bg-background rounded-molecular p-6 shadow-molecular scientific-transition hover:shadow-molecular-lg">
                <Image
                  src={advisor.image}
                  alt={advisor.name}
                  className="w-20 h-20 rounded-full object-cover mx-auto mb-4 shadow-molecular"
                />
                <h4 className="text-lg font-bold text-text-primary mb-2">
                  {advisor.name}
                </h4>
                <p className="text-primary font-semibold text-sm mb-1">
                  {advisor.role}
                </p>
                <p className="text-text-secondary text-sm">
                  {advisor.affiliation}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section 
        id="technology" 
        data-section
        className={`py-16 lg:py-24 bg-surface scientific-transition ${
          isVisible.technology ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-6">
              Our Technology
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Advanced AI approaches using accessible language while maintaining scientific credibility
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-text-primary mb-6">
                AI-Powered Molecular Analysis
              </h3>
              <div className="prose prose-lg max-w-none text-text-secondary mb-8">
                <p className="mb-4">
                  Our proprietary AI models are trained on the world's largest curated chemical databases, encompassing millions of molecular structures and their experimentally validated properties. We employ state-of-the-art deep learning architectures specifically designed for molecular representation and property prediction.
                </p>
                <p className="mb-4">
                  The training methodology combines quantum mechanical calculations, experimental data from peer-reviewed literature, and advanced neural network architectures. Our models understand molecular structure at the atomic level, considering electronic properties, spatial arrangements, and chemical bonding patterns.
                </p>
                <p>
                  Continuous improvement processes ensure our predictions remain at the cutting edge of accuracy, with regular model updates incorporating the latest scientific discoveries and validation against new experimental data.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-background rounded-molecular p-6 shadow-molecular text-center">
                <div className="w-12 h-12 bg-primary-100 text-primary rounded-molecular flex items-center justify-center mx-auto mb-4">
                  <Icon name="Database" size={24} strokeWidth={2} />
                </div>
                <h4 className="font-bold text-text-primary mb-2">Data Sources</h4>
                <p className="text-sm text-text-secondary">Millions of validated molecular structures and properties</p>
              </div>
              
              <div className="bg-background rounded-molecular p-6 shadow-molecular text-center">
                <div className="w-12 h-12 bg-secondary-100 text-secondary rounded-molecular flex items-center justify-center mx-auto mb-4">
                  <Icon name="Brain" size={24} strokeWidth={2} />
                </div>
                <h4 className="font-bold text-text-primary mb-2">AI Models</h4>
                <p className="text-sm text-text-secondary">Deep learning architectures for molecular prediction</p>
              </div>
              
              <div className="bg-background rounded-molecular p-6 shadow-molecular text-center">
                <div className="w-12 h-12 bg-accent-100 text-accent rounded-molecular flex items-center justify-center mx-auto mb-4">
                  <Icon name="Zap" size={24} strokeWidth={2} />
                </div>
                <h4 className="font-bold text-text-primary mb-2">Real-time</h4>
                <p className="text-sm text-text-secondary">Instant predictions with sub-second response times</p>
              </div>
              
              <div className="bg-background rounded-molecular p-6 shadow-molecular text-center">
                <div className="w-12 h-12 bg-success-100 text-success rounded-molecular flex items-center justify-center mx-auto mb-4">
                  <Icon name="Shield" size={24} strokeWidth={2} />
                </div>
                <h4 className="font-bold text-text-primary mb-2">Validation</h4>
                <p className="text-sm text-text-secondary">Rigorous testing against experimental benchmarks</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section 
        id="timeline" 
        data-section
        className={`py-16 lg:py-24 scientific-transition ${
          isVisible.timeline ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Key milestones in our mission to democratize molecular analysis
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-secondary to-accent rounded-full"></div>
            
            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-background rounded-molecular p-6 shadow-molecular scientific-transition hover:shadow-molecular-lg">
                      <div className="text-2xl font-bold text-primary mb-2">
                        {event.year}
                      </div>
                      <h3 className="text-xl font-bold text-text-primary mb-3">
                        {event.title}
                      </h3>
                      <p className="text-text-secondary">
                        {event.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 bg-gradient-to-br ${event.color} rounded-full flex items-center justify-center shadow-molecular molecular-hover scientific-transition`}>
                      <Icon name={event.icon} size={24} color="white" strokeWidth={2} />
                    </div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section 
        id="values" 
        data-section
        className={`py-16 lg:py-24 bg-surface scientific-transition ${
          isVisible.values ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-6">
              Our Values
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              The principles that guide our mission and shape our platform
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="text-center bg-background rounded-molecular p-8 shadow-molecular scientific-transition hover:shadow-molecular-lg molecular-hover">
                <div className={`w-16 h-16 ${value.color} rounded-molecular flex items-center justify-center mx-auto mb-6`}>
                  <Icon name={value.icon} size={32} strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-4">
                  {value.title}
                </h3>
                <p className="text-text-secondary">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section 
        id="vision" 
        data-section
        className={`py-16 lg:py-24 scientific-transition ${
          isVisible.vision ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-6">
              Our Vision
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              The future of molecular science and our role in shaping it
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-molecular p-8 text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-molecular flex items-center justify-center mx-auto mb-6">
                <Icon name="Microscope" size={32} strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-4">
                Expanded Coverage
              </h3>
              <p className="text-text-secondary">
                Extending our AI models to cover every known molecular structure and property, including complex biological systems and novel materials.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 rounded-molecular p-8 text-center">
              <div className="w-16 h-16 bg-secondary text-white rounded-molecular flex items-center justify-center mx-auto mb-6">
                <Icon name="Network" size={32} strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-4">
                Enhanced Collaboration
              </h3>
              <p className="text-text-secondary">
                Building the world's largest collaborative platform for molecular research, connecting scientists across disciplines and institutions.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-accent-50 to-accent-100 rounded-molecular p-8 text-center">
              <div className="w-16 h-16 bg-accent text-white rounded-molecular flex items-center justify-center mx-auto mb-6">
                <Icon name="Sparkles" size={32} strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-4">
                New Frontiers
              </h3>
              <p className="text-text-secondary">
                Pioneering AI-driven molecular design, enabling researchers to create entirely new compounds with desired properties.
              </p>
            </div>
          </div>
          
          <div className="text-center bg-gradient-to-r from-primary to-secondary rounded-molecular p-12 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Join Our Mission
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Be part of the revolution that's making advanced chemistry accessible to everyone
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                to="/homepage-ai-powered-scientific-platform"
                className="px-8 py-4 bg-white text-primary rounded-molecular hover:bg-gray-50 scientific-transition shadow-molecular flex items-center space-x-2 font-semibold"
              >
                <Icon name="Rocket" size={20} strokeWidth={2} />
                <span>Start Your Journey</span>
              </Link>
              <Link
                to="/scientific-resources-methodology-validation"
                className="px-8 py-4 border-2 border-white text-white rounded-molecular hover:bg-white hover:text-primary scientific-transition flex items-center space-x-2 font-semibold"
              >
                <Icon name="BookOpen" size={20} strokeWidth={2} />
                <span>Learn More</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-text-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-molecular flex items-center justify-center">
                  <Icon name="Atom" size={24} color="white" strokeWidth={2.5} />
                </div>
                <div>
                  <div className="text-xl font-bold">AIquimia Lab</div>
                  <div className="text-sm opacity-80">Scientific Intelligence</div>
                </div>
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                Democratizing advanced chemistry through AI innovation while maintaining rigorous scientific standards.
              </p>
              <div className="flex space-x-4">
                <button className="w-10 h-10 bg-white/10 rounded-molecular flex items-center justify-center hover:bg-white/20 scientific-transition">
                  <Icon name="Twitter" size={20} strokeWidth={2} />
                </button>
                <button className="w-10 h-10 bg-white/10 rounded-molecular flex items-center justify-center hover:bg-white/20 scientific-transition">
                  <Icon name="Linkedin" size={20} strokeWidth={2} />
                </button>
                <button className="w-10 h-10 bg-white/10 rounded-molecular flex items-center justify-center hover:bg-white/20 scientific-transition">
                  <Icon name="Github" size={20} strokeWidth={2} />
                </button>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <div className="space-y-2">
                <Link to="/prediction-studio-core-analysis-workspace" className="block text-gray-300 hover:text-white scientific-transition">
                  Prediction Studio
                </Link>
                <Link to="/results-dashboard-comprehensive-data-visualization" className="block text-gray-300 hover:text-white scientific-transition">
                  Results Dashboard
                </Link>
                <Link to="/scientific-resources-methodology-validation" className="block text-gray-300 hover:text-white scientific-transition">
                  Scientific Resources
                </Link>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <div className="space-y-2">
                <Link to="/about-scientific-innovation-story" className="block text-gray-300 hover:text-white scientific-transition">
                  About Us
                </Link>
                <Link to="/pricing-flexible-scientific-access" className="block text-gray-300 hover:text-white scientific-transition">
                  Pricing
                </Link>
                <button className="block text-gray-300 hover:text-white scientific-transition text-left">
                  Contact
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} AIquimia Lab. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <button className="text-gray-400 hover:text-white text-sm scientific-transition">
                Privacy Policy
              </button>
              <button className="text-gray-400 hover:text-white text-sm scientific-transition">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;