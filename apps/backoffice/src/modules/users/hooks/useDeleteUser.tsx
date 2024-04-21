import { useMutation, useQueryClient } from "react-query";
import { UserService } from "modules/users/services";
import { USERS_LIST_KEY } from "modules/users/constants/queries";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";

export const useDeleteUser = (id: string, onClose: () => void) => {
    const queryClient = useQueryClient();
    const { t } = useTranslation("role");

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return useMutation(() => UserService.delete(id), {
        onSuccess: (data) => {
            toast.success(t('successDeleted'));
            onClose();
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            queryClient.invalidateQueries(USERS_LIST_KEY);
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            queryClient.invalidateQueries(data._id);
        }
    });
}

