import { useEffect } from "react";
import { useMutation, useQueryClient } from 'react-query';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { userRolesSchema } from 'modules/users/schemas/user.schema';
import type { InterfaceUser } from 'modules/users/interfaces/IUser';
import { UserService } from "modules/users/services";
import type { InterfaceRole } from "modules/security/interfaces";
import { USERS_ONE_KEY } from "../constants/queries";


const useAddRoleToUserForm = (user: InterfaceUser | undefined, onClose: () => void) => {
    const queryClient = useQueryClient();
    const { t } = useTranslation("users");
    // @ts-ignore
    const { control, handleSubmit, reset } = useForm({
        resolver: yupResolver(userRolesSchema),
        defaultValues: { roles: user?.roles as InterfaceRole[] }
    });

    const defaultRoles = user?.roles as InterfaceRole[];
    useEffect(() => {
        // @ts-ignore
        if (defaultRoles)
            reset({ roles: defaultRoles })
    }, [defaultRoles, reset])

    // @ts-ignore
    const {
        mutate,
        error,
        isLoading,
        isSuccess,
        data,
        reset: resetMutation,
        isError
    } = useMutation((values: { roles: { _id: string }[] }) => {
        const rolesIds: string[] = values.roles.map(role => role._id);

        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return UserService.addRoles(user?._id, rolesIds);
    },
        {
            onSuccess: (_data) => {
                // eslint-disable-next-line @typescript-eslint/no-floating-promises
                queryClient.invalidateQueries([user?._id, USERS_ONE_KEY]);
                toast.success(t('successAddRoles'));
                onClose();
            }
        });


    return {
        control,
        error,
        isLoading,
        isSuccess,
        data,
        isError,
        reset: () => {
            resetMutation();
            reset();
        },
        // @ts-ignore
        onSubmit: handleSubmit((values) => mutate(values))
    };
};

export default useAddRoleToUserForm;