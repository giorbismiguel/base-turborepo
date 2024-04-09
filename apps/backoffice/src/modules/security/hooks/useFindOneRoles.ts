import {useQuery} from "react-query";
import { RoleService} from "modules/security/services";
import { ROLES_ONE_KEY} from "modules/security/constants/queries";
import {useCallback} from "react";
import {IRole} from "modules/security/interfaces";

export const useFindOneRoles = (id: string | null) => {
    const fetch = useCallback(() => RoleService.getOne(id as string), [id])
    return useQuery<IRole>([id, ROLES_ONE_KEY], fetch, {enabled: !!id});
}