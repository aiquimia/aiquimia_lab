import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const MolecularInput = ({ onSubmit, onFileUpload, fileInputRef, isProcessing }) => {
  const [inputMethod, setInputMethod] = useState('smiles');
  const [smilesInput, setSmilesInput] = useState('');
  const [moleculeName, setMoleculeName] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  const commonMolecules = [
    { name: "Caffeine", smiles: "CN1C=NC2=C1C(=O)N(C(=O)N2C)C" },
    { name: "Aspirin", smiles: "CC(=O)OC1=CC=CC=C1C(=O)O" },
    { name: "Glucose", smiles: "C([C@@H]1[C@H]([C@@H]([C@H]([C@H](O1)O)O)O)O)O" },
    { name: "Benzene", smiles: "C1=CC=CC=C1" },
    { name: "Ethanol", smiles: "CCO" },
    { name: "Acetone", smiles: "CC(=O)C" }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (smilesInput.trim()) {
      onSubmit({
        name: moleculeName || 'Unknown Molecule',
        smiles: smilesInput.trim(),
        source: 'manual'
      });
      setSmilesInput('');
      setMoleculeName('');
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (molecule) => {
    setSmilesInput(molecule.smiles);
    setMoleculeName(molecule.name);
    setShowSuggestions(false);
  };

  const handleSmilesChange = (e) => {
    setSmilesInput(e.target.value);
    setShowSuggestions(e.target.value.length > 0);
  };

  return (
    <div className="space-y-6">
      {/* Input Method Selector */}
      <div className="flex space-x-2 p-1 bg-background rounded-molecular">
        <button
          onClick={() => setInputMethod('smiles')}
          className={`flex-1 px-3 py-2 text-sm font-medium rounded-molecular scientific-transition ${
            inputMethod === 'smiles' ?'bg-primary text-white shadow-molecular' :'text-text-secondary hover:text-text-primary'
          }`}
        >
          SMILES
        </button>
        <button
          onClick={() => setInputMethod('file')}
          className={`flex-1 px-3 py-2 text-sm font-medium rounded-molecular scientific-transition ${
            inputMethod === 'file' ?'bg-primary text-white shadow-molecular' :'text-text-secondary hover:text-text-primary'
          }`}
        >
          File Upload
        </button>
      </div>

      {/* SMILES Input */}
      {inputMethod === 'smiles' && (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              Molecule Name (Optional)
            </label>
            <input
              type="text"
              value={moleculeName}
              onChange={(e) => setMoleculeName(e.target.value)}
              placeholder="Enter molecule name..."
              className="w-full px-4 py-3 border border-border rounded-molecular focus:ring-2 focus:ring-primary focus:border-transparent scientific-transition"
              disabled={isProcessing}
            />
          </div>

          <div className="relative">
            <label className="block text-sm font-medium text-text-primary mb-2">
              SMILES Notation *
            </label>
            <textarea
              value={smilesInput}
              onChange={handleSmilesChange}
              onFocus={() => setShowSuggestions(smilesInput.length > 0)}
              placeholder="Enter SMILES notation (e.g., CCO for ethanol)..."
              className="w-full px-4 py-3 border border-border rounded-molecular focus:ring-2 focus:ring-primary focus:border-transparent scientific-transition resize-none"
              rows={3}
              disabled={isProcessing}
            />

            {/* Auto-complete Suggestions */}
            {showSuggestions && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-background border border-border rounded-molecular shadow-molecular-lg z-10 max-h-48 overflow-y-auto">
                <div className="p-2">
                  <div className="text-xs font-medium text-text-secondary mb-2 px-2">
                    Common Molecules
                  </div>
                  {commonMolecules
                    .filter(mol => 
                      mol.name.toLowerCase().includes(smilesInput.toLowerCase()) ||
                      mol.smiles.toLowerCase().includes(smilesInput.toLowerCase())
                    )
                    .map((molecule, index) => (
                      <button
                        key={index}
                        onClick={() => handleSuggestionClick(molecule)}
                        className="w-full text-left px-3 py-2 hover:bg-surface rounded-molecular scientific-transition"
                      >
                        <div className="font-medium text-text-primary">{molecule.name}</div>
                        <div className="text-xs text-text-secondary font-mono">{molecule.smiles}</div>
                      </button>
                    ))}
                </div>
              </div>
            )}
          </div>

          <button
            onClick={handleSubmit}
            disabled={!smilesInput.trim() || isProcessing}
            className="w-full px-4 py-3 bg-primary text-white rounded-molecular hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed scientific-transition flex items-center justify-center space-x-2 shadow-molecular"
          >
            {isProcessing ? (
              <>
                <Icon name="Loader2" size={16} strokeWidth={2} className="animate-spin" />
                <span>Processing...</span>
              </>
            ) : (
              <>
                <Icon name="Play" size={16} strokeWidth={2} />
                <span>Analyze Molecule</span>
              </>
            )}
          </button>
        </div>
      )}

      {/* File Upload */}
      {inputMethod === 'file' && (
        <div className="space-y-4">
          <div
            onClick={() => fileInputRef.current?.click()}
            className="border-2 border-dashed border-border hover:border-primary rounded-molecular p-8 text-center cursor-pointer scientific-transition group"
          >
            <div className="w-12 h-12 bg-surface rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-50 scientific-transition">
              <Icon name="Upload" size={24} strokeWidth={2} className="text-text-secondary group-hover:text-primary" />
            </div>
            <h4 className="text-lg font-medium text-text-primary mb-2">
              Upload Molecule File
            </h4>
            <p className="text-text-secondary mb-4">
              Drag and drop your .mol, .sdf, or .xyz file here, or click to browse
            </p>
            <div className="text-sm text-text-secondary">
              Supported formats: MOL, SDF, XYZ (Max 10MB)
            </div>
          </div>

          <input
            ref={fileInputRef}
            type="file"
            accept=".mol,.sdf,.xyz"
            onChange={onFileUpload}
            className="hidden"
            disabled={isProcessing}
          />

          <div className="bg-background rounded-molecular p-4">
            <h5 className="font-medium text-text-primary mb-2 flex items-center space-x-2">
              <Icon name="Info" size={16} strokeWidth={2} className="text-primary" />
              <span>File Upload Tips</span>
            </h5>
            <ul className="text-sm text-text-secondary space-y-1">
              <li>• MOL files provide the most accurate structure data</li>
              <li>• SDF files can contain multiple molecules for batch processing</li>
              <li>• XYZ files include 3D coordinate information</li>
              <li>• Files are processed securely and not stored permanently</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default MolecularInput;