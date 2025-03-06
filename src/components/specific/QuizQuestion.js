import React from 'react';

/**
 * Component for displaying and answering quiz questions
 */
const QuizQuestion = ({
  currentQuestion,
  userAnswer,
  setUserAnswer,
  feedback,
  showAnswer,
  answered,
  score,
  checkAnswer,
  generateQuestion,
  resetQuiz
}) => {
  if (!currentQuestion) return null;

  return (
    <div className="w-full max-w-md mx-auto">
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
          <div className={`mt-4 p-3 rounded ${
            feedback.startsWith('🎉') 
              ? 'bg-green-100 text-green-800' 
              : feedback.startsWith('👍') 
                ? 'bg-yellow-100 text-yellow-800' 
                : 'bg-red-100 text-red-800'
          }`}>
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
  );
};

export default QuizQuestion;