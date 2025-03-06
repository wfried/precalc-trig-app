import React, { useState, useEffect } from 'react';

const angles = [
    { 
      rad: 0, 
      deg: 0, 
      sin: 0, 
      cos: 1, 
      tan: 0,
      sec: 1,
      csc: Infinity,
      cot: Infinity,
      label: "0°",
      exactLabel: "0",
      sinExact: "0",
      cosExact: "1",
      tanExact: "0",
      secExact: "1",
      cscExact: "undefined",
      cotExact: "undefined"
    },
    { 
      rad: Math.PI/6, 
      deg: 30, 
      sin: 0.5, 
      cos: Math.sqrt(3)/2, 
      tan: 1/Math.sqrt(3),
      sec: 2/Math.sqrt(3),
      csc: 2,
      cot: Math.sqrt(3),
      label: "30°",
      exactLabel: "π/6",
      sinExact: "1/2",
      cosExact: "√3/2",
      tanExact: "1/√3",
      secExact: "2/√3",
      cscExact: "2",
      cotExact: "√3"
    },
    { 
      rad: Math.PI/4, 
      deg: 45, 
      sin: Math.sqrt(2)/2, 
      cos: Math.sqrt(2)/2, 
      tan: 1,
      sec: Math.sqrt(2),
      csc: Math.sqrt(2),
      cot: 1,
      label: "45°",
      exactLabel: "π/4",
      sinExact: "√2/2",
      cosExact: "√2/2",
      tanExact: "1",
      secExact: "√2",
      cscExact: "√2",
      cotExact: "1"
    },
    { 
      rad: Math.PI/3, 
      deg: 60, 
      sin: Math.sqrt(3)/2, 
      cos: 0.5, 
      tan: Math.sqrt(3),
      sec: 2,
      csc: 2/Math.sqrt(3),
      cot: 1/Math.sqrt(3),
      label: "60°",
      exactLabel: "π/3",
      sinExact: "√3/2",
      cosExact: "1/2",
      tanExact: "√3",
      secExact: "2",
      cscExact: "2/√3",
      cotExact: "1/√3"
    },
    { 
      rad: Math.PI/2, 
      deg: 90, 
      sin: 1, 
      cos: 0, 
      tan: Infinity,
      sec: Infinity,
      csc: 1,
      cot: 0,
      label: "90°",
      exactLabel: "π/2",
      sinExact: "1",
      cosExact: "0",
      tanExact: "undefined",
      secExact: "undefined",
      cscExact: "1",
      cotExact: "0"
    },
    { 
      rad: 2*Math.PI/3, 
      deg: 120, 
      sin: Math.sqrt(3)/2, 
      cos: -0.5, 
      tan: -Math.sqrt(3),
      sec: -2,
      csc: 2/Math.sqrt(3),
      cot: -1/Math.sqrt(3),
      label: "120°",
      exactLabel: "2π/3",
      sinExact: "√3/2",
      cosExact: "-1/2",
      tanExact: "-√3",
      secExact: "-2",
      cscExact: "2/√3",
      cotExact: "-1/√3"
    },
    { 
      rad: 3*Math.PI/4, 
      deg: 135, 
      sin: Math.sqrt(2)/2, 
      cos: -Math.sqrt(2)/2, 
      tan: -1,
      sec: -Math.sqrt(2),
      csc: Math.sqrt(2),
      cot: -1,
      label: "135°",
      exactLabel: "3π/4",
      sinExact: "√2/2",
      cosExact: "-√2/2",
      tanExact: "-1",
      secExact: "-√2",
      cscExact: "√2",
      cotExact: "-1"
    },
    { 
      rad: 5*Math.PI/6, 
      deg: 150, 
      sin: 0.5, 
      cos: -Math.sqrt(3)/2, 
      tan: -1/Math.sqrt(3),
      sec: -2/Math.sqrt(3),
      csc: 2,
      cot: -Math.sqrt(3),
      label: "150°",
      exactLabel: "5π/6",
      sinExact: "1/2",
      cosExact: "-√3/2",
      tanExact: "-1/√3",
      secExact: "-2/√3",
      cscExact: "2",
      cotExact: "-√3"
    },
    { 
      rad: Math.PI, 
      deg: 180, 
      sin: 0, 
      cos: -1, 
      tan: 0,
      sec: -1,
      csc: Infinity,
      cot: Infinity,
      label: "180°",
      exactLabel: "π",
      sinExact: "0",
      cosExact: "-1",
      tanExact: "0",
      secExact: "-1",
      cscExact: "undefined",
      cotExact: "undefined"
    },
    { 
      rad: 7*Math.PI/6, 
      deg: 210, 
      sin: -0.5, 
      cos: -Math.sqrt(3)/2, 
      tan: 1/Math.sqrt(3),
      sec: -2/Math.sqrt(3),
      csc: -2,
      cot: -Math.sqrt(3),
      label: "210°",
      exactLabel: "7π/6",
      sinExact: "-1/2",
      cosExact: "-√3/2",
      tanExact: "1/√3",
      secExact: "-2/√3",
      cscExact: "-2",
      cotExact: "-√3"
    },
    { 
      rad: 5*Math.PI/4, 
      deg: 225, 
      sin: -Math.sqrt(2)/2, 
      cos: -Math.sqrt(2)/2, 
      tan: 1,
      sec: -Math.sqrt(2),
      csc: -Math.sqrt(2),
      cot: 1,
      label: "225°",
      exactLabel: "5π/4",
      sinExact: "-√2/2",
      cosExact: "-√2/2",
      tanExact: "1",
      secExact: "-√2",
      cscExact: "-√2",
      cotExact: "1"
    },
    { 
      rad: 4*Math.PI/3, 
      deg: 240, 
      sin: -Math.sqrt(3)/2, 
      cos: -0.5, 
      tan: Math.sqrt(3),
      sec: -2,
      csc: -2/Math.sqrt(3),
      cot: 1/Math.sqrt(3),
      label: "240°",
      exactLabel: "4π/3",
      sinExact: "-√3/2",
      cosExact: "-1/2",
      tanExact: "√3",
      secExact: "-2",
      cscExact: "-2/√3",
      cotExact: "1/√3"
    },
    { 
      rad: 3*Math.PI/2, 
      deg: 270, 
      sin: -1, 
      cos: 0, 
      tan: Infinity,
      sec: Infinity,
      csc: -1,
      cot: 0,
      label: "270°",
      exactLabel: "3π/2",
      sinExact: "-1",
      cosExact: "0",
      tanExact: "undefined",
      secExact: "undefined",
      cscExact: "-1",
      cotExact: "0"
    },
    { 
      rad: 5*Math.PI/3, 
      deg: 300, 
      sin: -Math.sqrt(3)/2, 
      cos: 0.5, 
      tan: -Math.sqrt(3),
      sec: 2,
      csc: -2/Math.sqrt(3),
      cot: -1/Math.sqrt(3),
      label: "300°",
      exactLabel: "5π/3",
      sinExact: "-√3/2",
      cosExact: "1/2",
      tanExact: "-√3",
      secExact: "2",
      cscExact: "-2/√3",
      cotExact: "-1/√3"
    },
    { 
      rad: 7*Math.PI/4, 
      deg: 315, 
      sin: -Math.sqrt(2)/2, 
      cos: Math.sqrt(2)/2, 
      tan: -1,
      sec: Math.sqrt(2),
      csc: -Math.sqrt(2),
      cot: -1,
      label: "315°",
      exactLabel: "7π/4",
      sinExact: "-√2/2",
      cosExact: "√2/2",
      tanExact: "-1",
      secExact: "√2",
      cscExact: "-√2",
      cotExact: "-1"
    },
    { 
      rad: 11*Math.PI/6, 
      deg: 330, 
      sin: -0.5, 
      cos: Math.sqrt(3)/2, 
      tan: -1/Math.sqrt(3),
      sec: 2/Math.sqrt(3),
      csc: -2,
      cot: -Math.sqrt(3),
      label: "330°",
      exactLabel: "11π/6",
      sinExact: "-1/2",
      cosExact: "√3/2",
      tanExact: "-1/√3",
      secExact: "2/√3",
      cscExact: "-2",
      cotExact: "-√3"
    }
  ];

