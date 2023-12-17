import {stringToRange} from "../../Items/Number/parser";
// @ts-ignore
import {RangeFilter, TermFilter} from '@dofleini/query-builder';
import {FilterValue} from "../../types";

const parseNumberFilter = (value: FilterValue, field: string) => {
    const rageValue = stringToRange(value as string);
    if (rageValue.isRange)
        return new RangeFilter({
            field,
            from: rageValue?.from ? Number(rageValue?.from) : undefined,
            to: rageValue?.to ? Number(rageValue?.to) : undefined,
            type: 'RANGE'
        });
    else {
        return new TermFilter({
            field,
            value: rageValue.equal
        });
    }
}

export default parseNumberFilter