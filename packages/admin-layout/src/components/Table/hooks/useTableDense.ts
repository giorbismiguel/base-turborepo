import {useCallback, ChangeEvent} from 'react';
import {useTable} from "../contexts/TableContext";


export const useTableDense = () => {
    const {dense, setDense} = useTable();

    const onChangeDense = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        setDense(event.target.checked);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return {
        dense,
        onChangeDense
    }
}