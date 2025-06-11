import React, { useState, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../components/AppIcon';

import Header from '../../components/ui/Header';
import MolecularInput from './components/MolecularInput';
import MolecularViewer from './components/MolecularViewer';
import PredictionResults from './components/PredictionResults';
import MolecularHistory from './components/MolecularHistory';
import BatchProcessor from './components/BatchProcessor';
import CollaborationPanel from './components/CollaborationPanel';

const PredictionStudio = () => {
  const [activeTab, setActiveTab] = useState('single');
  const [currentMolecule, setCurrentMolecule] = useState(null);
  const [predictionResults, setPredictionResults] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [processingProgress, setProcessingProgress] = useState(0);
  const [showHistory, setShowHistory] = useState(false);
  const [showCollaboration, setShowCollaboration] = useState(false);
  const fileInputRef = useRef(null);

  // Mock molecular data
  const mockMolecules = [
    {
      id: 1,
      name: "Caffeine",
      smiles: "CN1C=NC2=C1C(=O)N(C(=O)N2C)C",
      formula: "C8H10N4O2",
      molecularWeight: 194.19,
      timestamp: new Date(Date.now() - 3600000),
      properties: {
        logP: -0.07,
        polarSurfaceArea: 58.44,
        hBondDonors: 0,
        hBondAcceptors: 6,
        rotBonds: 0
      }
    },
    {
      id: 2,
      name: "Aspirin",
      smiles: "CC(=O)OC1=CC=CC=C1C(=O)O",
      formula: "C9H8O4",
      molecularWeight: 180.16,
      timestamp: new Date(Date.now() - 7200000),
      properties: {
        logP: 1.19,
        polarSurfaceArea: 63.6,
        hBondDonors: 1,
        hBondAcceptors: 4,
        rotBonds: 3
      }
    },
    {
      id: 3,
      name: "Glucose",
      smiles: "C([C@@H]1[C@H]([C@@H]([C@H]([C@H](O1)O)O)O)O)O",
      formula: "C6H12O6",
      molecularWeight: 180.16,
      timestamp: new Date(Date.now() - 10800000),
      properties: {
        logP: -3.24,
        polarSurfaceArea: 110.38,
        hBondDonors: 5,
        hBondAcceptors: 6,
        rotBonds: 5
      }
    }
  ];

  const mockPredictionResults = {
    molecularProperties: {
      molecularWeight: 194.19,
      logP: -0.07,
      polarSurfaceArea: 58.44,
      hBondDonors: 0,
      hBondAcceptors: 6,
      rotBonds: 0,
      molarRefractivity: 49.33,
      heavyAtoms: 14
    },
    spectralData: {
      ir: {
        peaks: [3000, 1700, 1600, 1500, 1200],
        confidence: 0.92
      },
      nmr: {
        peaks: [8.2, 7.8, 4.0, 3.9, 3.4],
        confidence: 0.89
      },
      uvVis: {
        maxAbsorption: 273,
        confidence: 0.94
      }
    },
    toxicity: {
      mutagenic: false,
      carcinogenic: false,
      acuteToxicity: "low",
      confidence: 0.87
    },
    solubility: {
      waterSolubility: 21.6,
      logS: -0.77,
      confidence: 0.91
    }
  };

  const handleMoleculeSubmit = useCallback((moleculeData) => {
    setIsProcessing(true);
    setProcessingProgress(0);
    setCurrentMolecule(moleculeData);

    // Simulate processing with progress
    const progressInterval = setInterval(() => {
      setProcessingProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setIsProcessing(false);
          setPredictionResults(mockPredictionResults);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);
  }, []);

  const handleFileUpload = useCallback((event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const moleculeData = {
          name: file.name.replace('.mol', ''),
          smiles: "CN1C=NC2=C1C(=O)N(C(=O)N2C)C", // Mock SMILES
          source: 'file',
          fileContent: e.target.result
        };
        handleMoleculeSubmit(moleculeData);
      };
      reader.readAsText(file);
    }
  }, [handleMoleculeSubmit]);

  const handleHistorySelect = useCallback((molecule) => {
    setCurrentMolecule(molecule);
    setPredictionResults(mockPredictionResults);
  }, []);

  const tabs = [
    { id: 'single', name: 'Single Molecule', icon: 'Atom' },
    { id: 'batch', name: 'Batch Processing', icon: 'Layers' },
    { id: 'collaboration', name: 'Collaboration', icon: 'Users' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-20 lg:pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Page Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-text-primary mb-2">
                  Prediction Studio
                </h1>
                <p className="text-text-secondary">
                  Core analysis workspace for molecular predictions and spectral analysis
                </p>
              </div>
              
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setShowHistory(!showHistory)}
                  className={`px-4 py-2 rounded-molecular text-sm font-medium scientific-transition flex items-center space-x-2 ${
                    showHistory 
                      ? 'bg-primary text-white shadow-molecular' 
                      : 'bg-surface text-text-primary hover:bg-surface-100'
                  }`}
                >
                  <Icon name="History" size={16} strokeWidth={2} />
                  <span>History</span>
                </button>
                
                <Link
                  to="/results-dashboard-comprehensive-data-visualization"
                  className="px-4 py-2 bg-accent text-white rounded-molecular hover:bg-accent-600 scientific-transition flex items-center space-x-2 shadow-molecular"
                >
                  <Icon name="BarChart3" size={16} strokeWidth={2} />
                  <span>View Dashboard</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="mb-8">
            <div className="border-b border-border">
              <nav className="flex space-x-8">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-4 px-1 border-b-2 font-medium text-sm scientific-transition flex items-center space-x-2 ${
                      activeTab === tab.id
                        ? 'border-primary text-primary' :'border-transparent text-text-secondary hover:text-text-primary hover:border-border-dark'
                    }`}
                  >
                    <Icon name={tab.icon} size={16} strokeWidth={2} />
                    <span>{tab.name}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Workspace */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Panel - Input Methods */}
            <div className="lg:col-span-3">
              <div className="bg-surface rounded-molecular p-6 shadow-molecular h-fit">
                <h3 className="text-lg font-semibold text-text-primary mb-4 flex items-center space-x-2">
                  <Icon name="Upload" size={20} strokeWidth={2} />
                  <span>Input Methods</span>
                </h3>
                
                {activeTab === 'single' && (
                  <MolecularInput 
                    onSubmit={handleMoleculeSubmit}
                    onFileUpload={handleFileUpload}
                    fileInputRef={fileInputRef}
                    isProcessing={isProcessing}
                  />
                )}
                
                {activeTab === 'batch' && (
                  <BatchProcessor onSubmit={handleMoleculeSubmit} />
                )}
                
                {activeTab === 'collaboration' && (
                  <CollaborationPanel />
                )}
              </div>
            </div>

            {/* Center Panel - Molecular Viewer */}
            <div className="lg:col-span-6">
              <div className="bg-surface rounded-molecular shadow-molecular h-full min-h-[600px]">
                {isProcessing ? (
                  <div className="h-full flex flex-col items-center justify-center p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mb-6 molecular-hover scientific-transition">
                      <Icon name="Atom" size={32} color="white" strokeWidth={2} />
                    </div>
                    <h3 className="text-xl font-semibold text-text-primary mb-2">
                      Processing Molecular Analysis
                    </h3>
                    <p className="text-text-secondary mb-6 text-center">
                      AI is analyzing molecular structure and predicting properties...
                    </p>
                    
                    {/* Progress Bar */}
                    <div className="w-full max-w-md">
                      <div className="flex justify-between text-sm text-text-secondary mb-2">
                        <span>Progress</span>
                        <span>{Math.round(processingProgress)}%</span>
                      </div>
                      <div className="w-full bg-surface-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full scientific-transition"
                          style={{ width: `${processingProgress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <MolecularViewer 
                    molecule={currentMolecule}
                    results={predictionResults}
                  />
                )}
              </div>
            </div>

            {/* Right Panel - Results & History */}
            <div className="lg:col-span-3">
              <div className="space-y-6">
                {/* Prediction Results */}
                {predictionResults && (
                  <PredictionResults 
                    results={predictionResults}
                    molecule={currentMolecule}
                  />
                )}
                
                {/* Molecular History */}
                {showHistory && (
                  <MolecularHistory 
                    molecules={mockMolecules}
                    onSelect={handleHistorySelect}
                  />
                )}
                
                {/* Quick Actions */}
                <div className="bg-surface rounded-molecular p-6 shadow-molecular">
                  <h3 className="text-lg font-semibold text-text-primary mb-4 flex items-center space-x-2">
                    <Icon name="Zap" size={20} strokeWidth={2} />
                    <span>Quick Actions</span>
                  </h3>
                  
                  <div className="space-y-3">
                    <button className="w-full flex items-center space-x-3 px-4 py-3 bg-background rounded-molecular hover:bg-surface-100 scientific-transition text-left">
                      <Icon name="Download" size={16} strokeWidth={2} className="text-primary" />
                      <div>
                        <div className="font-medium text-text-primary">Export Results</div>
                        <div className="text-xs text-text-secondary">CSV, JSON, PDF formats</div>
                      </div>
                    </button>
                    
                    <button className="w-full flex items-center space-x-3 px-4 py-3 bg-background rounded-molecular hover:bg-surface-100 scientific-transition text-left">
                      <Icon name="Share2" size={16} strokeWidth={2} className="text-secondary" />
                      <div>
                        <div className="font-medium text-text-primary">Share Analysis</div>
                        <div className="text-xs text-text-secondary">Collaborate with team</div>
                      </div>
                    </button>
                    
                    <button className="w-full flex items-center space-x-3 px-4 py-3 bg-background rounded-molecular hover:bg-surface-100 scientific-transition text-left">
                      <Icon name="Save" size={16} strokeWidth={2} className="text-accent" />
                      <div>
                        <div className="font-medium text-text-primary">Save to Library</div>
                        <div className="text-xs text-text-secondary">Personal collection</div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PredictionStudio;