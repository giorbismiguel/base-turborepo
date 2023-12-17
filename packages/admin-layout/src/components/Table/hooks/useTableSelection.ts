import {useCallback, ChangeEvent} from 'react';
import {useTable} from "../contexts/TableContext";


export const useTableSelection = (rows?: any[]) => {
    const {selected, setSelected} = useTable();

    const handleSelectAll = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked && rows) {
            const newSelects = rows.map((n: any) => n._id || n.id);
            setSelected(newSelects);
            return;
        }
        setSelected([]);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [rows]);


    const handleSelectionClick = useCallback((event: ChangeEvent<HTMLInputElement>, id: string) => {
        setSelected(prevSelected => {
            const selectedIndex = prevSelected.indexOf(id);
            let newSelected: readonly string[] = [];

            if (selectedIndex === -1) {
                newSelected = newSelected.concat(prevSelected, id);
            } else if (selectedIndex === 0) {
                newSelected = newSelected.concat(prevSelected.slice(1));
            } else if (selectedIndex === prevSelected.length - 1) {
                newSelected = newSelected.concat(prevSelected.slice(0, -1));
            } else if (selectedIndex > 0) {
                newSelected = newSelected.concat(
                    prevSelected.slice(0, selectedIndex),
                    prevSelected.slice(selectedIndex + 1),
                );
            }

            return newSelected;
        })
// eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const isSelected = (id: string) => selected.indexOf(id) !== -1;


    const clearSelection = useCallback(() => {
        setSelected([]);
    }, []);

    return {
        selected,
        numSelected: selected.length,
        handleSelectAll,
        handleSelectionClick,
        isSelected,
        clearSelection
    }
}
