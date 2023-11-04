import {useSecurity} from "react-security";
import {ReactNode, useMemo} from "react";
import {useTranslation} from "react-i18next";
import {ListProps} from "@mui/material";
import cloneDeep from "lodash/cloneDeep";

export type IMenuLeaf = {
    title: string;
    permissions?: string[];
    atLessOne?: boolean;
    partialMatch?: boolean;
    path: string;
    disabled?: boolean;
}

export type IMenuItem = Omit<IMenuLeaf, 'children'> & {
    children?: IMenuLeaf[];
    partialMatch?: boolean,
    icon?: ReactNode,
    info?: ReactNode,
    chip?: ReactNode,
    path?: string;
    disable?: boolean,
}

export type IMenu = Omit<ListProps, 'subheader' | 'children'> & {
    title: string;
    permissions?: string[];
    atLessOne?: boolean;
    items: IMenuItem[];
}


/**
 * handlerItem is a recursive function to handle menu item hierarchy, translation and permissions
 * @param menu {(IMenu | IMenuItem | IMenuLeaf)[]} : menu list
 * @param t {(value: string) => string} : translation function
 * @param hasPermission : function to check the permissions
 * @return IMenu[]
 * */
function handlerItem(menu: (IMenu | IMenuItem | IMenuLeaf)[],
                     t: (value: string) => string,
                     hasPermission: (permissions: string | string[], atLessOne?: boolean | undefined) => boolean): (IMenu | IMenuItem | IMenuLeaf)[] {

    return menu.filter(item => {

        const show = item?.permissions?.length ? hasPermission(item.permissions, item.atLessOne) : true;
        if (!show) return false;

        //check if we are processing menu section (it has items)
        if ((item as IMenu).items) {
            const menuItem = (item as IMenu); // cast to Menu to access to items in an easy way
            //precess items (recursive)
            menuItem.items = handlerItem(menuItem.items as IMenuItem[], t, hasPermission) as IMenuItem[];

            //check if it has some items to show(maybe he doesn't have permission)
            // if he doesn't have items to show, hide the menu
            if (!menuItem.items.length) return false;

            //else check if it is a IMenuItem with children and do the same process
        } else if ((item as IMenuItem).children) {
            const menuItem = (item as IMenuItem);
            menuItem.children = handlerItem(menuItem.children as IMenuLeaf[], t, hasPermission) as IMenuLeaf[];
            if (!menuItem.children.length && !menuItem.path) return false;
        }
        item.title = t(item.title);
        return true;
    });

}

export const useMenu = (menu: IMenu[], translation: string = 'menu') => {
    const {t} = useTranslation(translation);
    const {hasPermission} = useSecurity();

    return useMemo<IMenu[]>(() => handlerItem(cloneDeep(menu), t, hasPermission) as IMenu[], [menu, t, hasPermission]);
};
