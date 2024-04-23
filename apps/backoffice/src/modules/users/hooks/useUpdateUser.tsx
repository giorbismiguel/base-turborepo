import { useMutation, useQueryClient } from "react-query";
import { UserService } from "modules/users/services";
import { USERS_ONE_KEY } from "modules/users/constants/queries";
import type { InterfaceUser } from "modules/users/interfaces/IUser";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";

export const useUpdateUser = (user: InterfaceUser, invalidateQuery = true, onClose?: () => void) => {
    const queryClient = useQueryClient();
    const { t } = useTranslation('account');

    return useMutation((data: any) => UserService.update(user?._id, { _id: user?._id, ...data }), {
        onSuccess: () => {
            onClose?.();
            if (invalidateQuery) {
                queryClient.invalidateQueries([user?._id, USERS_ONE_KEY]).catch(() => {
                    toast.error(t('common:errors.generalErrorMessage'));
                });
            }
            toast.success(t("successUpdate"));
        }, onError: () => {
            toast.error(t('common:errors.generalErrorMessage'));
        }
    });
}

