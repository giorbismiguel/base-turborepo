import {useMutation, useQueryClient} from "react-query";
import {UserService} from "modules/users/services";
import {USERS_ONE_KEY} from "modules/users/constants/queries";
import toast from "react-hot-toast";
import {useTranslation} from "react-i18next";
import {IRole} from "modules/security/interfaces";

export const useDeleteRolesUser = (_id: string, roles: IRole[], onClose?: () => void) => {
    const queryClient = useQueryClient();
    const {t} = useTranslation("role");

    return useMutation((roleToDelete: string) => UserService.update(_id, {
        _id,
        roles: roles.map(({_id}) => _id).filter(role => role !== roleToDelete)
    }), {
        onSuccess: () => {
            toast.success(t('successDeleted'));
            onClose?.();
            queryClient.invalidateQueries([_id, USERS_ONE_KEY]);
        },
        onError: () => {
            toast.error(t('common:errors.generalErrorMessage'));
        }
    });
}

