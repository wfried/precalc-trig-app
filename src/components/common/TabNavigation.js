import React from 'react';

/**
 * Navigation component for switching between tabs
 */
const TabNavigation = ({ tabView, setTabView }) => {
  const tabs = [
    { id: 'main', label: 'Main' },
    { id: 'patterns', label: 'Patterns & Tricks' },
    { id: 'reference', label: 'Reference Tables' },
    { id: 'rotary', label: 'Rotary Motion' },
    { id: 'advanced', label: 'Advanced Concepts' },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-2 mb-6">
      {tabs.map(tab => (
        <button 
          key={tab.id}
          className={`px-4 py-2 rounded ${tabView === tab.id ? 'bg-purple-600 text-white' : 'bg-gray-200'}`}
          onClick={() => setTabView(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default TabNavigation;