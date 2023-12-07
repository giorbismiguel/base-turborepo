import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSignIn, useUser } from "security";
import { loginSchema } from 'modules/authentication/schemas/login.schema';
import { useNavigate, useLocation } from 'react-router-dom';

const useLoginForm = () => {
    const { isLoading: isLoadingUser } = useUser();
    const location = useLocation();
    const navigate = useNavigate();

    const { register, control, handleSubmit } = useForm({
        resolver: yupResolver(loginSchema),
        defaultValues: {
            email: "",
            identifier: "",
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
            // @ts-expect-error
            await mutateAsync(value);
            //go to the previews page
            // @ts-expect-error
            const from = location.state?.from?.pathname || "/";
            navigate(from, { replace: true });
        }),
    };
};

export default useLoginForm;
