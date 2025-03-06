import React from 'react';

/**
 * Component for switching between practice and quiz modes
 */
const ModeSelector = ({ currentMode, setCurrentMode }) => {
  return (
    <div 
      className="flex space-x-4 mb-6" 
      role="radiogroup" 
      aria-label="Study Mode Selection"
    >
      <button 
        className={`px-4 py-2 rounded ${currentMode === 'practice' ? 'bg-blue-700 text-white' : 'bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'}`}
        onClick={() => setCurrentMode('practice')}
        role="radio"
        aria-checked={currentMode === 'practice'}
        tabIndex={currentMode === 'practice' ? 0 : -1}
        id="practice-mode"
      >
        <span className="sr-only">Select </span>
        Practice Mode
      </button>
      <button 
        className={`px-4 py-2 rounded ${currentMode === 'quiz' ? 'bg-blue-700 text-white' : 'bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'}`}
        onClick={() => setCurrentMode('quiz')}
        role="radio"
        aria-checked={currentMode === 'quiz'}
        tabIndex={currentMode === 'quiz' ? 0 : -1}
        id="quiz-mode"
      >
        <span className="sr-only">Select </span>
        Quiz Mode
      </button>
    </div>
  );
};

export default ModeSelector;