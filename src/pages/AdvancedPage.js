import React, { useState, useEffect, useRef } from 'react';

/**
 * Advanced Concepts page covers advanced trigonometric topics
 */
const AdvancedPage = () => {
  const [activeTab, setActiveTab] = useState('waveforms');
  const canvasRef = useRef(null);
  const [amplitude, setAmplitude] = useState(1);
  const [period, setPeriod] = useState(2 * Math.PI);
  const [phaseShift, setPhaseShift] = useState(0);
  const [waveType, setWaveType] = useState('sine');
  
  // Draw the waveform on the canvas
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    
    // Clear canvas
    ctx.clearRect(0, 0, width, height);
    
    // Draw coordinate axes
    ctx.strokeStyle = '#ccc';
    ctx.lineWidth = 1;
    
    // x-axis
    ctx.beginPath();
    ctx.moveTo(0, height / 2);
    ctx.lineTo(width, height / 2);
    ctx.stroke();
    
    // y-axis
    ctx.beginPath();
    ctx.moveTo(width / 2, 0);
    ctx.lineTo(width / 2, height);
    ctx.stroke();
    
    // Draw the wave
    ctx.strokeStyle = '#3b82f6';
    ctx.lineWidth = 2;
    ctx.beginPath();
    
    const xScale = width / (4 * Math.PI); // Scale to fit 2 complete cycles
    const yScale = height / 4; // Scale to fit within canvas
    
    for (let x = 0; x < width; x++) {
      const t = (x - width / 2) / xScale;
      const scaledT = (2 * Math.PI / period) * (t - phaseShift);
      
      let y;
      if (waveType === 'sine') {
        y = amplitude * Math.sin(scaledT);
      } else if (waveType === 'cosine') {
        y = amplitude * Math.cos(scaledT);
      } else if (waveType === 'tangent') {
        y = amplitude * Math.tan(scaledT);
        // Clamp y to avoid very large values
        if (y > 2) y = 2;
        if (y < -2) y = -2;
      }
      
      // Convert to canvas coordinates
      const canvasY = height / 2 - y * yScale;
      
      if (x === 0) {
        ctx.moveTo(x, canvasY);
      } else {
        ctx.lineTo(x, canvasY);
      }
    }
    
    ctx.stroke();
    
    // Label the axes
    ctx.fillStyle = '#000';
    ctx.font = '12px Arial';
    ctx.fillText('0', width / 2 + 5, height / 2 + 15);
    
    // x-axis labels
    ctx.fillText('-2π', width / 2 - 2 * Math.PI * xScale, height / 2 + 15);
    ctx.fillText('-π', width / 2 - Math.PI * xScale, height / 2 + 15);
    ctx.fillText('π', width / 2 + Math.PI * xScale, height / 2 + 15);
    ctx.fillText('2π', width / 2 + 2 * Math.PI * xScale, height / 2 + 15);
    
    // y-axis labels
    ctx.fillText('1', width / 2 + 5, height / 2 - yScale);
    ctx.fillText('-1', width / 2 + 5, height / 2 + yScale);
    
  }, [amplitude, period, phaseShift, waveType]);

  return (
    <div className="w-full">
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-xl font-semibold mb-4 text-indigo-800">Advanced Concepts</h2>
        
        {/* Navigation Tabs */}
        <div className="flex flex-wrap border-b border-gray-200 mb-6">
          <button
            className={`mr-4 py-2 px-4 font-medium ${activeTab === 'waveforms' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500'}`}
            onClick={() => setActiveTab('waveforms')}
          >
            Waveforms
          </button>
          <button
            className={`mr-4 py-2 px-4 font-medium ${activeTab === 'identities' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500'}`}
            onClick={() => setActiveTab('identities')}
          >
            Double-Angle Identities
          </button>
          <button
            className={`mr-4 py-2 px-4 font-medium ${activeTab === 'polar' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500'}`}
            onClick={() => setActiveTab('polar')}
          >
            Polar Coordinates
          </button>
          <button
            className={`mr-4 py-2 px-4 font-medium ${activeTab === 'complex' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500'}`}
            onClick={() => setActiveTab('complex')}
          >
            Complex Numbers
          </button>
        </div>
        
        {/* Waveforms Tab */}
        {activeTab === 'waveforms' && (
          <div className="space-y-6">
            <section>
              <h3 className="text-lg font-semibold mb-3 text-indigo-700">Sinusoidal Waveforms</h3>
              <p className="mb-4">Sine and cosine functions create periodic waveforms that appear frequently in nature, physics, and engineering.</p>
              
              <div className="bg-indigo-50 p-4 rounded-lg">
                <h4 className="font-medium mb-3">General Form:</h4>
                <div className="bg-white p-3 rounded text-center">
                  <p className="font-medium">y = A · sin(B(x - C)) + D</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-3 text-sm">
                    <div>A = amplitude</div>
                    <div>B = 2π/period</div>
                    <div>C = phase shift</div>
                    <div>D = vertical shift</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <h4 className="font-medium mb-3">Interactive Wave Explorer</h4>
                <div className="mb-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Wave Type:
                      </label>
                      <select 
                        className="border border-gray-300 p-2 rounded w-full"
                        value={waveType}
                        onChange={e => setWaveType(e.target.value)}
                      >
                        <option value="sine">Sine</option>
                        <option value="cosine">Cosine</option>
                        <option value="tangent">Tangent</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Amplitude:
                      </label>
                      <input 
                        type="range" 
                        className="w-full"
                        min="0.1"
                        max="2"
                        step="0.1"
                        value={amplitude}
                        onChange={e => setAmplitude(parseFloat(e.target.value))}
                      />
                      <div className="text-sm text-gray-500 text-right">{amplitude.toFixed(1)}</div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Period:
                      </label>
                      <input 
                        type="range" 
                        className="w-full"
                        min={Math.PI / 2}
                        max={4 * Math.PI}
                        step={Math.PI / 4}
                        value={period}
                        onChange={e => setPeriod(parseFloat(e.target.value))}
                      />
                      <div className="text-sm text-gray-500 text-right">{(period / Math.PI).toFixed(2)}π</div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phase Shift:
                      </label>
                      <input 
                        type="range" 
                        className="w-full"
                        min={-Math.PI}
                        max={Math.PI}
                        step={Math.PI / 8}
                        value={phaseShift}
                        onChange={e => setPhaseShift(parseFloat(e.target.value))}
                      />
                      <div className="text-sm text-gray-500 text-right">{(phaseShift / Math.PI).toFixed(2)}π</div>
                    </div>
                  </div>
                  
                  <div className="border border-gray-300 rounded">
                    <canvas ref={canvasRef} width="600" height="300" className="w-full h-auto" />
                  </div>
                  
                  <div className="mt-4">
                    <h5 className="font-medium">Current Equation:</h5>
                    <div className="bg-gray-100 p-2 rounded text-center">
                      {waveType === 'sine' && `y = ${amplitude.toFixed(1)} · sin(${(2 * Math.PI / period).toFixed(2)}(x - ${(phaseShift).toFixed(2)}))`}
                      {waveType === 'cosine' && `y = ${amplitude.toFixed(1)} · cos(${(2 * Math.PI / period).toFixed(2)}(x - ${(phaseShift).toFixed(2)}))`}
                      {waveType === 'tangent' && `y = ${amplitude.toFixed(1)} · tan(${(2 * Math.PI / period).toFixed(2)}(x - ${(phaseShift).toFixed(2)}))`}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}
        
        {/* Double-Angle Identities Tab */}
        {activeTab === 'identities' && (
          <div className="space-y-6">
            <section>
              <h3 className="text-lg font-semibold mb-3 text-indigo-700">Double-Angle Identities</h3>
              <p className="mb-4">These formulas relate trigonometric functions of double angles (2θ) to functions of the original angle (θ).</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h4 className="font-medium mb-3">Double-Angle Formulas</h4>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded">
                      <p className="font-medium">sin(2θ) = 2·sin(θ)·cos(θ)</p>
                    </div>
                    <div className="bg-white p-3 rounded">
                      <p className="font-medium">cos(2θ) = cos²(θ) - sin²(θ)</p>
                    </div>
                    <div className="bg-white p-3 rounded">
                      <p className="font-medium">cos(2θ) = 2·cos²(θ) - 1</p>
                    </div>
                    <div className="bg-white p-3 rounded">
                      <p className="font-medium">cos(2θ) = 1 - 2·sin²(θ)</p>
                    </div>
                    <div className="bg-white p-3 rounded">
                      <p className="font-medium">tan(2θ) = 2·tan(θ)/(1 - tan²(θ))</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h4 className="font-medium mb-3">Power-Reduction Formulas</h4>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded">
                      <p className="font-medium">sin²(θ) = (1 - cos(2θ))/2</p>
                    </div>
                    <div className="bg-white p-3 rounded">
                      <p className="font-medium">cos²(θ) = (1 + cos(2θ))/2</p>
                    </div>
                    <div className="bg-white p-3 rounded">
                      <p className="font-medium">tan²(θ) = (1 - cos(2θ))/(1 + cos(2θ))</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 bg-indigo-50 p-4 rounded-lg">
                <h4 className="font-medium mb-3">Example Application</h4>
                <div className="bg-white p-3 rounded">
                  <h5 className="font-medium mb-2">Problem: Verify that cos(2θ) = cos²(θ) - sin²(θ) when θ = π/6</h5>
                  <div className="space-y-2">
                    <p>Left side: cos(2·π/6) = cos(π/3) = 1/2</p>
                    <p>Right side: cos²(π/6) - sin²(π/6) = (√3/2)² - (1/2)² = 3/4 - 1/4 = 1/2</p>
                    <p>Therefore, both sides equal 1/2, verifying the identity.</p>
                  </div>
                </div>
              </div>
            </section>
            
            <section>
              <h3 className="text-lg font-semibold mb-3 text-indigo-700">Half-Angle Identities</h3>
              <p className="mb-4">These formulas express trigonometric functions of half angles (θ/2) in terms of functions of the original angle (θ).</p>
              
              <div className="bg-indigo-50 p-4 rounded-lg">
                <h4 className="font-medium mb-3">Half-Angle Formulas</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-3 rounded">
                    <p className="font-medium">sin(θ/2) = ±√((1 - cos(θ))/2)</p>
                    <p className="text-sm text-gray-500 mt-1">+ if θ/2 is in Quadrants I or II; - if in III or IV</p>
                  </div>
                  <div className="bg-white p-3 rounded">
                    <p className="font-medium">cos(θ/2) = ±√((1 + cos(θ))/2)</p>
                    <p className="text-sm text-gray-500 mt-1">+ if θ/2 is in Quadrants I or IV; - if in II or III</p>
                  </div>
                  <div className="bg-white p-3 rounded">
                    <p className="font-medium">tan(θ/2) = (1 - cos(θ))/sin(θ)</p>
                  </div>
                  <div className="bg-white p-3 rounded">
                    <p className="font-medium">tan(θ/2) = sin(θ)/(1 + cos(θ))</p>
                  </div>
                </div>
              </div>
            </section>
            
            <section>
              <h3 className="text-lg font-semibold mb-3 text-indigo-700">Product-to-Sum Identities</h3>
              <p className="mb-4">These formulas convert products of trigonometric functions to sums or differences.</p>
              
              <div className="bg-indigo-50 p-4 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-3 rounded">
                    <p className="font-medium">sin(α)·sin(β) = (cos(α-β) - cos(α+β))/2</p>
                  </div>
                  <div className="bg-white p-3 rounded">
                    <p className="font-medium">cos(α)·cos(β) = (cos(α-β) + cos(α+β))/2</p>
                  </div>
                  <div className="bg-white p-3 rounded">
                    <p className="font-medium">sin(α)·cos(β) = (sin(α+β) + sin(α-β))/2</p>
                  </div>
                  <div className="bg-white p-3 rounded">
                    <p className="font-medium">cos(α)·sin(β) = (sin(α+β) - sin(α-β))/2</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}
        
        {/* Polar Coordinates Tab */}
        {activeTab === 'polar' && (
          <div className="space-y-6">
            <section>
              <h3 className="text-lg font-semibold mb-3 text-indigo-700">Polar Coordinates</h3>
              <p className="mb-4">Polar coordinates represent points in a plane using a distance from the origin (r) and an angle (θ) from the positive x-axis.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h4 className="font-medium mb-3">Conversion Formulas</h4>
                  <div className="space-y-4">
                    <div>
                      <h5 className="mb-2">Cartesian to Polar:</h5>
                      <div className="bg-white p-3 rounded space-y-2">
                        <p>r = √(x² + y²)</p>
                        <p>θ = tan⁻¹(y/x)</p>
                        <p className="text-sm text-gray-500">Note: Adjust θ based on the quadrant</p>
                      </div>
                    </div>
                    
                    <div>
                      <h5 className="mb-2">Polar to Cartesian:</h5>
                      <div className="bg-white p-3 rounded space-y-2">
                        <p>x = r·cos(θ)</p>
                        <p>y = r·sin(θ)</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h4 className="font-medium mb-3">Properties of Polar Coordinates</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Points can have multiple polar representations:</li>
                    <ul className="pl-5 space-y-1">
                      <li>(r, θ) = (r, θ + 2nπ) for any integer n</li>
                      <li>(-r, θ) = (r, θ + π)</li>
                    </ul>
                    <li>r can be negative, indicating a point in the opposite direction</li>
                    <li>The origin is (0, θ) for any angle θ</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 bg-indigo-50 p-4 rounded-lg">
                <h4 className="font-medium mb-3">Polar Curves</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white p-3 rounded text-center">
                    <h5 className="font-medium mb-2">Circle</h5>
                    <p>r = a (constant)</p>
                    <img src="https://mathworld.wolfram.com/images/eps-svg/PolarCoordinates_800.svg" alt="Circle in polar coordinates" className="h-32 mx-auto mt-2" />
                  </div>
                  
                  <div className="bg-white p-3 rounded text-center">
                    <h5 className="font-medium mb-2">Cardioid</h5>
                    <p>r = a(1 + cos(θ))</p>
                    <img src="https://mathworld.wolfram.com/images/eps-svg/Cardioid_700.svg" alt="Cardioid in polar coordinates" className="h-32 mx-auto mt-2" />
                  </div>
                  
                  <div className="bg-white p-3 rounded text-center">
                    <h5 className="font-medium mb-2">Rose</h5>
                    <p>r = a·cos(nθ)</p>
                    <img src="https://mathworld.wolfram.com/images/eps-svg/Rose_1000.svg" alt="Rose curve in polar coordinates" className="h-32 mx-auto mt-2" />
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}
        
        {/* Complex Numbers Tab */}
        {activeTab === 'complex' && (
          <div className="space-y-6">
            <section>
              <h3 className="text-lg font-semibold mb-3 text-indigo-700">Complex Numbers and Trigonometry</h3>
              <p className="mb-4">Complex numbers and trigonometry are deeply connected through polar representation and Euler's formula.</p>
              
              <div className="bg-indigo-50 p-4 rounded-lg">
                <h4 className="font-medium mb-3">Euler's Formula</h4>
                <div className="bg-white p-3 rounded text-center">
                  <p className="font-medium text-lg">e<sup>iθ</sup> = cos(θ) + i·sin(θ)</p>
                  <p className="mt-2">This remarkable equation connects complex exponentials to trigonometric functions.</p>
                </div>
              </div>
              
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h4 className="font-medium mb-3">Polar Form of Complex Numbers</h4>
                  <div className="bg-white p-3 rounded space-y-3">
                    <p>A complex number z = a + bi can be written in polar form as:</p>
                    <p className="font-medium text-center">z = r·(cos(θ) + i·sin(θ)) = r·e<sup>iθ</sup></p>
                    <p>Where:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>r = |z| = √(a² + b²) is the modulus</li>
                      <li>θ = arg(z) = tan⁻¹(b/a) is the argument</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h4 className="font-medium mb-3">De Moivre's Formula</h4>
                  <div className="bg-white p-3 rounded space-y-3">
                    <p className="font-medium text-center">[r·(cos(θ) + i·sin(θ))]<sup>n</sup> = r<sup>n</sup>·(cos(nθ) + i·sin(nθ))</p>
                    <p>Or equivalently:</p>
                    <p className="font-medium text-center">(r·e<sup>iθ</sup>)<sup>n</sup> = r<sup>n</sup>·e<sup>inθ</sup></p>
                    <p>This formula is extremely useful for finding powers of complex numbers and for deriving multiple-angle formulas.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 bg-indigo-50 p-4 rounded-lg">
                <h4 className="font-medium mb-3">Applications</h4>
                <div className="space-y-4">
                  <div className="bg-white p-3 rounded">
                    <h5 className="font-medium mb-2">Finding nth Roots of Complex Numbers</h5>
                    <p>The n different nth roots of z = r·e<sup>iθ</sup> are:</p>
                    <p className="font-medium text-center mt-2">w<sub>k</sub> = r<sup>1/n</sup>·e<sup>i(θ+2πk)/n</sup></p>
                    <p className="text-center mt-1">for k = 0, 1, 2, ..., n-1</p>
                  </div>
                  
                  <div className="bg-white p-3 rounded">
                    <h5 className="font-medium mb-2">Deriving Trigonometric Identities</h5>
                    <p>From Euler's formula, we can derive:</p>
                    <div className="space-y-2 mt-2">
                      <p>cos(θ) = (e<sup>iθ</sup> + e<sup>-iθ</sup>)/2</p>
                      <p>sin(θ) = (e<sup>iθ</sup> - e<sup>-iθ</sup>)/(2i)</p>
                    </div>
                    <p className="mt-2">These expressions can be used to derive many trigonometric identities.</p>
                  </div>
                  
                  <div className="bg-white p-3 rounded">
                    <h5 className="font-medium mb-2">Signal Processing</h5>
                    <p>Complex exponentials e<sup>iωt</sup> are used in Fourier analysis to represent periodic signals as sums of sine and cosine functions.</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdvancedPage;