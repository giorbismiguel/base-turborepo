import UserServices from "modules/users/services/user.services";
import { useQuery } from "react-query";
import { useTableRequest } from "admin-layout";
import { useMemo } from "react";
import { USERS_LIST_KEY } from "modules/users/constants/queries";

export const useFindUsersTable = () => {
  const { fetch, queryKey } = useTableRequest(UserServices.search);

  return useQuery([USERS_LIST_KEY, queryKey], fetch);
};

export const useFindUsers = (
  search: string,
  filters?: any,
  page?: number,
  rowsPerPage?: number,
) => {
  const { fetch: fetchData, queryKey } = useMemo(() => {
    const currentPage = page || 0;
    const size = rowsPerPage || 20;
    const payload = {
      search,
      filters,
      page: currentPage + 1,
      size,
    };
    const fetch = () => UserServices.search(payload);
    return {
      queryKey: payload,
      fetch,
    };
  }, [search, page, filters, rowsPerPage]);

  return useQuery([USERS_LIST_KEY, queryKey], fetchData);
};
