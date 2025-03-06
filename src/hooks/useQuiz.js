import { useState, useCallback } from 'react';
import angles from '../data/angles';

/**
 * Hook for managing the quiz functionality
 */
const useQuiz = () => {
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [userAnswer, setUserAnswer] = useState({
    sin: '',
    cos: '',
    tan: '',
    sec: '',
    csc: '',
    cot: '',
    degrees: '',
    radians: '',
    referenceAngle: '',
    coterminalAngle: '',
    arcLength: '',
    angularVelocity: '',
    linearVelocity: ''
  });
  const [feedback, setFeedback] = useState('');
  const [showAnswer, setShowAnswer] = useState(false);
  const [answered, setAnswered] = useState(false);
  const [recentAngles, setRecentAngles] = useState([]);
  const [quizInitialized, setQuizInitialized] = useState(false);
  const [questionType, setQuestionType] = useState('random');
  const [showQuizOptions, setShowQuizOptions] = useState(false);

  // Generate a random angle (ensuring not too many repeats)
  const getRandomAngle = useCallback(() => {
    let availableAngles = angles.filter(angle => !recentAngles.includes(angle.rad));
    
    // If all angles have been used recently, reset the history
    if (availableAngles.length === 0) {
      availableAngles = angles;
      setRecentAngles([]);
    }
    
    const randomIndex = Math.floor(Math.random() * availableAngles.length);
    const selectedAngle = availableAngles[randomIndex];
    
    // Update recent angles
    setRecentAngles(prev => {
      const newRecent = [...prev, selectedAngle.rad];
      // Keep only the 5 most recent angles
      if (newRecent.length > 5) {
        return newRecent.slice(1);
      }
      return newRecent;
    });
    
    return selectedAngle;
  }, [recentAngles]);

  // Start the quiz with selected question type
  const startQuiz = useCallback((selectedType) => {
    // First set the question type
    setQuestionType(selectedType);
    
    // Then initialize the quiz and hide options
    setQuizInitialized(true);
    setShowQuizOptions(false);
    setScore({ correct: 0, total: 0 });
    setRecentAngles([]);
    
    // We use setTimeout to ensure state is updated before generating the question
    setTimeout(() => {
      generateQuestion(selectedType);
    }, 50);
  }, [generateQuestion]);

  // Generate a new question
  const generateQuestion = useCallback((type = questionType) => {
    const angle = getRandomAngle();
    let selectedQuestion;
    
    if (type === 'angle-to-trig') {
      selectedQuestion = {
        type: 'angle-to-trig',
        question: `For angle ${angle.label} (${angle.exactLabel} radians), find the values of sin, cos, and tan.`,
        angle: angle
      };
    } else if (type === 'trig-to-angle') {
      selectedQuestion = {
        type: 'trig-to-angle',
        question: `Find the angle (in degrees and radians) where sin = ${angle.sinExact}, cos = ${angle.cosExact}, and tan = ${angle.tanExact}.`,
        angle: angle
      };
    } else if (type === 'point-to-angle') {
      selectedQuestion = {
        type: 'point-to-angle',
        question: `The point (${(angle.cos).toFixed(3)}, ${(angle.sin).toFixed(3)}) lies on the unit circle. What is the corresponding angle in degrees and radians?`,
        angle: angle
      };
    } else {
      // Random type - choose one of the three
      const types = ['angle-to-trig', 'trig-to-angle', 'point-to-angle'];
      const randomType = types[Math.floor(Math.random() * types.length)];
      
      if (randomType === 'angle-to-trig') {
        selectedQuestion = {
          type: 'angle-to-trig',
          question: `For angle ${angle.label} (${angle.exactLabel} radians), find the values of sin, cos, and tan.`,
          angle: angle
        };
      } else if (randomType === 'trig-to-angle') {
        selectedQuestion = {
          type: 'trig-to-angle',
          question: `Find the angle (in degrees and radians) where sin = ${angle.sinExact}, cos = ${angle.cosExact}, and tan = ${angle.tanExact}.`,
          angle: angle
        };
      } else {
        selectedQuestion = {
          type: 'point-to-angle',
          question: `The point (${(angle.cos).toFixed(3)}, ${(angle.sin).toFixed(3)}) lies on the unit circle. What is the corresponding angle in degrees and radians?`,
          angle: angle
        };
      }
    }
    
    setCurrentQuestion(selectedQuestion);
    setShowAnswer(false);
    resetUserAnswer();
    setFeedback('');
    setAnswered(false);
  }, [getRandomAngle, questionType]);

  // Helper function to reset user answer
  const resetUserAnswer = () => {
    setUserAnswer({ 
      sin: '', 
      cos: '', 
      tan: '', 
      sec: '', 
      csc: '', 
      cot: '', 
      degrees: '', 
      radians: '',
      referenceAngle: '',
      coterminalAngle: '',
      arcLength: '',
      angularVelocity: '',
      linearVelocity: ''
    });
  };

  // Check the user's answer
  const checkAnswer = useCallback(() => {
    if (!currentQuestion) return;
    
    const correctAnswer = currentQuestion.angle;
    let isCorrect = false;
    let feedback = '';
    let correctParts = [];
    let incorrectParts = [];
    
    // Helper function to normalize and compare answers
    const compareAnswers = (userInput, correctValue) => {
      if (!userInput) return false;
      
      // Remove spaces, convert to lowercase
      const normalizedInput = userInput.trim().toLowerCase().replace(/\s+/g, '');
      const normalizedCorrect = String(correctValue).toLowerCase().replace(/\s+/g, '');
      
      // Check if they're identical
      if (normalizedInput === normalizedCorrect) return true;
      
      // Check for numeric equivalence
      if (!isNaN(normalizedInput) && !isNaN(normalizedCorrect)) {
        return Math.abs(parseFloat(normalizedInput) - parseFloat(normalizedCorrect)) < 0.01;
      }
      
      return false;
    };
    
    // Check if an angle is coterminal
    const isCoterminal = (userInput, correctValue) => {
      if (!userInput) return false;
      
      try {
        const userAngle = parseFloat(userInput);
        const correctAngle = parseFloat(correctValue);
        
        // Check if they differ by a multiple of 360° (or 2π radians)
        const degreeDifference = Math.abs(userAngle - correctAngle) % 360;
        return degreeDifference < 1 || Math.abs(degreeDifference - 360) < 1;
      } catch (e) {
        return false;
      }
    };
    
    switch(currentQuestion.type) {
      case 'angle-to-trig':
        const sinCorrect = compareAnswers(userAnswer.sin, correctAnswer.sinExact);
        const cosCorrect = compareAnswers(userAnswer.cos, correctAnswer.cosExact);
        const tanCorrect = compareAnswers(userAnswer.tan, correctAnswer.tanExact);
        
        if (sinCorrect) correctParts.push('sin');
        else incorrectParts.push('sin');
        
        if (cosCorrect) correctParts.push('cos');
        else incorrectParts.push('cos');
        
        if (tanCorrect) correctParts.push('tan');
        else incorrectParts.push('tan');
        
        isCorrect = sinCorrect && cosCorrect && tanCorrect;
        
        if (isCorrect) {
          feedback = '🎉 Perfect! All values are correct.';
        } else if (correctParts.length > 0) {
          feedback = `👍 Partially correct! You got ${correctParts.join(', ')} right, but need to check ${incorrectParts.join(', ')}.`;
        } else {
          feedback = '❌ Not quite right. Check all your values and try again.';
        }
        break;
        
      case 'all-six-trig':
        const allTrigCheck = [
          { func: 'sin', correct: compareAnswers(userAnswer.sin, correctAnswer.sinExact) },
          { func: 'cos', correct: compareAnswers(userAnswer.cos, correctAnswer.cosExact) },
          { func: 'tan', correct: compareAnswers(userAnswer.tan, correctAnswer.tanExact) },
          { func: 'sec', correct: compareAnswers(userAnswer.sec, correctAnswer.secExact) },
          { func: 'csc', correct: compareAnswers(userAnswer.csc, correctAnswer.cscExact) },
          { func: 'cot', correct: compareAnswers(userAnswer.cot, correctAnswer.cotExact) }
        ];
        
        allTrigCheck.forEach(check => {
          if (check.correct) correctParts.push(check.func);
          else incorrectParts.push(check.func);
        });
        
        isCorrect = allTrigCheck.every(check => check.correct);
        
        if (isCorrect) {
          feedback = '🎉 Perfect! All six trigonometric values are correct.';
        } else if (correctParts.length > 0) {
          feedback = `👍 Partially correct! You got ${correctParts.join(', ')} right, but need to check ${incorrectParts.join(', ')}.`;
        } else {
          feedback = '❌ Not quite right. Check all your values and try again.';
        }
        break;
        
      case 'trig-to-angle':
      case 'point-to-angle':
      case 'inverse-trig':
        // Check if degrees are correct (either exact or within 1 degree)
        const degreesCorrect = 
          compareAnswers(userAnswer.degrees, correctAnswer.deg.toString()) || 
          (userAnswer.degrees && Math.abs(parseFloat(userAnswer.degrees) - correctAnswer.deg) < 1);
          
        // Check if radians are correct
        const radiansCorrect = 
          compareAnswers(userAnswer.radians, correctAnswer.exactLabel) || 
          (userAnswer.radians && Math.abs(parseFloat(userAnswer.radians) - correctAnswer.rad) < 0.02);
        
        if (degreesCorrect) correctParts.push('degrees');
        else incorrectParts.push('degrees');
        
        if (radiansCorrect) correctParts.push('radians');
        else incorrectParts.push('radians');
        
        isCorrect = degreesCorrect && radiansCorrect;
        
        if (isCorrect) {
          feedback = '🎉 Perfect! Both angle measurements are correct.';
        } else if (correctParts.length > 0) {
          feedback = `👍 Partially correct! Your ${correctParts.join(', ')} value is right, but check your ${incorrectParts.join(', ')}.`;
        } else {
          feedback = '❌ Not quite right. Check both angle measurements and try again.';
        }
        break;
        
      case 'reference-angle':
        // Reference angle should be between 0 and 90 degrees
        const refAngleCorrect = compareAnswers(userAnswer.referenceAngle, currentQuestion.referenceAngle.toString());
        
        isCorrect = refAngleCorrect;
        
        if (isCorrect) {
          feedback = '🎉 Perfect! The reference angle is correct.';
        } else {
          feedback = '❌ Not quite right. Remember that the reference angle is the acute angle made with the x-axis.';
        }
        break;
        
      case 'coterminal-angle':
        // Check if the provided angle is coterminal with the original angle
        const isValidCoterminal = isCoterminal(userAnswer.coterminalAngle, correctAnswer.deg.toString()) &&
                                  parseFloat(userAnswer.coterminalAngle) !== correctAnswer.deg; // Must be different from original
        
        isCorrect = isValidCoterminal;
        
        if (isCorrect) {
          feedback = '🎉 Perfect! Your angle is coterminal with the given angle.';
        } else {
          feedback = '❌ Not quite right. Remember that coterminal angles differ by multiples of 360° or 2π radians.';
        }
        break;
        
      case 'arc-length':
        // Check arc length calculation
        const arcLengthCorrect = compareAnswers(userAnswer.arcLength, currentQuestion.arcLength.toString());
        
        isCorrect = arcLengthCorrect;
        
        if (isCorrect) {
          feedback = '🎉 Perfect! The arc length calculation is correct.';
        } else {
          feedback = '❌ Not quite right. Remember that arc length = radius × angle (in radians).';
        }
        break;
        
      case 'angular-velocity':
        let angularVelocityCorrect = false;
        let linearVelocityCorrect = false;
        
        // Different checks based on velocity problem type
        if (currentQuestion.velocityType === 'rpm-to-rads') {
          angularVelocityCorrect = compareAnswers(userAnswer.angularVelocity, currentQuestion.angularVelocity.toString());
          isCorrect = angularVelocityCorrect;
          
          if (isCorrect) {
            feedback = '🎉 Perfect! Your angular velocity conversion is correct.';
          } else {
            feedback = '❌ Not quite right. Remember that ω (rad/s) = (π/30) × (rev/min).';
          }
        } else if (currentQuestion.velocityType === 'angular-to-linear') {
          linearVelocityCorrect = compareAnswers(userAnswer.linearVelocity, currentQuestion.linearVelocity.toString());
          isCorrect = linearVelocityCorrect;
          
          if (isCorrect) {
            feedback = '🎉 Perfect! Your linear velocity calculation is correct.';
          } else {
            feedback = '❌ Not quite right. Remember that linear velocity = radius × angular velocity.';
          }
        } else { // linear-to-angular
          angularVelocityCorrect = compareAnswers(userAnswer.angularVelocity, currentQuestion.angularVelocity.toString());
          isCorrect = angularVelocityCorrect;
          
          if (isCorrect) {
            feedback = '🎉 Perfect! Your angular velocity calculation is correct.';
          } else {
            feedback = '❌ Not quite right. Remember that angular velocity = linear velocity / radius.';
          }
        }
        break;
        
      default:
        // Shouldn't reach here, but just in case
        isCorrect = false;
        feedback = 'Error checking answer. Please try again.';
    }
    
    setFeedback(feedback);
    setShowAnswer(true);
    setAnswered(true);
    
    if (isCorrect) {
      setScore(prev => ({ ...prev, correct: prev.correct + 1, total: prev.total + 1 }));
    } else {
      setScore(prev => ({ ...prev, total: prev.total + 1 }));
    }
  }, [currentQuestion, userAnswer]);

  // Reset the quiz
  const resetQuiz = useCallback(() => {
    setScore({ correct: 0, total: 0 });
    setRecentAngles([]);
    resetUserAnswer();
    setFeedback('');
    setShowAnswer(false);
    setAnswered(false);
    setShowQuizOptions(true);
    setQuizInitialized(false); // Reset initialization flag
  }, []);

  return {
    score,
    currentQuestion,
    userAnswer,
    setUserAnswer,
    feedback,
    showAnswer,
    answered,
    quizInitialized,
    questionType,
    showQuizOptions,
    setShowQuizOptions,
    startQuiz,
    checkAnswer,
    generateQuestion,
    resetQuiz
  };
};

export default useQuiz;