import { useQuery } from "react-query";
import { useTableRequest } from "admin-layout";
import { RoleService } from "modules/security/services";
import { ROLES_LIST_KEY } from "modules/security/constants/queries";
import { useMemo, useRef } from "react";
import { STALE_TIME } from "settings/query";

export const useFindRolesTable = () => {
  const { fetch, queryKey } = useTableRequest(RoleService.search);

  return useQuery([ROLES_LIST_KEY, queryKey], fetch, { staleTime: STALE_TIME });
};

export const useFindRoles = (
  search: string,
  options?: any,
  enabled?: boolean,
) => {
  const { filters, page, size: rowsPerPage } = options || {};
  const areAll = useRef({ areAll: false });

  const { fetch, queryKey } = useMemo(() => {
    const currentPage = page || 0;
    const size = rowsPerPage || 70;
    const overwriteSearch = areAll.current.areAll ? "" : search || "";
    const payload = {
      search: overwriteSearch.toLowerCase(),
      filters,
      page: currentPage + 1,
      size,
    };

    const fetch = async () => {
      const data = await RoleService.search(payload);
      if (!search && !currentPage && !data.hasMore) {
        areAll.current.areAll = true;
      }
      return data;
    };

    return {
      queryKey: payload,
      fetch,
    };
  }, [search, page, filters, rowsPerPage]);

  return useQuery([ROLES_LIST_KEY, queryKey], fetch, {
    staleTime: STALE_TIME * 4,
    enabled,
  });
};
