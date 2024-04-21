import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {useMutation, useQueryClient} from 'react-query';
import type {IUser} from 'modules/users/interfaces/IUser';
import UserServices from "modules/users/services/user.services";
import toast from "react-hot-toast";
import {useTranslation} from "react-i18next";
import {useEffect} from 'react';
import {USERS_LIST_KEY} from "modules/users/constants/queries";
import {userSchema} from '../schemas/user.schema';


const initialValue: IUser = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    roles: []
}

// eslint-disable-next-line @typescript-eslint/default-param-last
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
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        const {mutate, error, isLoading, isSuccess, data} = useMutation((user: IUser) => UserServices.saveOrUpdate({
            _id: user?._id,
            firstName: user?.firstName,
            lastName: user?.lastName,
            email: user?.email,
            phone: user?.phone,
            roles: user?.roles
        }), {
            onSuccess: (_data, variables, _context) => {
                void queryClient.invalidateQueries(USERS_LIST_KEY)
                if (variables._id)
                    void queryClient.invalidateQueries(variables._id)
                toast.success(t('successUpdate'))
                onClose()
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
