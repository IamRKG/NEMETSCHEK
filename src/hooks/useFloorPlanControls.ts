import { useState, useCallback } from 'react';
import { ShapeType } from '../types/location';
import { selectedColors } from '../constants/colors';

const shapeTypes = {
  rect: ['rect1408', 'rect1410', 'rect1412'],
  circle: ['path1585', 'path15851'],
  path: ['path1529']
};

export const useFloorPlanControls = () => {
  const [rotation, setRotation] = useState(0);
  const [activeColor, setActiveColor] = useState(selectedColors[0]);
  const [selectedShape, setSelectedShape] = useState<ShapeType>('all');

  const toggleRotation = useCallback(() => {
    setRotation(prev => prev === 0 ? 180 : 0);
  }, []);

  const handleColorChange = useCallback((color: string) => {
    setActiveColor(color);
  }, []);

  const filterByShape = useCallback((shape: ShapeType) => {
    setSelectedShape(shape);
    Object.entries(shapeTypes).forEach(([type, ids]) => {
      ids.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
          element.style.opacity = shape === 'all' || shape === type ? '1' : '0.3';
        }
      });
    });
  }, []);

  return {
    rotation,
    activeColor,
    selectedShape,
    toggleRotation,
    handleColorChange,
    filterByShape
  };
};
