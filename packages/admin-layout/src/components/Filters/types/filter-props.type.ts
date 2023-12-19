import { Filter } from "./filter.types";

export type FilterProps = {
  filter: Filter;
  value: string | string[] | null | undefined;
  title: string;
  onChange: (value: string | string[]) => void;
};

export type SelectFilterProps = {
  id?: string;
  title: string;
  options: any[];
  value?: string[];
  onChange: (selected: string[]) => void;
};
