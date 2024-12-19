import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShapeType } from '../types/location';
import { useColorTheme } from '../context/ColorThemeContext';

interface FloorPlanViewerProps {
  selectedFloorplan: string | null;
  floorplans: Record<string, React.ComponentType<any>>;
  activeColor: string;
  selectedShape: ShapeType;
  rotation: number;
}

export const FloorPlanViewer = ({
  selectedFloorplan,
  floorplans,
  activeColor,
  selectedShape,
  rotation
}: FloorPlanViewerProps) => {
  const { colors } = useColorTheme();

  return (
    <motion.div 
      layout
      style={{ backgroundColor: colors.background }}
      className="p-4 rounded-lg transition-colors duration-300"
    >
      <motion.div 
        layout
        className="flex items-center justify-center min-h-[400px] border-2 border-dashed rounded-lg"
        style={{ borderColor: colors.accent }}
      >
        <AnimatePresence mode="wait">
          {selectedFloorplan ? (
            <motion.div
              key={selectedFloorplan}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              {React.createElement(floorplans[selectedFloorplan], {
                fillColor: activeColor,
                selectedShape: selectedShape,
                style: { 
                  transform: `rotate(${rotation}deg)`,
                  transition: 'all 0.3s ease-in-out'
                },
                className: "max-w-full h-auto"
              })}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center"
              style={{ color: colors.text }}
            >
              <p>Select a building to view its floor plan</p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};