import React, { useContext } from 'react';
import FiltersContext from '../context/FiltersContext';

export default function Filters() {
  const {
    nameFilter,
    columnFilter,
    comparisonFilter,
    valueFilter } = useContext(FiltersContext);

  return (
    <div>
      <input
        type="text"
        data-testid="name-filter"
        value={ nameFilter.nameFilter }
        onChange={ (e) => { nameFilter.setNameFilter(e.target.value); } }
      />
      <label htmlFor="column-filter">
        Coluna
        <select
          value={ columnFilter.interimValue }
          onChange={ columnFilter.handleChange }
          name="column-filter"
          id="column-filter"
          data-testid="column-filter"
        >
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
      </label>
      <label htmlFor="comparison-filter">
        Operador
        <select
          value={ comparisonFilter.interimValue }
          onChange={ comparisonFilter.handleChange }
          id="comparison-filter"
          name="comparison-filter"
          data-testid="comparison-filter"
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>
      <input
        value={ valueFilter.interimValue }
        onChange={ valueFilter.handleChange }
        data-testid="value-filter"
        type="number"
      />
      <button
        data-testid="button-filter"
        onClick={ () => {
          columnFilter.setValue(columnFilter.interimValue);
          comparisonFilter.setValue(comparisonFilter.interimValue);
          valueFilter.setValue(valueFilter.interimValue);
        } }
      >
        Filtrar

      </button>

    </div>
  );
}
