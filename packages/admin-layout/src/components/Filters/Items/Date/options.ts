import {endOfYear, startOfMonth, startOfYear, subDays, subMonths, startOfDay, endOfDay} from "date-fns";
import {IDateRangeOption} from "./types";

const getTodayRange = (): Date[] => {
    return [startOfDay(new Date()), endOfDay(new Date())];
};

const getLastAmountOfDays = (days = 7): Date[] => {
    return [subDays(new Date(), days), endOfDay(new Date())];
};

const getLastAmountOfMonths = (months = 12): Date[] => {
    return [startOfMonth(subMonths(new Date(), months)), endOfDay(new Date())];
};

const getThisYearRange = (): Date[] => {
    return [startOfYear(new Date()), endOfYear(new Date())];
};

export const DATES_OPTIONS_ENUM = {
    TODAY: 'TODAY',
    LAST_SEVEN_DAYS: 'LAST-SEVEN-DAYS',
    LAST_THIRTY_DAYS: 'LAST-THIRTY-DAYS',
    LAST_NINETY_DAYS: 'LAST-NINETY-DAYS',
    THIS_YEAR: 'THIS-YEAR',
    LAST_TWELVE_MONTHS: 'LAST-TWELVE-MONTHS'
}

export const DATES_OPTIONS_ENUM_ENUM = Object.values(DATES_OPTIONS_ENUM).map((e: string): IDateRangeOption => ({
    label: `common:dateFilter.${e}`,
    translate: true,
    _id: e
}));

export const DATES_OPTIONS_VALUES: Record<string, Date[]> = {
    [DATES_OPTIONS_ENUM.TODAY]: getTodayRange(),
    [DATES_OPTIONS_ENUM.LAST_SEVEN_DAYS]: getLastAmountOfDays(),
    [DATES_OPTIONS_ENUM.LAST_THIRTY_DAYS]: getLastAmountOfDays(30),
    [DATES_OPTIONS_ENUM.LAST_NINETY_DAYS]: getLastAmountOfDays(90),
    [DATES_OPTIONS_ENUM.LAST_TWELVE_MONTHS]: getLastAmountOfMonths(),
    [DATES_OPTIONS_ENUM.THIS_YEAR]: getThisYearRange(),
}
