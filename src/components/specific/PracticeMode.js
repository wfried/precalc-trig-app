import React from 'react';
import UnitCircle from './UnitCircle';
import AngleDetails from './AngleDetails';
import usePractice from '../../hooks/usePractice';

/**
 * Practice mode component for exploring the unit circle
 */
const PracticeMode = () => {
  const { 
    showValues, 
    setShowValues, 
    selectedAngle, 
    setSelectedAngle, 
    getCoordinates,
    angles
  } = usePractice();

  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-center mb-4">
        <label className="inline-flex items-center cursor-pointer">
          <input 
            type="checkbox" 
            className="form-checkbox h-5 w-5 text-blue-600 focus:ring-2 focus:ring-blue-500" 
            checked={showValues} 
            onChange={() => setShowValues(!showValues)}
            id="show-values"
            aria-describedby="show-values-hint"
          />
          <span className="ml-2">Show Values</span>
        </label>
        <span id="show-values-hint" className="sr-only">
          When checked, angle labels will be displayed on the unit circle
        </span>
      </div>
      
      <UnitCircle 
        angles={angles}
        selectedAngle={selectedAngle}
        setSelectedAngle={setSelectedAngle}
        showValues={showValues}
        getCoordinates={getCoordinates}
      />
      
      <AngleDetails selectedAngle={selectedAngle} />
      
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600">Click on any point on the unit circle to see its details.</p>
      </div>
    </div>
  );
};

export default PracticeMode;