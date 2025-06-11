import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const MolecularHistory = ({ molecules, onSelect }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('recent');

  const filteredMolecules = molecules
    .filter(molecule => 
      molecule.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      molecule.smiles.toLowerCase().includes(searchTerm.toLowerCase()) ||
      molecule.formula.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'recent':
          return new Date(b.timestamp) - new Date(a.timestamp);
        case 'name':
          return a.name.localeCompare(b.name);
        case 'weight':
          return b.molecularWeight - a.molecularWeight;
        default:
          return 0;
      }
    });

  const formatTimeAgo = (timestamp) => {
    const now = new Date();
    const diff = now - new Date(timestamp);
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor(diff / (1000 * 60));
    
    if (hours > 0) {
      return `${hours}h ago`;
    } else if (minutes > 0) {
      return `${minutes}m ago`;
    } else {
      return 'Just now';
    }
  };

  return (
    <div className="bg-surface rounded-molecular shadow-molecular">
      <div className="p-4 border-b border-border">
        <h3 className="text-lg font-semibold text-text-primary flex items-center space-x-2 mb-4">
          <Icon name="History" size={20} strokeWidth={2} />
          <span>Molecular History</span>
        </h3>
        
        {/* Search and Sort */}
        <div className="space-y-3">
          <div className="relative">
            <Icon 
              name="Search" 
              size={16} 
              strokeWidth={2} 
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary"
            />
            <input
              type="text"
              placeholder="Search molecules..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-sm border border-border rounded-molecular focus:ring-2 focus:ring-primary focus:border-transparent scientific-transition"
            />
          </div>
          
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="w-full px-3 py-2 text-sm border border-border rounded-molecular focus:ring-2 focus:ring-primary focus:border-transparent scientific-transition"
          >
            <option value="recent">Most Recent</option>
            <option value="name">Name (A-Z)</option>
            <option value="weight">Molecular Weight</option>
          </select>
        </div>
      </div>

      <div className="p-4">
        {filteredMolecules.length === 0 ? (
          <div className="text-center py-8">
            <Icon name="FileX" size={32} strokeWidth={1.5} className="text-text-tertiary mx-auto mb-3" />
            <p className="text-text-secondary">
              {searchTerm ? 'No molecules match your search' : 'No molecular history yet'}
            </p>
          </div>
        ) : (
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {filteredMolecules.map((molecule) => (
              <div
                key={molecule.id}
                onClick={() => onSelect(molecule)}
                className="bg-background rounded-molecular p-4 border border-border hover:border-primary hover:shadow-molecular scientific-transition cursor-pointer group"
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-text-primary group-hover:text-primary scientific-transition truncate">
                      {molecule.name}
                    </h4>
                    <p className="text-xs text-text-secondary font-mono mt-1 truncate">
                      {molecule.smiles}
                    </p>
                  </div>
                  <span className="text-xs text-text-tertiary ml-2 flex-shrink-0">
                    {formatTimeAgo(molecule.timestamp)}
                  </span>
                </div>
                
                <div className="flex items-center justify-between text-xs text-text-secondary">
                  <span className="font-mono">{molecule.formula}</span>
                  <span>{molecule.molecularWeight} g/mol</span>
                </div>
                
                {/* Quick Properties Preview */}
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="text-xs px-2 py-1 bg-primary-50 text-primary rounded-molecular">
                    LogP: {molecule.properties.logP}
                  </span>
                  <span className="text-xs px-2 py-1 bg-secondary-50 text-secondary rounded-molecular">
                    PSA: {molecule.properties.polarSurfaceArea}
                  </span>
                  <span className="text-xs px-2 py-1 bg-accent-50 text-accent rounded-molecular">
                    HBD: {molecule.properties.hBondDonors}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      
      {/* Footer Actions */}
      <div className="p-4 border-t border-border bg-background rounded-b-molecular">
        <div className="flex items-center justify-between">
          <span className="text-xs text-text-secondary">
            {filteredMolecules.length} molecule{filteredMolecules.length !== 1 ? 's' : ''}
          </span>
          
          <div className="flex items-center space-x-2">
            <button className="text-xs text-text-secondary hover:text-primary scientific-transition flex items-center space-x-1">
              <Icon name="Download" size={12} strokeWidth={2} />
              <span>Export</span>
            </button>
            <button className="text-xs text-text-secondary hover:text-primary scientific-transition flex items-center space-x-1">
              <Icon name="Trash2" size={12} strokeWidth={2} />
              <span>Clear</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MolecularHistory;