import {RangeOptionValues} from "./types";

export const defaultValue = {
    equal: '',
    from: '',
    to: '',
    isRange: false,
}


export const rangeToString = (value: RangeOptionValues): string => {
    if (!value.isRange)
        return value.equal;
    // if (!Number.isNaN(value.from) && !Number.isNaN(value.to))
    if (value.from || value.to)
        return value.from + '_' + value.to;
    return '';
}

export const stringToRange = (value: string): RangeOptionValues => {
    if (!value)
        return defaultValue;

    const range = value.split('_');
    if (range.length === 1)
        return {...defaultValue, equal: value};

    return {...defaultValue, isRange: true, from: range[0], to: range[1]};
}


export const isRangeEqual = (range: RangeOptionValues, range2: RangeOptionValues) => {
    return rangeToString(range) === rangeToString(range2);
}