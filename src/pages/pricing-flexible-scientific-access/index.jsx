import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';

const PricingPage = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [calculatorValues, setCalculatorValues] = useState({
    predictions: 1000,
    teamSize: 5,
    apiCalls: 500
  });

  const pricingTiers = [
    {
      id: 'free',
      name: 'Free Researcher',
      price: { monthly: 0, yearly: 0 },
      description: 'Perfect for students and individual researchers getting started',
      features: [
        '50 predictions per month',
        'Basic molecular properties',
        'Standard IR spectrum analysis',
        'Community forum access',
        'Educational resources',
        'Email support'
      ],
      limitations: [
        'No API access',
        'No batch processing',
        'Limited export formats'
      ],
      cta: 'Start Free',
      popular: false,
      userType: 'Students & Individual Researchers'
    },
    {
      id: 'academic',
      name: 'Academic Pro',
      price: { monthly: 49, yearly: 490 },
      description: 'Comprehensive tools for academic research and education',
      features: [
        'Unlimited predictions',
        'Advanced molecular analysis',
        'Full spectral suite (IR, UV-Vis, NMR)',
        'Batch processing up to 100 molecules',
        'Data export (CSV, JSON, PDF)',
        'Collaboration tools',
        'Priority email support',
        'Academic discount available'
      ],
      limitations: [
        'Limited API calls (1,000/month)',
        'No commercial use'
      ],
      cta: 'Start Academic Trial',
      popular: true,
      userType: 'Academic Researchers & Educators',
      discount: '50% off with .edu email'
    },
    {
      id: 'industry',
      name: 'Industry Standard',
      price: { monthly: 199, yearly: 1990 },
      description: 'Professional-grade tools for commercial applications',
      features: [
        'Unlimited predictions',
        'Complete molecular analysis suite',
        'Advanced spectral analysis',
        'Unlimited batch processing',
        'Full API access (10,000 calls/month)',
        'Custom integrations',
        'Team collaboration (up to 25 users)',
        'Priority phone & email support',
        'Commercial license included'
      ],
      limitations: [
        'Standard SLA (99.5% uptime)',
        'No dedicated support'
      ],
      cta: 'Start Industry Trial',
      popular: false,
      userType: 'Commercial Organizations'
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: { monthly: 'Custom', yearly: 'Custom' },
      description: 'Tailored solutions for large organizations and institutions',
      features: [
        'Unlimited everything',
        'Custom deployment options',
        'Dedicated support team',
        'SLA guarantees (99.9% uptime)',
        'Compliance features (GxP, HIPAA)',
        'Data sovereignty options',
        'Audit trails & reporting',
        'Custom integrations',
        'Training & onboarding',
        'Unlimited users'
      ],
      limitations: [],
      cta: 'Contact Sales',
      popular: false,
      userType: 'Large Enterprises & Institutions'
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Dr. Sarah Chen",
      role: "Research Scientist",
      institution: "Stanford University",
      tier: "Academic Pro",
      content: `ChemAI Lab has revolutionized our research workflow. What used to take days of computational analysis now happens in minutes. The accuracy is remarkable, and the educational features help train our graduate students effectively.`,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      role: "Lead Chemist",
      institution: "Pharmaceutical Corp",
      tier: "Industry Standard",
      content: `The API integration capabilities are outstanding. We've integrated ChemAI Lab into our drug discovery pipeline, reducing our time-to-market significantly. The commercial license gives us peace of mind for regulatory compliance.`,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Prof. Emily Watson",
      role: "Department Head",
      institution: "MIT Chemistry",
      tier: "Enterprise",
      content: `Our entire department relies on ChemAI Lab for both research and teaching. The enterprise features, including audit trails and compliance reporting, meet all our institutional requirements perfectly.`,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const faqs = [
    {
      question: "How are predictions counted?",
      answer: "Each molecular structure analysis counts as one prediction. Batch processing counts each molecule separately. Saved predictions don\'t count toward your limit when re-accessed."
    },
    {
      question: "Can I upgrade or downgrade my plan anytime?",
      answer: "Yes, you can change your plan at any time. Upgrades take effect immediately, while downgrades take effect at the next billing cycle. Unused predictions don\'t roll over between plans."
    },
    {
      question: "What\'s included in academic pricing?",
      answer: "Academic pricing offers 50% discount for verified .edu email addresses. Students get additional discounts. Academic licenses restrict commercial use but allow publication of results."
    },
    {
      question: "How does API pricing work?",
      answer: "API calls are included in your plan limits. Industry Standard includes 10,000 calls/month. Additional calls are billed at $0.01 per call. Enterprise plans include unlimited API access."
    },
    {
      question: "What compliance features are available?",
      answer: "Enterprise plans include GxP compliance, HIPAA compliance, audit trails, data sovereignty options, and regulatory reporting. We maintain SOC 2 Type II certification."
    },
    {
      question: "Is there a free trial available?",
      answer: "Yes, all paid plans include a 14-day free trial with full feature access. No credit card required for Academic Pro trial. Free Researcher plan is always available."
    }
  ];

  const calculateEstimatedCost = () => {
    const { predictions, teamSize, apiCalls } = calculatorValues;
    
    if (predictions <= 50) return { tier: 'Free Researcher', cost: 0 };
    if (predictions <= 5000 && teamSize <= 10 && apiCalls <= 1000) {
      return { 
        tier: 'Academic Pro', 
        cost: billingCycle === 'yearly' ? 490 : 49 * 12 
      };
    }
    if (predictions <= 50000 && teamSize <= 25 && apiCalls <= 10000) {
      return { 
        tier: 'Industry Standard', 
        cost: billingCycle === 'yearly' ? 1990 : 199 * 12 
      };
    }
    return { tier: 'Enterprise', cost: 'Custom' };
  };

  const estimatedPlan = calculateEstimatedCost();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6 font-inter">
              Flexible Scientific Access
            </h1>
            <p className="text-xl text-text-secondary mb-8 max-w-3xl mx-auto">
              Choose the perfect plan for your research needs. From individual exploration to enterprise-scale molecular analysis, we have solutions that grow with your scientific ambitions.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center space-x-4 mb-12">
              <span className={`text-sm font-medium ${billingCycle === 'monthly' ? 'text-primary' : 'text-text-secondary'}`}>
                Monthly
              </span>
              <button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                className="relative inline-flex h-6 w-11 items-center rounded-full bg-primary scientific-transition"
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                    billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`text-sm font-medium ${billingCycle === 'yearly' ? 'text-primary' : 'text-text-secondary'}`}>
                Yearly
              </span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent-100 text-accent-700">
                Save 17%
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricingTiers.map((tier) => (
              <div
                key={tier.id}
                className={`relative bg-surface rounded-2xl p-8 shadow-molecular scientific-transition hover:shadow-molecular-lg ${
                  tier.popular ? 'ring-2 ring-primary scale-105' : ''
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-medium bg-primary text-white">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-primary mb-2">{tier.name}</h3>
                  <div className="mb-4">
                    {typeof tier.price[billingCycle] === 'number' ? (
                      <>
                        <span className="text-4xl font-bold text-text-primary">
                          ${tier.price[billingCycle]}
                        </span>
                        <span className="text-text-secondary">
                          /{billingCycle === 'yearly' ? 'year' : 'month'}
                        </span>
                      </>
                    ) : (
                      <span className="text-4xl font-bold text-text-primary">
                        {tier.price[billingCycle]}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-text-secondary mb-4">{tier.description}</p>
                  <div className="text-xs text-accent-600 font-medium bg-accent-50 px-3 py-1 rounded-full">
                    {tier.userType}
                  </div>
                  {tier.discount && (
                    <div className="text-xs text-success font-medium bg-success-50 px-3 py-1 rounded-full mt-2">
                      {tier.discount}
                    </div>
                  )}
                </div>

                <div className="space-y-4 mb-8">
                  <div>
                    <h4 className="text-sm font-semibold text-text-primary mb-3">Features Included:</h4>
                    <ul className="space-y-2">
                      {tier.features.map((feature, index) => (
                        <li key={index} className="flex items-start space-x-2 text-sm">
                          <Icon name="Check" size={16} className="text-success mt-0.5 flex-shrink-0" strokeWidth={2} />
                          <span className="text-text-secondary">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {tier.limitations.length > 0 && (
                    <div>
                      <h4 className="text-sm font-semibold text-text-primary mb-3">Limitations:</h4>
                      <ul className="space-y-2">
                        {tier.limitations.map((limitation, index) => (
                          <li key={index} className="flex items-start space-x-2 text-sm">
                            <Icon name="X" size={16} className="text-error mt-0.5 flex-shrink-0" strokeWidth={2} />
                            <span className="text-text-secondary">{limitation}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <button
                  className={`w-full py-3 px-4 rounded-molecular font-semibold scientific-transition ${
                    tier.popular
                      ? 'bg-primary text-white hover:bg-primary-700 shadow-molecular'
                      : 'bg-surface-200 text-text-primary hover:bg-primary hover:text-white'
                  }`}
                >
                  {tier.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Calculator */}
      <section className="py-16 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Cost Calculator</h2>
            <p className="text-text-secondary">
              Estimate your costs based on usage patterns and team size
            </p>
          </div>

          <div className="bg-background rounded-2xl p-8 shadow-molecular">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <label className="block text-sm font-semibold text-text-primary mb-3">
                  Monthly Predictions
                </label>
                <div className="relative">
                  <input
                    type="range"
                    min="0"
                    max="10000"
                    step="100"
                    value={calculatorValues.predictions}
                    onChange={(e) => setCalculatorValues({
                      ...calculatorValues,
                      predictions: parseInt(e.target.value)
                    })}
                    className="w-full h-2 bg-surface-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-text-secondary mt-2">
                    <span>0</span>
                    <span className="font-semibold text-primary">{calculatorValues.predictions.toLocaleString()}</span>
                    <span>10,000+</span>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-text-primary mb-3">
                  Team Size
                </label>
                <div className="relative">
                  <input
                    type="range"
                    min="1"
                    max="50"
                    step="1"
                    value={calculatorValues.teamSize}
                    onChange={(e) => setCalculatorValues({
                      ...calculatorValues,
                      teamSize: parseInt(e.target.value)
                    })}
                    className="w-full h-2 bg-surface-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-text-secondary mt-2">
                    <span>1</span>
                    <span className="font-semibold text-primary">{calculatorValues.teamSize}</span>
                    <span>50+</span>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-text-primary mb-3">
                  Monthly API Calls
                </label>
                <div className="relative">
                  <input
                    type="range"
                    min="0"
                    max="20000"
                    step="500"
                    value={calculatorValues.apiCalls}
                    onChange={(e) => setCalculatorValues({
                      ...calculatorValues,
                      apiCalls: parseInt(e.target.value)
                    })}
                    className="w-full h-2 bg-surface-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-text-secondary mt-2">
                    <span>0</span>
                    <span className="font-semibold text-primary">{calculatorValues.apiCalls.toLocaleString()}</span>
                    <span>20,000+</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary-50 rounded-xl p-6 text-center">
              <h3 className="text-lg font-semibold text-primary mb-2">Recommended Plan</h3>
              <div className="text-3xl font-bold text-primary mb-2">{estimatedPlan.tier}</div>
              <div className="text-2xl font-semibold text-text-primary mb-4">
                {typeof estimatedPlan.cost === 'number' 
                  ? `$${estimatedPlan.cost.toLocaleString()}/year` 
                  : estimatedPlan.cost
                }
              </div>
              <p className="text-sm text-text-secondary">
                Based on your usage requirements, this plan offers the best value and features for your needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Trusted by Scientists Worldwide</h2>
            <p className="text-text-secondary">
              See how researchers across different tiers are advancing their work with ChemAI Lab
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-surface rounded-2xl p-8 shadow-molecular">
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-text-primary">{testimonial.name}</h4>
                    <p className="text-sm text-text-secondary">{testimonial.role}</p>
                    <p className="text-sm text-text-secondary">{testimonial.institution}</p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary">
                    {testimonial.tier}
                  </span>
                </div>
                
                <blockquote className="text-text-secondary italic">
                  "{testimonial.content}"
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Frequently Asked Questions</h2>
            <p className="text-text-secondary">
              Everything you need to know about our pricing and plans
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-background rounded-xl p-6 shadow-molecular">
                <h3 className="text-lg font-semibold text-text-primary mb-3 flex items-center">
                  <Icon name="HelpCircle" size={20} className="text-primary mr-3" strokeWidth={2} />
                  {faq.question}
                </h3>
                <p className="text-text-secondary pl-8">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary to-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Accelerate Your Research?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of scientists who trust ChemAI Lab for their molecular analysis needs
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-primary font-semibold rounded-molecular hover:bg-surface-100 scientific-transition shadow-molecular">
              Start Free Trial
            </button>
            <button className="px-8 py-4 bg-transparent text-white font-semibold border-2 border-white rounded-molecular hover:bg-white hover:text-primary scientific-transition">
              Contact Sales
            </button>
          </div>
          
          <div className="mt-8 flex items-center justify-center space-x-8 text-white/80 text-sm">
            <div className="flex items-center space-x-2">
              <Icon name="Check" size={16} strokeWidth={2} />
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Check" size={16} strokeWidth={2} />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Check" size={16} strokeWidth={2} />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-text-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <Link to="/homepage-ai-powered-scientific-platform" className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-molecular flex items-center justify-center">
                  <Icon name="Atom" size={24} color="white" strokeWidth={2.5} />
                </div>
                <div>
                  <span className="text-xl font-bold font-inter">ChemAI Lab</span>
                  <div className="text-sm text-white/70">Scientific Intelligence</div>
                </div>
              </Link>
              <p className="text-white/70 mb-4 max-w-md">
                Transforming molecular analysis through artificial intelligence. Making complex chemistry accessible to researchers worldwide.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Platform</h3>
              <ul className="space-y-2 text-white/70">
                <li><Link to="/prediction-studio-core-analysis-workspace" className="hover:text-white scientific-transition">Prediction Studio</Link></li>
                <li><Link to="/results-dashboard-comprehensive-data-visualization" className="hover:text-white scientific-transition">Results Dashboard</Link></li>
                <li><Link to="/scientific-resources-methodology-validation" className="hover:text-white scientific-transition">Scientific Resources</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-white/70">
                <li><Link to="/about-scientific-innovation-story" className="hover:text-white scientific-transition">About Us</Link></li>
                <li><Link to="/pricing-flexible-scientific-access" className="hover:text-white scientific-transition">Pricing</Link></li>
                <li><a href="#" className="hover:text-white scientific-transition">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/70 text-sm">
              © {new Date().getFullYear()} ChemAI Lab. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-white/70 hover:text-white scientific-transition">
                <Icon name="Twitter" size={20} strokeWidth={2} />
              </a>
              <a href="#" className="text-white/70 hover:text-white scientific-transition">
                <Icon name="Linkedin" size={20} strokeWidth={2} />
              </a>
              <a href="#" className="text-white/70 hover:text-white scientific-transition">
                <Icon name="Github" size={20} strokeWidth={2} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PricingPage;