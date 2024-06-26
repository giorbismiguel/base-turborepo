import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from 'react-query';
import type { InterfaceUser } from 'modules/users/interfaces/IUser';
import type { ChangePassword } from 'modules/users/interfaces/IChangePassword';
import { PasswordType } from 'modules/users/interfaces/IChangePassword';
import UserServices from "modules/users/services/user.services";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { CURRENT_USER_KEY } from "security";
import { userRetypePasswordSchema } from 'modules/users/schemas/user.schema';
import { useEffect } from 'react';
import { generatePassword } from "modules/users/utils";


interface ResetPasswordProps {
    password: string,
    confirm: string,
    changePasswordRequire: boolean,
    typePassword: PasswordType
}

const initialValues = {
    password: "",
    confirm: "",
    changePasswordRequire: false,
    typePassword: PasswordType.GENERATE
}

const useUserResetPasswordForm = (user: InterfaceUser | undefined, defaultValues: ResetPasswordProps = initialValues) => {
    const { t } = useTranslation("account");
    const queryClient = useQueryClient()
    const { control, handleSubmit, reset, watch, setValue } = useForm({
        resolver: yupResolver(userRetypePasswordSchema),
        defaultValues
    });

    const {
        mutate,
        error,
        isLoading,
        isSuccess,
        data
    } = useMutation<any, any, ChangePassword>((dataForm: ChangePassword) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return UserServices.resetPassword(
            user?._id,
            dataForm.password,
            dataForm.confirm,
            dataForm.changePasswordRequire
        );
    }, {
        onSuccess: () => {
            reset()
            void queryClient.invalidateQueries(CURRENT_USER_KEY)
            toast.success(t('securityTab.passwordSuccessfullyUpdated'))
        }
    });

    const typePassword = watch('typePassword');

    useEffect(() => {
        const pass = generatePassword();
        if (typePassword === PasswordType.GENERATE) {
            setValue('password', pass);
            setValue('confirm', pass);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [typePassword])

    return {
        control,
        error,
        isLoading,
        isSuccess,
        typePassword,
        data,
        // @ts-ignore
        onSubmit: handleSubmit((values: ChangePassword) => {
            mutate(values)
        })
    };
}
    ;

export default useUserResetPasswordForm;
