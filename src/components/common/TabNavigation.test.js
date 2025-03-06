import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TabNavigation from './TabNavigation';

describe('TabNavigation', () => {
  const mockSetTabView = jest.fn();
  
  beforeEach(() => {
    mockSetTabView.mockClear();
  });
  
  test('renders all tab buttons', () => {
    render(<TabNavigation tabView="main" setTabView={mockSetTabView} />);
    
    expect(screen.getByText('Main')).toBeInTheDocument();
    expect(screen.getByText('Patterns & Tricks')).toBeInTheDocument();
    expect(screen.getByText('Reference Tables')).toBeInTheDocument();
    expect(screen.getByText('Rotary Motion')).toBeInTheDocument();
    expect(screen.getByText('Advanced Concepts')).toBeInTheDocument();
  });
  
  test('applies active styling to the current tab', () => {
    render(<TabNavigation tabView="patterns" setTabView={mockSetTabView} />);
    
    const mainButton = screen.getByText('Main').closest('button');
    const patternsButton = screen.getByText('Patterns & Tricks').closest('button');
    
    expect(mainButton).toHaveClass('bg-gray-200');
    expect(patternsButton).toHaveClass('bg-purple-600');
    expect(patternsButton).toHaveClass('text-white');
  });
  
  test('calls setTabView when a tab is clicked', () => {
    render(<TabNavigation tabView="main" setTabView={mockSetTabView} />);
    
    fireEvent.click(screen.getByText('Reference Tables'));
    expect(mockSetTabView).toHaveBeenCalledWith('reference');
    
    fireEvent.click(screen.getByText('Advanced Concepts'));
    expect(mockSetTabView).toHaveBeenCalledWith('advanced');
  });
});