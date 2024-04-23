import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from 'react-query';
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { RoleService } from 'modules/security/services';
import type { InterfaceRole } from "modules/security/interfaces";
import { userIdsSchema } from "modules/users/schemas/user.schema";
import type { InterfaceUser } from "modules/users/interfaces/IUser";

const useRoleAddUsersForm = (role: InterfaceRole | undefined, onClose: () => void) => {
    const { t } = useTranslation("role");
    const queryClient = useQueryClient();
    const { control, handleSubmit, reset } = useForm({
        resolver: yupResolver(userIdsSchema),
        defaultValues: { users: [] }
    });

    // @ts-ignore
    const {
        mutate,
        error,
        isLoading,
        isSuccess,
        data,
        reset: resetMutation
    } = useMutation((values: { users: InterfaceUser[] }) => {
        const ids: string[] = values.users.map((user) => user._id as string);
        return RoleService.addUsers(role?._id, ids);
    },
        {
            onSuccess: () => {
                toast.success(t('successAddUsers'));
                queryClient.invalidateQueries(['users', `users-${String(role?._id)}`]);
                onClose();
                reset();
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

export default useRoleAddUsersForm;