// @ts-ignore
import {EmptyFilter, FilterFactory, RangeFilter, TermFilter} from '@dofleini/query-builder';
import {Filter, FilterType, FilterValue} from "../types";
import parseNumberFilter from "./types/NumberFilterParse";
import parseDateFilter from "./types/DateFilterParse";

export const parsingFilter = (filter: Filter, value: FilterValue) => {
    const field = filter.field || filter.key;

    if (Array.isArray(value) && value.length) {
        const query = {
            type: 'OR',
            filters: value.map((item) => ({
                field,
                type: 'TERM',
                value: item
            }))
        };
        return FilterFactory.factory(query);
    } else if (filter?.type === FilterType.NUMBER) {
        return parseNumberFilter(value, field);
    } else if (filter?.type === FilterType.DATE) {
        return parseDateFilter(value, field);
    } else if (filter?.type === FilterType.TEXT) {
        return new TermFilter({
            field,
            value: {$regex: value}
        });
    } else if (filter?.type === 'BOOL') {
        return new TermFilter({
            field,
            value: !!Number(value)
        });
    } else {
        if (!Array.isArray(value) && value !== undefined) {
            return new TermFilter({
                field,
                value
            });
        }
    }
};
