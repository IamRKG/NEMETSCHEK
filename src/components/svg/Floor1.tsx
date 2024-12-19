import { SVGProps } from 'react';

interface Floor1Props extends SVGProps<SVGSVGElement> {
  fillColor: string;
  selectedShape: string;
}

const Floor1 = ({ fillColor, selectedShape, ...props }: Floor1Props) => (
  <svg width="500" height="500" xmlns="http://www.w3.org/2000/svg" {...props}>
    {/* Room 1 */}
    <rect x="10" y="10" width="200" height="150" fill="#f0f0f0" stroke="#000" />
    <text x="20" y="40" fontFamily="Arial" fontSize="20" fill="#000">Room 1</text>
    <rect 
      id="rect1408" 
      x="80" 
      y="85" 
      width="80" 
      height="40" 
      fill={fillColor} 
      stroke="#000"
      style={{ opacity: selectedShape === 'all' || selectedShape === 'rect' ? 1 : 0.3 }}
    />

    {/* Room 2 */}
    <rect x="220" y="10" width="200" height="150" fill="#f0f0f0" stroke="#000" />
    <text x="230" y="40" fontFamily="Arial" fontSize="20" fill="#000">Room 2</text>
    <rect 
      id="rect1410" 
      x="315" 
      y="85" 
      width="80" 
      height="40" 
      fill={fillColor} 
      stroke="#000"
      style={{ opacity: selectedShape === 'all' || selectedShape === 'rect' ? 1 : 0.3 }}
    />

    {/* Hallway */}
    <rect x="10" y="170" width="410" height="50" fill="#d3d3d3" stroke="#000" />
    <text x="20" y="200" fontFamily="Arial" fontSize="20" fill="#000">Hallway</text>

    {/* Room 3 */}
    <rect x="10" y="230" width="200" height="150" fill="#f0f0f0" stroke="#000" />
    <text x="20" y="260" fontFamily="Arial" fontSize="20" fill="#000">Room 3</text>

    {/* Room 4 */}
    <rect x="220" y="230" width="200" height="150" fill="#f0f0f0" stroke="#000" />
    <text x="230" y="260" fontFamily="Arial" fontSize="20" fill="#000">Room 4</text>
    <circle 
      id="path1585" 
      cx="320" 
      cy="325" 
      r="50" 
      fill={fillColor} 
      stroke="#000"
      style={{ opacity: selectedShape === 'all' || selectedShape === 'circle' ? 1 : 0.3 }}
    />
  </svg>
);

export default Floor1;
