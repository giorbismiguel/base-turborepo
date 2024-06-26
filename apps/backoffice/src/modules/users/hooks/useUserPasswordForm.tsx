import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from 'react-query';
import type { InterfaceUser } from 'modules/users/interfaces/IUser';
import type { ChangePassword } from 'modules/users/interfaces/IChangePassword';
import UserServices from "modules/users/services/user.services";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { CURRENT_USER_KEY } from "security";
import { userPasswordSchema } from 'modules/users/schemas/user.schema';

const useUserPasswordForm = (user: InterfaceUser) => {
    const { t } = useTranslation("account");
    const queryClient = useQueryClient()
    const { control, handleSubmit, reset } = useForm({
        resolver: yupResolver(userPasswordSchema),
        defaultValues: {
            lastPassword: "",
            password: "",
            confirm: "",
        }
    });

    const { mutate, error, isLoading, isSuccess, data } = useMutation((dataForm: ChangePassword) => UserServices.updatePassword(user?._id, dataForm.lastPassword, dataForm.password, dataForm.confirm)

        , {
            onSuccess: () => {
                reset()
                void queryClient.invalidateQueries(CURRENT_USER_KEY)
                toast.success(t('securityTab.passwordSuccessfullyUpdated'))
            }
        });

    return {
        control,
        error,
        isLoading,
        isSuccess,
        data,
        // @ts-ignore
        onSubmit: handleSubmit((values) => mutate(values))
    };
};

export default useUserPasswordForm;
