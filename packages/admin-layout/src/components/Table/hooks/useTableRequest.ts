import { useMemo } from "react";
// @ts-ignore
import { FilterFactory } from "@dofleini/query-builder";
import { useTable } from "../contexts/TableContext";
import { useTablePagination } from "./useTablePagination";
import { useTableSearch } from "./useTableSearch";
import { useTableFilters } from "./useTableFilters";
import { useParseFilter } from "../../Filters";

export const useTableRequest = (
  queryFunction: (params: any, config: any) => Promise<any>,
  filters?: any,
  config?: any
) => {
  const { order, filters: urlFilter } = useTable();
  const urlFilterObj = useParseFilter(urlFilter);
  const { query } = useTableSearch();
  const { page, rowsPerPage } = useTablePagination();
  const { filters: tableFilter } = useTableFilters();

  const filtersObj = useMemo(() => {
    const defaultFilter = filters && FilterFactory.factory(filters);
    const viewFilter = tableFilter && FilterFactory.factory(tableFilter);
    let finalFilter = viewFilter || defaultFilter || {};

    if (defaultFilter && viewFilter)
      finalFilter = FilterFactory.add(defaultFilter, viewFilter);

    if (urlFilterObj)
      finalFilter = FilterFactory.add(finalFilter, urlFilterObj);

    return finalFilter;
  }, [filters, tableFilter, urlFilterObj]);

  return useMemo(() => {
    const payload = {
      search: query,
      page: page + 1,
      size: rowsPerPage,
      filters: filtersObj,
      sort: {
        [order.orderBy]: order.order,
      },
    };
    const fetch = () => queryFunction(payload, config);
    return {
      queryKey: payload,
      filters: filtersObj,
      search: query,
      fetch,
    };
  }, [
    query,
    filtersObj,
    page,
    rowsPerPage,
    order.orderBy,
    order.order,
    queryFunction,
    config,
  ]);
};
