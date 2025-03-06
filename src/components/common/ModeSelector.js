import React from 'react';

/**
 * Component for switching between practice and quiz modes
 */
const ModeSelector = ({ currentMode, setCurrentMode }) => {
  return (
    <div className="flex space-x-4 mb-6">
      <button 
        className={`px-4 py-2 rounded ${currentMode === 'practice' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        onClick={() => setCurrentMode('practice')}
      >
        Practice Mode
      </button>
      <button 
        className={`px-4 py-2 rounded ${currentMode === 'quiz' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        onClick={() => setCurrentMode('quiz')}
      >
        Quiz Mode
      </button>
    </div>
  );
};

export default ModeSelector;