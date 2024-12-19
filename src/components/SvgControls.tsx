import React from 'react';
import { cssColors } from '../constants/colors';

interface SvgControlsProps {
  rotation: number;
  selectedShape: 'all' | 'rect' | 'path' | 'circle';
  activeColor: string;
  onRotationToggle: () => void;
  onShapeFilter: (shape: 'all' | 'rect' | 'path' | 'circle') => void;
  onColorChange: (color: string) => void;
}

const selectedColors = [
  cssColors.crimson,
  cssColors.emerald,
  cssColors['blue-violet'],
  cssColors.gold,
  cssColors.cyan,
  cssColors.flame,
  cssColors['dark sky blue'],
  cssColors.purple,
  cssColors['yellow-orange'],
  cssColors['blue-green']
];

export const SvgControls: React.FC<SvgControlsProps> = ({
  rotation,
  selectedShape,
  activeColor,
  onRotationToggle,
  onShapeFilter,
  onColorChange,
}) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <button
          onClick={onRotationToggle}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Rotate Plan
        </button>

        <select
          onChange={(e) => onShapeFilter(e.target.value as any)}
          className="px-4 py-2 border rounded hover:border-blue-500 transition-colors"
          value={selectedShape}
        >
          <option value="all">All Shapes</option>
          <option value="rect">Rectangles</option>
          <option value="path">Stars</option>
          <option value="circle">Circles</option>
        </select>
      </div>

      <div>
        <h3 className="text-sm font-medium text-slate-700 mb-2">Color Theme</h3>
        <div className="flex flex-wrap gap-2">
          {selectedColors.map((color) => (
            <button
              key={color}
              onClick={() => onColorChange(color)}
              style={{ backgroundColor: color }}
              className="w-8 h-8 rounded-full shadow-md hover:scale-110 transition-transform duration-200 ease-in-out"
              title={`Select ${color}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
