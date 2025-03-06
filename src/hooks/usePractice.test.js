import { renderHook, act } from '@testing-library/react';
import usePractice from './usePractice';
import angles from '../data/angles';

describe('usePractice', () => {
  test('initializes with default values', () => {
    const { result } = renderHook(() => usePractice());
    
    expect(result.current.showValues).toBe(true);
    expect(result.current.selectedAngle).toBe(null);
    expect(result.current.angles).toBe(angles);
  });
  
  test('can toggle showValues', () => {
    const { result } = renderHook(() => usePractice());
    
    act(() => {
      result.current.setShowValues(false);
    });
    
    expect(result.current.showValues).toBe(false);
    
    act(() => {
      result.current.setShowValues(true);
    });
    
    expect(result.current.showValues).toBe(true);
  });
  
  test('can set selected angle', () => {
    const { result } = renderHook(() => usePractice());
    const testAngle = angles[0];
    
    act(() => {
      result.current.setSelectedAngle(testAngle);
    });
    
    expect(result.current.selectedAngle).toBe(testAngle);
  });
  
  test('getCoordinates calculates correct coordinates', () => {
    const { result } = renderHook(() => usePractice());
    
    // Test angle 0 (right side of circle)
    const coords0 = result.current.getCoordinates(0);
    expect(coords0.x).toBe(250); // 150 + 100
    expect(coords0.y).toBe(150);
    
    // Test angle PI/2 (top of circle)
    const coordsPi2 = result.current.getCoordinates(Math.PI/2);
    expect(coordsPi2.x).toBeCloseTo(150);
    expect(coordsPi2.y).toBeCloseTo(50); // 150 - 100
    
    // Test custom radius
    const coordsCustom = result.current.getCoordinates(0, 50);
    expect(coordsCustom.x).toBe(200); // 150 + 50
    expect(coordsCustom.y).toBe(150);
  });
});