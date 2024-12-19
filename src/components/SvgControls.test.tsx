import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { SvgControls } from './SvgControls';
import { cssColors } from '../constants/colors';

jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
}));

describe('SvgControls', () => {
  const defaultProps = {
    rotation: 0,
    selectedShape: 'all' as const,
    activeColor: cssColors.crimson,
    onRotationToggle: jest.fn(),
    onShapeFilter: jest.fn(),
    onColorChange: jest.fn(),
  };

  const renderComponent = (props = defaultProps) => {
    return render(<SvgControls {...props} />);
  };

  it('renders rotation button and shape filter dropdown', () => {
    renderComponent();
    expect(screen.getByText('Rotate Plan')).toBeInTheDocument();
    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });

  it('calls onRotationToggle when rotation button is clicked', () => {
    renderComponent();
    fireEvent.click(screen.getByText('Rotate Plan'));
    expect(defaultProps.onRotationToggle).toHaveBeenCalledTimes(1);
  });

  it('calls onShapeFilter with correct value when shape filter is changed', () => {
    renderComponent();
    const select = screen.getByRole('combobox');
    fireEvent.change(select, { target: { value: 'rect' } });
    expect(defaultProps.onShapeFilter).toHaveBeenCalledWith('rect');
  });

  it('renders all color buttons from selectedColors array', () => {
    renderComponent();
    const colorButtons = screen.getAllByRole('button');
    // Subtract 1 for the rotation button
    expect(colorButtons.length - 1).toBe(10);
  });

  it('calls onColorChange with correct color when color button is clicked', () => {
    renderComponent();
    const colorButtons = screen.getAllByRole('button');
    fireEvent.click(colorButtons[1]); // Click first color button after rotation button
    expect(defaultProps.onColorChange).toHaveBeenCalledWith(expect.any(String));
  });

  it('displays correct initial selected shape in dropdown', () => {
    renderComponent({
      ...defaultProps,
      selectedShape: 'circle' as any,
    });
    const select = screen.getByRole('combobox') as HTMLSelectElement;
    expect(select.value).toBe('circle');
  });

  it('renders color theme section header', () => {
    renderComponent();
    expect(screen.getByText('Color Theme')).toBeInTheDocument();
  });

  it('applies hover styles to color buttons', () => {
    renderComponent();
    const colorButton = screen.getAllByRole('button')[1];
    expect(colorButton).toHaveClass('hover:scale-110', 'transition-transform');
  });
});
