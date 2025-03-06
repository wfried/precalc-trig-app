import React from 'react';
import TabNavigation from './components/common/TabNavigation';
import MainPage from './pages/MainPage';
import useTabs from './hooks/useTabs';

/**
 * Main application component
 */
const App = () => {
  const { tabView, setTabView, currentMode, setCurrentMode } = useTabs();

  // Content for different tabs
  const renderTabContent = () => {
    switch (tabView) {
      case 'main':
        return <MainPage currentMode={currentMode} setCurrentMode={setCurrentMode} />;
      // The other tabs like patterns, reference, rotary, and advanced would be imported components here
      default:
        return <div>Tab content not available</div>;
    }
  };

  return (
    <div className="flex flex-col items-center bg-gray-50 p-6 rounded-lg shadow-md max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-blue-800">Unit Circle Study Guide</h1>
      
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
    </div>
  );
};

export default App;