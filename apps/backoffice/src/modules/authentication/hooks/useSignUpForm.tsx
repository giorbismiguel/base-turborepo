import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSignUp } from "security";
import { signUpSchema } from "../schemas/login.schema";

const useSignUpForm = () => {
  const { register, control, handleSubmit, watch } = useForm({
    resolver: yupResolver(signUpSchema),
    defaultValues: {
      email: "",
      password: "",
      acceptTerms: false,
    },
  });

  const termAcceptance = watch("acceptTerms");

  const { mutateAsync, error, isLoading, isSuccess, data } = useSignUp();

  return {
    control,
    register,
    error,
    termAcceptance,
    isLoading,
    isSuccess,
    data,
    // @ts-ignore
    onSubmit: handleSubmit(mutateAsync),
  };
};

export default useSignUpForm;
