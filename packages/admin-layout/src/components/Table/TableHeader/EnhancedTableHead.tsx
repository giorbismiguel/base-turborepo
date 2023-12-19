import React, { ChangeEvent, memo, MouseEvent } from "react";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Checkbox from "@mui/material/Checkbox";
import TableSortLabel from "@mui/material/TableSortLabel";
import { CellAlign, CellType, HeadCell, Order } from "../interfaces";
import { useTranslation } from "react-i18next";

interface EnhancedTableProps {
  numSelected: number;
  onRequestSort: (event: MouseEvent<unknown>, property: any) => void;
  onSelectAllClick: (event: ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  headCells: HeadCell[];
  orderBy: string;
  rowCount: number;
  select: boolean;
  isLoading?: boolean;
}

const cellAlign = (cell: HeadCell): CellAlign => {
  if (cell.align) return cell.align;
  if (cell.type === CellType.NUMBER) return CellAlign.RIGHT;
  return CellAlign.LEFT;
};

const EnhancedTableHead = (props: EnhancedTableProps) => {
  const { t } = useTranslation("common");
  const {
    onSelectAllClick,
    headCells,
    order,
    orderBy,
    numSelected,
    rowCount,
    select,
    isLoading,
    onRequestSort,
  } = props;

  const createSortHandler = (property: any) => (event: MouseEvent<unknown>) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {select && (
          <TableCell padding="checkbox">
            <Checkbox
              color="primary"
              disabled={isLoading}
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={rowCount > 0 && numSelected === rowCount}
              onChange={onSelectAllClick}
              inputProps={{
                "aria-label": "select all desserts",
              }}
            />
          </TableCell>
        )}
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.field}
            align={cellAlign(headCell)}
            width={headCell.width}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.field ? order : false}
          >
            {headCell.sortable === false ? (
              t(headCell.headerName)
            ) : (
              <TableSortLabel
                disabled={isLoading}
                active={orderBy === headCell.field}
                direction={orderBy === headCell.field ? order : "asc"}
                onClick={createSortHandler(headCell.field)}
                sx={
                  headCell.align === CellAlign.CENTER ? { marginLeft: 3 } : {}
                }
              >
                {t(headCell.headerName)}
              </TableSortLabel>
            )}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default memo(EnhancedTableHead);
