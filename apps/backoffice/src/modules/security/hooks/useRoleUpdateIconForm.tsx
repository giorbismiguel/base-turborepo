import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from 'react-query';
import { RoleService } from 'modules/security/services';
import { InterfaceRole } from "modules/security/interfaces";
import { ROLES_ONE_KEY } from '../constants/queries';
import { roleIconSchema } from '../schemas/role.schema';

const useRoleUpdateIconForm = (role: InterfaceRole | undefined, onClose: () => void) => {
    const queryClient = useQueryClient();
    const { control, handleSubmit, reset } = useForm({
        resolver: yupResolver(roleIconSchema),
        defaultValues: { avatar: role?.avatar }
    });

    // @ts-ignore
    const {
        mutate,
        error,
        isLoading,
        isSuccess,
        data,
    } = useMutation((avatar: { avatar: string }) => {
        return RoleService.updateAvatar(role?._id, avatar.avatar);
    }, {
        onSuccess: () => {
            queryClient.invalidateQueries([role?._id, ROLES_ONE_KEY]);
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

export default useRoleUpdateIconForm;