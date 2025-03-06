import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ModeSelector from './ModeSelector';

describe('ModeSelector', () => {
  const mockSetCurrentMode = jest.fn();
  
  beforeEach(() => {
    mockSetCurrentMode.mockClear();
  });
  
  test('renders practice and quiz buttons', () => {
    render(<ModeSelector currentMode="practice" setCurrentMode={mockSetCurrentMode} />);
    
    expect(screen.getByText('Practice Mode')).toBeInTheDocument();
    expect(screen.getByText('Quiz Mode')).toBeInTheDocument();
  });
  
  test('applies active styling to the current mode', () => {
    render(<ModeSelector currentMode="quiz" setCurrentMode={mockSetCurrentMode} />);
    
    const practiceButton = screen.getByText('Practice Mode').closest('button');
    const quizButton = screen.getByText('Quiz Mode').closest('button');
    
    expect(practiceButton).toHaveClass('bg-gray-200');
    expect(quizButton).toHaveClass('bg-blue-600');
    expect(quizButton).toHaveClass('text-white');
  });
  
  test('calls setCurrentMode when a mode button is clicked', () => {
    render(<ModeSelector currentMode="practice" setCurrentMode={mockSetCurrentMode} />);
    
    fireEvent.click(screen.getByText('Quiz Mode'));
    expect(mockSetCurrentMode).toHaveBeenCalledWith('quiz');
    
    fireEvent.click(screen.getByText('Practice Mode'));
    expect(mockSetCurrentMode).toHaveBeenCalledWith('practice');
  });
});