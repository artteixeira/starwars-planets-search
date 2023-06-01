import React, { useState } from 'react';
import PropTypes from 'prop-types';

import FiltersContext from './FiltersContext';
import useInterimState from '../hooks/useInterimState';

export default function FiltersProvider({ children }) {
  const [nameFilter, setNameFilter] = useState('');
  const columnFilter = useInterimState('population');
  const comparisonFilter = useInterimState('maior que');
  const valueFilter = useInterimState(0);

  return (
    <FiltersContext.Provider
      value={
        { nameFilter: { nameFilter, setNameFilter },
          columnFilter,
          comparisonFilter,
          valueFilter }
      }
    >
      {children}
    </FiltersContext.Provider>
  );
}

FiltersProvider.propTypes = ({
  children: PropTypes.node.isRequired,
});
