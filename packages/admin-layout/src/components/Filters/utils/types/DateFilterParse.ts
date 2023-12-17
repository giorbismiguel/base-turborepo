import {stringToRange} from "../../Items/Date/parser";
// @ts-ignore
import {RangeFilter, TermFilter} from '@dofleini/query-builder';
import {FilterValue} from "../../types";

const parseDateFilter = (value: FilterValue, field: string) => {
    const rageValue = stringToRange(value as string);
    if (rageValue)
        return new RangeFilter({
            field,
            from: rageValue[0] || undefined,
            to: rageValue[1] || undefined,
            type: 'RANGE'
        });
}

export default parseDateFilter