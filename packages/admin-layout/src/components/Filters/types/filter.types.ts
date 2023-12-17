
export enum FilterType {
    RANGE = "RANGE",
    BOOL = "BOOL",
    TERM = "TERM",
    LIST = "LIST",
    FIXED_LIST = "FIXED_LIST",
    NUMBER = "NUMBER",
    TEXT = "TEXT",
    DATE = "DATE",
    RATING = "RATING",
    LOCALIZATION = "LOCALIZATION"
}

export type Filter = {
    filter: string;
    translate?: boolean;
    field: string;
    key: string;
    placeholder?: string
    type: FilterType;
    transform?: (value: any) => any;
    notRender?: boolean
    Component?: any,
    cut?: number;
    labelTrue?: string;
    labelFalse?: string;
    options?: any[];
};

export type FilterValue = string | string[] | undefined

export type RangeFilter = {
    from: number;
    to: number;
} | undefined;