import { useMutation, useQueryClient } from "react-query";
import { RoleService } from "modules/security/services";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { useTableSelection } from "admin-layout";

export const useDeleteManyRoleBySelection = (roleId: string, userId?: string) => {
    const queryClient = useQueryClient();
    const { selected, clearSelection } = useTableSelection()
    const { t } = useTranslation("role");

    return useMutation(() => {
        if (userId)
            return RoleService.deleteUsers(roleId, [userId]);

        if ((roleId && selected && selected.length))
            return RoleService.deleteUsers(roleId, selected as string[]);

        // eslint-disable-next-line prefer-promise-reject-errors
        return Promise.reject({ message: 'you must have items selected to do this operation', reference: 'MD000' })
    }, {
        onSuccess: () => {
            queryClient.invalidateQueries(['users', `users-${roleId}`]);
            toast.success(t('successDeletedUsers'));
            clearSelection();
        },
        onError: (error: any) => {
            if (error.reference === 'MD000')
                toast.success(t('common:errors.needSelection'));
            else {
                //handle the rest of errors here
                // ...

                // generic error in case you don't recognize the error
                toast.success(t('common:errors.generalErrorMessage'));
            }
        }
    });
}

