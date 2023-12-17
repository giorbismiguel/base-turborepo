export type IDateRangeOption = {
    _id?: string,
    label?: string,
    name?: string,
    translate?: boolean,
    range?: Date[],
}

export type IDateSelection = {
    startDate?: Date,
    endDate?: Date
}