import { useCallback, MouseEvent } from "react";
import { useTable } from "../contexts/TableContext";
import { saveToStorage } from "hook-utils";
import { TableOrder } from "../interfaces";

export const useTableOrder = () => {
  const { order, setOrder, id } = useTable();

  const onChangeOrder = useCallback(
    (_event: MouseEvent<unknown>, property: string) => {
      setOrder(({ orderBy, order }) => {
        const isAsc = orderBy === property && order === "asc";
        const settings: TableOrder = {
          order: isAsc ? "desc" : "asc",
          orderBy: property,
        };
        saveToStorage(id, settings);
        return settings;
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },
    []
  );

  return {
    order: order.order,
    orderBy: order.orderBy,
    onChangeOrder,
  };
};
