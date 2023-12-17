// @ts-nocheck
import {EmptyFilter, FilterFactory} from '@dofleini/query-builder';
import {Filter} from "./types";
import {parsingFilter} from "./utils/parsing-filters";
import {useGetQueryObj} from "security";
import {useMemo} from "react";

let empty = new EmptyFilter();

export const useParseFilter = (filters: Filter[] | undefined) => {

    const query = useGetQueryObj();

    if (!filters)
        return empty;

    return useMemo(() => {
        let filterResult = new EmptyFilter();
        filters?.forEach((filter: Filter) => {
            if (query[filter.key] !== undefined) {
                let value = query[filter.key];
                let filterObjs;
                if (filter.transform) {
                    filterObjs = filter.transform(value, filter);
                } else {
                    filterObjs = parsingFilter(filter, value);
                }
                filterResult = FilterFactory.add(filterResult, filterObjs);
            }
        });
        return filterResult;
    }, [query, filters]);

}