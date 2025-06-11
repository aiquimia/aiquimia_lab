import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const MolecularDemo = ({ molecule, isAnimating }) => {
  const [inputValue, setInputValue] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    if (molecule) {
      setInputValue(molecule.smiles);
      setIsProcessing(true);
      setShowResults(false);
      
      const timer = setTimeout(() => {
        setIsProcessing(false);
        setShowResults(true);
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [molecule]);

  return (
    <div className={`scientific-transition ${isAnimating ? 'opacity-50 scale-95' : 'opacity-100 scale-100'}`}>
      {/* Input Section */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-text-primary mb-2">
          SMILES Notation Input
        </label>
        <div className="relative">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="w-full px-4 py-3 border border-border rounded-molecular focus:ring-2 focus:ring-primary focus:border-transparent scientific-transition font-mono text-sm"
            placeholder="Enter SMILES notation..."
            readOnly
          />
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            {isProcessing ? (
              <div className="animate-spin">
                <Icon name="Loader2" size={16} color="var(--color-primary)" strokeWidth={2} />
              </div>
            ) : (
              <Icon name="Search" size={16} color="var(--color-text-secondary)" strokeWidth={2} />
            )}
          </div>
        </div>
      </div>

      {/* Molecule Name */}
      <div className="mb-4">
        <div className="flex items-center space-x-2">
          <Icon name="Atom" size={16} color="var(--color-primary)" strokeWidth={2} />
          <span className="font-semibold text-text-primary">{molecule?.name}</span>
        </div>
      </div>

      {/* Processing State */}
      {isProcessing && (
        <div className="bg-primary-50 rounded-molecular p-4 mb-4">
          <div className="flex items-center space-x-3">
            <div className="animate-spin">
              <Icon name="Atom" size={20} color="var(--color-primary)" strokeWidth={2} />
            </div>
            <div>
              <div className="text-sm font-medium text-primary">Analyzing molecular structure...</div>
              <div className="text-xs text-text-secondary">Computing properties and spectral data</div>
            </div>
          </div>
        </div>
      )}

      {/* Results */}
      {showResults && !isProcessing && (
        <div className="space-y-3">
          <div className="flex items-center space-x-2 mb-3">
            <Icon name="CheckCircle" size={16} color="var(--color-success)" strokeWidth={2} />
            <span className="text-sm font-medium text-success">Analysis Complete</span>
          </div>

          {molecule?.properties.map((property, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-surface rounded-molecular">
              <span className="text-sm text-text-secondary">{property.split(':')[0]}:</span>
              <span className="text-sm font-semibold text-text-primary">{property.split(':')[1]}</span>
            </div>
          ))}

          {/* Spectral Preview */}
          <div className="mt-4 p-3 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-molecular">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-text-primary">Spectral Data Available</span>
              <div className="flex items-center space-x-2">
                <span className="text-xs px-2 py-1 bg-primary text-white rounded-full">IR</span>
                <span className="text-xs px-2 py-1 bg-secondary text-white rounded-full">UV-Vis</span>
                <span className="text-xs px-2 py-1 bg-accent text-white rounded-full">NMR</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MolecularDemo;