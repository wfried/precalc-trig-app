import { renderHook, act } from '@testing-library/react';
import useTabs from './useTabs';

describe('useTabs', () => {
  test('initializes with default values', () => {
    const { result } = renderHook(() => useTabs());
    
    expect(result.current.tabView).toBe('main');
    expect(result.current.currentMode).toBe('practice');
  });
  
  test('can update tabView', () => {
    const { result } = renderHook(() => useTabs());
    
    act(() => {
      result.current.setTabView('reference');
    });
    
    expect(result.current.tabView).toBe('reference');
  });
  
  test('can update currentMode', () => {
    const { result } = renderHook(() => useTabs());
    
    act(() => {
      result.current.setCurrentMode('quiz');
    });
    
    expect(result.current.currentMode).toBe('quiz');
  });
});