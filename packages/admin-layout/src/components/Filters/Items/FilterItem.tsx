import React, {memo} from 'react'
import {useSearchParamsChange} from "security";
import {useTranslation} from "react-i18next";
import {Filter, FilterType} from "../types";
import {FixedListFilter} from "./List";
import {NumberRangeFilter} from "./Number";
import {DateRangeFilter} from "./Date";
import {TextFilter} from "./Text";

type FilterItemProps = {
    filter: Filter
}

const MULTI_VALUE: { [key: string]: boolean } = {
    [FilterType.FIXED_LIST]: true,
    [FilterType.LIST]: true
}

const FilterItem = ({filter}: FilterItemProps) => {
    const {update, value} = useSearchParamsChange(filter.key, MULTI_VALUE[filter.type as string]);
    const {t} = useTranslation('common');
    const title = filter.translate ? t(filter.filter) : filter.filter;

    if (filter.notRender) return <></>

    const handleChange = (value: string | string[]) => {
        if (!value) {
            // @ts-ignore
            update({page: 0}, filter.key)
        } else
            update({[filter.key]: value, page: 0})
    }

    const props = {
        filter,
        value,
        title,
        onChange: handleChange
    }

    if (filter.Component) {
        const Component = filter.Component;
        return <Component {...props}/>
    }

    switch (filter.type) {
        case FilterType.FIXED_LIST: {
            return <FixedListFilter {...props}/>
        }
        case FilterType.DATE: {
            return <DateRangeFilter {...props}/>
        }
        case FilterType.NUMBER: {
            return <NumberRangeFilter {...props}/>
        }
        case FilterType.TEXT: {
            return <TextFilter {...props}/>
        }
    }

    return (
        <div></div>
    );

}

export default memo(FilterItem);