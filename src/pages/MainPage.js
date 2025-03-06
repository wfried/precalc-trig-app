import React from 'react';
import ModeSelector from '../components/common/ModeSelector';
import PracticeMode from '../components/specific/PracticeMode';
import QuizMode from '../components/specific/QuizMode';

/**
 * Main page component containing the practice and quiz modes
 */
const MainPage = ({ currentMode, setCurrentMode }) => {
  return (
    <>
      <ModeSelector currentMode={currentMode} setCurrentMode={setCurrentMode} />
      
      {currentMode === 'practice' ? (
        <PracticeMode />
      ) : (
        <QuizMode />
      )}
    </>
  );
};

export default MainPage;