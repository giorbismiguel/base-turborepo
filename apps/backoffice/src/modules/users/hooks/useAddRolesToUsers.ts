import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import type { InterfaceRole } from "modules/security/interfaces";
import { RoleService } from "modules/security/services";
import { userAddRolesSchema } from "../schemas/user.schema";

const useAddRolesToUsers = () => {
  const queryClient = useQueryClient();

  const { control, handleSubmit, reset } = useForm({
    resolver: yupResolver(userAddRolesSchema),
  });

  // @ts-ignore
  const { mutate, error, isLoading, isSuccess, data } = useMutation(
    (role: InterfaceRole) => RoleService.saveOrUpdate(role),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("roles");
        queryClient.invalidateQueries("users");
        reset();
      },
    },
  );

  return {
    control,
    error,
    isLoading,
    isSuccess,
    data,
    reset,
    // @ts-ignore
    onSubmit: handleSubmit((values) => mutate(values)),
  };
};

export default useAddRolesToUsers;
