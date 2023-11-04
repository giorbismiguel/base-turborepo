import { ChangeEvent, useCallback, useState } from 'react';


const useInputValue = (init: string = '') => {
  const [value, setValue] = useState(init);

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  const resetValue = useCallback(() => {
    setValue('');
  }, []);


  return {
    setValue,
    onChange,
    resetValue,
    value
  };

};

export default useInputValue;
