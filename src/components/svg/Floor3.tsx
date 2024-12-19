import { SVGProps } from 'react';

interface Floor3Props extends SVGProps<SVGSVGElement> {
  fillColor: string;
  selectedShape: string;
}

const Floor3 = ({ fillColor, selectedShape, ...props }: Floor3Props) => (
  <svg width="600" height="600" xmlns="http://www.w3.org/2000/svg" {...props}>
    {/* Room 1 */}
    <rect x="10" y="10" width="180" height="150" fill="#f0f0f0" stroke="#000" />
    <text x="20" y="40" fontFamily="Arial" fontSize="20" fill="#000">Room 1</text>
    <rect 
      id="rect1410" 
      x="80" 
      y="70" 
      width="50" 
      height="30" 
      fill={fillColor} 
      stroke="#000"
      style={{ opacity: selectedShape === 'all' || selectedShape === 'rect' ? 1 : 0.3 }}
    />

    {/* Room 2 */}
    <rect x="200" y="10" width="180" height="150" fill="#f0f0f0" stroke="#000" />
    <text x="210" y="40" fontFamily="Arial" fontSize="20" fill="#000">Room 2</text>
    <polygon 
      id="path1529" 
      points="290,70 300,110 340,110 305,130 315,170 290,140 265,170 275,130 240,110 280,110" 
      fill={fillColor} 
      stroke="#000"
      style={{ opacity: selectedShape === 'all' || selectedShape === 'path' ? 1 : 0.3 }}
    />

    {/* Hallway */}
    <rect x="390" y="10" width="50" height="570" fill="#d3d3d3" stroke="#000" />
    <text x="400" y="300" fontFamily="Arial" fontSize="20" fill="#000" transform="rotate(90 400,300)">Hallway</text>

    {/* Room 3 */}
    <rect x="10" y="170" width="180" height="150" fill="#f0f0f0" stroke="#000" />
    <text x="20" y="200" fontFamily="Arial" fontSize="20" fill="#000">Room 3</text>
    <rect 
      id="rect1408" 
      x="80" 
      y="230" 
      width="50" 
      height="30" 
      fill={fillColor} 
      stroke="#000"
      style={{ opacity: selectedShape === 'all' || selectedShape === 'rect' ? 1 : 0.3 }}
    />

    {/* Room 4 */}
    <rect x="200" y="170" width="180" height="150" fill="#f0f0f0" stroke="#000" />
    <text x="210" y="200" fontFamily="Arial" fontSize="20" fill="#000">Room 4</text>
    <circle 
      id="path1585" 
      cx="290" 
      cy="245" 
      r="20" 
      fill={fillColor} 
      stroke="#000"
      style={{ opacity: selectedShape === 'all' || selectedShape === 'circle' ? 1 : 0.3 }}
    />

    {/* Room 5 */}
    <rect x="10" y="330" width="180" height="150" fill="#f0f0f0" stroke="#000" />
    <text x="20" y="360" fontFamily="Arial" fontSize="20" fill="#000">Room 5</text>
    <rect 
      id="rect1412" 
      x="80" 
      y="390" 
      width="50" 
      height="30" 
      fill={fillColor} 
      stroke="#000"
      style={{ opacity: selectedShape === 'all' || selectedShape === 'rect' ? 1 : 0.3 }}
    />

    {/* Workplaces Area */}
    <rect x="200" y="330" width="180" height="150" fill="#e0e0e0" stroke="#000" />
    <text x="210" y="360" fontFamily="Arial" fontSize="20" fill="#000">Workplaces</text>

    {/* Small squares in Workplaces Area */}
    <rect x="210" y="370" width="30" height="30" fill="#c0c0c0" stroke="#000" />
    <rect x="250" y="370" width="30" height="30" fill="#c0c0c0" stroke="#000" />
    <rect x="290" y="370" width="30" height="30" fill="#c0c0c0" stroke="#000" />
    <rect x="210" y="410" width="30" height="30" fill="#c0c0c0" stroke="#000" />
    <rect x="250" y="410" width="30" height="30" fill="#c0c0c0" stroke="#000" />
    <rect x="290" y="410" width="30" height="30" fill="#c0c0c0" stroke="#000" />
  </svg>
);

export default Floor3;
