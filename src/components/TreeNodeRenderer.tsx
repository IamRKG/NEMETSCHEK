import { motion, AnimatePresence } from 'framer-motion';
import { LocationNode } from '../types/location';
import { useLocationTree } from '../hooks/useLocationTree';

interface TreeNodeRendererProps {
  node: LocationNode;
  controls: ReturnType<typeof useLocationTree>;
}

export const TreeNodeRenderer = ({ node, controls }: TreeNodeRendererProps) => {
  const hasChildren = node.children && node.children.length > 0;
  const isExpanded = controls.expandedNodes.has(node.id);
  const isBuilding = !hasChildren && node.floorplan;
  const isSelected = node.name === controls.selectedBuilding;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pl-4"
    >
      <motion.div 
        whileHover={{ x: 4 }}
        className="flex items-center py-2"
      >
        {hasChildren && (
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => controls.toggleNode(node.id)}
            className="mr-2 w-6 h-6 flex items-center justify-center rounded hover:bg-slate-100"
          >
            <motion.span 
              animate={{ rotate: isExpanded ? 180 : 0 }}
              className="text-slate-600"
            >
              {isExpanded ? '−' : '+'}
            </motion.span>
          </motion.button>
        )}
        <motion.span 
          whileHover={{ scale: 1.02 }}
          onClick={() => {
            if (hasChildren) {
              controls.toggleNode(node.id);
            } else if (isBuilding && node.floorplan) {
              controls.handleBuildingClick(node.floorplan, node.name);
            }
          }}
          className={`
            cursor-pointer px-2 py-1 rounded
            ${isBuilding ? 'text-blue-600 hover:bg-blue-50' : 'text-slate-700 hover:bg-slate-50'}
            ${isSelected ? 'bg-blue-50 font-medium' : ''}
          `}
        >
          {node.name}
        </motion.span>
      </motion.div>
      
      <AnimatePresence>
        {hasChildren && isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="border-l border-slate-200 ml-3"
          >
            {node.children?.map((child) => (
              <TreeNodeRenderer 
                key={child.id} 
                node={child} 
                controls={controls}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
