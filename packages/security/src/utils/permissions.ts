import {SUPERADMIN_ROLE} from "../settings";

export const _hasPermission = (userPermissions: string[], permission: string) => {
    if (!permission) return true
    if (!userPermissions) return false
    return userPermissions.some(
        (userPermission) =>
            userPermission === SUPERADMIN_ROLE ||
            userPermission === permission.toUpperCase()
    )
}

export const hasPermission = (userPermissions:string[], permission: string | string[], atLessOne?: boolean) => {
    const permissionArray: string[] = !permission || Array.isArray(permission) ? permission as string[] : [permission];

    if (atLessOne)
        return permissionArray.some(per => _hasPermission(userPermissions, per)); //some that has permission
    return !permissionArray.some(per => !_hasPermission(userPermissions, per)); //not exist some that not has permission
}