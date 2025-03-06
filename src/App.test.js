import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

// Mock the page components
jest.mock('./pages/MainPage', () => () => <div data-testid="main-page">Main Page</div>);
jest.mock('./pages/PatternsPage', () => () => <div data-testid="patterns-page">Patterns Page</div>);
jest.mock('./pages/ReferencePage', () => () => <div data-testid="reference-page">Reference Page</div>);
jest.mock('./pages/RotaryPage', () => () => <div data-testid="rotary-page">Rotary Page</div>);
jest.mock('./pages/AdvancedPage', () => () => <div data-testid="advanced-page">Advanced Page</div>);

describe('App', () => {
  test('renders the app title', () => {
    render(<App />);
    expect(screen.getByText('Precalculus Trigonometry Study Guide')).toBeInTheDocument();
  });
  
  test('renders TabNavigation component', () => {
    render(<App />);
    expect(screen.getByText('Main')).toBeInTheDocument();
    expect(screen.getByText('Patterns & Tricks')).toBeInTheDocument();
    expect(screen.getByText('Reference Tables')).toBeInTheDocument();
    expect(screen.getByText('Rotary Motion')).toBeInTheDocument();
    expect(screen.getByText('Advanced Concepts')).toBeInTheDocument();
  });
  
  test('renders MainPage by default', () => {
    render(<App />);
    expect(screen.getByTestId('main-page')).toBeInTheDocument();
  });
  
  test('switches between tabs correctly', () => {
    render(<App />);
    
    // Initially shows MainPage
    expect(screen.getByTestId('main-page')).toBeInTheDocument();
    
    // Click on Patterns tab
    fireEvent.click(screen.getByText('Patterns & Tricks'));
    expect(screen.getByTestId('patterns-page')).toBeInTheDocument();
    
    // Click on Reference tab
    fireEvent.click(screen.getByText('Reference Tables'));
    expect(screen.getByTestId('reference-page')).toBeInTheDocument();
    
    // Click on Rotary tab
    fireEvent.click(screen.getByText('Rotary Motion'));
    expect(screen.getByTestId('rotary-page')).toBeInTheDocument();
    
    // Click on Advanced tab
    fireEvent.click(screen.getByText('Advanced Concepts'));
    expect(screen.getByTestId('advanced-page')).toBeInTheDocument();
    
    // Click back to Main tab
    fireEvent.click(screen.getByText('Main'));
    expect(screen.getByTestId('main-page')).toBeInTheDocument();
  });
  
  test('renders study tips section', () => {
    render(<App />);
    expect(screen.getByText('Study Tips:')).toBeInTheDocument();
    expect(screen.getByText(/Memorize the values at key angles/)).toBeInTheDocument();
  });
  
  test('renders quadrant rules section', () => {
    render(<App />);
    expect(screen.getByText('Quadrant Rules:')).toBeInTheDocument();
    expect(screen.getByText('Quadrant I (0° to 90°)')).toBeInTheDocument();
    expect(screen.getByText('Quadrant II (90° to 180°)')).toBeInTheDocument();
    expect(screen.getByText('Quadrant III (180° to 270°)')).toBeInTheDocument();
    expect(screen.getByText('Quadrant IV (270° to 360°)')).toBeInTheDocument();
  });
});