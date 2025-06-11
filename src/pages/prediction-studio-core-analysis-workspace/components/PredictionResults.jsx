import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const PredictionResults = ({ results, molecule }) => {
  const [activeSection, setActiveSection] = useState('properties');
  const [expandedCards, setExpandedCards] = useState(new Set(['properties']));

  if (!results) return null;

  const sections = [
    { id: 'properties', name: 'Molecular Properties', icon: 'Atom' },
    { id: 'spectral', name: 'Spectral Data', icon: 'BarChart3' },
    { id: 'toxicity', name: 'Toxicity Profile', icon: 'Shield' },
    { id: 'solubility', name: 'Solubility', icon: 'Droplets' }
  ];

  const toggleCard = (cardId) => {
    const newExpanded = new Set(expandedCards);
    if (newExpanded.has(cardId)) {
      newExpanded.delete(cardId);
    } else {
      newExpanded.add(cardId);
    }
    setExpandedCards(newExpanded);
  };

  const getConfidenceColor = (confidence) => {
    if (confidence >= 0.9) return 'text-success';
    if (confidence >= 0.7) return 'text-accent';
    return 'text-error';
  };

  const getConfidenceBg = (confidence) => {
    if (confidence >= 0.9) return 'bg-success-50';
    if (confidence >= 0.7) return 'bg-warning-50';
    return 'bg-error-50';
  };

  return (
    <div className="bg-surface rounded-molecular shadow-molecular">
      <div className="p-4 border-b border-border">
        <h3 className="text-lg font-semibold text-text-primary flex items-center space-x-2">
          <Icon name="TrendingUp" size={20} strokeWidth={2} />
          <span>Prediction Results</span>
        </h3>
        <p className="text-sm text-text-secondary mt-1">
          AI-powered molecular analysis for {molecule?.name}
        </p>
      </div>

      <div className="p-4 space-y-4">
        {/* Molecular Properties */}
        <div className="bg-background rounded-molecular border border-border">
          <button
            onClick={() => toggleCard('properties')}
            className="w-full flex items-center justify-between p-4 text-left hover:bg-surface-50 scientific-transition"
          >
            <div className="flex items-center space-x-3">
              <Icon name="Atom" size={18} strokeWidth={2} className="text-primary" />
              <span className="font-medium text-text-primary">Molecular Properties</span>
            </div>
            <Icon 
              name={expandedCards.has('properties') ? "ChevronUp" : "ChevronDown"} 
              size={16} 
              strokeWidth={2} 
              className="text-text-secondary"
            />
          </button>
          
          {expandedCards.has('properties') && (
            <div className="px-4 pb-4 space-y-3">
              <div className="grid grid-cols-1 gap-3">
                <div className="flex justify-between items-center py-2 border-b border-border-light">
                  <span className="text-sm text-text-secondary">Molecular Weight</span>
                  <span className="text-sm font-medium text-text-primary">
                    {results.molecularProperties.molecularWeight} g/mol
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border-light">
                  <span className="text-sm text-text-secondary">LogP</span>
                  <span className="text-sm font-medium text-text-primary">
                    {results.molecularProperties.logP}
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border-light">
                  <span className="text-sm text-text-secondary">Polar Surface Area</span>
                  <span className="text-sm font-medium text-text-primary">
                    {results.molecularProperties.polarSurfaceArea} Ų
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border-light">
                  <span className="text-sm text-text-secondary">H-Bond Donors</span>
                  <span className="text-sm font-medium text-text-primary">
                    {results.molecularProperties.hBondDonors}
                  </span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-sm text-text-secondary">H-Bond Acceptors</span>
                  <span className="text-sm font-medium text-text-primary">
                    {results.molecularProperties.hBondAcceptors}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Spectral Data */}
        <div className="bg-background rounded-molecular border border-border">
          <button
            onClick={() => toggleCard('spectral')}
            className="w-full flex items-center justify-between p-4 text-left hover:bg-surface-50 scientific-transition"
          >
            <div className="flex items-center space-x-3">
              <Icon name="BarChart3" size={18} strokeWidth={2} className="text-secondary" />
              <span className="font-medium text-text-primary">Spectral Data</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className={`text-xs px-2 py-1 rounded-full ${getConfidenceBg(results.spectralData.ir.confidence)} ${getConfidenceColor(results.spectralData.ir.confidence)}`}>
                {Math.round(results.spectralData.ir.confidence * 100)}% confidence
              </span>
              <Icon 
                name={expandedCards.has('spectral') ? "ChevronUp" : "ChevronDown"} 
                size={16} 
                strokeWidth={2} 
                className="text-text-secondary"
              />
            </div>
          </button>
          
          {expandedCards.has('spectral') && (
            <div className="px-4 pb-4 space-y-4">
              <div className="space-y-3">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-text-primary">IR Spectrum</span>
                    <span className="text-xs text-text-secondary">
                      Confidence: {Math.round(results.spectralData.ir.confidence * 100)}%
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {results.spectralData.ir.peaks.map((peak, index) => (
                      <span key={index} className="text-xs px-2 py-1 bg-primary-50 text-primary rounded-molecular font-mono">
                        {peak} cm⁻¹
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-text-primary">¹H NMR</span>
                    <span className="text-xs text-text-secondary">
                      Confidence: {Math.round(results.spectralData.nmr.confidence * 100)}%
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {results.spectralData.nmr.peaks.map((peak, index) => (
                      <span key={index} className="text-xs px-2 py-1 bg-secondary-50 text-secondary rounded-molecular font-mono">
                        {peak} ppm
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-text-primary">UV-Vis</span>
                    <span className="text-xs text-text-secondary">
                      Confidence: {Math.round(results.spectralData.uvVis.confidence * 100)}%
                    </span>
                  </div>
                  <span className="text-xs px-2 py-1 bg-accent-50 text-accent rounded-molecular font-mono">
                    λmax: {results.spectralData.uvVis.maxAbsorption} nm
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Toxicity Profile */}
        <div className="bg-background rounded-molecular border border-border">
          <button
            onClick={() => toggleCard('toxicity')}
            className="w-full flex items-center justify-between p-4 text-left hover:bg-surface-50 scientific-transition"
          >
            <div className="flex items-center space-x-3">
              <Icon name="Shield" size={18} strokeWidth={2} className="text-success" />
              <span className="font-medium text-text-primary">Toxicity Profile</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className={`text-xs px-2 py-1 rounded-full ${getConfidenceBg(results.toxicity.confidence)} ${getConfidenceColor(results.toxicity.confidence)}`}>
                {Math.round(results.toxicity.confidence * 100)}% confidence
              </span>
              <Icon 
                name={expandedCards.has('toxicity') ? "ChevronUp" : "ChevronDown"} 
                size={16} 
                strokeWidth={2} 
                className="text-text-secondary"
              />
            </div>
          </button>
          
          {expandedCards.has('toxicity') && (
            <div className="px-4 pb-4 space-y-3">
              <div className="grid grid-cols-1 gap-3">
                <div className="flex justify-between items-center py-2 border-b border-border-light">
                  <span className="text-sm text-text-secondary">Mutagenic</span>
                  <span className={`text-sm font-medium ${results.toxicity.mutagenic ? 'text-error' : 'text-success'}`}>
                    {results.toxicity.mutagenic ? 'Positive' : 'Negative'}
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border-light">
                  <span className="text-sm text-text-secondary">Carcinogenic</span>
                  <span className={`text-sm font-medium ${results.toxicity.carcinogenic ? 'text-error' : 'text-success'}`}>
                    {results.toxicity.carcinogenic ? 'Positive' : 'Negative'}
                  </span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-sm text-text-secondary">Acute Toxicity</span>
                  <span className="text-sm font-medium text-text-primary capitalize">
                    {results.toxicity.acuteToxicity}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Solubility */}
        <div className="bg-background rounded-molecular border border-border">
          <button
            onClick={() => toggleCard('solubility')}
            className="w-full flex items-center justify-between p-4 text-left hover:bg-surface-50 scientific-transition"
          >
            <div className="flex items-center space-x-3">
              <Icon name="Droplets" size={18} strokeWidth={2} className="text-accent" />
              <span className="font-medium text-text-primary">Solubility</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className={`text-xs px-2 py-1 rounded-full ${getConfidenceBg(results.solubility.confidence)} ${getConfidenceColor(results.solubility.confidence)}`}>
                {Math.round(results.solubility.confidence * 100)}% confidence
              </span>
              <Icon 
                name={expandedCards.has('solubility') ? "ChevronUp" : "ChevronDown"} 
                size={16} 
                strokeWidth={2} 
                className="text-text-secondary"
              />
            </div>
          </button>
          
          {expandedCards.has('solubility') && (
            <div className="px-4 pb-4 space-y-3">
              <div className="grid grid-cols-1 gap-3">
                <div className="flex justify-between items-center py-2 border-b border-border-light">
                  <span className="text-sm text-text-secondary">Water Solubility</span>
                  <span className="text-sm font-medium text-text-primary">
                    {results.solubility.waterSolubility} mg/L
                  </span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-sm text-text-secondary">LogS</span>
                  <span className="text-sm font-medium text-text-primary">
                    {results.solubility.logS}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PredictionResults;