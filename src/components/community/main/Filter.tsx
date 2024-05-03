import React, { useState } from 'react';
import { Button } from '@mui/material';

interface FilterProps {
  onChange: (selectedFilters: string[]) => void;
}

const Filter: React.FC<FilterProps> = ({ onChange }) => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const handleFilterChange = (filter: string) => {
    if (selectedFilters.includes(filter)) {
      setSelectedFilters(prevFilters => prevFilters.filter(f => f !== filter));
    } else {
      setSelectedFilters(prevFilters => [...prevFilters, filter]);
    }
  };

  React.useEffect(() => {
    onChange(selectedFilters);
  }, [selectedFilters, onChange]);

  const isFilterActive = (filter: string) => selectedFilters.includes(filter);

  return (
    <>
      <div style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
        <div>
          <Button
            variant={isFilterActive('Black') ? 'contained' : 'outlined'}
            onClick={() => handleFilterChange('Black')}
          >
            Black
          </Button>
          <Button
            variant={isFilterActive('White') ? 'contained' : 'outlined'}
            onClick={() => handleFilterChange('White')}
          >
            White
          </Button>
          <Button
            variant={isFilterActive('Wood') ? 'contained' : 'outlined'}
            onClick={() => handleFilterChange('Wood')}
          >
            Wood
          </Button>
        </div>

        <div>
          <Button
            variant={isFilterActive('Gaming') ? 'contained' : 'outlined'}
            onClick={() => handleFilterChange('Gaming')}
          >
            게이밍
          </Button>
          <Button
            variant={isFilterActive('Simple') ? 'contained' : 'outlined'}
            onClick={() => handleFilterChange('Simple')}
          >
            심플 & 모던
          </Button>
          <Button
            variant={isFilterActive('Antique') ? 'contained' : 'outlined'}
            onClick={() => handleFilterChange('Antique')}
          >
            엔틱
          </Button>
        </div>
      </div>
    </>
  );
};

export default Filter;
