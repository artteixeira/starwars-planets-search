import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

export default function Filters() {
  const { nameFilter,
    filterOptions,
    selected, setSelected,
    selectedFilters, setSelectedFilters,
    order, setOrder, setSortFilter } = useContext(PlanetsContext);

  const columnOptions = ['population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water'];

  return (
    <div>
      <input
        type="text"
        data-testid="name-filter"
        value={ nameFilter.nameFilter }
        onChange={ ({ target }) => { nameFilter.setNameFilter(target.value); } }
      />
      <label htmlFor="column-filter">
        Coluna
        <select
          name="column"
          id="column-filter"
          data-testid="column-filter"
          value={ selected.column }
          onChange={ ({ target }) => {
            setSelected({ ...selected, column: target.value });
          } }
        >
          {columnOptions.filter(filterOptions).map((element) => (
            <option value={ element } key={ element }>
              {element}
            </option>
          ))}
        </select>
      </label>
      <label htmlFor="comparison-filter">
        Operador
        <select
          name="comparison"
          id="comparison-filter"
          data-testid="comparison-filter"
          value={ selected.comparison }
          onChange={ ({ target }) => {
            setSelected({ ...selected, comparison: target.value });
          } }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>
      <input
        name="value-filter"
        id="value-filter"
        data-testid="value-filter"
        type="number"
        value={ selected.value }
        onChange={ ({ target }) => {
          setSelected({ ...selected, value: target.value });
        } }
      />
      <button
        data-testid="button-filter"
        onClick={ async () => {
          setSelectedFilters([...selectedFilters, selected]);
          setSelected({
            column: 'population',
            comparison: 'maior que',
            value: 0,
          });
        } }
      >
        Filtrar
      </button>
      <label htmlFor="column-sort">
        Ordenar
        <select
          name="column"
          id="column-sort"
          data-testid="column-sort"
          value={ order.column }
          onChange={ ({ target }) => {
            setOrder({ ...order, column: target.value });
          } }
        >
          {columnOptions.map((element) => (
            <option value={ element } key={ element }>
              {element}
            </option>
          ))}
        </select>
      </label>
      <label htmlFor="ASC">
        Ascendente
        <input
          id="ASC"
          name="sort"
          data-testid="column-sort-input-asc"
          type="radio"
          value="ASC"
          onChange={ ({ target }) => {
            setOrder({ ...order, sort: target.value });
          } }
        />
      </label>
      <label htmlFor="DESC">
        Descendente
        <input
          id="DESC"
          name="sort"
          data-testid="column-sort-input-desc"
          type="radio"
          value="DESC"
          onChange={ ({ target }) => {
            setOrder({ ...order, sort: target.value });
          } }
        />
      </label>
      <button
        data-testid="column-sort-button"
        onClick={ () => { setSortFilter(order); } }
      >
        Ordenar
      </button>
      <button
        data-testid="button-remove-filters"
        onClick={ () => {
          setSelectedFilters([]);
          setSelected({
            column: 'population',
            comparison: 'maior que',
            value: 0,
          });
          setSortFilter({
            column: 'population',
            sort: '',
          });
        } }
      >
        Remover todas filtragens
      </button>
      {selectedFilters.map((filter, index) => (
        <div data-testid="filter" key={ index }>
          <button
            onClick={ () => {
              const cloneArray = [...selectedFilters];
              cloneArray.splice(index, 1);
              setSelectedFilters(cloneArray);
            } }
          >
            𝙭
          </button>
          <span>
            {filter.column}
            {' '}
            {filter.condition}
            {' '}
            {filter.value}
          </span>
        </div>
      ))}
    </div>
  );
}
