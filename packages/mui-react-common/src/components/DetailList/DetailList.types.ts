export type Details = {
  value: any;
  label: string;
  field: string;
  translate: any;
  format?: (value: any) => any;
};

export type DetailsProps = {
  data: {};
  details: Details[];
  t: (key: string) => string;
};
