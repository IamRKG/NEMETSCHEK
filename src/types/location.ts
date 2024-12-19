export type ShapeType = 'all' | 'rect' | 'path' | 'circle';

export interface LocationNode {
  id: string;
  name: string;
  children?: LocationNode[];
  floorplan?: string;
}

export interface FloorplanProps {
  fillColor: string;
  selectedShape: ShapeType;
  style?: React.CSSProperties;
  className?: string;
}

export interface SvgControlsProps {
  rotation: number;
  selectedShape: ShapeType;
  activeColor: string;
  onRotationToggle: () => void;
  onShapeFilter: (shape: ShapeType) => void;
  onColorChange: (color: string) => void;
}
