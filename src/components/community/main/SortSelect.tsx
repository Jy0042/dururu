// SortSelect.tsx
import React from 'react';
import {
  Box,
  FormControl,
  MenuItem,
  Select,
  useMediaQuery,
} from '@mui/material';

export interface SortSelectProps {
  sort: string;
  setSort: React.Dispatch<React.SetStateAction<string>>;
}

const SortSelect = ({ sort, setSort }: SortSelectProps) => {
  const isMobile = useMediaQuery('(max-width:768px)');

  return (
    <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 1.5, p: 0 }}>
      <FormControl
        sx={{
          m: 1,
          minWidth: isMobile ? 40 : 120,
          maxWidth: isMobile ? 80 : 200,
          paddingTop: isMobile ? 0.76 : 0,
        }}
      >
        <Select
          labelId='sort-label'
          id='sort-select'
          value={sort}
          onChange={event => setSort(event.target.value as string)}
          sx={{
            height: isMobile ? '32px' : '42px',
            fontSize: isMobile ? '12px' : '14px',
          }}
        >
          <MenuItem value='조회수순' sx={{ fontSize: '14px' }}>
            조회수 순
          </MenuItem>
          <MenuItem value='좋아요순' sx={{ fontSize: '14px' }}>
            좋아요 순
          </MenuItem>
          <MenuItem value='최신순' sx={{ fontSize: '14px' }}>
            최신 순
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default SortSelect;
