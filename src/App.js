import React from 'react';
import TabNavigation from './components/common/TabNavigation';
import MainPage from './pages/MainPage';
import PatternsPage from './pages/PatternsPage';
import ReferencePage from './pages/ReferencePage';
import RotaryPage from './pages/RotaryPage';
import AdvancedPage from './pages/AdvancedPage';
import useTabs from './hooks/useTabs';

/**
 * Main application component
 */
const App = () => {
  const { tabView, setTabView, currentMode, setCurrentMode } = useTabs();

  // Content for different tabs
  const renderTabContent = () => {
    const tabContent = (() => {
      switch (tabView) {
        case 'main':
          return <MainPage currentMode={currentMode} setCurrentMode={setCurrentMode} />;
        case 'patterns':
          return <PatternsPage />;
        case 'reference':
          return <ReferencePage />;
        case 'rotary':
          return <RotaryPage />;
        case 'advanced':
          return <AdvancedPage />;
        default:
          return <div>Tab content not available</div>;
      }
    })();
    
    return (
      <div 
        id={`tabpanel-${tabView}`} 
        role="tabpanel" 
        aria-labelledby={`tab-${tabView}`}
        tabIndex="0"
      >
        {tabContent}
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center bg-gray-50 p-6 rounded-lg shadow-md max-w-4xl mx-auto">
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:p-4 focus:bg-blue-700 focus:text-white focus:rounded"
      >
        Skip to main content
      </a>
      
      <header>
        <h1 className="text-3xl font-bold mb-4 text-blue-900">Precalculus Trigonometry Study Guide</h1>
      </header>
      
      <main id="main-content">
        <TabNavigation tabView={tabView} setTabView={setTabView} />
      
      {renderTabContent()}
      
      <div className="mt-6 text-sm text-gray-600 max-w-3xl">
        <h3 className="font-semibold mb-2">Study Tips:</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <ul className="list-disc pl-5 space-y-1">
              <li>Memorize the values at key angles: 0°, 30°, 45°, 60°, 90°</li>
              <li>Remember that sin(θ) = y-coordinate on the unit circle</li>
              <li>Remember that cos(θ) = x-coordinate on the unit circle</li>
              <li>tan(θ) = sin(θ) / cos(θ)</li>
              <li>Values repeat every 360° (2π radians) with appropriate sign changes</li>
            </ul>
          </div>
          <div>
            <ul className="list-disc pl-5 space-y-1">
              <li>ASTC: "All Students Take Calculus" - In which quadrants All trig functions, Sine, Tangent, and Cosine are positive</li>
              <li>Remember the reference angle method: find the acute angle to the x-axis and apply the correct sign</li>
              <li>Practice converting between degrees and radians: 180° = π radians</li>
            </ul>
          </div>
        </div>
        
        <h3 className="font-semibold mt-4 mb-2">Quadrant Rules:</h3>
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-blue-50 p-2 rounded">
            <p className="font-medium">Quadrant I (0° to 90°)</p>
            <p>All positive: sin(+), cos(+), tan(+)</p>
          </div>
          <div className="bg-green-50 p-2 rounded">
            <p className="font-medium">Quadrant II (90° to 180°)</p>
            <p>Only sin positive: sin(+), cos(-), tan(-)</p>
          </div>
          <div className="bg-yellow-50 p-2 rounded">
            <p className="font-medium">Quadrant III (180° to 270°)</p>
            <p>Only tan positive: sin(-), cos(-), tan(+)</p>
          </div>
          <div className="bg-red-50 p-2 rounded">
            <p className="font-medium">Quadrant IV (270° to 360°)</p>
            <p>Only cos positive: sin(-), cos(+), tan(-)</p>
          </div>
        </div>
      </div>
      
      </main>
      
      <footer className="mt-8 pt-4 border-t border-gray-300 w-full text-center text-gray-500 text-sm">
        <p>
          Created by Will Friedman &copy; {new Date().getFullYear()} | 
          <a 
            href="https://github.com/wfried/precalc-trig-app" 
            target="_blank" 
            rel="noopener noreferrer"
            className="ml-1 text-blue-600 hover:text-blue-800 focus:outline-none focus:underline"
            aria-label="Visit GitHub Repository"
          >
            GitHub Repository
          </a>
        </p>
      </footer>
    </div>
  );
};

export default App;