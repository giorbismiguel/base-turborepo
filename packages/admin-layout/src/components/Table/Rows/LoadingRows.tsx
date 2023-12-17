import React, {memo, useMemo} from 'react'
import {Skeleton} from "@mui/material";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

type LoadingRowsProps = {
    headCellsSize: number,
    select: boolean,
}

const loadingData = [1, 2, 3, 4, 5, 6, 7]

const LoadingRows = ({headCellsSize = 5, select}: LoadingRowsProps) => {

    const heads = useMemo(() => {
        const data = [];
        for (let i = 0; i < headCellsSize; i++) {
            data.push(<TableCell key={i} padding={'normal'}>
                <Skeleton variant="text"/>
            </TableCell>)
        }
        return data;
    }, [headCellsSize])

    return <>
        {
            loadingData.map((v, index) => (
                <TableRow key={index}>
                    {select &&
                        <TableCell padding={'normal'}>
                            <Skeleton variant="rectangular" width={20} height={20}/>
                        </TableCell>
                    }
                    {heads}
                </TableRow>
            ))
        }
    </>
}

export default memo(LoadingRows);