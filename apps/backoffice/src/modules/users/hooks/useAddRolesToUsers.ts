import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useQueryClient } from 'react-query';
import { userAddRolesSchema } from '../schemas/user.schema';



const useAddRolesToUsers = ({defaultValues}) => {
  const { t } = useTranslation("user");
  const queryClient = useQueryClient()

  const { control, handleSubmit, reset } = useForm({
      resolver: yupResolver(userAddRolesSchema)),
      defaultValues
  });

  // @ts-ignore
  const {
      mutate,
      error,
      isLoading,
      isSuccess,
      data
  } = useMutation((role: IRole) => RoleService.saveOrUpdate(role), {
      onSuccess: (data, values) => {
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
}

export default useAddRolesToUsers