import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {useMutation, useQueryClient} from 'react-query';
import toast from "react-hot-toast";
import {useTranslation} from "react-i18next";
import {RoleService} from 'modules/security/services';
import type {IRole} from "modules/security/interfaces";
import {rolePermissionsSchema} from 'modules/security/schemas/role.schema';
import {ROLES_LIST_KEY, ROLES_ONE_KEY} from 'modules/security/constants/queries';
import {useEffect} from "react";

const useAddPermissionToRoleForm = (role: IRole | undefined, onClose: () => void) => {
    const {t} = useTranslation("role");
    const queryClient = useQueryClient();
    // @ts-ignore
    const {control, handleSubmit, reset} = useForm({
        resolver: yupResolver(rolePermissionsSchema),
        defaultValues: {permissions: role?.permissions}
    });

    const permissions = role?.permissions;
    useEffect(() => {
        // @ts-ignore
        if (permissions)
            reset({permissions})
    }, [permissions, reset])

    // @ts-ignore
    const {
        mutate,
        error,
        isLoading,
        isSuccess,
        data,
        reset: resetMutation
    } = useMutation((values: { permissions: { value: string }[] | [] }) => {
            const permissionsNames: string[] = values.permissions.map(permission => typeof permission === 'string' ? permission : permission.value);

            return RoleService.addPermissions(role?._id, permissionsNames);
        },
        {
            onSuccess: () => {
                queryClient.invalidateQueries([role?._id, ROLES_ONE_KEY]);
                queryClient.invalidateQueries([ROLES_LIST_KEY]);
                toast.success(t('successAddPermissions'));
                onClose();
            }
        });


    return {
        control,
        error,
        isLoading,
        isSuccess,
        data,
        reset: () => {
            resetMutation();
            reset();
        },
        // @ts-ignore
        onSubmit: handleSubmit((values) => mutate(values))
    };
};

export default useAddPermissionToRoleForm;