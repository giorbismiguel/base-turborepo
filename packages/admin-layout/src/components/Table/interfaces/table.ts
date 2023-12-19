import React, { ElementType } from "react";

export type Order = "asc" | "desc";

export enum CellType {
  TEXT = "TEXT",
  EMAIL = "EMAIL",
  PHONE = "PHONE",
  NUMBER = "NUMBER",
  DATE = "DATE",
  IMAGE = "IMAGE",
  CURRENCY = "CURRENCY",
}

export enum CellAlign {
  LEFT = "left",
  RIGHT = "right",
  CENTER = "center",
}

export type ValueOptions =
  | string
  | number
  | {
      value: any;
      label: string;
    };

//state data
export type TableOrder = {
  order: Order;
  orderBy: string;
};

//state data
export type TablePage = {
  page: number;
  rowsPerPage: number;
};

export interface HeadCell {
  /**
   * The column identifier. It's used to map with [[GridRowModel]] values.
   */
  field: string;
  /**
   * The title of the column rendered in the column header cell.
   */
  headerName: string;
  /**
   * The description of the column rendered as tooltip if the column header name is not fully displayed.
   */
  description?: string;
  /**
   * Set the width of the column.
   * @default 100
   */
  width?: number;
  /**
   * If set, it indicates that a column has fluid width. Range [0, ∞).
   */
  flex?: number;
  /**
   * Sets the minimum width of a column.
   * @default 50
   */
  minWidth?: number;
  /**
   * Sets the maximum width of a column.
   * @default Infinity
   */
  maxWidth?: number;
  /**
   * If `true`, hide the column.
   * @deprecated Use the `columnVisibility` prop instead.
   * @default false
   */
  hide?: boolean;
  /**
   * If `false`, removes the buttons for hiding this column.
   * @default true
   */
  hideable?: boolean;
  /**
   * If `true`, the column is sortable.
   * @default true
   */
  sortable?: boolean;
  /**
   * If `true`, the column is resizable.
   * @default true
   */
  resizable?: boolean;
  /**
   * If `true`, the cells of the column are editable.
   * @default false
   */
  editable?: boolean;
  /**
   * Type allows to merge this object with a default definition [[GridColDef]].
   * @default 'string'
   */
  type?: CellType;

  /**
   * format allows to format a number, string or date type of cell
   * @default 'string'
   */
  format?: string;
  /**
   * To be used in combination with `type: 'singleSelect'`. This is an array (or a function returning an array) of the possible cell values and labels.
   */
  valueOptions?: Array<ValueOptions> | (() => Array<ValueOptions>);
  /**
   * Allows to align the column values in cells.
   */
  align?: CellAlign;
  /**
   * Function that allows to apply a formatter before rendering its value.
   * @template V, F
   * @param params Object containing parameters for the formatter.
   * @returns {F} The formatted value.
   */
  valueFormatter?: (value: any) => any;
  /**
   * Function that takes the user-entered value and converts it to a value used internally.
   * @template R, V, F
   * @param {F | undefined} value The user-entered value.
   * @param params The params when called before saving the value.
   * @returns {V} The converted value to use internally.
   */
  valueParser?: (value: any) => any;
  /**
   * Class name that will be added in cells for that column.
   */
  cellClassName?: string;
  /**
   * Allows to override the component rendered as cell for this column.
   * @template R, V, F
   * @param params Object containing parameters for the renderer.
   * @returns {React.ReactNode} The element to be rendered.
   */
  renderCell?: (value: any, row?: any) => React.ReactNode;
  /**
   * Allows to override the component rendered in edit cell mode for this column.
   * @param params Object containing parameters for the renderer.
   * @returns {React.ReactNode} The element to be rendered.
   */
  renderEditCell?: (value: any, row?: any) => React.ReactNode;
  /**
   * Class name that will be added in the column header cell.
   */
  headerClassName?: string;
  /**
   * Allows to render a component in the column header cell.
   * @returns {React.ReactNode} The element to be rendered.
   */
  renderHeader?: () => React.ReactNode;

  /**
   * Permissions required to render de column.
   */
  permissions?: string | string[];

  /**
   * Header cell element alignment.
   */
  headerAlign?: CellAlign;

  disablePadding?: boolean;

  component?: ElementType;
}

export type TablaHeaderOptions = {
  filter?: {
    disabled?: boolean;
  };
  search?: {
    disabled?: boolean;
    placeholder?: string;
  };
  actions?: {
    export?: boolean;
    exportAction?: () => void;
    import?: boolean;
    importAction?: () => void;
    create?: boolean;
    createText?: string;
    createAction?: (() => void) | string;
  };
};
