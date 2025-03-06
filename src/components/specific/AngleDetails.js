import React from 'react';

/**
 * Component that displays detailed information about a selected angle
 */
const AngleDetails = ({ selectedAngle }) => {
  if (!selectedAngle) return null;
  
  return (
    <div className="mt-6 p-4 bg-white rounded-lg shadow-sm border border-gray-200 w-full max-w-md">
      <h3 className="text-lg font-semibold text-center mb-2">Angle Details</h3>
      <table className="w-full">
        <tbody>
          <tr>
            <td className="font-medium">Angle (Degrees):</td>
            <td>{selectedAngle.deg}°</td>
          </tr>
          <tr>
            <td className="font-medium">Angle (Radians):</td>
            <td>{selectedAngle.exactLabel} ≈ {selectedAngle.rad.toFixed(4)}</td>
          </tr>
          <tr>
            <td className="font-medium">sin:</td>
            <td>{selectedAngle.sinExact} ≈ {selectedAngle.sin.toFixed(4)}</td>
          </tr>
          <tr>
            <td className="font-medium">cos:</td>
            <td>{selectedAngle.cosExact} ≈ {selectedAngle.cos.toFixed(4)}</td>
          </tr>
          <tr>
            <td className="font-medium">tan:</td>
            <td>{selectedAngle.tanExact} {selectedAngle.tan === Infinity ? '' : `≈ ${selectedAngle.tan.toFixed(4)}`}</td>
          </tr>
          <tr>
            <td className="font-medium">Point on Unit Circle:</td>
            <td>({selectedAngle.cos.toFixed(4)}, {selectedAngle.sin.toFixed(4)})</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AngleDetails;