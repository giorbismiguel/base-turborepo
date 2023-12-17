import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import {Box, ListItemText, Radio, Stack, styled} from "@mui/material";
import {useTranslation} from "react-i18next";
import {BaseFilterProps} from "../Base/FilterBase";
import {useDateRangeFilter} from "./useRangeFilter";
import {FilterBase} from "../Base";
import {DATES_OPTIONS_ENUM_ENUM, DATES_OPTIONS_VALUES} from "./options";
import {DateRangePicker} from "react-date-range";
import {IDateRangeOption} from "./types";
import {isRangeEqual} from "./parser";
// main react-date-range style files
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

export type DateFilterProps = BaseFilterProps & {
    value?: string,
    options?: Array<IDateRangeOption | string>,
    onChange: (selected: string) => void,
    enableCustom?: boolean
}

const defaultValue: string = '';

export const CustomMenuItem = styled(Stack)(() => ({
    padding: '0px 16px'
}));

const SDateRangePicker = styled(DateRangePicker)(() => ({
    '.rdrDefinedRangesWrapper': {
        display: 'none'
    }
}));

const DateFilter = ({
                        id,
                        title,
                        onChange,
                        value = defaultValue,
                        options: defaultOptions = DATES_OPTIONS_ENUM_ENUM,
                        enableCustom = true
                    }: DateFilterProps) => {

    const {t} = useTranslation('common');
    const {
        options,
        rangeValue,
        handleChange,
        handleClear,
        isOpen,
        handleCustomItemSelect,
        handleCustomRangeChange,
        startDate,
        endDate
    } = useDateRangeFilter(value, onChange, defaultOptions);

    return (
        <FilterBase title={title} id={id}>
            <Box px={0} py={0}>
                {
                    options?.map((option: any, index: number) => {
                        const itemValue: string | Date[] = option?.range || option._id || option;
                        const label: string = option.name || option;
                        const primaryLabel = option.translate ? t(label as string) : label;
                        const isSelected = !isOpen && (
                            isRangeEqual(rangeValue, itemValue) ||
                            rangeValue === itemValue ||
                            rangeValue === DATES_OPTIONS_VALUES[itemValue as string]
                        );

                        return (<MenuItem onClick={() => handleChange(itemValue)} key={option._id || index}>
                            <Radio checked={isSelected}/>
                            <ListItemText primary={primaryLabel}/>
                        </MenuItem>);
                    })
                }
                {enableCustom && <>
                    <MenuItem onClick={handleCustomItemSelect}>
                        <Radio checked={isOpen}/>
                        <ListItemText primary={t('custom_range')}/>
                    </MenuItem>
                    {isOpen && <CustomMenuItem>
                        <SDateRangePicker
                            staticRanges={[]}
                            inputRanges={[]}
                            onChange={handleCustomRangeChange}
                            showMonthAndYearPickers={false}
                            moveRangeOnFirstSelection={false}
                            months={1}
                            ranges={[{
                                startDate,
                                endDate,
                                key: 'selection',
                            }]}
                            direction="horizontal"
                            showDateDisplay={false}
                        />
                    </CustomMenuItem>}
                </>}
            </Box>
            <MenuItem key={'clear'} value={'clear'} onClick={handleClear}>
                <ListItemText primary={t('clear')} primaryTypographyProps={{color: 'primary', ml: 0.5}}/>
            </MenuItem>
        </FilterBase>
    );
}


export default DateFilter;