import React from 'react';

/**
 * UnitCircle component that displays an interactive unit circle with angle markers
 */
const UnitCircle = ({ 
  angles, 
  selectedAngle, 
  setSelectedAngle, 
  showValues, 
  getCoordinates 
}) => {
  return (
    <div className="relative">
      {/* Unit Circle SVG */}
      <svg width="300" height="300" viewBox="0 0 300 300">
        {/* Coordinate axes */}
        <line x1="0" y1="150" x2="300" y2="150" stroke="black" strokeWidth="1" />
        <line x1="150" y1="0" x2="150" y2="300" stroke="black" strokeWidth="1" />
        
        {/* Unit Circle */}
        <circle cx="150" cy="150" r="100" fill="none" stroke="blue" strokeWidth="2" />
        
        {/* Angle Markers */}
        {angles.map((angle, index) => {
          const coords = getCoordinates(angle.rad);
          return (
            <g key={index}>
              <circle 
                cx={coords.x} 
                cy={coords.y} 
                r="4" 
                fill={selectedAngle && selectedAngle.rad === angle.rad ? "red" : "blue"} 
                onClick={() => setSelectedAngle(angle)}
                style={{ cursor: 'pointer' }}
              />
              {showValues && (
                <text 
                  x={coords.x + (Math.cos(angle.rad) * 15)} 
                  y={coords.y - (Math.sin(angle.rad) * 15)} 
                  textAnchor="middle" 
                  fontSize="10"
                  fill={selectedAngle && selectedAngle.rad === angle.rad ? "red" : "black"}
                >
                  {angle.label}
                </text>
              )}
            </g>
          );
        })}
        
        {/* Selected Angle Line */}
        {selectedAngle && (
          <>
            <line 
              x1="150" 
              y1="150" 
              x2={getCoordinates(selectedAngle.rad).x} 
              y2={getCoordinates(selectedAngle.rad).y} 
              stroke="red" 
              strokeWidth="2" 
            />
            <path 
              d={`M 170 150 A 20 20 0 ${selectedAngle.rad > Math.PI ? 1 : 0} 1 ${150 + 20 * Math.cos(selectedAngle.rad)} ${150 - 20 * Math.sin(selectedAngle.rad)}`} 
              fill="none" 
              stroke="red" 
              strokeWidth="2" 
            />
          </>
        )}
        
        {/* Axis Labels */}
        <text x="290" y="145" fontSize="12">x</text>
        <text x="155" y="12" fontSize="12">y</text>
        <text x="155" y="145" fontSize="12" textAnchor="start">(0,0)</text>
        <text x="255" y="145" fontSize="12" textAnchor="middle">(1,0)</text>
        <text x="155" y="45" fontSize="12" textAnchor="start">(0,1)</text>
      </svg>
    </div>
  );
};

export default UnitCircle;