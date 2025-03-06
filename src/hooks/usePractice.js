import { useState } from 'react';
import angles from '../data/angles';

/**
 * Hook for managing practice mode functionality
 */
const usePractice = () => {
  const [showValues, setShowValues] = useState(true);
  const [selectedAngle, setSelectedAngle] = useState(null);

  // Convert radian to x,y coordinates on the circle
  const getCoordinates = (rad, radius = 100) => {
    return {
      x: radius * Math.cos(rad) + 150,
      y: 150 - radius * Math.sin(rad) // Flip y because SVG coordinates
    };
  };

  return {
    showValues,
    setShowValues,
    selectedAngle,
    setSelectedAngle,
    getCoordinates,
    angles
  };
};

export default usePractice;