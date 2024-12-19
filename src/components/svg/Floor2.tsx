import { SVGProps } from 'react';

interface Floor2Props extends SVGProps<SVGSVGElement> {
  fillColor: string;
  selectedShape: string;
}

const Floor2 = ({ fillColor, selectedShape, ...props }: Floor2Props) => (
  <svg width="500" height="500" xmlns="http://www.w3.org/2000/svg" {...props}>
    {/* Room A */}
    <rect x="10" y="10" width="150" height="200" fill="#f0f0f0" stroke="#000" />
    <text x="20" y="40" fontFamily="Arial" fontSize="20" fill="#000">Room A</text>
    <circle 
      id="path15851" 
      cx="85" 
      cy="110" 
      r="20" 
      fill={fillColor} 
      stroke="#000"
      style={{ opacity: selectedShape === 'all' || selectedShape === 'circle' ? 1 : 0.3 }}
    />

    {/* Room B */}
    <rect x="170" y="10" width="150" height="200" fill="#f0f0f0" stroke="#000" />
    <text x="180" y="40" fontFamily="Arial" fontSize="20" fill="#000">Room B</text>
    <polygon 
      id="path1529" 
      points="245,90 255,130 295,130 260,150 270,190 245,160 220,190 230,150 195,130 235,130" 
      fill={fillColor} 
      stroke="#000"
      style={{ opacity: selectedShape === 'all' || selectedShape === 'path' ? 1 : 0.3 }}
    />

    {/* Room C */}
    <rect x="330" y="10" width="150" height="200" fill="#f0f0f0" stroke="#000" />
    <text x="340" y="40" fontFamily="Arial" fontSize="20" fill="#000">Room C</text>
    <circle 
      id="path1585" 
      cx="405" 
      cy="110" 
      r="20" 
      fill={fillColor} 
      stroke="#000"
      style={{ opacity: selectedShape === 'all' || selectedShape === 'circle' ? 1 : 0.3 }}
    />

    {/* Hallway */}
    <rect x="10" y="220" width="470" height="50" fill="#d3d3d3" stroke="#000" />
    <text x="20" y="250" fontFamily="Arial" fontSize="20" fill="#000">Hallway</text>

    {/* Room D */}
    <rect x="10" y="280" width="150" height="200" fill="#f0f0f0" stroke="#000" />
    <text x="20" y="310" fontFamily="Arial" fontSize="20" fill="#000">Room D</text>
    <rect 
      id="rect1412" 
      x="60" 
      y="380" 
      width="50" 
      height="30" 
      fill={fillColor} 
      stroke="#000"
      style={{ opacity: selectedShape === 'all' || selectedShape === 'rect' ? 1 : 0.3 }}
    />

    {/* Room E */}
    <rect x="170" y="280" width="150" height="200" fill="#f0f0f0" stroke="#000" />
    <text x="180" y="310" fontFamily="Arial" fontSize="20" fill="#000">Room E</text>
    <rect 
      id="rect1408" 
      x="220" 
      y="380" 
      width="50" 
      height="30" 
      fill={fillColor} 
      stroke="#000"
      style={{ opacity: selectedShape === 'all' || selectedShape === 'rect' ? 1 : 0.3 }}
    />

    {/* Room F */}
    <rect x="330" y="280" width="150" height="200" fill="#f0f0f0" stroke="#000" />
    <text x="340" y="310" fontFamily="Arial" fontSize="20" fill="#000">Room F</text>
    <rect 
      id="rect1410" 
      x="380" 
      y="380" 
      width="50" 
      height="30" 
      fill={fillColor} 
      stroke="#000"
      style={{ opacity: selectedShape === 'all' || selectedShape === 'rect' ? 1 : 0.3 }}
    />
  </svg>
);

export default Floor2;
