import { useState } from 'react';

function useInterimState(initialValue) {
  const [value, setValue] = useState('');
  const [interimValue, setInterimValue] = useState(initialValue);

  function handleChange({ target }) {
    setInterimValue(target.value);
  }

  return {
    value,
    handleChange,
    interimValue,
    setValue,
  };
}

export default useInterimState;
