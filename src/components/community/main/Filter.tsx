import React, { useState } from 'react';
import { Button } from '@mui/material';

interface FilterProps {
  onChange: (selectedFilters: string[]) => void;
}

const Filter: React.FC<FilterProps> = ({ onChange }) => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const filter = event.target.name;
    if (event.target.checked) {
      setSelectedFilters(prevFilters => [...prevFilters, filter]);
    } else {
      setSelectedFilters(prevFilters => prevFilters.filter(f => f !== filter));
    }
  };

  React.useEffect(() => {
    onChange(selectedFilters);
  }, [selectedFilters, onChange]);

  return (
    <>
      <Button>Black</Button>
      <Button>White</Button>
      <Button>Wood</Button>
    </>
  );
};

export default Filter;
