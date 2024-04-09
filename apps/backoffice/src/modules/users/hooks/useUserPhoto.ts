import { useMutation, useQueryClient } from "react-query";
import { IUser } from "modules/users/interfaces/IUser";
import UserServices from "modules/users/services/user.services";
import toast from "react-hot-toast";
import { USERS_ONE_KEY } from "../constants/queries";
import { useTranslation } from "react-i18next";

export const useUserPhoto = (user: IUser | undefined) => {
  const { t } = useTranslation("account");
  const queryClient = useQueryClient();

  // @ts-ignore
  const {
    mutate,
    error,
    isLoading: isUpdatingAvatar,
    isSuccess,
  } = useMutation(
    (avatar: string | undefined) => {
      return UserServices.updateAvatar(avatar, user?._id);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries([user?._id, USERS_ONE_KEY]);
        toast.success(t("successUpdate"));
      },
    },
  );

  return {
    mutate,
    isUpdatingAvatar,
    isSuccess,
    error,
  };
};
