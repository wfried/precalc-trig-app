import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import PracticeMode from './PracticeMode';

// Mock the child components and hooks
jest.mock('./UnitCircle', () => ({ angles, selectedAngle, setSelectedAngle, showValues, getCoordinates }) => (
  <div data-testid="unit-circle">
    <button onClick={() => setSelectedAngle(angles[0])}>Select Angle</button>
    <div>Show Values: {showValues.toString()}</div>
  </div>
));

jest.mock('./AngleDetails', () => ({ selectedAngle }) => (
  selectedAngle && <div data-testid="angle-details">Showing details for angle {selectedAngle.deg}°</div>
));

jest.mock('../../hooks/usePractice', () => () => ({
  showValues: true,
  setShowValues: jest.fn().mockImplementation(val => {
    usePracticeMock.showValues = val;
    return val;
  }),
  selectedAngle: null,
  setSelectedAngle: jest.fn().mockImplementation(val => {
    usePracticeMock.selectedAngle = val;
    return val;
  }),
  getCoordinates: jest.fn(),
  angles: [{ rad: 0, deg: 0 }, { rad: Math.PI/4, deg: 45 }]
}));

// Mock state for the hook
const usePracticeMock = {
  showValues: true,
  selectedAngle: null
};

describe('PracticeMode', () => {
  beforeEach(() => {
    usePracticeMock.showValues = true;
    usePracticeMock.selectedAngle = null;
  });
  
  test('renders UnitCircle component', () => {
    render(<PracticeMode />);
    expect(screen.getByTestId('unit-circle')).toBeInTheDocument();
  });
  
  test('renders show values checkbox', () => {
    render(<PracticeMode />);
    expect(screen.getByText('Show Values')).toBeInTheDocument();
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });
  
  test('checkbox reflects showValues state', () => {
    render(<PracticeMode />);
    expect(screen.getByRole('checkbox')).toBeChecked();
  });
  
  test('displays instruction text', () => {
    render(<PracticeMode />);
    expect(screen.getByText('Click on any point on the unit circle to see its details.')).toBeInTheDocument();
  });
});