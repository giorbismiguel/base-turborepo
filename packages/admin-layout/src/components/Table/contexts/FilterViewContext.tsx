import React, { createContext, useContext, useMemo } from "react";
import { useTableViewFilter } from "../hooks/useTableViewFilter";

export type FilterView = {
  _id?: string;
  title: string;
  permissions?: string[] | undefined;
  atLessOne?: boolean;
  filters: any;
};

export type TabViews = {
  [key: string]: FilterView;
};

// Data value of the provider context
type FilterViewContextValue = {
  filters: any;
  views: TabViews;
  loading: boolean;
  waitToLoad: boolean;
};
// default value of the context
export const defaultValue: FilterViewContextValue = {
  filters: {},
  views: {},
  loading: false,
  waitToLoad: false,
};

// create context
export const FilterViewContext =
  createContext<FilterViewContextValue>(defaultValue);

// Proptypes of Provider component
type FilterViewContextProps = {
  children: any;
  defaultView?: string;
  loading?: boolean;
  waitToLoad?: boolean;
  views: TabViews;
};

/**
 * Provider component
 * */
const FilterViewProvider = ({
  children,
  views,
  defaultView,
  loading = false,
  waitToLoad = false,
}: FilterViewContextProps) => {
  const { filter } = useTableViewFilter(defaultView || "all");

  const filters = useMemo(() => {
    return filter && views[filter]?.filters;
  }, [filter, views]);

  return (
    <FilterViewContext.Provider
      value={{ filters, views, loading, waitToLoad }}
      children={children}
    />
  );
};

// Default hook to retrieve context data
const useFilterView = () => {
  const context = useContext(FilterViewContext);
  if (context === undefined) {
    return defaultValue; // also, you can throw an error if it is you need the context
  }
  return context;
};

export { FilterViewProvider, useFilterView };
