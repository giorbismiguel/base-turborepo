import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRecoveryPasswordInit } from "security";
import { identifierSchema } from "modules/authentication/schemas/login.schema";

interface FormData {
  identifier: string;
}

const useRecoveryPasswordInitForm = () => {
  const { register, control, handleSubmit } = useForm<FormData>({
    resolver: yupResolver(identifierSchema),
    defaultValues: {
      identifier: "",
    },
  });

  const { mutateAsync, error, isLoading, isSuccess, reset, data } =
    useRecoveryPasswordInit();

  return {
    control,
    register,
    data,
    isSuccess,
    error,
    isLoading,
    reset,
    onSubmit: handleSubmit((value) => mutateAsync(value)),
  };
};

export default useRecoveryPasswordInitForm;
