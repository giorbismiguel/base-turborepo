import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpSchema } from "../schemas/login.schema";
import { useSignUp } from "security";

const useSignUpForm = () => {
  const { register, control, handleSubmit, watch } = useForm({
    resolver: yupResolver(signUpSchema),
    defaultValues: {
      email: "",
      identifier: "",
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
