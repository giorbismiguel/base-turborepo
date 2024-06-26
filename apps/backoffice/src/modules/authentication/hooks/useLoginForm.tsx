import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "modules/authentication/schemas/login.schema";
import { useNavigate, useLocation } from "react-router-dom";
import { useSignIn, useUser } from "security";
import type * as Yup from "yup";

interface FormData {
  identifier: string;
  password: string;
  email: string;
  remember: boolean;
}

const useLoginForm = () => {
  const { isLoading: isLoadingUser } = useUser();
  const location = useLocation();
  const navigate = useNavigate();

  const { register, control, handleSubmit } = useForm<FormData>({
    resolver: yupResolver<Yup.AnyObjectSchema>(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      remember: false,
    },
  });
  const { mutateAsync, error, isLoading } = useSignIn();

  return {
    control,
    register,
    error,
    isLoading: isLoading || isLoadingUser,
    onSubmit: handleSubmit(async (value) => {
      // @ts-ignore
      await mutateAsync(value);
      //go to the previews page
      // @ts-ignore
      const from = location.state?.from?.pathname || "/";
      navigate(from, { replace: true });
    }),
  };
};

export default useLoginForm;
