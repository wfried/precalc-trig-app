import React from 'react';
import angles from '../data/angles';

/**
 * Reference Tables page with comprehensive data for the unit circle
 */
const ReferencePage = () => {
  return (
    <div className="w-full">
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-xl font-semibold mb-4 text-blue-800">Reference Tables</h2>
        
        <div className="space-y-8">
          {/* Unit Circle Values */}
          <section>
            <h3 className="text-lg font-semibold mb-3 text-blue-700">Unit Circle Values</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border">
                <thead>
                  <tr className="bg-blue-100">
                    <th className="py-2 px-3 border text-sm">Angle (Degrees)</th>
                    <th className="py-2 px-3 border text-sm">Angle (Radians)</th>
                    <th className="py-2 px-3 border text-sm">sin</th>
                    <th className="py-2 px-3 border text-sm">cos</th>
                    <th className="py-2 px-3 border text-sm">tan</th>
                    <th className="py-2 px-3 border text-sm">cot</th>
                    <th className="py-2 px-3 border text-sm">sec</th>
                    <th className="py-2 px-3 border text-sm">csc</th>
                  </tr>
                </thead>
                <tbody>
                  {angles.map((angle, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="py-2 px-3 border text-sm font-medium">{angle.deg}°</td>
                      <td className="py-2 px-3 border text-sm">{angle.exactLabel}</td>
                      <td className="py-2 px-3 border text-sm">{angle.sinExact}</td>
                      <td className="py-2 px-3 border text-sm">{angle.cosExact}</td>
                      <td className="py-2 px-3 border text-sm">{angle.tanExact}</td>
                      <td className="py-2 px-3 border text-sm">{angle.cotExact}</td>
                      <td className="py-2 px-3 border text-sm">{angle.secExact}</td>
                      <td className="py-2 px-3 border text-sm">{angle.cscExact}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
          
          {/* Important Identities */}
          <section>
            <h3 className="text-lg font-semibold mb-3 text-blue-700">Important Trigonometric Identities</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-medium mb-2">Pythagorean Identities</h4>
                <ul className="space-y-2">
                  <li>sin²θ + cos²θ = 1</li>
                  <li>1 + tan²θ = sec²θ</li>
                  <li>1 + cot²θ = csc²θ</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-medium mb-2">Reciprocal Identities</h4>
                <ul className="space-y-2">
                  <li>sin θ = 1/csc θ</li>
                  <li>cos θ = 1/sec θ</li>
                  <li>tan θ = 1/cot θ</li>
                  <li>csc θ = 1/sin θ</li>
                  <li>sec θ = 1/cos θ</li>
                  <li>cot θ = 1/tan θ</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-medium mb-2">Quotient Identities</h4>
                <ul className="space-y-2">
                  <li>tan θ = sin θ / cos θ</li>
                  <li>cot θ = cos θ / sin θ</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-medium mb-2">Co-Function Identities</h4>
                <ul className="space-y-2">
                  <li>sin(π/2 - θ) = cos θ</li>
                  <li>cos(π/2 - θ) = sin θ</li>
                  <li>tan(π/2 - θ) = cot θ</li>
                  <li>cot(π/2 - θ) = tan θ</li>
                  <li>sec(π/2 - θ) = csc θ</li>
                  <li>csc(π/2 - θ) = sec θ</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-medium mb-2">Even/Odd Identities</h4>
                <ul className="space-y-2">
                  <li>sin(-θ) = -sin θ</li>
                  <li>cos(-θ) = cos θ</li>
                  <li>tan(-θ) = -tan θ</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-medium mb-2">Sum and Difference Formulas</h4>
                <ul className="space-y-2">
                  <li>sin(α ± β) = sin α cos β ± cos α sin β</li>
                  <li>cos(α ± β) = cos α cos β ∓ sin α sin β</li>
                  <li>tan(α ± β) = (tan α ± tan β) / (1 ∓ tan α tan β)</li>
                </ul>
              </div>
            </div>
          </section>
          
          {/* Degrees to Radians Conversion */}
          <section>
            <h3 className="text-lg font-semibold mb-3 text-blue-700">Degrees to Radians Conversion</h3>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="mb-3">Remember: 180° = π radians</p>
              <p className="mb-3">To convert from degrees to radians: radians = degrees × (π/180)</p>
              <p className="mb-3">To convert from radians to degrees: degrees = radians × (180/π)</p>
              
              <div className="overflow-x-auto mt-4">
                <table className="min-w-full bg-white border">
                  <thead>
                    <tr className="bg-blue-100">
                      <th className="py-2 px-3 border">Degrees</th>
                      <th className="py-2 px-3 border">Radians (Exact)</th>
                      <th className="py-2 px-3 border">Radians (Decimal)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2 px-3 border">0°</td>
                      <td className="py-2 px-3 border">0</td>
                      <td className="py-2 px-3 border">0</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3 border">30°</td>
                      <td className="py-2 px-3 border">π/6</td>
                      <td className="py-2 px-3 border">≈ 0.5236</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3 border">45°</td>
                      <td className="py-2 px-3 border">π/4</td>
                      <td className="py-2 px-3 border">≈ 0.7854</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3 border">60°</td>
                      <td className="py-2 px-3 border">π/3</td>
                      <td className="py-2 px-3 border">≈ 1.0472</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3 border">90°</td>
                      <td className="py-2 px-3 border">π/2</td>
                      <td className="py-2 px-3 border">≈ 1.5708</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3 border">120°</td>
                      <td className="py-2 px-3 border">2π/3</td>
                      <td className="py-2 px-3 border">≈ 2.0944</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3 border">135°</td>
                      <td className="py-2 px-3 border">3π/4</td>
                      <td className="py-2 px-3 border">≈ 2.3562</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3 border">150°</td>
                      <td className="py-2 px-3 border">5π/6</td>
                      <td className="py-2 px-3 border">≈ 2.6180</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3 border">180°</td>
                      <td className="py-2 px-3 border">π</td>
                      <td className="py-2 px-3 border">≈ 3.1416</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3 border">270°</td>
                      <td className="py-2 px-3 border">3π/2</td>
                      <td className="py-2 px-3 border">≈ 4.7124</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3 border">360°</td>
                      <td className="py-2 px-3 border">2π</td>
                      <td className="py-2 px-3 border">≈ 6.2832</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
          
          {/* Inverse Trigonometric Functions */}
          <section>
            <h3 className="text-lg font-semibold mb-3 text-blue-700">Inverse Trigonometric Functions</h3>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="mb-3">Domain and range restrictions for inverses:</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-3 rounded border border-blue-200">
                  <h4 className="font-medium mb-2">sin⁻¹(x) or arcsin(x)</h4>
                  <p className="text-sm">Domain: [-1, 1]</p>
                  <p className="text-sm">Range: [-π/2, π/2]</p>
                </div>
                
                <div className="bg-white p-3 rounded border border-blue-200">
                  <h4 className="font-medium mb-2">cos⁻¹(x) or arccos(x)</h4>
                  <p className="text-sm">Domain: [-1, 1]</p>
                  <p className="text-sm">Range: [0, π]</p>
                </div>
                
                <div className="bg-white p-3 rounded border border-blue-200">
                  <h4 className="font-medium mb-2">tan⁻¹(x) or arctan(x)</h4>
                  <p className="text-sm">Domain: ℝ (all real numbers)</p>
                  <p className="text-sm">Range: (-π/2, π/2)</p>
                </div>
              </div>
              
              <p className="mt-4 mb-3">Common values of inverse trigonometric functions:</p>
              
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border">
                  <thead>
                    <tr className="bg-blue-100">
                      <th className="py-2 px-3 border">x</th>
                      <th className="py-2 px-3 border">sin⁻¹(x) in radians</th>
                      <th className="py-2 px-3 border">cos⁻¹(x) in radians</th>
                      <th className="py-2 px-3 border">tan⁻¹(x) in radians</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2 px-3 border">-1</td>
                      <td className="py-2 px-3 border">-π/2</td>
                      <td className="py-2 px-3 border">π</td>
                      <td className="py-2 px-3 border">-π/4</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3 border">-√3/2</td>
                      <td className="py-2 px-3 border">-π/3</td>
                      <td className="py-2 px-3 border">5π/6</td>
                      <td className="py-2 px-3 border">—</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3 border">-√2/2</td>
                      <td className="py-2 px-3 border">-π/4</td>
                      <td className="py-2 px-3 border">3π/4</td>
                      <td className="py-2 px-3 border">—</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3 border">-1/2</td>
                      <td className="py-2 px-3 border">-π/6</td>
                      <td className="py-2 px-3 border">2π/3</td>
                      <td className="py-2 px-3 border">—</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3 border">0</td>
                      <td className="py-2 px-3 border">0</td>
                      <td className="py-2 px-3 border">π/2</td>
                      <td className="py-2 px-3 border">0</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3 border">1/2</td>
                      <td className="py-2 px-3 border">π/6</td>
                      <td className="py-2 px-3 border">π/3</td>
                      <td className="py-2 px-3 border">—</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3 border">√2/2</td>
                      <td className="py-2 px-3 border">π/4</td>
                      <td className="py-2 px-3 border">π/4</td>
                      <td className="py-2 px-3 border">—</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3 border">√3/2</td>
                      <td className="py-2 px-3 border">π/3</td>
                      <td className="py-2 px-3 border">π/6</td>
                      <td className="py-2 px-3 border">—</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3 border">1</td>
                      <td className="py-2 px-3 border">π/2</td>
                      <td className="py-2 px-3 border">0</td>
                      <td className="py-2 px-3 border">π/4</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3 border">√3</td>
                      <td className="py-2 px-3 border">—</td>
                      <td className="py-2 px-3 border">—</td>
                      <td className="py-2 px-3 border">π/3</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ReferencePage;