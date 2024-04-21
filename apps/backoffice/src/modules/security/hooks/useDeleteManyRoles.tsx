import { useMutation, useQueryClient } from "react-query";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { useTableSelection } from "admin-layout";
import { RoleService } from "modules/security/services";
import { ROLES_LIST_KEY } from "modules/security/constants/queries";

export const useDeleteManyRoles = () => {
  const queryClient = useQueryClient();
  const { t } = useTranslation("role");
  const { selected, clearSelection } = useTableSelection();

  return useMutation(() => {
    if (selected && selected.length){
      return RoleService.deleteMany(selected as string[]);
    }
    
    // eslint-disable-next-line prefer-promise-reject-errors
    return Promise.reject({ message: 'you must have items selected to do this operation', reference: 'MD000' });
  }, {
    onSuccess: () => {
      toast.success(t('successDeletedRoles'));
      clearSelection();
      queryClient.invalidateQueries(ROLES_LIST_KEY);
    },
    onError: (error: any) => {
      if (error.reference === 'MD000')
        toast.error(t('common:errors.needSelection'));
      else {
        toast.error(t('common:errors.generalErrorMessage'));
      }
    }
  });
};

