import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useResendConfirmation } from "security";
import { useMemo } from "react";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { identifierSchema } from "../schemas/login.schema";

const useResendConfirmationForm = () => {
  const { t } = useTranslation("authentication");
  const { register, control, handleSubmit } = useForm({
    resolver: yupResolver(identifierSchema),
    defaultValues: {
      identifier: "",
    },
  });

  const config = useMemo(() => {
    return {
      onSuccess: () => {
        toast.success(t("confirmation.emailResend"));
      },
    };
  }, [t]);

  const { mutateAsync, error, isLoading, isSuccess, data } =
    useResendConfirmation(config);

  return {
    control,
    register,
    error,
    isLoading,
    isSuccess,
    data,
    mutateAsync,
    onSubmit: handleSubmit((values) => mutateAsync(values)),
  };
};

export default useResendConfirmationForm;
