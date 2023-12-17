import React from "react";
import Box from '@mui/material/Box';
import MuiTable from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import EnhancedTableHead from "./TableHeader/EnhancedTableHead";
import {
    useTableDense,
    useTableOrder,
    useTableSelection,
    useTablePagination
} from "./hooks";
import {ErrorResult, NotSearchResult} from "mui-react-common";
import {EnhancedTableRows, LoadingRows} from "./Rows";
import {HeadCell} from "./interfaces";


type EnhancedTableProps = {
    data: any[],
    columns: HeadCell[],
    select?: boolean,
    total: number,
    isLoading?: boolean,
    isError?: boolean,
    error?: any,
}

export default function Table({
                                  columns,
                                  data = [],
                                  total,
                                  isLoading,
                                  error,
                                  select = false
                              }: EnhancedTableProps) {
    const {dense} = useTableDense();
    const {order, orderBy, onChangeOrder} = useTableOrder();
    const {selected, handleSelectAll, handleSelectionClick, isSelected} = useTableSelection(data);
    const {page, rowsPerPage, onRowsPerPageChange, onPageChange} = useTablePagination();


    // if (isLoading)
    //     return <PageLoader/>;

    if (error) {
        return (
            <Box sx={{display: 'flex', flexGrow: 1, justifyContent: 'center'}} mt={4}>
                <ErrorResult error={error}/>
            </Box>
        );
    }
    if (!isLoading && !data?.length) {
        return (
            <Box sx={{display: 'flex', flexGrow: 1, justifyContent: 'center'}} mt={4}>
                <NotSearchResult/>
            </Box>
        );
    }

    // // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows = page > 0 ? Math.max(0, data.length - rowsPerPage) : 0;

    return (
        <Box sx={{width: '100%'}}>
            <TableContainer>
                <MuiTable
                    sx={{minWidth: 750}}
                    aria-labelledby="tableTitle"
                    size={dense ? 'small' : 'medium'}
                >
                    <EnhancedTableHead
                        select={select}
                        headCells={columns}
                        numSelected={selected.length}
                        order={order}
                        isLoading={isLoading}
                        orderBy={orderBy}
                        onSelectAllClick={handleSelectAll}
                        onRequestSort={onChangeOrder}
                        rowCount={data.length}
                    />
                    <TableBody>
                        {isLoading && <LoadingRows headCellsSize={columns.length} select={select}/>}
                        {!isLoading && data.map((row: any, index: number) => {
                            // @ts-ignore
                            const id = row._id || row.id;
                            const isItemSelected = isSelected(id);
                            const labelId = `enhanced-table-checkbox-${index}`;

                            return (
                                <TableRow
                                    // hover
                                    // onClick={(event) => select && handleSelectionClick(event, id)}
                                    // role="checkbox"
                                    aria-checked={isItemSelected}
                                    tabIndex={-1}
                                    key={id}
                                    selected={isItemSelected}
                                >
                                    {select &&
                                        <TableCell padding="checkbox">
                                            <Checkbox
                                                color="primary"
                                                checked={isItemSelected}
                                                onChange={(event) => select && handleSelectionClick(event, id)}
                                                inputProps={{
                                                    'aria-labelledby': labelId,
                                                }}
                                            />
                                        </TableCell>
                                    }
                                    <EnhancedTableRows row={row} headCells={columns}/>
                                </TableRow>
                            );
                        })}
                        {emptyRows > 0 && (
                            <TableRow
                                style={{
                                    height: (dense ? 33 : 53) * emptyRows,
                                }}
                            >
                                <TableCell colSpan={6}/>
                            </TableRow>
                        )}
                    </TableBody>
                </MuiTable>
            </TableContainer>
            {!isLoading && <TablePagination
                rowsPerPageOptions={[3, 5, 10, 25]}
                component="div"
                count={total}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={onPageChange}
                onRowsPerPageChange={onRowsPerPageChange}
            />
            }
        </Box>
    );
}
