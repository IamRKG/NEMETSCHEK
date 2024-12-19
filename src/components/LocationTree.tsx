import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { locationsData } from '../data/locations';
import { SvgControls } from './SvgControls';
import Floor1 from './svg/Floor1';
import Floor2 from './svg/Floor2';
import Floor3 from './svg/Floor3';
import Floorplans from './svg/Floorplans';
import { useLocationTree } from '../hooks/useLocationTree';
import { useFloorPlanControls } from '../hooks/useFloorPlanControls';
import { LocationNode } from '../types/location';
import { TreeNodeRenderer } from './TreeNodeRenderer';
import { FloorPlanViewer } from './FloorPlanViewer';
import { ColorThemeProvider } from '../context/ColorThemeContext';


const floorplans = {
  'floor1.svg': Floor1,
  'floor2.svg': Floor2,
  'floor3.svg': Floor3,
  'floor_plan.svg': Floorplans
};

const LocationTree = () => {
  const locationControls = useLocationTree();
  const floorPlanControls = useFloorPlanControls();

  return (
    <ColorThemeProvider>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
      >
        <LocationDirectory 
          locations={locationsData} 
          controls={locationControls} 
        />
        <FloorPlanSection 
          floorplans={floorplans}
          locationControls={locationControls}
          floorPlanControls={floorPlanControls}
        />
      </motion.div>
    </ColorThemeProvider>
  );
};

interface LocationDirectoryProps {
  locations: LocationNode[];
  controls: ReturnType<typeof useLocationTree>;
}

const LocationDirectory = ({ locations, controls }: LocationDirectoryProps) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.3 }}
    className="bg-white rounded-lg shadow-sm border border-slate-200"
  >
    <motion.div 
      layout
      className="p-4 border-b border-slate-200"
    >
      <motion.h2 
        layout
        className="text-lg font-medium text-slate-900"
      >
        Location Directory
      </motion.h2>
    </motion.div>
    <motion.div 
      layout
      className="p-4 max-h-[600px] overflow-y-auto"
    >
      <AnimatePresence>
        {locations.map((location) => (
          <TreeNodeRenderer 
            key={location.id}
            node={location}
            controls={controls}
          />
        ))}
      </AnimatePresence>
    </motion.div>
  </motion.div>
);

interface FloorPlanSectionProps {
  floorplans: Record<string, React.ComponentType<any>>;
  locationControls: ReturnType<typeof useLocationTree>;
  floorPlanControls: ReturnType<typeof useFloorPlanControls>;
}

const FloorPlanSection = ({ 
  floorplans, 
  locationControls, 
  floorPlanControls 
}: FloorPlanSectionProps) => (
  <motion.div 
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.3 }}
    className="bg-white rounded-lg shadow-sm border border-slate-200"
  >
    <motion.div 
      layout
      className="p-4 border-b border-slate-200"
    >
      <motion.h2 
        layout
        className="text-lg font-medium text-slate-900 mb-4"
      >
        {locationControls.selectedBuilding 
          ? `Floor Plan - ${locationControls.selectedBuilding}` 
          : 'Floor Plan View'}
      </motion.h2>
      
      <SvgControls
        rotation={floorPlanControls.rotation}
        selectedShape={floorPlanControls.selectedShape}
        activeColor={floorPlanControls.activeColor}
        onRotationToggle={floorPlanControls.toggleRotation}
        onShapeFilter={floorPlanControls.filterByShape}
        onColorChange={floorPlanControls.handleColorChange}
      />
    </motion.div>

    <AnimatePresence mode="wait">
      <FloorPlanViewer
        selectedFloorplan={locationControls.selectedFloorplan}
        floorplans={floorplans}
        activeColor={floorPlanControls.activeColor}
        selectedShape={floorPlanControls.selectedShape}
        rotation={floorPlanControls.rotation}
      />
    </AnimatePresence>
  </motion.div>
);

export default LocationTree;