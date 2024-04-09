import { useMutation, useQueryClient } from "react-query";
import { UserService } from "modules/users/services";
import { USERS_LIST_KEY } from "modules/users/constants/queries";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";

export const useDeleteUser = (id: string, onClose: () => void) => {
    const queryClient = useQueryClient();
    const { t } = useTranslation("role");

    return useMutation(() => UserService.delete(id), {
        onSuccess: (data) => {
            toast.success(t('successDeleted'));
            onClose?.();
            queryClient.invalidateQueries(USERS_LIST_KEY);
            queryClient.invalidateQueries(data._id);
        }
    });
}

