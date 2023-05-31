import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import PlanetsContext from './PlanetsContext';

export default function PlanetsProvider({ children }) {
  const [planets, setPlanets] = useState([]);

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

  return (
    <PlanetsContext.Provider value={ { planets } }>
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = ({
  children: PropTypes.node.isRequired,
});
