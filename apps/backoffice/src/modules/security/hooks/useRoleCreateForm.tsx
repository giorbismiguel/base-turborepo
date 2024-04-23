import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from 'react-query';
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { roleSchema } from "modules/security/schemas/role.schema";
import { InterfaceRole } from "modules/security/interfaces";
import { RoleService } from "modules/security/services";
import { ROLES_LIST_KEY } from "modules/security/constants/queries";
import { useEffect } from "react";


const initValues: InterfaceRole = {
    name: '',
    description: ''
}

const useRoleCreateForm = (onClose: () => void, defaultValues: InterfaceRole = initValues) => {
    const { t } = useTranslation("role");
    const queryClient = useQueryClient()
    const { control, handleSubmit, reset } = useForm({
        resolver: yupResolver(roleSchema),
        defaultValues
    });

    useEffect(() => {
        // @ts-ignore
        if (defaultValues)
            reset(defaultValues)
    }, [defaultValues, reset])


    // @ts-ignore
    const {
        mutate,
        error,
        isLoading,
        isSuccess,
        data
    } = useMutation((role: InterfaceRole) => RoleService.saveOrUpdate(role), {
        onSuccess: (data, values) => {
            queryClient.invalidateQueries(ROLES_LIST_KEY);
            values?._id && queryClient.invalidateQueries(values._id);
            toast.success(t(values?._id ? 'successUpdate' : 'successCreated'));
            onClose?.();
            reset();
        }
    });


    return {
        control,
        error,
        isLoading,
        isSuccess,
        data,
        reset,
        // @ts-ignore
        onSubmit: handleSubmit((values) => mutate(values))
    };
};

export default useRoleCreateForm;
