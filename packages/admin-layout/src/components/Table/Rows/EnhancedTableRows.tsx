import React from "react";
import { CellType, HeadCell } from "../interfaces";
import { DateValue, CurrencyValue } from "mui-react-common";
import get from "lodash/get";
import TableCell from "@mui/material/TableCell";
import { Link } from "@mui/material";

type TableRowsProps = {
  headCells: HeadCell[];
  row: any;
};
const numberFormat = new Intl.NumberFormat("en");
const renderValue = (cellSetting: HeadCell, row: any) => {
  let value = get(row, cellSetting.field);
  if (cellSetting.renderCell) {
    return cellSetting.renderCell(value, row);
  }
  if (cellSetting.component) {
    const Cell = cellSetting.component;
    return <Cell value={value} rowId={row._id || row.id} record={row} />;
  }

  switch (cellSetting.type) {
    case CellType.DATE: {
      return <DateValue value={value} format={cellSetting.format} />;
    }
    case CellType.EMAIL: {
      return <Link href={`mailto:${value}`}>{value}</Link>;
    }
    case CellType.PHONE: {
      return <Link href={`tel:${value}`}>{value}</Link>;
    }
    case CellType.NUMBER: {
      return value && numberFormat.format(value);
    }
    case CellType.CURRENCY: {
      return <CurrencyValue value={value} />;
    }
    case CellType.IMAGE: {
      return <img src={value} alt="" width={50} />;
    }
    default:
      return value;
  }
};

const EnhancedTableRows = ({ headCells, row }: TableRowsProps) => {
  return (
    <>
      {headCells.map((cellSetting) => {
        const value = renderValue(cellSetting, row);
        const align =
          cellSetting.align ||
          (cellSetting.type === CellType.NUMBER ? "right" : "left");
        return (
          <TableCell
            align={align}
            className={cellSetting.cellClassName}
            padding={cellSetting.disablePadding ? "none" : "normal"}
            key={cellSetting.field}
          >
            {value}
          </TableCell>
        );
      })}
    </>
  );
};

export default EnhancedTableRows;
