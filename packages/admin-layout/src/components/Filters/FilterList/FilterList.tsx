import React, {memo} from 'react'
import {ChildrenProps, FlexBox} from "mui-react-common";
import {useTable} from "../../Table/contexts/TableContext";
import {FilterItem} from "../Items";

const gap = {xs: 1, md: 2}

const FilterList = ({children, flexGrow}: ChildrenProps & { flexGrow?: number }) => {
    const {filters} = useTable()

    if (!filters) return <>{children}</>
    return (
        <FlexBox gap={gap} flexWrap={"wrap"} flexGrow={flexGrow}>
            {children}
            {
                filters.map(filter => (
                        <FilterItem key={filter.key} filter={filter}/>
                    )
                )
            }
        </FlexBox>
    );

}

export default memo(FilterList);