import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const AccuracyShowcase = () => {
  const [hoveredBenchmark, setHoveredBenchmark] = useState(null);

  const benchmarkData = [
    {
      id: 'molecular-weight',
      property: 'Molecular Weight',
      accuracy: 99.8,
      experimental: 194.19,
      predicted: 194.21,
      unit: 'g/mol',
      methodology: 'Quantum mechanical calculations using DFT B3LYP/6-31G* basis set with empirical corrections for molecular weight determination.',
      icon: 'Scale'
    },
    {
      id: 'logp',
      property: 'LogP (Octanol-Water)',
      accuracy: 94.2,
      experimental: -0.07,
      predicted: -0.09,
      unit: '',
      methodology: 'Machine learning ensemble combining fragment-based approaches with 3D molecular descriptors trained on 50,000+ experimental values.',
      icon: 'Droplets'
    },
    {
      id: 'solubility',
      property: 'Aqueous Solubility',
      accuracy: 91.5,
      experimental: 21.6,
      predicted: 22.1,
      unit: 'mg/mL',
      methodology: 'Deep neural network architecture incorporating molecular fingerprints, topological indices, and thermodynamic parameters.',
      icon: 'Beaker'
    },
    {
      id: 'melting-point',
      property: 'Melting Point',
      accuracy: 88.7,
      experimental: 238,
      predicted: 241,
      unit: '°C',
      methodology: 'Hybrid approach combining group contribution methods with machine learning corrections based on crystal structure predictions.',
      icon: 'Thermometer'
    }
  ];

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-success-50 text-success-700 rounded-full text-sm font-semibold mb-6">
            <Icon name="Target" size={16} className="mr-2" />
            Validated Accuracy
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-6">
            Benchmark Performance Against{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Experimental Data
            </span>
          </h2>
          
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Our AI models are rigorously validated against peer-reviewed experimental datasets, ensuring reliability for your research and development needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benchmarkData.map((benchmark) => (
            <div
              key={benchmark.id}
              className="relative bg-white rounded-2xl p-6 shadow-molecular hover:shadow-molecular-lg scientific-transition cursor-pointer border border-border"
              onMouseEnter={() => setHoveredBenchmark(benchmark.id)}
              onMouseLeave={() => setHoveredBenchmark(null)}
            >
              {/* Property Header */}
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-600 rounded-molecular flex items-center justify-center">
                  <Icon name={benchmark.icon} size={20} color="white" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary text-sm">{benchmark.property}</h3>
                  <div className="flex items-center space-x-1">
                    <span className="text-2xl font-bold text-success">{benchmark.accuracy}%</span>
                    <span className="text-xs text-text-secondary">accuracy</span>
                  </div>
                </div>
              </div>

              {/* Comparison Data */}
              <div className="space-y-3 mb-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-text-secondary">Experimental:</span>
                  <span className="font-semibold text-text-primary">
                    {benchmark.experimental} {benchmark.unit}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-text-secondary">Predicted:</span>
                  <span className="font-semibold text-primary">
                    {benchmark.predicted} {benchmark.unit}
                  </span>
                </div>
              </div>

              {/* Accuracy Bar */}
              <div className="mb-4">
                <div className="w-full bg-surface-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-success to-success-600 h-2 rounded-full scientific-transition"
                    style={{ width: `${benchmark.accuracy}%` }}
                  ></div>
                </div>
              </div>

              {/* Methodology Tooltip */}
              {hoveredBenchmark === benchmark.id && (
                <div className="absolute top-full left-0 right-0 mt-2 p-4 bg-text-primary text-white rounded-molecular shadow-molecular-lg z-10 text-xs leading-relaxed">
                  <div className="flex items-start space-x-2">
                    <Icon name="Info" size={14} className="mt-0.5 flex-shrink-0" strokeWidth={2} />
                    <p>{benchmark.methodology}</p>
                  </div>
                </div>
              )}

              {/* Hover Indicator */}
              <div className="absolute top-4 right-4">
                <Icon 
                  name="Info" 
                  size={16} 
                  color="var(--color-text-tertiary)" 
                  className={`scientific-transition ${hoveredBenchmark === benchmark.id ? 'text-primary' : ''}`}
                  strokeWidth={2} 
                />
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-6 px-8 py-4 bg-white rounded-2xl shadow-molecular border border-border">
            <div className="flex items-center space-x-2">
              <Icon name="Database" size={20} color="var(--color-primary)" strokeWidth={2} />
              <div className="text-left">
                <div className="font-semibold text-text-primary">2.5M+</div>
                <div className="text-xs text-text-secondary">Training Compounds</div>
              </div>
            </div>
            
            <div className="w-px h-8 bg-border"></div>
            
            <div className="flex items-center space-x-2">
              <Icon name="BookOpen" size={20} color="var(--color-secondary)" strokeWidth={2} />
              <div className="text-left">
                <div className="font-semibold text-text-primary">150+</div>
                <div className="text-xs text-text-secondary">Published Studies</div>
              </div>
            </div>
            
            <div className="w-px h-8 bg-border"></div>
            
            <div className="flex items-center space-x-2">
              <Icon name="Award" size={20} color="var(--color-accent)" strokeWidth={2} />
              <div className="text-left">
                <div className="font-semibold text-text-primary">ISO 17025</div>
                <div className="text-xs text-text-secondary">Certified Methods</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccuracyShowcase;