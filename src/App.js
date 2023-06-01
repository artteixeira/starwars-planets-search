import React from 'react';

import Table from './components/Table';
import PlanetsProvider from './context/PlanetsProvider';
import FiltersProvider from './context/FiltersProvider';
import Filters from './components/Filters';

function App() {
  return (
    <PlanetsProvider>
      <FiltersProvider>
        <Filters />
        <Table />
      </FiltersProvider>
    </PlanetsProvider>
  );
}

export default App;
