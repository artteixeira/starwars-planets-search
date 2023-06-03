import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import PlanetsContext from './PlanetsContext';

export default function PlanetsProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [selected, setSelected] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });
  const [nameFilter, setNameFilter] = useState('');
  const [selectedFilters, setSelectedFilters] = useState([]);

  const fetchFunc = async () => {
    const response = await fetch('https://swapi.dev/api/planets');
    const data = await response.json();
    const result = data.results.map((element) => {
      delete element.residents;
      return element;
    });
    setPlanets(result);
  };

  useEffect(() => { fetchFunc(); }, []);

  const filterOptions = (option) => !selectedFilters
    .find((element) => option === element.column);

  const filterPlanets = (planet) => {
    const filters = [];
    selectedFilters.forEach((filter) => {
      switch (filter.comparison) {
      case 'maior que':
        filters.push(Number(planet[filter.column]) > Number(filter.value));
        break;
      case 'menor que':
        filters.push(Number(planet[filter.column]) < Number(filter.value));
        break;
      case 'igual a':
        filters.push(planet[filter.column] === filter.value.toUpperCase());
        break;
      default:
        return true;
      }
    });

    return filters.every((el) => el);
  };

  return (
    <PlanetsContext.Provider
      value={ {
        planets,
        nameFilter: { nameFilter, setNameFilter },
        filterOptions,
        selected,
        setSelected,
        selectedFilters,
        setSelectedFilters,
        filterPlanets,
      } }
    >
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = ({
  children: PropTypes.node.isRequired,
});
