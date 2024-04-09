import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {useMutation, useQueryClient} from 'react-query';
import {userSchema} from '../schemas/user.schema';
import {IUser} from 'modules/users/interfaces/IUser';
import UserServices from "modules/users/services/user.services";
import toast from "react-hot-toast";
import {useTranslation} from "react-i18next";
import {useEffect} from 'react';
import {USERS_LIST_KEY} from "modules/users/constants/queries";


const initialValue: IUser = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    roles: []
}

const useUserCreateForm = (defaultValues: IUser = initialValue, onClose: () => void) => {
        const {t} = useTranslation("account");
        const queryClient = useQueryClient()
        const {control, handleSubmit, reset} = useForm({
            resolver: yupResolver(userSchema),
            defaultValues: defaultValues || initialValue
        });

        useEffect(() => {
            // @ts-ignore
            if (defaultValues)
                reset(defaultValues)
        }, [defaultValues, reset])

        // @ts-ignore
        const {mutate, error, isLoading, isSuccess, data} = useMutation((user: IUser) => UserServices.saveOrUpdate({
            _id: user?._id,
            firstName: user?.firstName,
            lastName: user?.lastName,
            email: user?.email,
            phone: user?.phone,
            roles: user?.roles
        }), {
            onSuccess: (data, variables, context) => {
                queryClient.invalidateQueries(USERS_LIST_KEY)
                if (variables._id)
                    queryClient.invalidateQueries(variables._id)
                toast.success(t('successUpdate'))
                onClose?.()
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

export default useUserCreateForm;
