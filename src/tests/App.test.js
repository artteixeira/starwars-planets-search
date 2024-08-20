import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from '../App';
import mock from '../../cypress/mocks/testData';


test('Testa o filtro de nome', async () => {
  render(<App />);
  
  const nameFilter = screen.getByTestId('name-filter')
  let planets = await screen.findAllByTestId('planet-name');
  
  expect(nameFilter).toBeInTheDocument();
  expect(planets).toHaveLength(10);
  userEvent.type(nameFilter, 'ta');

  planets = await screen.findAllByTestId('planet-name');
  expect(planets).toHaveLength(1);
});
test('Testa o filtro numérico', async () => {
  render(<App />);

  const column = screen.getByRole('combobox', {
    name: /coluna/i
  });
  let planets = await screen.findAllByTestId('planet-name');
  expect(planets).toHaveLength(10);
  const comparison = screen.getByRole('combobox', {  name: /operador/i});
  const value = screen.getByRole('spinbutton');
  const button = screen.getByRole('button', {  name: /filtrar/i});
  userEvent.selectOptions(column, ['diameter']);
  userEvent.selectOptions(comparison, ['maior que']);
  userEvent.type(value, '10000');
  userEvent.click(button);
  planets = await screen.findAllByTestId('planet-name');
  expect(planets).toHaveLength(7);
});
test('Testa o filtro ')
