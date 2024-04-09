import { useMutation, useQueryClient } from "react-query";
import { RoleService } from "modules/security/services";
import { ROLES_LIST_KEY } from "modules/security/constants/queries";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";

export const useDeleteRole = (id: string, onClose: () => void) => {
    const queryClient = useQueryClient();
    const { t } = useTranslation("role");

    return useMutation(() => RoleService.delete(id), {
        onSuccess: (data) => {
            toast.success(t('successDeleted'));
            onClose?.();
            queryClient.invalidateQueries(ROLES_LIST_KEY);
            queryClient.invalidateQueries(data._id);
        }
    });
}

