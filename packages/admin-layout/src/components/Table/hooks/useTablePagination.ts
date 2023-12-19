import { useCallback, ChangeEvent } from "react";
import { useSearchParams } from "react-router-dom";
import { parseNumber } from "hook-utils";
import { useSearchParamsChange } from "security";

export const useTablePagination = () => {
  let [searchParams] = useSearchParams();
  let { update } = useSearchParamsChange();
  const page = parseNumber(searchParams.get("page"), 0);
  const rowsPerPage = parseNumber(searchParams.get("size"), 10);

  const onPageChange = useCallback(
    (event: unknown, newPage: number) => {
      update({ page: newPage.toString() });
    },
    [update]
  );

  const onRowsPerPageChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const size = parseInt(event.target.value, 10).toString();
      update({ page: "0", size });
    },
    [searchParams]
  );

  return {
    page: page,
    rowsPerPage: rowsPerPage,
    onPageChange,
    onRowsPerPageChange,
  };
};
