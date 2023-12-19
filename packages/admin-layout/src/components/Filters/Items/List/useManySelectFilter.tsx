import { useCallback, useEffect, useState } from "react";

export const useManySelectFilter = (
  value: string[] = [],
  onChange: (value: string[]) => void
) => {
  const [selected, setSelected] = useState<string[]>(value);
  useEffect(() => {
    setSelected(value);
  }, [value]);

  const handleSelect = useCallback(
    (item: string) => {
      setSelected((prevState) => {
        let newValue;
        if (prevState.indexOf(item) !== -1)
          newValue = prevState.filter((val) => val !== item);
        else newValue = [...prevState, item];
        //calling onChange function
        onChange?.(newValue);

        return newValue;
      });
    },
    [onChange]
  );

  const handleClear = useCallback(() => {
    setSelected([]);
    //calling onChange function
    onChange?.([]);
  }, [onChange]);

  return {
    selected,
    handleSelect,
    handleClear,
  };
};
