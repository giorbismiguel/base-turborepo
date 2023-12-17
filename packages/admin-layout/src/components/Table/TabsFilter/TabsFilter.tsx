import React, {memo, useMemo} from 'react'
import {Skeleton, Tab, Tabs, TabsProps} from "@mui/material";
import {useTableViewFilter} from "../hooks";
import {FilterView, useFilterView} from "../contexts/FilterViewContext";
import {useTranslation} from "react-i18next";
import {useSecurity} from "security";
type TabsFilter = Omit<TabsProps, 'onChange' | 'value'> & {
    defaultView?: string,
    translation?: string,
    ariaLabel?: string
}

const loadingTabs = [
    <Tab label={<Skeleton height={20} width={50}/>} value={'loading2'} key={'2'} disabled/>,
    <Tab label={<Skeleton height={20} width={50}/>} value={'loading3'} key={'3'} disabled/>,
]
const TabsFilter = ({
                        defaultView,
                        translation,
                        ariaLabel,
                        variant = 'scrollable',
                        scrollButtons = 'auto',
                        ...props
                    }: TabsFilter) => {
    const {hasPermission} = useSecurity();
    const {filter, setFilterView,} = useTableViewFilter(defaultView);
    const {views, loading} = useFilterView();
    const {t} = useTranslation(translation || 'common');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setFilterView(newValue);
    };

    const tabs = useMemo(() => {
        if (loading) {
            return [
                <Tab label={<Skeleton height={20} width={50}/>} value={filter} key={'1'} disabled/>,
                ...loadingTabs
            ]
        }
        const tabs = [];
        for (let view in views) {
            const viewValue: FilterView = views[view];

            const show = viewValue?.permissions?.length ? hasPermission(viewValue.permissions, viewValue.atLessOne) : true;
            if (!show) return;

            tabs.push((
                <Tab label={t(viewValue.title)} value={view} key={view}/>
            ))
        }
        return tabs;
    }, [t, loading, defaultView])


    return (
        <Tabs value={filter} onChange={handleChange} aria-label={ariaLabel || "filter tabs"}
              variant={variant}
              scrollButtons={scrollButtons}
              {...props} >
            {tabs}
        </Tabs>
    );

}

export default memo(TabsFilter);