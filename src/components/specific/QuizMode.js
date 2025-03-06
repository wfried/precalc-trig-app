import React, { useEffect } from 'react';
import useQuiz from '../../hooks/useQuiz';
import QuizQuestion from './QuizQuestion';
import QuizOptions from './QuizOptions';

/**
 * Quiz mode component for testing knowledge of the unit circle
 */
const QuizMode = () => {
  const {
    score,
    currentQuestion,
    userAnswer,
    setUserAnswer,
    feedback,
    showAnswer,
    answered,
    quizInitialized,
    showQuizOptions,
    setShowQuizOptions,
    startQuiz,
    checkAnswer,
    generateQuestion,
    resetQuiz
  } = useQuiz();

  // When the component mounts, show quiz options if not initialized
  useEffect(() => {
    if (!quizInitialized) {
      setShowQuizOptions(true);
    }
  }, [quizInitialized, setShowQuizOptions]);

  if (showQuizOptions) {
    return <QuizOptions startQuiz={startQuiz} />;
  }

  return (
    <QuizQuestion
      currentQuestion={currentQuestion}
      userAnswer={userAnswer}
      setUserAnswer={setUserAnswer}
      feedback={feedback}
      showAnswer={showAnswer}
      answered={answered}
      score={score}
      checkAnswer={checkAnswer}
      generateQuestion={generateQuestion}
      resetQuiz={resetQuiz}
    />
  );
};

export default QuizMode;