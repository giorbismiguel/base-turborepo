import React, {memo, ReactNode} from 'react'
import {useRouteMatch} from "./useRouteMatch";
import {Tab, Tabs, TabsProps} from "@mui/material";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next"
import {useSecurity} from "../../hooks";

export type TabRouteType = {
    label: string,
    path: string,
    to: string,
    translate?: boolean,
    disabled?: boolean;
    render?: () => ReactNode,
    /**
     * Permissions required to render the tab.
     */
    permissions?: string | string[];
    atLessOne?: boolean,
}


type RouterTabProps = TabsProps & {
    tabs: TabRouteType[],
    prefix: string
    translationNs?: string
}

const RouterTab = ({tabs = [], translationNs, prefix = '', ...props}: RouterTabProps) => {
    // You need to provide the routes in descendant order.
    // This means that if you have nested routes like:
    const {hasPermission} = useSecurity();
    const routeMatch = useRouteMatch(tabs.map(({path}) => path));
    const currentTab = routeMatch?.pattern?.path;
    const {t} = useTranslation(translationNs || 'common');

    return (
        <Tabs value={currentTab} {...props}>
            {
                tabs
                    ?.filter((item) => {
                        return item?.permissions?.length ? hasPermission(item.permissions, item.atLessOne) : true;
                    })
                    ?.map((item) => {
                        return (
                            <Tab key={item.label}
                                 label={item.render ? item.render() : (item.translate === false ? item.label : t(item.label))}
                                 disabled={item.disabled}
                                 value={item.path}
                                 to={prefix + item.to}
                                 component={Link}/>
                        )
                    })
            }
        </Tabs>
    );

}

export default memo(RouterTab);