const UnitCircleApp = () => {
  // State variables
  const [tabView, setTabView] = useState('main'); // 'main', 'patterns', 'reference', 'rotary', 'advanced'
  const [currentMode, setCurrentMode] = useState('practice'); // 'practice' or 'quiz'
  const [showValues, setShowValues] = useState(true);
  const [selectedAngle, setSelectedAngle] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [userAnswer, setUserAnswer] = useState({ sin: '', cos: '', tan: '', degrees: '', radians: '' });
  const [feedback, setFeedback] = useState('');
  const [answered, setAnswered] = useState(false);
  const [recentAngles, setRecentAngles] = useState([]);
  const [quizInitialized, setQuizInitialized] = useState(false); // Track if quiz has been initialized
  const [questionType, setQuestionType] = useState('random'); // 'random', 'angle-to-trig', 'trig-to-angle', 'point-to-angle', 'reference-angle', 'coterminal-angle', 'arc-length', 'inverse-trig', 'all-six-trig', 'angular-velocity'
  const [showQuizOptions, setShowQuizOptions] = useState(false);

  // Define all important angles on the unit circle (in radians) with all six trig functions
  const angles = [
    { 
      rad: 0, 
      deg: 0, 
      sin: 0, 
      cos: 1, 
      tan: 0,
      sec: 1,
      csc: Infinity,
      cot: Infinity,
      label: "0°",
      exactLabel: "0",
      sinExact: "0",
      cosExact: "1",
      tanExact: "0",
      secExact: "1",
      cscExact: "undefined",
      cotExact: "undefined"
    },
    { 
      rad: Math.PI/6, 
      deg: 30, 
      sin: 0.5, 
      cos: Math.sqrt(3)/2, 
      tan: 1/Math.sqrt(3),
      sec: 2/Math.sqrt(3),
      csc: 2,
      cot: Math.sqrt(3),
      label: "30°",
      exactLabel: "π/6",
      sinExact: "1/2",
      cosExact: "√3/2",
      tanExact: "1/√3",
      secExact: "2/√3",
      cscExact: "2",
      cotExact: "√3"
    },
    { 
      rad: Math.PI/4, 
      deg: 45, 
      sin: Math.sqrt(2)/2, 
      cos: Math.sqrt(2)/2, 
      tan: 1,
      sec: Math.sqrt(2),
      csc: Math.sqrt(2),
      cot: 1,
      label: "45°",
      exactLabel: "π/4",
      sinExact: "√2/2",
      cosExact: "√2/2",
      tanExact: "1",
      secExact: "√2",
      cscExact: "√2",
      cotExact: "1"
    },
    { 
      rad: Math.PI/3, 
      deg: 60, 
      sin: Math.sqrt(3)/2, 
      cos: 0.5, 
      tan: Math.sqrt(3),
      label: "60°",
      exactLabel: "π/3",
      sinExact: "√3/2",
      cosExact: "1/2",
      tanExact: "√3",
      secExact: "2",
      cscExact: "2/√3",
      cotExact: "1/√3"
    },
    { 
      rad: Math.PI/2, 
      deg: 90, 
      sin: 1, 
      cos: 0, 
      tan: Infinity,
      label: "90°",
      exactLabel: "π/2",
      sinExact: "1",
      cosExact: "0",
      tanExact: "undefined",
      secExact: "undefined",
      cscExact: "1",
      cotExact: "0"
    },
    { 
      rad: 2*Math.PI/3, 
      deg: 120, 
      sin: Math.sqrt(3)/2, 
      cos: -0.5, 
      tan: -Math.sqrt(3),
      label: "120°",
      exactLabel: "2π/3",
      sinExact: "√3/2",
      cosExact: "-1/2",
      tanExact: "-√3"
    },
    { 
      rad: 3*Math.PI/4, 
      deg: 135, 
      sin: Math.sqrt(2)/2, 
      cos: -Math.sqrt(2)/2, 
      tan: -1,
      label: "135°",
      exactLabel: "3π/4",
      sinExact: "√2/2",
      cosExact: "-√2/2",
      tanExact: "-1"
    },
    { 
      rad: 5*Math.PI/6, 
      deg: 150, 
      sin: 0.5, 
      cos: -Math.sqrt(3)/2, 
      tan: -1/Math.sqrt(3),
      label: "150°",
      exactLabel: "5π/6",
      sinExact: "1/2",
      cosExact: "-√3/2",
      tanExact: "-1/√3"
    },
    { 
      rad: Math.PI, 
      deg: 180, 
      sin: 0, 
      cos: -1, 
      tan: 0,
      label: "180°",
      exactLabel: "π",
      sinExact: "0",
      cosExact: "-1",
      tanExact: "0"
    },
    { 
      rad: 7*Math.PI/6, 
      deg: 210, 
      sin: -0.5, 
      cos: -Math.sqrt(3)/2, 
      tan: 1/Math.sqrt(3),
      label: "210°",
      exactLabel: "7π/6",
      sinExact: "-1/2",
      cosExact: "-√3/2",
      tanExact: "1/√3"
    },
    { 
      rad: 5*Math.PI/4, 
      deg: 225, 
      sin: -Math.sqrt(2)/2, 
      cos: -Math.sqrt(2)/2, 
      tan: 1,
      label: "225°",
      exactLabel: "5π/4",
      sinExact: "-√2/2",
      cosExact: "-√2/2",
      tanExact: "1"
    },
    { 
      rad: 4*Math.PI/3, 
      deg: 240, 
      sin: -Math.sqrt(3)/2, 
      cos: -0.5, 
      tan: Math.sqrt(3),
      label: "240°",
      exactLabel: "4π/3",
      sinExact: "-√3/2",
      cosExact: "-1/2",
      tanExact: "√3"
    },
    { 
      rad: 3*Math.PI/2, 
      deg: 270, 
      sin: -1, 
      cos: 0, 
      tan: Infinity,
      label: "270°",
      exactLabel: "3π/2",
      sinExact: "-1",
      cosExact: "0",
      tanExact: "undefined"
    },
    { 
      rad: 5*Math.PI/3, 
      deg: 300, 
      sin: -Math.sqrt(3)/2, 
      cos: 0.5, 
      tan: -Math.sqrt(3),
      label: "300°",
      exactLabel: "5π/3",
      sinExact: "-√3/2",
      cosExact: "1/2",
      tanExact: "-√3"
    },
    { 
      rad: 7*Math.PI/4, 
      deg: 315, 
      sin: -Math.sqrt(2)/2, 
      cos: Math.sqrt(2)/2, 
      tan: -1,
      label: "315°",
      exactLabel: "7π/4",
      sinExact: "-√2/2",
      cosExact: "√2/2",
      tanExact: "-1"
    },
    { 
      rad: 11*Math.PI/6, 
      deg: 330, 
      sin: -0.5, 
      cos: Math.sqrt(3)/2, 
      tan: -1/Math.sqrt(3),
      label: "330°",
      exactLabel: "11π/6",
      sinExact: "-1/2",
      cosExact: "√3/2",
      tanExact: "-1/√3"
    }
  ];

  // Generate a random angle (ensuring not too many repeats)
  const getRandomAngle = () => {
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
  };


  // When switching to quiz mode, show options or generate a question if already initialized
  useEffect(() => {
    if (currentMode === 'quiz' && !quizInitialized) {
      setShowQuizOptions(true);
    } else if (currentMode === 'practice') {
      setSelectedAngle(null);
    }
  }, [currentMode, quizInitialized]);
  
  // Function to start the quiz with selected options
  const startQuiz = (selectedType) => {
    // First set the question type
    setQuestionType(selectedType);
    
    // Then initialize the quiz and hide options
    setQuizInitialized(true);
    setShowQuizOptions(false);
    setScore({ correct: 0, total: 0 });
    setRecentAngles([]);
    
    // We use setTimeout to ensure state is updated before generating the question
    setTimeout(() => {
      // Generate a question with the new type
      const angle = getRandomAngle();
      
      let newQuestion;
      if (selectedType === 'angle-to-trig') {
        newQuestion = {
          type: 'angle-to-trig',
          question: `For angle ${angle.label} (${angle.exactLabel} radians), find the values of sin, cos, and tan.`,
          angle: angle
        };
      } else if (selectedType === 'trig-to-angle') {
        newQuestion = {
          type: 'trig-to-angle',
          question: `Find the angle (in degrees and radians) where sin = ${angle.sinExact}, cos = ${angle.cosExact}, and tan = ${angle.tanExact}.`,
          angle: angle
        };
      } else if (selectedType === 'point-to-angle') {
        newQuestion = {
          type: 'point-to-angle',
          question: `The point (${(angle.cos).toFixed(3)}, ${(angle.sin).toFixed(3)}) lies on the unit circle. What is the corresponding angle in degrees and radians?`,
          angle: angle
        };
      } else {
        // Random type - choose one of the three
        const types = ['angle-to-trig', 'trig-to-angle', 'point-to-angle'];
        const randomType = types[Math.floor(Math.random() * types.length)];
        
        if (randomType === 'angle-to-trig') {
          newQuestion = {
            type: 'angle-to-trig',
            question: `For angle ${angle.label} (${angle.exactLabel} radians), find the values of sin, cos, and tan.`,
            angle: angle
          };
        } else if (randomType === 'trig-to-angle') {
          newQuestion = {
            type: 'trig-to-angle',
            question: `Find the angle (in degrees and radians) where sin = ${angle.sinExact}, cos = ${angle.cosExact}, and tan = ${angle.tanExact}.`,
            angle: angle
          };
        } else {
          newQuestion = {
            type: 'point-to-angle',
            question: `The point (${(angle.cos).toFixed(3)}, ${(angle.sin).toFixed(3)}) lies on the unit circle. What is the corresponding angle in degrees and radians?`,
            angle: angle
          };
        }
      }
      
      setCurrentQuestion(newQuestion);
      setUserAnswer({ sin: '', cos: '', tan: '', degrees: '', radians: '' });
      setFeedback('');
      setAnswered(false);
      setShowAnswer(false);
    }, 50);
  };

  // Check the user's answer
  const checkAnswer = () => {
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
  };

  // Reset the quiz
  const resetQuiz = () => {
    setScore({ correct: 0, total: 0 });
    setRecentAngles([]);
    setUserAnswer({ sin: '', cos: '', tan: '', degrees: '', radians: '' });
    setFeedback('');
    setShowAnswer(false);
    setAnswered(false);
    setShowQuizOptions(true);
    setQuizInitialized(false); // Reset initialization flag
  };
  
  // Generate a new question
  const generateQuestion = () => {
    const angle = getRandomAngle();
    let selectedQuestion;
    
    if (questionType === 'angle-to-trig') {
      selectedQuestion = {
        type: 'angle-to-trig',
        question: `For angle ${angle.label} (${angle.exactLabel} radians), find the values of sin, cos, and tan.`,
        angle: angle
      };
    } else if (questionType === 'trig-to-angle') {
      selectedQuestion = {
        type: 'trig-to-angle',
        question: `Find the angle (in degrees and radians) where sin = ${angle.sinExact}, cos = ${angle.cosExact}, and tan = ${angle.tanExact}.`,
        angle: angle
      };
    } else if (questionType === 'point-to-angle') {
      selectedQuestion = {
        type: 'point-to-angle',
        question: `The point (${(angle.cos).toFixed(3)}, ${(angle.sin).toFixed(3)}) lies on the unit circle. What is the corresponding angle in degrees and radians?`,
        angle: angle
      };
    } else {
      // Random type - choose one
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
    setFeedback('');
    setAnswered(false);
  };

  // Convert radian to x,y coordinates on the circle
  const getCoordinates = (rad, radius = 100) => {
    return {
      x: radius * Math.cos(rad) + 150,
      y: 150 - radius * Math.sin(rad) // Flip y because SVG coordinates
    };
  };

  return (
    <div className="flex flex-col items-center bg-gray-50 p-6 rounded-lg shadow-md max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-blue-800">Unit Circle Study Guide</h1>
      
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        <button 
          className={`px-4 py-2 rounded ${tabView === 'main' ? 'bg-purple-600 text-white' : 'bg-gray-200'}`}
          onClick={() => setTabView('main')}
        >
          Main
        </button>
        <button 
          className={`px-4 py-2 rounded ${tabView === 'patterns' ? 'bg-purple-600 text-white' : 'bg-gray-200'}`}
          onClick={() => setTabView('patterns')}
        >
          Patterns & Tricks
        </button>
        <button 
          className={`px-4 py-2 rounded ${tabView === 'reference' ? 'bg-purple-600 text-white' : 'bg-gray-200'}`}
          onClick={() => setTabView('reference')}
        >
          Reference Tables
        </button>
        <button 
          className={`px-4 py-2 rounded ${tabView === 'rotary' ? 'bg-purple-600 text-white' : 'bg-gray-200'}`}
          onClick={() => setTabView('rotary')}
        >
          Rotary Motion
        </button>
        <button 
          className={`px-4 py-2 rounded ${tabView === 'advanced' ? 'bg-purple-600 text-white' : 'bg-gray-200'}`}
          onClick={() => setTabView('advanced')}
        >
          Advanced Concepts
        </button>
      </div>
      
      {tabView === 'main' && (
        <div className="flex space-x-4 mb-6">
          <button 
            className={`px-4 py-2 rounded ${currentMode === 'practice' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            onClick={() => setCurrentMode('practice')}
          >
            Practice Mode
          </button>
          <button 
            className={`px-4 py-2 rounded ${currentMode === 'quiz' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            onClick={() => setCurrentMode('quiz')}
          >
            Quiz Mode
          </button>
        </div>
      )}
      
      {tabView === 'patterns' && (
        <div className="w-full max-w-3xl">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold mb-4 text-purple-800">Unit Circle Patterns & Tricks</h3>
            
            <div className="mb-6">
              <h4 className="font-medium text-lg mb-2">The Hand Trick</h4>
              <p className="mb-2">Use your hand to remember the first quadrant values:</p>
              <div className="bg-blue-50 p-3 rounded">
                <p>1. Make an "L" with your thumb and index finger</p>
                <p>2. Your thumb represents 0° (cos=1, sin=0)</p>
                <p>3. Your index finger represents 90° (cos=0, sin=1)</p>
                <p>4. Your middle finger at 45° (cos=sin=√2/2)</p>
                <p>5. Imagine 30° and 60° between these positions</p>
              </div>
            </div>
            
            <div className="mb-6">
              <h4 className="font-medium text-lg mb-2">Special Triangle Trick</h4>
              <p className="mb-2">Use the 30-60-90 and 45-45-90 triangles to remember values:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-green-50 p-3 rounded">
                  <p className="font-medium">30-60-90 Triangle:</p>
                  <p>sin(30°) = 1/2</p>
                  <p>cos(30°) = √3/2</p>
                  <p>sin(60°) = √3/2</p>
                  <p>cos(60°) = 1/2</p>
                </div>
                <div className="bg-yellow-50 p-3 rounded">
                  <p className="font-medium">45-45-90 Triangle:</p>
                  <p>sin(45°) = 1/√2 = √2/2</p>
                  <p>cos(45°) = 1/√2 = √2/2</p>
                </div>
              </div>
            </div>
            
            <div className="mb-6">
              <h4 className="font-medium text-lg mb-2">Reference Angle Method</h4>
              <p>To find values in other quadrants:</p>
              <ol className="list-decimal pl-5 space-y-1">
                <li>Find the reference angle (acute angle to x-axis)</li>
                <li>Find the trig value for that reference angle</li>
                <li>Apply the correct sign based on the quadrant (ASTC)</li>
              </ol>
              <div className="bg-gray-100 p-3 mt-2 rounded">
                <p className="italic">Example: sin(135°)</p>
                <p>1. Reference angle: 180° - 135° = 45°</p>
                <p>2. sin(45°) = √2/2</p>
                <p>3. 135° is in quadrant II where sin is positive</p>
                <p>4. sin(135°) = +√2/2</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium text-lg mb-2">Quick Angle Navigation</h4>
              <p className="mb-2">To find angles quickly around the circle:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Moving counterclockwise = adding angles</li>
                <li>Moving clockwise = subtracting angles</li>
                <li>Across the circle = adding 180° (π radians)</li>
                <li>Reflecting across x-axis: θ → -θ (changes sign of sin and tan)</li>
                <li>Reflecting across y-axis: θ → 180° - θ (changes sign of cos and tan)</li>
              </ul>
            </div>
          </div>
        </div>
      )}
      
      {tabView === 'rotary' && (
        <div className="w-full max-w-3xl">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold mb-4 text-purple-800">Rotary Motion Concepts</h3>
            
            <div className="mb-6">
              <h4 className="font-medium text-lg mb-2">Angular & Linear Velocity</h4>
              <p className="mb-2">Key formulas and concepts for rotary motion:</p>
              <div className="bg-blue-50 p-4 rounded">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium">Key Formulas:</p>
                    <p className="my-1">Linear velocity: v = rω</p>
                    <p className="my-1">Angular velocity: ω = v/r</p>
                    <p className="my-1">ω (rad/s) = 2π × (rev/s)</p>
                    <p className="my-1">ω (rad/s) = (π/30) × (rev/min)</p>
                  </div>
                  <div>
                    <p className="font-medium">Units:</p>
                    <p className="my-1">Angular velocity (ω): rad/s, rev/min</p>
                    <p className="my-1">Linear velocity (v): m/s, ft/s</p>
                    <p className="my-1">Radius (r): m, ft</p>
                    <p className="my-1">1 revolution = 2π radians = 360°</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="font-medium text-lg mb-2">Angular Velocity Calculator</h4>
              <div className="bg-gray-50 p-4 rounded border border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Radius (r):
                    </label>
                    <div className="flex items-center">
                      <input 
                        type="number" 
                        className="border border-gray-300 p-2 rounded flex-1"
                        placeholder="Enter radius"
                      />
                      <select className="ml-2 border border-gray-300 p-2 rounded">
                        <option value="m">m</option>
                        <option value="ft">ft</option>
                        <option value="cm">cm</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Rotation Rate:
                    </label>
                    <div className="flex items-center">
                      <input 
                        type="number" 
                        className="border border-gray-300 p-2 rounded flex-1"
                        placeholder="Enter rate"
                      />
                      <select className="ml-2 border border-gray-300 p-2 rounded">
                        <option value="rpm">rev/min</option>
                        <option value="rps">rev/s</option>
                        <option value="rads">rad/s</option>
                      </select>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Angular Velocity (ω):
                    </label>
                    <div className="p-2 bg-gray-100 rounded border border-gray-300">
                      <span>0 rad/s</span>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Linear Velocity (v):
                    </label>
                    <div className="p-2 bg-gray-100 rounded border border-gray-300">
                      <span>0 m/s</span>
                    </div>
                  </div>
                </div>
                
                <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">
                  Calculate
                </button>
              </div>
            </div>
            
            <div className="mb-6">
              <h4 className="font-medium text-lg mb-2">Connected Gear Systems</h4>
              <div className="bg-yellow-50 p-4 rounded">
                <p className="mb-2">In a gear system, when two gears mesh:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>The linear velocities at the contact point are equal</li>
                  <li>Angular velocities are inversely proportional to the number of teeth or radii</li>
                  <li>If gear A drives gear B: ωA × rA = ωB × rB</li>
                  <li>Gear ratio: ωA/ωB = rB/rA = NB/NA (where N = number of teeth)</li>
                </ul>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium text-lg mb-2">Real-World Applications</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-green-50 p-3 rounded">
                  <p className="font-medium">Propellers & Fans:</p>
                  <p>Tips move faster than hub (larger radius)</p>
                  <p>Linear velocity increases with distance from center</p>
                  <p>Angular velocity is constant for the entire propeller</p>
                </div>
                <div className="bg-purple-50 p-3 rounded">
                  <p className="font-medium">Mechanical Transmissions:</p>
                  <p>Gear trains control speed and torque</p>
                  <p>Pulleys and belts transfer rotary motion</p>
                  <p>Speed reducers decrease ω, increase torque</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {tabView === 'advanced' && (
        <div className="w-full max-w-3xl">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold mb-4 text-purple-800">Advanced Trigonometric Concepts</h3>
            
            <div className="mb-6">
              <h4 className="font-medium text-lg mb-2">Reference Angles</h4>
              <div className="bg-blue-50 p-4 rounded">
                <p className="mb-2">The reference angle is the positive acute angle made with the x-axis:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Quadrant I:</strong> θref = θ</li>
                  <li><strong>Quadrant II:</strong> θref = 180° - θ</li>
                  <li><strong>Quadrant III:</strong> θref = θ - 180°</li>
                  <li><strong>Quadrant IV:</strong> θref = 360° - θ</li>
                </ul>
                <div className="mt-3 p-3 bg-white rounded border border-blue-200">
                  <p className="italic">Example: For θ = 225°</p>
                  <p>Quadrant III: θref = 225° - 180° = 45°</p>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="font-medium text-lg mb-2">Coterminal Angles</h4>
              <div className="bg-green-50 p-4 rounded">
                <p className="mb-2">Coterminal angles have the same terminal ray on the unit circle:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Add or subtract 360° (or 2π radians) to find coterminal angles</li>
                  <li>Formula: θ + n·360° (where n is any integer)</li>
                  <li>All coterminal angles have identical trig function values</li>
                </ul>
                <div className="mt-3 p-3 bg-white rounded border border-green-200">
                  <p className="italic">Example: Angles coterminal with 45°</p>
                  <p>45° + 360° = 405°</p>
                  <p>45° - 360° = -315°</p>
                </div>
              </div>
            </div>
            
            <div className="mb-6">
              <h4 className="font-medium text-lg mb-2">The Six Trigonometric Functions</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-yellow-50 p-3 rounded">
                  <p className="font-medium">Primary Functions:</p>
                  <p>sin θ = y-coordinate = opp/hyp</p>
                  <p>cos θ = x-coordinate = adj/hyp</p>
                  <p>tan θ = sin θ / cos θ = opp/adj</p>
                </div>
                <div className="bg-red-50 p-3 rounded">
                  <p className="font-medium">Reciprocal Functions:</p>
                  <p>csc θ = 1/sin θ = hyp/opp</p>
                  <p>sec θ = 1/cos θ = hyp/adj</p>
                  <p>cot θ = 1/tan θ = adj/opp</p>
                </div>
              </div>
            </div>
            
            <div className="mb-6">
              <h4 className="font-medium text-lg mb-2">Inverse Trigonometric Functions</h4>
              <div className="bg-purple-50 p-4 rounded">
                <p className="mb-2">Inverse trig functions find the angle given a trig value:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium">Notation:</p>
                    <p>sin⁻¹(x) or arcsin(x)</p>
                    <p>cos⁻¹(x) or arccos(x)</p>
                    <p>tan⁻¹(x) or arctan(x)</p>
                  </div>
                  <div>
                    <p className="font-medium">Ranges:</p>
                    <p>sin⁻¹(x): [-π/2, π/2] or [-90°, 90°]</p>
                    <p>cos⁻¹(x): [0, π] or [0°, 180°]</p>
                    <p>tan⁻¹(x): (-π/2, π/2) or (-90°, 90°)</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium text-lg mb-2">Arc Length</h4>
              <div className="bg-indigo-50 p-4 rounded">
                <p className="mb-2">Arc length formula: s = r · θ (where θ is in radians)</p>
                <p className="mb-2">This is why radians are often preferred in calculus and physics.</p>
                <div className="mt-3 p-3 bg-white rounded border border-indigo-200">
                  <p className="italic">Example: Find the arc length for θ = π/4 radians on a circle with radius 5 units</p>
                  <p>s = r · θ = 5 · (π/4) = 5π/4 ≈ 3.927 units</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {tabView === 'reference' && (
        <div className="w-full max-w-3xl">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold mb-4 text-purple-800">Unit Circle Reference</h3>
            
            <div className="overflow-x-auto mb-6">
              <h4 className="font-medium text-lg mb-2">Common Angle Values</h4>
              <table className="min-w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 p-2">Degrees</th>
                    <th className="border border-gray-300 p-2">Radians</th>
                    <th className="border border-gray-300 p-2">sin</th>
                    <th className="border border-gray-300 p-2">cos</th>
                    <th className="border border-gray-300 p-2">tan</th>
                  </tr>
                </thead>
                <tbody>
                  {angles.filter(a => a.deg % 30 === 0).map((angle, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="border border-gray-300 p-2">{angle.deg}°</td>
                      <td className="border border-gray-300 p-2">{angle.exactLabel}</td>
                      <td className="border border-gray-300 p-2">{angle.sinExact}</td>
                      <td className="border border-gray-300 p-2">{angle.cosExact}</td>
                      <td className="border border-gray-300 p-2">{angle.tanExact}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="mb-6">
              <h4 className="font-medium text-lg mb-2">Key Identities</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-blue-50 p-3 rounded">
                  <p className="font-medium">Fundamental Identities:</p>
                  <p>sin²θ + cos²θ = 1</p>
                  <p>tan θ = sin θ / cos θ</p>
                  <p>cot θ = cos θ / sin θ</p>
                  <p>sec θ = 1 / cos θ</p>
                  <p>csc θ = 1 / sin θ</p>
                </div>
                <div className="bg-green-50 p-3 rounded">
                  <p className="font-medium">Complementary Angles:</p>
                  <p>sin(90° - θ) = cos θ</p>
                  <p>cos(90° - θ) = sin θ</p>
                  <p>tan(90° - θ) = cot θ</p>
                </div>
                <div className="bg-yellow-50 p-3 rounded">
                  <p className="font-medium">Supplementary Angles:</p>
                  <p>sin(180° - θ) = sin θ</p>
                  <p>cos(180° - θ) = -cos θ</p>
                  <p>tan(180° - θ) = -tan θ</p>
                </div>
                <div className="bg-red-50 p-3 rounded">
                  <p className="font-medium">Negative Angles:</p>
                  <p>sin(-θ) = -sin θ</p>
                  <p>cos(-θ) = cos θ</p>
                  <p>tan(-θ) = -tan θ</p>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium text-lg mb-2">Radian-Degree Conversion</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-purple-50 p-3 rounded">
                  <p className="font-medium">Degree to Radian:</p>
                  <p>rad = deg × (π/180°)</p>
                  <div className="mt-2">
                    <p className="italic">Examples:</p>
                    <p>30° = 30 × (π/180) = π/6</p>
                    <p>45° = 45 × (π/180) = π/4</p>
                    <p>60° = 60 × (π/180) = π/3</p>
                  </div>
                </div>
                <div className="bg-indigo-50 p-3 rounded">
                  <p className="font-medium">Radian to Degree:</p>
                  <p>deg = rad × (180°/π)</p>
                  <div className="mt-2">
                    <p className="italic">Examples:</p>
                    <p>π/4 = (π/4) × (180/π) = 45°</p>
                    <p>π/2 = (π/2) × (180/π) = 90°</p>
                    <p>2π = 2π × (180/π) = 360°</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {tabView === 'main' && currentMode === 'practice' && (
        <div className="flex flex-col items-center">
          <div className="flex justify-center mb-4">
            <label className="inline-flex items-center">
              <input 
                type="checkbox" 
                className="form-checkbox h-5 w-5 text-blue-600" 
                checked={showValues} 
                onChange={() => setShowValues(!showValues)}
              />
              <span className="ml-2">Show Values</span>
            </label>
          </div>
          
          <div className="relative">
            {/* Unit Circle */}
            <svg width="300" height="300" viewBox="0 0 300 300">
              {/* Coordinate axes */}
              <line x1="0" y1="150" x2="300" y2="150" stroke="black" strokeWidth="1" />
              <line x1="150" y1="0" x2="150" y2="300" stroke="black" strokeWidth="1" />
              
              {/* Unit Circle */}
              <circle cx="150" cy="150" r="100" fill="none" stroke="blue" strokeWidth="2" />
              
              {/* Angle Markers */}
              {angles.map((angle, index) => {
                const coords = getCoordinates(angle.rad);
                return (
                  <g key={index}>
                    <circle 
                      cx={coords.x} 
                      cy={coords.y} 
                      r="4" 
                      fill={selectedAngle && selectedAngle.rad === angle.rad ? "red" : "blue"} 
                      onClick={() => setSelectedAngle(angle)}
                      style={{ cursor: 'pointer' }}
                    />
                    {showValues && (
                      <text 
                        x={coords.x + (Math.cos(angle.rad) * 15)} 
                        y={coords.y - (Math.sin(angle.rad) * 15)} 
                        textAnchor="middle" 
                        fontSize="10"
                        fill={selectedAngle && selectedAngle.rad === angle.rad ? "red" : "black"}
                      >
                        {angle.label}
                      </text>
                    )}
                  </g>
                );
              })}
              
              {/* Selected Angle Line */}
              {selectedAngle && (
                <>
                  <line 
                    x1="150" 
                    y1="150" 
                    x2={getCoordinates(selectedAngle.rad).x} 
                    y2={getCoordinates(selectedAngle.rad).y} 
                    stroke="red" 
                    strokeWidth="2" 
                  />
                  <path 
                    d={`M 170 150 A 20 20 0 ${selectedAngle.rad > Math.PI ? 1 : 0} 1 ${150 + 20 * Math.cos(selectedAngle.rad)} ${150 - 20 * Math.sin(selectedAngle.rad)}`} 
                    fill="none" 
                    stroke="red" 
                    strokeWidth="2" 
                  />
                </>
              )}
              
              {/* Axis Labels */}
              <text x="290" y="145" fontSize="12">x</text>
              <text x="155" y="12" fontSize="12">y</text>
              <text x="155" y="145" fontSize="12" textAnchor="start">(0,0)</text>
              <text x="255" y="145" fontSize="12" textAnchor="middle">(1,0)</text>
              <text x="155" y="45" fontSize="12" textAnchor="start">(0,1)</text>
            </svg>
          </div>
          
          {selectedAngle && (
            <div className="mt-6 p-4 bg-white rounded-lg shadow-sm border border-gray-200 w-full max-w-md">
              <h3 className="text-lg font-semibold text-center mb-2">Angle Details</h3>
              <table className="w-full">
                <tbody>
                  <tr>
                    <td className="font-medium">Angle (Degrees):</td>
                    <td>{selectedAngle.deg}°</td>
                  </tr>
                  <tr>
                    <td className="font-medium">Angle (Radians):</td>
                    <td>{selectedAngle.exactLabel} ≈ {selectedAngle.rad.toFixed(4)}</td>
                  </tr>
                  <tr>
                    <td className="font-medium">sin:</td>
                    <td>{selectedAngle.sinExact} ≈ {selectedAngle.sin.toFixed(4)}</td>
                  </tr>
                  <tr>
                    <td className="font-medium">cos:</td>
                    <td>{selectedAngle.cosExact} ≈ {selectedAngle.cos.toFixed(4)}</td>
                  </tr>
                  <tr>
                    <td className="font-medium">tan:</td>
                    <td>{selectedAngle.tanExact} {selectedAngle.tan === Infinity ? '' : `≈ ${selectedAngle.tan.toFixed(4)}`}</td>
                  </tr>
                  <tr>
                    <td className="font-medium">Point on Unit Circle:</td>
                    <td>({selectedAngle.cos.toFixed(4)}, {selectedAngle.sin.toFixed(4)})</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
          
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">Click on any point on the unit circle to see its details.</p>
          </div>
        </div>
      )}
      
      {tabView === 'main' && currentMode === 'quiz' && showQuizOptions && (
        <div className="w-full max-w-md">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-xl font-semibold mb-4 text-center text-blue-800">Quiz Options</h3>
            <p className="mb-4 text-gray-600">Choose the type of questions you want to practice:</p>
            
            <div className="mb-4">
            <h4 className="font-semibold text-gray-700 mb-2">Basic Concepts</h4>
            <div className="space-y-3 mb-6">
              <button 
                className="w-full p-4 text-left rounded-lg border border-gray-300 hover:bg-blue-50 hover:border-blue-300 transition-colors"
                onClick={() => startQuiz('random')}
              >
                <div className="font-medium text-blue-900">Mixed Questions (Random)</div>
                <div className="text-sm text-gray-600 mt-1">Practice all different types of questions in random order.</div>
              </button>
              
              <button 
                className="w-full p-4 text-left rounded-lg border border-gray-300 hover:bg-purple-50 hover:border-purple-300 transition-colors"
                onClick={() => startQuiz('angle-to-trig')}
              >
                <div className="font-medium text-purple-900">Angle to Trigonometric Values</div>
                <div className="text-sm text-gray-600 mt-1">Given an angle, find the sin, cos, and tan values.</div>
              </button>
              
              <button 
                className="w-full p-4 text-left rounded-lg border border-gray-300 hover:bg-green-50 hover:border-green-300 transition-colors"
                onClick={() => startQuiz('trig-to-angle')}
              >
                <div className="font-medium text-green-900">Trigonometric Values to Angle</div>
                <div className="text-sm text-gray-600 mt-1">Given sin, cos, and tan values, find the corresponding angle.</div>
              </button>
              
              <button 
                className="w-full p-4 text-left rounded-lg border border-gray-300 hover:bg-yellow-50 hover:border-yellow-300 transition-colors"
                onClick={() => startQuiz('point-to-angle')}
              >
                <div className="font-medium text-yellow-900">Point on Unit Circle to Angle</div>
                <div className="text-sm text-gray-600 mt-1">Given a point (x,y) on the unit circle, find the corresponding angle.</div>
              </button>
            </div>
            
            <h4 className="font-semibold text-gray-700 mb-2">Angle Relationships</h4>
            <div className="space-y-3 mb-6">
              <button 
                className="w-full p-4 text-left rounded-lg border border-gray-300 hover:bg-indigo-50 hover:border-indigo-300 transition-colors"
                onClick={() => startQuiz('reference-angle')}
              >
                <div className="font-medium text-indigo-900">Reference Angles</div>
                <div className="text-sm text-gray-600 mt-1">Find the reference angle for a given angle in standard position.</div>
              </button>
              
              <button 
                className="w-full p-4 text-left rounded-lg border border-gray-300 hover:bg-pink-50 hover:border-pink-300 transition-colors"
                onClick={() => startQuiz('coterminal-angle')}
              >
                <div className="font-medium text-pink-900">Coterminal Angles</div>
                <div className="text-sm text-gray-600 mt-1">Find coterminal angles for a given angle.</div>
              </button>
              
              <button 
                className="w-full p-4 text-left rounded-lg border border-gray-300 hover:bg-teal-50 hover:border-teal-300 transition-colors"
                onClick={() => startQuiz('arc-length')}
              >
                <div className="font-medium text-teal-900">Arc Length</div>
                <div className="text-sm text-gray-600 mt-1">Calculate the arc length using angle measure and radius.</div>
              </button>
            </div>
            
            <h4 className="font-semibold text-gray-700 mb-2">Advanced Trigonometry</h4>
            <div className="space-y-3 mb-6">
              <button 
                className="w-full p-4 text-left rounded-lg border border-gray-300 hover:bg-red-50 hover:border-red-300 transition-colors"
                onClick={() => startQuiz('all-six-trig')}
              >
                <div className="font-medium text-red-900">All Six Trig Functions</div>
                <div className="text-sm text-gray-600 mt-1">Find values for all six trig functions (including sec, csc, cot).</div>
              </button>
              
              <button 
                className="w-full p-4 text-left rounded-lg border border-gray-300 hover:bg-orange-50 hover:border-orange-300 transition-colors"
                onClick={() => startQuiz('inverse-trig')}
              >
                <div className="font-medium text-orange-900">Inverse Trig Functions</div>
                <div className="text-sm text-gray-600 mt-1">Evaluate inverse trigonometric functions and find angles.</div>
              </button>
            </div>
            
            <h4 className="font-semibold text-gray-700 mb-2">Applications</h4>
            <div className="space-y-3">
              <button 
                className="w-full p-4 text-left rounded-lg border border-gray-300 hover:bg-cyan-50 hover:border-cyan-300 transition-colors"
                onClick={() => startQuiz('angular-velocity')}
              >
                <div className="font-medium text-cyan-900">Angular & Linear Velocity</div>
                <div className="text-sm text-gray-600 mt-1">Convert between angular and linear velocity in rotational motion.</div>
              </button>
            </div>
          </div>
          </div>
        </div>
      )}
      
      {tabView === 'main' && currentMode === 'quiz' && !showQuizOptions && currentQuestion && (
        <div className="w-full max-w-md">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold mb-4">Question:</h3>
            <p className="mb-6">{currentQuestion.question}</p>
            
            <div className="space-y-4 mb-6">
              {/* Angle-to-trig question inputs */}
              {currentQuestion.type === 'angle-to-trig' && (
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      sin:
                    </label>
                    <input 
                      type="text" 
                      className="border border-gray-300 p-2 rounded w-full"
                      value={userAnswer.sin}
                      onChange={e => setUserAnswer({...userAnswer, sin: e.target.value})}
                      placeholder="Enter value"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      cos:
                    </label>
                    <input 
                      type="text" 
                      className="border border-gray-300 p-2 rounded w-full"
                      value={userAnswer.cos}
                      onChange={e => setUserAnswer({...userAnswer, cos: e.target.value})}
                      placeholder="Enter value"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      tan:
                    </label>
                    <input 
                      type="text" 
                      className="border border-gray-300 p-2 rounded w-full"
                      value={userAnswer.tan}
                      onChange={e => setUserAnswer({...userAnswer, tan: e.target.value})}
                      placeholder="Enter value"
                    />
                  </div>
                  <div className="flex mt-2 gap-2">
                    <button 
                      className="px-4 py-2 bg-blue-600 text-white rounded"
                      onClick={() => setUserAnswer({...userAnswer, sin: userAnswer.sin + '√'})}
                    >
                      Insert √
                    </button>
                    <button 
                      className="px-4 py-2 bg-purple-600 text-white rounded"
                      onClick={() => setUserAnswer({...userAnswer, sin: userAnswer.sin + '/'})}
                    >
                      Insert /
                    </button>
                  </div>
                </div>
              )}
              
              {/* Trig-to-angle and point-to-angle question inputs */}
              {(currentQuestion.type === 'trig-to-angle' || currentQuestion.type === 'point-to-angle') && (
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Angle in Degrees:
                    </label>
                    <input 
                      type="text" 
                      className="border border-gray-300 p-2 rounded w-full"
                      value={userAnswer.degrees}
                      onChange={e => setUserAnswer({...userAnswer, degrees: e.target.value})}
                      placeholder="Enter degrees"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Angle in Radians:
                    </label>
                    <input 
                      type="text" 
                      className="border border-gray-300 p-2 rounded w-full"
                      value={userAnswer.radians}
                      onChange={e => setUserAnswer({...userAnswer, radians: e.target.value})}
                      placeholder="Enter radians"
                    />
                  </div>
                  <div className="flex mt-2 gap-2">
                    <button 
                      className="px-4 py-2 bg-blue-600 text-white rounded"
                      onClick={() => setUserAnswer({...userAnswer, degrees: userAnswer.degrees + '√'})}
                    >
                      Insert √
                    </button>
                    <button 
                      className="px-4 py-2 bg-purple-600 text-white rounded"
                      onClick={() => setUserAnswer({...userAnswer, radians: userAnswer.radians + 'π'})}
                    >
                      Insert π
                    </button>
                  </div>
                </div>
              )}
            </div>
            
            {feedback && (
              <div className={`mt-4 p-3 rounded ${feedback.startsWith('🎉') ? 'bg-green-100 text-green-800' : feedback.startsWith('👍') ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}>
                {feedback}
              </div>
            )}
            
            {showAnswer && (
              <div className="mt-6 p-4 bg-gray-50 rounded">
                <h4 className="font-semibold mb-2">Answer Comparison:</h4>
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="p-2 text-left">Value</th>
                      <th className="p-2 text-left">Your Answer</th>
                      <th className="p-2 text-left">Correct Answer</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentQuestion.type === 'angle-to-trig' && (
                      <>
                        <tr className="border-b border-gray-300">
                          <td className="p-2 font-medium">sin:</td>
                          <td className="p-2">{userAnswer.sin || "-"}</td>
                          <td className="p-2">{currentQuestion.angle.sinExact}</td>
                        </tr>
                        <tr className="border-b border-gray-300">
                          <td className="p-2 font-medium">cos:</td>
                          <td className="p-2">{userAnswer.cos || "-"}</td>
                          <td className="p-2">{currentQuestion.angle.cosExact}</td>
                        </tr>
                        <tr>
                          <td className="p-2 font-medium">tan:</td>
                          <td className="p-2">{userAnswer.tan || "-"}</td>
                          <td className="p-2">{currentQuestion.angle.tanExact}</td>
                        </tr>
                      </>
                    )}
                    
                    {(currentQuestion.type === 'trig-to-angle' || currentQuestion.type === 'point-to-angle') && (
                      <>
                        <tr className="border-b border-gray-300">
                          <td className="p-2 font-medium">Angle (Degrees):</td>
                          <td className="p-2">{userAnswer.degrees ? `${userAnswer.degrees}°` : "-"}</td>
                          <td className="p-2">{currentQuestion.angle.deg}°</td>
                        </tr>
                        <tr>
                          <td className="p-2 font-medium">Angle (Radians):</td>
                          <td className="p-2">{userAnswer.radians || "-"}</td>
                          <td className="p-2">{currentQuestion.angle.exactLabel}</td>
                        </tr>
                      </>
                    )}
                  </tbody>
                </table>
                
                <div className="mt-4 pt-4 border-t border-gray-300">
                  <h5 className="font-medium mb-1">Complete Values:</h5>
                  <table className="w-full">
                    <tbody>
                      <tr>
                        <td className="font-medium">Angle (Degrees):</td>
                        <td>{currentQuestion.angle.deg}°</td>
                      </tr>
                      <tr>
                        <td className="font-medium">Angle (Radians):</td>
                        <td>{currentQuestion.angle.exactLabel}</td>
                      </tr>
                      <tr>
                        <td className="font-medium">sin:</td>
                        <td>{currentQuestion.angle.sinExact}</td>
                      </tr>
                      <tr>
                        <td className="font-medium">cos:</td>
                        <td>{currentQuestion.angle.cosExact}</td>
                      </tr>
                      <tr>
                        <td className="font-medium">tan:</td>
                        <td>{currentQuestion.angle.tanExact}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
            
            <div className="mt-6 flex justify-between">
              {!answered ? (
                <button 
                  className="px-4 py-2 bg-blue-600 text-white rounded"
                  onClick={checkAnswer}
                >
                  Check Answer
                </button>
              ) : (
                <button 
                  className="px-4 py-2 bg-green-600 text-white rounded"
                  onClick={generateQuestion}
                >
                  Next Question
                </button>
              )}
              
              <div className="text-right">
                <div className="text-sm font-medium">Score: {score.correct}/{score.total}</div>
                <button 
                  className="text-sm text-blue-600 underline"
                  onClick={resetQuiz}
                >
                  Reset Quiz
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <div className="mt-6 text-sm text-gray-600 max-w-3xl">
        <h3 className="font-semibold mb-2">Study Tips:</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <ul className="list-disc pl-5 space-y-1">
              <li>Memorize the values at key angles: 0°, 30°, 45°, 60°, 90°</li>
              <li>Remember that sin(θ) = y-coordinate on the unit circle</li>
              <li>Remember that cos(θ) = x-coordinate on the unit circle</li>
              <li>tan(θ) = sin(θ) / cos(θ)</li>
              <li>Values repeat every 360° (2π radians) with appropriate sign changes</li>
            </ul>
          </div>
          <div>
            <ul className="list-disc pl-5 space-y-1">
              <li>ASTC: "All Students Take Calculus" - In which quadrants All trig functions, Sine, Tangent, and Cosine are positive</li>
              <li>Remember the reference angle method: find the acute angle to the x-axis and apply the correct sign</li>
              <li>Practice converting between degrees and radians: 180° = π radians</li>
            </ul>
          </div>
        </div>
        
        <h3 className="font-semibold mt-4 mb-2">Quadrant Rules:</h3>
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-blue-50 p-2 rounded">
            <p className="font-medium">Quadrant I (0° to 90°)</p>
            <p>All positive: sin(+), cos(+), tan(+)</p>
          </div>
          <div className="bg-green-50 p-2 rounded">
            <p className="font-medium">Quadrant II (90° to 180°)</p>
            <p>Only sin positive: sin(+), cos(-), tan(-)</p>
          </div>
          <div className="bg-yellow-50 p-2 rounded">
            <p className="font-medium">Quadrant III (180° to 270°)</p>
            <p>Only tan positive: sin(-), cos(-), tan(+)</p>
          </div>
          <div className="bg-red-50 p-2 rounded">
            <p className="font-medium">Quadrant IV (270° to 360°)</p>
            <p>Only cos positive: sin(-), cos(+), tan(-)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnitCircleApp;