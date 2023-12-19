import { MouseEvent, useCallback, useEffect, useMemo, useState } from "react";
import { debounce } from "@mui/material";
import { RangeOptionValues } from "./types";
import {
  defaultValue,
  isRangeEqual,
  rangeToString,
  stringToRange,
} from "./parser";

export const useRangeFilter = (
  value: string,
  onChange: (value: string) => void
) => {
  const [rangeValue, setRange] = useState<RangeOptionValues>(defaultValue);

  const update = useMemo(() => {
    return debounce(onChange, 400);
  }, [onChange]);

  useEffect(() => {
    setRange((preRange) => {
      const range = stringToRange(value);
      if (isRangeEqual(preRange, range)) {
        return preRange;
      }
      return range;
    });
  }, [value]);

  const handleChange = useCallback(
    ({ target: { value, name } }: any) => {
      setRange((prevState) => {
        const newValue = { ...prevState, [name]: value };
        update(rangeToString(newValue));
        return newValue;
      });
    },
    [update]
  );

  const handleChangeType = useCallback(
    (event: MouseEvent<HTMLElement>, isRange: boolean) => {
      setRange((prevState) => {
        const newValue = { ...prevState, isRange };
        if (!isRangeEqual(newValue, prevState)) update(rangeToString(newValue));
        return newValue;
      });
    },
    [update]
  );

  const handleClear = useCallback(() => {
    setRange(defaultValue);
    update(rangeToString(defaultValue));
  }, [update]);

  return {
    rangeValue,
    handleChange,
    handleChangeType,
    handleClear,
  };
};
