import { useMutation, useQueryClient } from "react-query";
import { UserService } from "modules/users/services";
import { USERS_ONE_KEY } from "modules/users/constants/queries";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";
import type { InterfaceRole } from "modules/security/interfaces";

export const useDeleteRolesUser = (_id: string, roles: InterfaceRole[], onClose?: () => void) => {
    const queryClient = useQueryClient();
    const { t } = useTranslation("role");

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return useMutation((roleToDelete: string) => UserService.update(_id, {
        _id,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        roles: roles.map(({ _id: id }) => id).filter(role => role !== roleToDelete)
    }), {
        onSuccess: async () => {
            toast.success(t('successDeleted'));
            onClose?.();
            await queryClient.invalidateQueries([_id, USERS_ONE_KEY]);
        },
        onError: () => {
            toast.error(t('common:errors.generalErrorMessage'));
        }
    });
}

