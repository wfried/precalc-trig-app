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
    <nav aria-label="Main navigation" className="mb-6 w-full">
      <div 
        className="flex flex-wrap justify-center gap-2" 
        role="tablist"
        aria-orientation="horizontal"
      >
        {tabs.map(tab => (
          <button 
            key={tab.id}
            id={`tab-${tab.id}`}
            className={`px-4 py-2 rounded ${
              tabView === tab.id 
                ? 'bg-purple-700 text-white' 
                : 'bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500'
            }`}
            onClick={() => setTabView(tab.id)}
            role="tab"
            aria-selected={tabView === tab.id}
            aria-controls={`tabpanel-${tab.id}`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default TabNavigation;