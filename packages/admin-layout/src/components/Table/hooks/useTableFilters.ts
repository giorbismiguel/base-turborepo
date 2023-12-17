import {useContext} from "react";
import {FilterViewContext, defaultValue} from "../contexts/FilterViewContext";

export const useTableFilters = () => {
    const context = useContext(FilterViewContext);
    if (context === undefined) {
        return defaultValue; // also, you can throw an error if it is you need the context
    }
    return context;

}