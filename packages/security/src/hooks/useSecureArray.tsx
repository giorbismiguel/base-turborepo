import { useMemo } from "react";
import useSecurity from "./useSecurity";

export const useSecureArray = (columns: any[]): any[] => {
  const { hasPermission } = useSecurity();

  return useMemo(() => {
    return columns.filter(
      (column) => !column.permissions || hasPermission(column.permissions)
    );
  }, [hasPermission, columns]);
};
