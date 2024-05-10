// ColorFilter.tsx
import React from 'react';
import { Button } from '@mui/material';
import './../../../styles/community/main.scss';

interface ColorFilterProps {
  colorIndexes: string[];
  colorButtonClick: () => void;
}

const ColorFilter: React.FC<ColorFilterProps> = ({
  colorIndexes,
  colorButtonClick,
}) => {
  const colors = ['White', 'Black', 'Pink', 'Wood'];

  return (
    <div className='color-filter'>
      <p className='filter-title'>Color</p>
      {colors.map((color, index) => (
        <Button
          key={index}
          variant={
            colorIndexes.includes(color.toLowerCase())
              ? 'contained'
              : 'outlined'
          } // 소문자로 변환하여 비교
          onClick={() => colorButtonClick(color.toLowerCase())} // 소문자로 전달
        >
          {color.toUpperCase()}
        </Button>
      ))}
    </div>
  );
};

export default ColorFilter;