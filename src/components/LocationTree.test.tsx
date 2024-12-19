import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import LocationTree from './LocationTree';


describe('LocationTree', () => {
  it('applies correct styles to location directory', () => {
    render(<LocationTree />);
    // eslint-disable-next-line testing-library/no-node-access
    const locationDirectory = screen.getByText('Location Directory').closest('div');
    expect(locationDirectory).toHaveClass('p-4', 'border-b', 'border-slate-200');
  });

  it('renders floor plan section with correct styles', () => {
    render(<LocationTree />);
    // eslint-disable-next-line testing-library/no-node-access
    const floorPlanSection = screen.getByText('Floor Plan View').closest('div');
    expect(floorPlanSection).toHaveClass('p-4', 'border-b', 'border-slate-200');
  });

  it('handles floor plan controls interactions', () => {
    render(<LocationTree />);
    
    const rotateButton = screen.getByText('Rotate Plan');
    fireEvent.click(rotateButton);
    
    const shapeSelect = screen.getByRole('combobox');
    fireEvent.change(shapeSelect, { target: { value: 'circle' } });
    expect(shapeSelect).toHaveValue('circle');
  });
});
