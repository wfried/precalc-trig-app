import { useState, useEffect } from 'react';

/**
 * Hook for managing tab navigation and mode switching
 */
const useTabs = () => {
  const [tabView, setTabView] = useState('main'); // 'main', 'patterns', 'reference', 'rotary', 'advanced'
  const [currentMode, setCurrentMode] = useState('practice'); // 'practice' or 'quiz'

  // When switching to quiz mode, show options or generate a question if already initialized
  useEffect(() => {
    if (currentMode === 'quiz') {
      // We'll handle this in the component that uses this hook
    }
  }, [currentMode]);

  return {
    tabView,
    setTabView,
    currentMode,
    setCurrentMode
  };
};

export default useTabs;