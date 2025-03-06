import React, { useState } from 'react';

/**
 * Rotary Motion page explaining angular and linear concepts
 */
const RotaryPage = () => {
  const [radius, setRadius] = useState(5);
  const [rpm, setRpm] = useState(60);

  // Calculate angular velocity in radians per second
  const angularVelocity = rpm * Math.PI / 30; // ω = (π/30) × (rev/min)
  
  // Calculate linear velocity
  const linearVelocity = radius * angularVelocity; // v = r × ω

  // Calculate period
  const periodSeconds = 60 / rpm; // T = 60/rpm (seconds per revolution)

  return (
    <div className="w-full">
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-xl font-semibold mb-4 text-green-800">Rotary Motion</h2>
        
        <div className="space-y-8">
          {/* Angular vs Linear Motion Explanation */}
          <section>
            <h3 className="text-lg font-semibold mb-3 text-green-700">Angular vs. Linear Motion</h3>
            <div className="bg-green-50 p-4 rounded-lg">
              <p className="mb-3">In rotary motion, we distinguish between two types of measurements:</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-3 rounded border border-green-200">
                  <h4 className="font-medium mb-2 text-green-800">Angular Motion</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Measures rotation around an axis</li>
                    <li>Measured in radians or degrees</li>
                    <li>Angular displacement = θ</li>
                    <li>Angular velocity = ω (omega)</li>
                    <li>Angular acceleration = α (alpha)</li>
                  </ul>
                </div>
                
                <div className="bg-white p-3 rounded border border-green-200">
                  <h4 className="font-medium mb-2 text-green-800">Linear Motion</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Measures distance along the circular path</li>
                    <li>Measured in length units (m, cm, etc.)</li>
                    <li>Linear displacement = s = r × θ</li>
                    <li>Linear velocity = v = r × ω</li>
                    <li>Linear acceleration = a = r × α</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          
          {/* Key Concepts */}
          <section>
            <h3 className="text-lg font-semibold mb-3 text-green-700">Key Rotary Motion Concepts</h3>
            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-medium mb-2 text-green-800">Arc Length</h4>
                <p className="mb-2">The distance traveled along the circumference:</p>
                <div className="bg-white p-3 rounded text-center">
                  <span className="font-medium">s = r × θ</span>
                  <p className="mt-1 text-sm">(where θ is in radians)</p>
                </div>
                <p className="mt-2">This is why radian measure is natural for circular motion - the arc length equals the radius times the angle in radians.</p>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-medium mb-2 text-green-800">Angular Velocity</h4>
                <p className="mb-2">The rate of change of angular position:</p>
                <div className="bg-white p-3 rounded text-center">
                  <span className="font-medium">ω = dθ/dt</span>
                  <p className="mt-1 text-sm">(radians per second)</p>
                </div>
                <p className="mt-2">Common conversions:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>RPM to rad/s: ω = (π/30) × (rev/min)</li>
                  <li>Degrees/s to rad/s: ω = (π/180) × (degrees/s)</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-medium mb-2 text-green-800">Linear Velocity</h4>
                <p className="mb-2">The tangential speed of a point on the rotating object:</p>
                <div className="bg-white p-3 rounded text-center">
                  <span className="font-medium">v = r × ω</span>
                  <p className="mt-1 text-sm">(length units per second)</p>
                </div>
                <p className="mt-2">Points farther from the axis of rotation have greater linear velocity, even though they have the same angular velocity.</p>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-medium mb-2 text-green-800">Period and Frequency</h4>
                <p className="mb-2">The time to complete one revolution and revolutions per unit time:</p>
                <div className="bg-white p-3 rounded">
                  <div className="text-center mb-2">
                    <span className="font-medium">Period (T) = 2π/ω</span>
                    <p className="mt-1 text-sm">(seconds per revolution)</p>
                  </div>
                  <div className="text-center">
                    <span className="font-medium">Frequency (f) = ω/2π</span>
                    <p className="mt-1 text-sm">(revolutions per second, Hz)</p>
                  </div>
                </div>
                <p className="mt-2">Period and frequency are reciprocals: T = 1/f</p>
              </div>
            </div>
          </section>
          
          {/* Interactive Calculator */}
          <section>
            <h3 className="text-lg font-semibold mb-3 text-green-700">Interactive Rotary Motion Calculator</h3>
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-3 text-green-800">Input Values</h4>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Radius (cm):
                      </label>
                      <input 
                        type="number" 
                        className="border border-gray-300 p-2 rounded w-full"
                        value={radius}
                        onChange={e => setRadius(Math.max(0.1, parseFloat(e.target.value) || 0.1))}
                        min="0.1"
                        step="0.1"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Angular Velocity (RPM):
                      </label>
                      <input 
                        type="number" 
                        className="border border-gray-300 p-2 rounded w-full"
                        value={rpm}
                        onChange={e => setRpm(Math.max(1, parseFloat(e.target.value) || 1))}
                        min="1"
                        step="1"
                      />
                      <p className="text-sm text-gray-500 mt-1">Revolutions per minute</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium mb-3 text-green-800">Calculated Results</h4>
                  <div className="space-y-4">
                    <div className="bg-white p-3 rounded border border-green-200">
                      <div className="font-medium">Angular Velocity (ω):</div>
                      <div>{angularVelocity.toFixed(2)} rad/s</div>
                      <div className="text-sm text-gray-500">= {rpm} × (π/30)</div>
                    </div>
                    
                    <div className="bg-white p-3 rounded border border-green-200">
                      <div className="font-medium">Linear Velocity:</div>
                      <div>{linearVelocity.toFixed(2)} cm/s</div>
                      <div className="text-sm text-gray-500">= {radius} × {angularVelocity.toFixed(2)}</div>
                    </div>
                    
                    <div className="bg-white p-3 rounded border border-green-200">
                      <div className="font-medium">Period:</div>
                      <div>{periodSeconds.toFixed(2)} seconds per revolution</div>
                      <div className="text-sm text-gray-500">= 60/{rpm}</div>
                    </div>
                    
                    <div className="bg-white p-3 rounded border border-green-200">
                      <div className="font-medium">Frequency:</div>
                      <div>{(rpm/60).toFixed(2)} Hz</div>
                      <div className="text-sm text-gray-500">= {rpm}/60 revolutions per second</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Real-world Applications */}
          <section>
            <h3 className="text-lg font-semibold mb-3 text-green-700">Real-world Applications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-medium mb-2 text-green-800">Car Wheels</h4>
                <p className="mb-2">When a car drives at 60 mph (≈27 m/s) with wheels of radius 0.33m:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Angular velocity: ω = v/r = 27/0.33 ≈ 82 rad/s</li>
                  <li>RPM = 82 × (30/π) ≈ 780 rpm</li>
                  <li>Frequency ≈ 13 Hz</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-medium mb-2 text-green-800">Clock Hands</h4>
                <p className="mb-2">The hands of an analog clock rotate at different rates:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Hour hand: ω = 2π/12 hours = π/6 rad/hour ≈ 0.00015 rad/s</li>
                  <li>Minute hand: ω = 2π/60 minutes = π/30 rad/min ≈ 0.0017 rad/s</li>
                  <li>Second hand: ω = 2π/60 seconds = π/30 rad/s ≈ 0.105 rad/s</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-medium mb-2 text-green-800">Electric Motors</h4>
                <p className="mb-2">Common motor speeds and their conversions:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>3600 RPM (typical small motor) = 377 rad/s</li>
                  <li>1800 RPM (typical AC motor) = 188 rad/s</li>
                  <li>7200 RPM (hard drive) = 754 rad/s</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-medium mb-2 text-green-800">Earth's Rotation</h4>
                <p className="mb-2">The Earth completes one rotation in 24 hours:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Angular velocity: ω = 2π/24 hours ≈ 7.27 × 10^-5 rad/s</li>
                  <li>Linear velocity at equator (r ≈ 6371 km): v = 463 m/s</li>
                  <li>Linear velocity decreases with latitude (cos(lat))</li>
                </ul>
              </div>
            </div>
          </section>
          
          {/* Practice Problems */}
          <section>
            <h3 className="text-lg font-semibold mb-3 text-green-700">Practice Problems</h3>
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium mb-2 text-green-800">Problem 1</h4>
                  <p>A wheel with radius 20 cm rotates at 120 RPM. Calculate:</p>
                  <ol className="list-decimal pl-5 space-y-1">
                    <li>Angular velocity in rad/s</li>
                    <li>Linear velocity at the rim</li>
                    <li>Time to complete one revolution</li>
                  </ol>
                  <details className="mt-2">
                    <summary className="cursor-pointer text-green-700">Show Solution</summary>
                    <div className="p-3 bg-white mt-2 rounded">
                      <ol className="list-decimal pl-5 space-y-1">
                        <li>ω = 120 × (π/30) = 4π ≈ 12.57 rad/s</li>
                        <li>v = r × ω = 0.2 × 12.57 = 2.51 m/s</li>
                        <li>T = 60/120 = 0.5 seconds</li>
                      </ol>
                    </div>
                  </details>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2 text-green-800">Problem 2</h4>
                  <p>A point on a rotating disk moves with a linear velocity of 5 m/s. If the radius to this point is 25 cm, find:</p>
                  <ol className="list-decimal pl-5 space-y-1">
                    <li>Angular velocity in rad/s</li>
                    <li>Angular velocity in RPM</li>
                    <li>Frequency in Hz</li>
                  </ol>
                  <details className="mt-2">
                    <summary className="cursor-pointer text-green-700">Show Solution</summary>
                    <div className="p-3 bg-white mt-2 rounded">
                      <ol className="list-decimal pl-5 space-y-1">
                        <li>ω = v/r = 5/0.25 = 20 rad/s</li>
                        <li>RPM = 20 × (30/π) ≈ 191 RPM</li>
                        <li>f = ω/(2π) = 20/(2π) ≈ 3.18 Hz</li>
                      </ol>
                    </div>
                  </details>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2 text-green-800">Problem 3</h4>
                  <p>A Ferris wheel with a radius of 10 meters completes one revolution every 40 seconds. Determine:</p>
                  <ol className="list-decimal pl-5 space-y-1">
                    <li>Angular velocity in rad/s</li>
                    <li>Linear velocity of a passenger</li>
                    <li>How far does a passenger travel in 2 minutes?</li>
                  </ol>
                  <details className="mt-2">
                    <summary className="cursor-pointer text-green-700">Show Solution</summary>
                    <div className="p-3 bg-white mt-2 rounded">
                      <ol className="list-decimal pl-5 space-y-1">
                        <li>ω = 2π/40 = π/20 ≈ 0.157 rad/s</li>
                        <li>v = r × ω = 10 × 0.157 = 1.57 m/s</li>
                        <li>Distance = v × t = 1.57 × 120 = 188.4 m (or 3 revolutions × 2π × 10 = 188.5 m)</li>
                      </ol>
                    </div>
                  </details>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default RotaryPage;