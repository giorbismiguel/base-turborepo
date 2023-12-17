import React, {createContext, useContext, useState, Dispatch, SetStateAction} from 'react';
import {Order, TableOrder} from "../interfaces";
import {getFromStorage} from "hook-utils";
import {Filter} from "../../Filters/types";

// Data value of the provider context
type TableContextValue = {
    id: string,

    selected: readonly string[],
    setSelected: Dispatch<SetStateAction<readonly string[]>>,

    dense: boolean,
    setDense: Dispatch<SetStateAction<boolean>>,

    order: TableOrder,
    setOrder: Dispatch<SetStateAction<TableOrder>>,
    filters?: Filter[],

}
// default value of the context
const defaultValue: TableContextValue = {
    id: `table-order-table`,
    selected: [],
    dense: false,
    order: {order: 'desc', orderBy: 'createdAt'},
    setSelected: () => {
    },
    setDense: () => {
    },
    setOrder: () => {
    },
}

// create context
const TableContext = createContext<TableContextValue>(defaultValue);

// Proptypes of Provider component
type TableContextProps = {
    id: string,
    children: any,
    defaultOrder?: Order,
    defaultOrderField?: string,
    defaultDense?: boolean,
    filters?: Filter[],
}


/**
 * Provider component
 * */
const TableProvider = ({
                           id = 'table',
                           defaultOrder = 'desc',
                           defaultOrderField = 'createdAt',
                           defaultDense = false,
                           filters,
                           ...props
                       }: TableContextProps) => {
    const [selected, setSelected] = useState<readonly string[]>([]);
    const [order, setOrder] = useState<TableOrder>(getFromStorage(`table-order-${id}`, {
        order: defaultOrder,
        orderBy: defaultOrderField
    }));
    const [dense, setDense] = useState(defaultDense);

    return (
        <TableContext.Provider
            value={{
                id: `table-order-${id}`,

                //selection
                selected,
                setSelected,

                // table density
                dense,
                setDense,

                //order
                order,
                setOrder,

                //filters
                filters
            }}
            {...props}
        />
    );
}


// Default hook to retrieve context data
const useTable = () => {
    const context = useContext(TableContext);
    if (context === undefined) {
        return defaultValue;
    }
    return context;
}

export {TableProvider, useTable};
