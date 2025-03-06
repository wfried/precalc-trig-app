import React from 'react';

/**
 * Patterns and Tricks page with memory aids and patterns for the unit circle
 */
const PatternsPage = () => {
  return (
    <div className="w-full">
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-xl font-semibold mb-4 text-purple-800">Patterns & Memory Tricks</h2>
        
        <div className="space-y-8">
          {/* Special Angles Pattern */}
          <section>
            <h3 className="text-lg font-semibold mb-3 text-purple-700">Special Angles Pattern</h3>
            <div className="p-4 bg-purple-50 rounded-lg">
              <p className="mb-3">For the special angles 0°, 30°, 45°, 60°, 90°, the sine and cosine values follow a pattern:</p>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr className="bg-purple-100">
                      <th className="py-2 px-4 border">Angle</th>
                      <th className="py-2 px-4 border">sin</th>
                      <th className="py-2 px-4 border">cos</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2 px-4 border font-medium">0°</td>
                      <td className="py-2 px-4 border">0</td>
                      <td className="py-2 px-4 border">1</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border font-medium">30°</td>
                      <td className="py-2 px-4 border">1/2</td>
                      <td className="py-2 px-4 border">√3/2</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border font-medium">45°</td>
                      <td className="py-2 px-4 border">√2/2</td>
                      <td className="py-2 px-4 border">√2/2</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border font-medium">60°</td>
                      <td className="py-2 px-4 border">√3/2</td>
                      <td className="py-2 px-4 border">1/2</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border font-medium">90°</td>
                      <td className="py-2 px-4 border">1</td>
                      <td className="py-2 px-4 border">0</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-3">Notice that sine increases from 0 to 1, while cosine decreases from 1 to 0.</p>
            </div>
          </section>
          
          {/* Root Pattern */}
          <section>
            <h3 className="text-lg font-semibold mb-3 text-purple-700">The "Root" Pattern</h3>
            <div className="p-4 bg-purple-50 rounded-lg">
              <p className="mb-3">For the first quadrant special angles, you can use this pattern to remember the values:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium mb-2">For Sine:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>0° → 0</li>
                    <li>30° → 1/2</li>
                    <li>45° → √2/2</li>
                    <li>60° → √3/2</li>
                    <li>90° → 1</li>
                  </ul>
                  <p className="mt-2 text-sm">Notice the pattern: 0, √1/2, √2/2, √3/2, √4/2</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">For Cosine:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>0° → 1</li>
                    <li>30° → √3/2</li>
                    <li>45° → √2/2</li>
                    <li>60° → 1/2</li>
                    <li>90° → 0</li>
                  </ul>
                  <p className="mt-2 text-sm">Notice the pattern: √4/2, √3/2, √2/2, √1/2, 0</p>
                </div>
              </div>
            </div>
          </section>
          
          {/* ASTC Rule */}
          <section>
            <h3 className="text-lg font-semibold mb-3 text-purple-700">ASTC Rule ("All Students Take Calculus")</h3>
            <div className="p-4 bg-purple-50 rounded-lg">
              <p className="mb-4">Use this mnemonic to remember in which quadrants the trigonometric functions are positive:</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-3 rounded border border-purple-200">
                  <h4 className="font-medium mb-2">A - All</h4>
                  <p>In Quadrant I (0° to 90°), all trig functions are positive.</p>
                </div>
                <div className="bg-white p-3 rounded border border-purple-200">
                  <h4 className="font-medium mb-2">S - Sine</h4>
                  <p>In Quadrant II (90° to 180°), only sine is positive.</p>
                </div>
                <div className="bg-white p-3 rounded border border-purple-200">
                  <h4 className="font-medium mb-2">T - Tangent</h4>
                  <p>In Quadrant III (180° to 270°), only tangent is positive.</p>
                </div>
                <div className="bg-white p-3 rounded border border-purple-200">
                  <h4 className="font-medium mb-2">C - Cosine</h4>
                  <p>In Quadrant IV (270° to 360°), only cosine is positive.</p>
                </div>
              </div>
            </div>
          </section>
          
          {/* CAST Rule */}
          <section>
            <h3 className="text-lg font-semibold mb-3 text-purple-700">The CAST Rule</h3>
            <div className="p-4 bg-purple-50 rounded-lg">
              <p className="mb-3">Another way to remember the signs of trigonometric functions in different quadrants:</p>
              <div className="flex justify-center">
                <div className="relative w-60 h-60">
                  {/* Coordinate system */}
                  <div className="absolute top-0 left-0 w-full h-full">
                    <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-400"></div>
                    <div className="absolute top-0 left-1/2 w-0.5 h-full bg-gray-400"></div>
                  </div>
                  
                  {/* Quadrants */}
                  <div className="absolute top-0 right-0 w-1/2 h-1/2 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-xl font-bold text-purple-700">I</div>
                      <div className="mt-1">All +</div>
                    </div>
                  </div>
                  <div className="absolute top-0 left-0 w-1/2 h-1/2 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-xl font-bold text-purple-700">II</div>
                      <div className="mt-1">Sin +</div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 w-1/2 h-1/2 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-xl font-bold text-purple-700">III</div>
                      <div className="mt-1">Tan +</div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 right-0 w-1/2 h-1/2 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-xl font-bold text-purple-700">IV</div>
                      <div className="mt-1">Cos +</div>
                    </div>
                  </div>
                  
                  {/* CAST letters */}
                  <div className="absolute top-3 right-3 text-2xl font-bold text-blue-700">C</div>
                  <div className="absolute top-3 left-3 text-2xl font-bold text-blue-700">A</div>
                  <div className="absolute bottom-3 left-3 text-2xl font-bold text-blue-700">S</div>
                  <div className="absolute bottom-3 right-3 text-2xl font-bold text-blue-700">T</div>
                </div>
              </div>
              <p className="mt-4 text-center">Going counterclockwise: <strong>C</strong>osine (IV), <strong>A</strong>ll (I), <strong>S</strong>ine (II), <strong>T</strong>angent (III)</p>
            </div>
          </section>
          
          {/* Number Line Trick */}
          <section>
            <h3 className="text-lg font-semibold mb-3 text-purple-700">Special Angles Number Line Trick</h3>
            <div className="p-4 bg-purple-50 rounded-lg">
              <p className="mb-3">For angles 0°, 30°, 45°, 60°, 90°, sine values increase like a number line from 0 to 1 with specific patterns:</p>
              <div className="flex justify-center mb-4">
                <div className="w-full max-w-lg bg-white p-3 rounded">
                  <div className="relative h-16">
                    <div className="absolute top-8 left-0 right-0 h-0.5 bg-gray-500"></div>
                    
                    {/* Markers */}
                    <div className="absolute top-8 left-0 h-3 w-0.5 bg-gray-500"></div>
                    <div className="absolute top-8 left-1/4 h-3 w-0.5 bg-gray-500"></div>
                    <div className="absolute top-8 left-3/8 h-3 w-0.5 bg-gray-500"></div>
                    <div className="absolute top-8 left-1/2 h-3 w-0.5 bg-gray-500"></div>
                    <div className="absolute top-8 right-0 h-3 w-0.5 bg-gray-500"></div>
                    
                    {/* Values */}
                    <div className="absolute top-0 left-0 transform -translate-x-1/2 text-center">
                      <div className="font-medium">0°</div>
                      <div className="mt-8">0</div>
                    </div>
                    <div className="absolute top-0 left-1/4 transform -translate-x-1/2 text-center">
                      <div className="font-medium">30°</div>
                      <div className="mt-8">1/2</div>
                    </div>
                    <div className="absolute top-0 left-3/8 transform -translate-x-1/2 text-center">
                      <div className="font-medium">45°</div>
                      <div className="mt-8">√2/2</div>
                    </div>
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-center">
                      <div className="font-medium">60°</div>
                      <div className="mt-8">√3/2</div>
                    </div>
                    <div className="absolute top-0 right-0 transform translate-x-1/2 text-center">
                      <div className="font-medium">90°</div>
                      <div className="mt-8">1</div>
                    </div>
                  </div>
                </div>
              </div>
              <p>And cosine values decrease from 1 to 0 in the exact opposite order.</p>
            </div>
          </section>
          
          {/* Pythagorean Identities */}
          <section>
            <h3 className="text-lg font-semibold mb-3 text-purple-700">Pythagorean Identities</h3>
            <div className="p-4 bg-purple-50 rounded-lg">
              <p className="mb-3">These relationships always hold true and can help you find unknown values:</p>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded">
                  <p className="text-center font-medium text-lg">sin²θ + cos²θ = 1</p>
                </div>
                <div className="bg-white p-3 rounded">
                  <p className="text-center font-medium text-lg">1 + tan²θ = sec²θ</p>
                </div>
                <div className="bg-white p-3 rounded">
                  <p className="text-center font-medium text-lg">1 + cot²θ = csc²θ</p>
                </div>
              </div>
            </div>
          </section>
          
          {/* Reference Angle Method */}
          <section>
            <h3 className="text-lg font-semibold mb-3 text-purple-700">Reference Angle Method</h3>
            <div className="p-4 bg-purple-50 rounded-lg">
              <p className="mb-3">To find trigonometric values for any angle:</p>
              <ol className="list-decimal pl-5 space-y-2">
                <li>Find the reference angle (acute angle to the x-axis)</li>
                <li>Find the trigonometric value for the reference angle</li>
                <li>Apply the appropriate sign based on the quadrant</li>
              </ol>
              
              <div className="mt-4 bg-white p-3 rounded">
                <h4 className="font-medium mb-2">Example: sin(225°)</h4>
                <ol className="list-decimal pl-5 space-y-1">
                  <li>Reference angle = 225° - 180° = 45°</li>
                  <li>sin(45°) = √2/2</li>
                  <li>225° is in quadrant III where sine is negative</li>
                  <li>Therefore, sin(225°) = -sin(45°) = -√2/2</li>
                </ol>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PatternsPage;