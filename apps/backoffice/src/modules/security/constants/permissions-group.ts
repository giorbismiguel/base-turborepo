import {GROUPS} from './permissions';

export type PermissionsGroup = {
    group: string,
    value: string,
    label: string
}

let PERMISSIONS_GROUPS: PermissionsGroup[] = [];


for (const arrayKey in GROUPS) {
    // @ts-ignore
    const permissions: string [] = GROUPS[arrayKey];
    PERMISSIONS_GROUPS = PERMISSIONS_GROUPS.concat(permissions.map(p => ({
        group: arrayKey,
        value: p,
        label: p
    })));
}

export {PERMISSIONS_GROUPS};