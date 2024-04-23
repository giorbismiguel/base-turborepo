import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from 'react-query';
import type { InterfaceUser } from 'modules/users/interfaces/IUser';
import UserServices from "modules/users/services/user.services";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { useEffect } from 'react';
import { userSchema } from '../schemas/user.schema';
import { USERS_ONE_KEY } from '../constants/queries';
import { useUserDetail } from '../contexts/UserDetail';

const initValues: InterfaceUser = {
    email: '',
    firstName: '',
    lastName: '',
    phone: '',
}

const useUserUpdateForm = (user: InterfaceUser = initValues) => {
    const { setUser } = useUserDetail();
    const { t } = useTranslation("account");
    const queryClient = useQueryClient()
    const { control, handleSubmit, reset } = useForm({
        resolver: yupResolver(userSchema),
        defaultValues: user
    });

    useEffect(() => {
        if (user) {
            reset(user)
        }

    }, [user, reset])


    const { mutate, error, isLoading, isSuccess, data } = useMutation((userItem: InterfaceUser) => UserServices.update(userItem?._id, {
        _id: user?._id,
        firstName: user?.firstName,
        lastName: user?.lastName,
        email: user?.email,
    }), {
        onSuccess: (userData) => {
            void queryClient.invalidateQueries(USERS_ONE_KEY)
            toast.success(t('successUpdate'))
            if (setUser) {
                setUser(userData)
            }
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
}
    ;

export default useUserUpdateForm;
