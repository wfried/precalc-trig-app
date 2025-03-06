import React from 'react';
import { render, screen } from '@testing-library/react';
import AngleDetails from './AngleDetails';

describe('AngleDetails', () => {
  const mockAngle = {
    deg: 45,
    rad: Math.PI / 4,
    exactLabel: 'π/4',
    sin: Math.sqrt(2) / 2,
    cos: Math.sqrt(2) / 2,
    tan: 1,
    sinExact: '√2/2',
    cosExact: '√2/2',
    tanExact: '1'
  };
  
  test('renders nothing when no angle is selected', () => {
    const { container } = render(<AngleDetails selectedAngle={null} />);
    expect(container.firstChild).toBeNull();
  });
  
  test('renders angle details when an angle is selected', () => {
    render(<AngleDetails selectedAngle={mockAngle} />);
    
    expect(screen.getByText('Angle Details')).toBeInTheDocument();
    expect(screen.getByText('45°')).toBeInTheDocument();
    expect(screen.getByText(/π\/4 ≈ 0.7854/)).toBeInTheDocument();
    expect(screen.getAllByText(/√2\/2 ≈ 0.7071/)).toHaveLength(2); // Both sin and cos are √2/2
    expect(screen.getByText(/1 ≈ 1.0000/)).toBeInTheDocument();
  });
  
  test('displays coordinates on unit circle', () => {
    render(<AngleDetails selectedAngle={mockAngle} />);
    
    expect(screen.getByText(/Point on Unit Circle/)).toBeInTheDocument();
    expect(screen.getByText(/\(0.7071, 0.7071\)/)).toBeInTheDocument();
  });
});