import { useState, useCallback } from 'react';

export const useLocationTree = () => {
  const [expandedNodes, setExpandedNodes] = useState<Set<string>>(new Set());
  const [selectedFloorplan, setSelectedFloorplan] = useState<string | null>(null);
  const [selectedBuilding, setSelectedBuilding] = useState<string | null>(null);

  const toggleNode = useCallback((nodeId: string) => {
    setExpandedNodes((prevExpanded) => {
      const newExpanded = new Set(prevExpanded);
      if (newExpanded.has(nodeId)) {
        newExpanded.delete(nodeId);
      } else {
        newExpanded.add(nodeId);
      }
      return newExpanded;
    });
  }, []);

  const handleBuildingClick = useCallback((floorplan: string, buildingName: string) => {
    setSelectedFloorplan(floorplan);
    setSelectedBuilding(buildingName);
  }, []);

  return {
    expandedNodes,
    selectedFloorplan,
    selectedBuilding,
    toggleNode,
    handleBuildingClick
  };
};
