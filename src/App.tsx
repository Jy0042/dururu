import React, { useState } from 'react';
import Contents from './components/community/main/Contents';
import Filter from './components/community/main/Filter';

const App: React.FC = () => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const handleFilterChange = (selectedFilters: string[]) => {
    setSelectedFilters(selectedFilters);
  };

  return (
    <div className='App'>
      <nav>
        <Filter onChange={handleFilterChange} />
      </nav>
      <section>
        <Contents></Contents>
      </section>
    </div>
  );
};

export default App;
