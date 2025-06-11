import React, { useState, useRef } from 'react';
import Icon from '../../../components/AppIcon';

const BatchProcessor = ({ onSubmit }) => {
  const [batchData, setBatchData] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [processingProgress, setProcessingProgress] = useState(0);
  const [currentProcessing, setCurrentProcessing] = useState(null);
  const fileInputRef = useRef(null);
  const textareaRef = useRef(null);

  const mockBatchResults = [
    { id: 1, name: "Molecule 1", status: "completed", confidence: 0.92 },
    { id: 2, name: "Molecule 2", status: "completed", confidence: 0.87 },
    { id: 3, name: "Molecule 3", status: "processing", confidence: null },
    { id: 4, name: "Molecule 4", status: "queued", confidence: null },
    { id: 5, name: "Molecule 5", status: "queued", confidence: null }
  ];

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const content = e.target.result;
          let molecules = [];
          
          if (file.name.endsWith('.csv')) {
            // Parse CSV format
            const lines = content.split('\n').filter(line => line.trim());
            const headers = lines[0].split(',');
            
            for (let i = 1; i < lines.length; i++) {
              const values = lines[i].split(',');
              molecules.push({
                id: i,
                name: values[0] || `Molecule ${i}`,
                smiles: values[1] || '',
                source: 'csv'
              });
            }
          } else if (file.name.endsWith('.sdf')) {
            // Mock SDF parsing
            molecules = [
              { id: 1, name: "SDF Molecule 1", smiles: "CCO", source: 'sdf' },
              { id: 2, name: "SDF Molecule 2", smiles: "CC(=O)O", source: 'sdf' },
              { id: 3, name: "SDF Molecule 3", smiles: "C1=CC=CC=C1", source: 'sdf' }
            ];
          }
          
          setBatchData(molecules);
        } catch (error) {
          console.error('Error parsing file:', error);
        }
      };
      reader.readAsText(file);
    }
  };

  const handleTextInput = () => {
    const text = textareaRef.current.value;
    if (text.trim()) {
      const lines = text.split('\n').filter(line => line.trim());
      const molecules = lines.map((line, index) => {
        const parts = line.split('\t').length > 1 ? line.split('\t') : line.split(',');
        return {
          id: index + 1,
          name: parts[0] || `Molecule ${index + 1}`,
          smiles: parts[1] || parts[0],
          source: 'text'
        };
      });
      setBatchData(molecules);
    }
  };

  const startBatchProcessing = () => {
    if (batchData.length === 0) return;
    
    setIsProcessing(true);
    setProcessingProgress(0);
    setCurrentProcessing(0);
    
    // Simulate batch processing
    const processNext = (index) => {
      if (index >= batchData.length) {
        setIsProcessing(false);
        setCurrentProcessing(null);
        return;
      }
      
      setCurrentProcessing(index);
      setProcessingProgress((index / batchData.length) * 100);
      
      setTimeout(() => {
        processNext(index + 1);
      }, 2000);
    };
    
    processNext(0);
  };

  const removeMolecule = (id) => {
    setBatchData(prev => prev.filter(mol => mol.id !== id));
  };

  const clearBatch = () => {
    setBatchData([]);
    if (textareaRef.current) {
      textareaRef.current.value = '';
    }
  };

  return (
    <div className="space-y-6">
      {/* Input Methods */}
      <div className="space-y-4">
        <div>
          <h4 className="font-medium text-text-primary mb-3">Upload Batch File</h4>
          <div
            onClick={() => fileInputRef.current?.click()}
            className="border-2 border-dashed border-border hover:border-primary rounded-molecular p-6 text-center cursor-pointer scientific-transition group"
          >
            <Icon 
              name="FileUp" 
              size={24} 
              strokeWidth={2} 
              className="text-text-secondary group-hover:text-primary mx-auto mb-2" 
            />
            <p className="text-sm text-text-secondary mb-1">
              Upload CSV or SDF file
            </p>
            <p className="text-xs text-text-tertiary">
              Max 100 molecules per batch
            </p>
          </div>
          <input
            ref={fileInputRef}
            type="file"
            accept=".csv,.sdf"
            onChange={handleFileUpload}
            className="hidden"
            disabled={isProcessing}
          />
        </div>

        <div className="text-center text-text-tertiary">
          <span className="text-sm">or</span>
        </div>

        <div>
          <h4 className="font-medium text-text-primary mb-3">Paste SMILES List</h4>
          <textarea
            ref={textareaRef}
            placeholder={`Enter molecules (one per line):
Caffeine	CN1C=NC2=C1C(=O)N(C(=O)N2C)C
Aspirin	CC(=O)OC1=CC=CC=C1C(=O)O
Glucose	C([C@@H]1[C@H]([C@@H]([C@H]([C@H](O1)O)O)O)O)O`}
            className="w-full h-32 px-4 py-3 border border-border rounded-molecular focus:ring-2 focus:ring-primary focus:border-transparent scientific-transition resize-none text-sm font-mono"
            disabled={isProcessing}
          />
          <button
            onClick={handleTextInput}
            disabled={isProcessing}
            className="mt-2 w-full px-4 py-2 bg-secondary text-white rounded-molecular hover:bg-secondary-600 disabled:opacity-50 scientific-transition text-sm"
          >
            Parse Input
          </button>
        </div>
      </div>

      {/* Batch Preview */}
      {batchData.length > 0 && (
        <div className="bg-background rounded-molecular border border-border">
          <div className="flex items-center justify-between p-4 border-b border-border">
            <h4 className="font-medium text-text-primary">
              Batch Preview ({batchData.length} molecules)
            </h4>
            <div className="flex items-center space-x-2">
              <button
                onClick={clearBatch}
                disabled={isProcessing}
                className="text-sm text-text-secondary hover:text-error scientific-transition"
              >
                Clear All
              </button>
            </div>
          </div>
          
          <div className="max-h-64 overflow-y-auto">
            {batchData.map((molecule, index) => (
              <div 
                key={molecule.id} 
                className={`flex items-center justify-between p-3 border-b border-border-light last:border-b-0 ${
                  currentProcessing === index ? 'bg-primary-50' : ''
                }`}
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium text-text-primary truncate">
                      {molecule.name}
                    </span>
                    {currentProcessing === index && (
                      <Icon name="Loader2" size={14} strokeWidth={2} className="text-primary animate-spin" />
                    )}
                  </div>
                  <p className="text-xs text-text-secondary font-mono truncate">
                    {molecule.smiles}
                  </p>
                </div>
                
                {!isProcessing && (
                  <button
                    onClick={() => removeMolecule(molecule.id)}
                    className="p-1 text-text-secondary hover:text-error scientific-transition"
                  >
                    <Icon name="X" size={14} strokeWidth={2} />
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Processing Controls */}
      {batchData.length > 0 && (
        <div className="space-y-4">
          {isProcessing ? (
            <div className="bg-background rounded-molecular p-4 border border-border">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-text-primary">
                  Processing Batch...
                </span>
                <span className="text-sm text-text-secondary">
                  {Math.round(processingProgress)}%
                </span>
              </div>
              <div className="w-full bg-surface-200 rounded-full h-2 mb-3">
                <div 
                  className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full scientific-transition"
                  style={{ width: `${processingProgress}%` }}
                ></div>
              </div>
              <p className="text-xs text-text-secondary">
                Processing molecule {(currentProcessing || 0) + 1} of {batchData.length}
              </p>
            </div>
          ) : (
            <button
              onClick={startBatchProcessing}
              className="w-full px-4 py-3 bg-primary text-white rounded-molecular hover:bg-primary-700 scientific-transition flex items-center justify-center space-x-2 shadow-molecular"
            >
              <Icon name="Play" size={16} strokeWidth={2} />
              <span>Start Batch Analysis</span>
            </button>
          )}
        </div>
      )}

      {/* Format Examples */}
      <div className="bg-background rounded-molecular p-4 border border-border">
        <h5 className="font-medium text-text-primary mb-3 flex items-center space-x-2">
          <Icon name="Info" size={16} strokeWidth={2} className="text-primary" />
          <span>Supported Formats</span>
        </h5>
        
        <div className="space-y-3 text-sm">
          <div>
            <span className="font-medium text-text-primary">CSV Format:</span>
            <pre className="text-xs text-text-secondary font-mono mt-1 bg-surface p-2 rounded">
{`Name,SMILES
Caffeine,CN1C=NC2=C1C(=O)N(C(=O)N2C)C
Aspirin,CC(=O)OC1=CC=CC=C1C(=O)O`}
            </pre>
          </div>
          
          <div>
            <span className="font-medium text-text-primary">Text Format:</span>
            <pre className="text-xs text-text-secondary font-mono mt-1 bg-surface p-2 rounded">
{`Caffeine	CN1C=NC2=C1C(=O)N(C(=O)N2C)C
Aspirin	CC(=O)OC1=CC=CC=C1C(=O)O`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BatchProcessor;