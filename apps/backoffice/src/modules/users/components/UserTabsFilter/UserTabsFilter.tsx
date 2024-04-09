import { memo } from 'react'
import { TabsFilter } from "admin-layout";


const UserTabsFilter = () => {
    return (
        <TabsFilter translation={'users'} defaultView={'all'} />
    );

}

export default memo(UserTabsFilter);