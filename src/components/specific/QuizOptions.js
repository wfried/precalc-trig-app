import React from 'react';

/**
 * Component for selecting quiz question types
 */
const QuizOptions = ({ startQuiz }) => {
  return (
    <div className="w-full max-w-md mx-auto">
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
  );
};

export default QuizOptions;