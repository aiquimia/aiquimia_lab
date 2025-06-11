import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const MolecularViewer = ({ molecule, results }) => {
  const [viewMode, setViewMode] = useState('3d');
  const [showLabels, setShowLabels] = useState(true);
  const [rotationSpeed, setRotationSpeed] = useState(1);

  if (!molecule) {
    return (
      <div className="h-full flex flex-col items-center justify-center p-8 text-center">
        <div className="w-24 h-24 bg-gradient-to-br from-surface-100 to-surface-200 rounded-full flex items-center justify-center mb-6">
          <Icon name="Atom" size={48} strokeWidth={1.5} className="text-text-tertiary" />
        </div>
        <h3 className="text-xl font-semibold text-text-primary mb-2">
          Ready for Molecular Analysis
        </h3>
        <p className="text-text-secondary mb-6 max-w-md">
          Enter a SMILES notation or upload a molecule file to begin 3D visualization and property prediction.
        </p>
        
        <div className="grid grid-cols-2 gap-4 w-full max-w-md">
          <div className="bg-background rounded-molecular p-4 text-center">
            <Icon name="Type" size={24} strokeWidth={2} className="text-primary mx-auto mb-2" />
            <div className="text-sm font-medium text-text-primary">SMILES Input</div>
            <div className="text-xs text-text-secondary">Text-based notation</div>
          </div>
          <div className="bg-background rounded-molecular p-4 text-center">
            <Icon name="Upload" size={24} strokeWidth={2} className="text-secondary mx-auto mb-2" />
            <div className="text-sm font-medium text-text-primary">File Upload</div>
            <div className="text-xs text-text-secondary">MOL, SDF, XYZ files</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col">
      {/* Viewer Header */}
      <div className="flex items-center justify-between p-4 border-b border-border">
        <div>
          <h3 className="text-lg font-semibold text-text-primary">{molecule.name}</h3>
          <p className="text-sm text-text-secondary font-mono">{molecule.smiles}</p>
        </div>
        
        <div className="flex items-center space-x-2">
          {/* View Mode Toggle */}
          <div className="flex space-x-1 p-1 bg-background rounded-molecular">
            <button
              onClick={() => setViewMode('3d')}
              className={`px-3 py-1 text-xs font-medium rounded-molecular scientific-transition ${
                viewMode === '3d' ?'bg-primary text-white' :'text-text-secondary hover:text-text-primary'
              }`}
            >
              3D
            </button>
            <button
              onClick={() => setViewMode('2d')}
              className={`px-3 py-1 text-xs font-medium rounded-molecular scientific-transition ${
                viewMode === '2d' ?'bg-primary text-white' :'text-text-secondary hover:text-text-primary'
              }`}
            >
              2D
            </button>
          </div>
          
          {/* Controls */}
          <button
            onClick={() => setShowLabels(!showLabels)}
            className={`p-2 rounded-molecular scientific-transition ${
              showLabels
                ? 'bg-primary text-white' :'bg-background text-text-secondary hover:text-text-primary'
            }`}
            title="Toggle atom labels"
          >
            <Icon name="Tag" size={16} strokeWidth={2} />
          </button>
        </div>
      </div>

      {/* 3D Viewer Area */}
      <div className="flex-1 relative bg-gradient-to-br from-surface-50 to-background">
        {viewMode === '3d' ? (
          <div className="h-full flex items-center justify-center">
            {/* Mock 3D Molecular Structure */}
            <div className="relative">
              <div className="w-80 h-80 relative">
                {/* Central molecule representation */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative molecular-hover scientific-transition" style={{ animation: `rotate 10s linear infinite` }}>
                    {/* Caffeine-like structure representation */}
                    <div className="relative w-48 h-48">
                      {/* Carbon atoms */}
                      <div className="absolute top-4 left-16 w-4 h-4 bg-gray-800 rounded-full border-2 border-white shadow-molecular"></div>
                      <div className="absolute top-12 left-8 w-4 h-4 bg-gray-800 rounded-full border-2 border-white shadow-molecular"></div>
                      <div className="absolute top-20 left-12 w-4 h-4 bg-gray-800 rounded-full border-2 border-white shadow-molecular"></div>
                      <div className="absolute top-28 left-20 w-4 h-4 bg-gray-800 rounded-full border-2 border-white shadow-molecular"></div>
                      <div className="absolute top-20 left-28 w-4 h-4 bg-gray-800 rounded-full border-2 border-white shadow-molecular"></div>
                      <div className="absolute top-12 left-32 w-4 h-4 bg-gray-800 rounded-full border-2 border-white shadow-molecular"></div>
                      
                      {/* Nitrogen atoms */}
                      <div className="absolute top-8 left-24 w-4 h-4 bg-blue-600 rounded-full border-2 border-white shadow-molecular"></div>
                      <div className="absolute top-24 left-36 w-4 h-4 bg-blue-600 rounded-full border-2 border-white shadow-molecular"></div>
                      
                      {/* Oxygen atoms */}
                      <div className="absolute top-16 left-4 w-4 h-4 bg-red-600 rounded-full border-2 border-white shadow-molecular"></div>
                      <div className="absolute top-32 left-24 w-4 h-4 bg-red-600 rounded-full border-2 border-white shadow-molecular"></div>
                      
                      {/* Bonds (simplified lines) */}
                      <svg className="absolute inset-0 w-full h-full pointer-events-none">
                        <line x1="68" y1="20" x2="40" y2="52" stroke="#374151" strokeWidth="2" />
                        <line x1="40" y1="52" x2="52" y2="84" stroke="#374151" strokeWidth="2" />
                        <line x1="52" y1="84" x2="84" y2="116" stroke="#374151" strokeWidth="2" />
                        <line x1="84" y1="116" x2="116" y2="84" stroke="#374151" strokeWidth="2" />
                        <line x1="116" y1="84" x2="132" y2="52" stroke="#374151" strokeWidth="2" />
                        <line x1="132" y1="52" x2="100" y2="36" stroke="#374151" strokeWidth="2" />
                      </svg>
                      
                      {/* Atom labels */}
                      {showLabels && (
                        <>
                          <div className="absolute top-0 left-14 text-xs font-bold text-text-primary bg-white px-1 rounded">C</div>
                          <div className="absolute top-8 left-4 text-xs font-bold text-text-primary bg-white px-1 rounded">C</div>
                          <div className="absolute top-6 left-20 text-xs font-bold text-blue-600 bg-white px-1 rounded">N</div>
                          <div className="absolute top-14 left-0 text-xs font-bold text-red-600 bg-white px-1 rounded">O</div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="h-full flex items-center justify-center">
            {/* 2D Structure representation */}
            <div className="bg-white rounded-molecular p-8 shadow-molecular">
              <svg width="300" height="200" viewBox="0 0 300 200">
                {/* Simplified 2D caffeine structure */}
                <g stroke="#374151" strokeWidth="2" fill="none">
                  <path d="M50 100 L100 70 L150 100 L200 70 L250 100 L200 130 L150 100 L100 130 Z" />
                  <circle cx="75" cy="85" r="3" fill="#2563EB" />
                  <circle cx="175" cy="85" r="3" fill="#2563EB" />
                  <circle cx="225" cy="115" r="3" fill="#DC2626" />
                  <circle cx="125" cy="115" r="3" fill="#DC2626" />
                </g>
                {showLabels && (
                  <g fontSize="12" fontWeight="bold">
                    <text x="70" y="80" fill="#2563EB">N</text>
                    <text x="170" y="80" fill="#2563EB">N</text>
                    <text x="220" y="110" fill="#DC2626">O</text>
                    <text x="120" y="110" fill="#DC2626">O</text>
                  </g>
                )}
              </svg>
            </div>
          </div>
        )}

        {/* Viewer Controls */}
        <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm rounded-molecular p-3 shadow-molecular">
          <div className="flex items-center space-x-3">
            <button className="p-2 hover:bg-surface rounded-molecular scientific-transition" title="Reset view">
              <Icon name="RotateCcw" size={16} strokeWidth={2} />
            </button>
            <button className="p-2 hover:bg-surface rounded-molecular scientific-transition" title="Zoom in">
              <Icon name="ZoomIn" size={16} strokeWidth={2} />
            </button>
            <button className="p-2 hover:bg-surface rounded-molecular scientific-transition" title="Zoom out">
              <Icon name="ZoomOut" size={16} strokeWidth={2} />
            </button>
            <button className="p-2 hover:bg-surface rounded-molecular scientific-transition" title="Full screen">
              <Icon name="Maximize" size={16} strokeWidth={2} />
            </button>
          </div>
        </div>

        {/* Molecule Info Overlay */}
        <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm rounded-molecular p-4 shadow-molecular max-w-xs">
          <h4 className="font-semibold text-text-primary mb-2">Molecular Formula</h4>
          <p className="text-sm text-text-secondary font-mono mb-3">C₈H₁₀N₄O₂</p>
          
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-text-secondary">Molecular Weight:</span>
              <span className="text-text-primary font-medium">194.19 g/mol</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-text-secondary">Heavy Atoms:</span>
              <span className="text-text-primary font-medium">14</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-text-secondary">Rotatable Bonds:</span>
              <span className="text-text-primary font-medium">0</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes rotate {
          from { transform: rotateY(0deg) rotateX(15deg); }
          to { transform: rotateY(360deg) rotateX(15deg); }
        }
      `}</style>
    </div>
  );
};

export default MolecularViewer;