"use client";
import React from 'react';
import { Slider, Box, Typography } from '@mui/material';

const RangeSlider = ({ value, handleChange }: { value: Array<number>; handleChange: (event: Event, newValue: number | number[]) => void }) => {
  return (
    <Box sx={{ width: 250, paddingX: "1.1rem" }}>
      <Typography className='-translate-x-6 px-3' gutterBottom color='gray'>House Size (sq.ft)</Typography>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        min={100}
        max={9000}
        step={1}
        marks={[
          { value: 100, label: '100' },
          { value: 9000, label: '9,000' },
        ]}
        valueLabelFormat={(value) => `${value} sq.ft`}
        sx={{
          '& .MuiSlider-thumb': {
            backgroundColor: 'orange',
          },
          '& .MuiSlider-track': {
            backgroundColor: 'orange',
          },
          '& .MuiSlider-rail': {
            backgroundColor: 'yellow',
          },
          '& .MuiSlider-markLabel': {
            color: 'orange',
          },
        }}
      />
      <Typography mt={2} className='text-sm text-gray-800 -translate-x-6'>
        Selected range: {value[0]} sq.ft - {value[1]} sq.ft
      </Typography>
    </Box>
  );
};

export default RangeSlider;
