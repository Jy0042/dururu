import React, { useState } from 'react';
import Contents from './components/community/main/Contents';
import Filter from './components/community/main/Filter';

const App: React.FC = () => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const handleFilterChange = (selectedFilters: string[]) => {
    setSelectedFilters(selectedFilters);
    // 여기서 필터링된 결과를 처리할 수 있는 로직을 추가합니다.
    // 예를 들어, 선택된 필터에 따라 데이터를 필터링하고 결과를 표시합니다.
    // 이 부분은 애플리케이션의 특정 요구에 따라 구현될 수 있습니다.
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
