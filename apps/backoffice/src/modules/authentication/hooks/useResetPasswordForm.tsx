import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRecoveryPasswordFinish } from "security";
import { useMemo } from "react";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { resetPasswordSchema } from "../schemas/login.schema";

const useResetPasswordForm = (key: string) => {
    const { t } = useTranslation("authentication");
    const { register, control, handleSubmit } = useForm({
        resolver: yupResolver(resetPasswordSchema),
        defaultValues: {
            password: "",
            confirmPassword: "",
        },
    });

    const config = useMemo(() => {
        return {
            onSuccess: () => {
                toast.success(t("recovery.passwordChanged"));
            },
        };
    }, [t]);

    const { mutateAsync, error, isLoading, isSuccess, isPaused, data } =
        useRecoveryPasswordFinish(key, config);

    return {
        control,
        register,
        error,
        isLoading,
        isSuccess,
        isPaused,
        data,
        mutateAsync,
        onSubmit: handleSubmit((value) => mutateAsync(value)),
    };
};

export default useResetPasswordForm;
