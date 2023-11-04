import React, {memo, useState} from 'react'
import SelectAutocompleteField, {SelectAutocompleteFieldProps} from "./SelectAutocompleteField";
// import {useToggle} from "@dfl/hook-utils";
import debounce from "lodash/debounce";
import {useFindEntity} from "./useFindEntity";
import {useFindValue} from "./useFindValue";
import {useTranslation} from "react-i18next";

export type FetchOption = {
    size?: number,
    page?: number,
    filters?: any,
}

export type AsyncSelectAutocompletedProps =
    Omit<SelectAutocompleteFieldProps, 'open' | 'onOpen' | 'onClose' | 'options' | 'loading' | 'onInputChange'>
    & {
    fetchFunc: (payload: any) => Promise<any>,
    fetchOption?: FetchOption,
    queryKey: string,
    staleTime?: number,
    loadValue?: boolean,
    fetchValueFunc?: (payload: string | string[] | any) => Promise<any>,
}


const AsyncSelectAutocompleteField = ({
                                          error,
                                          fetchFunc,
                                          fetchOption,
                                          queryKey,
                                          staleTime,
                                          value,
                                          loadValue,
                                          fetchValueFunc,
                                          helperText,
                                          disabled,
                                          ...props
                                      }: AsyncSelectAutocompletedProps) => {
    const [search, setSearch] = useState<string>('');
    // const {isOpen, onOpen, onClose} = useToggle();
    const {isLoading, data, isError} = useFindEntity(fetchFunc, queryKey, search, fetchOption, isOpen, staleTime);
    const {
        isLoading: valueLoading,
        data: customValue,
        isError: valueError
    } = useFindValue(fetchValueFunc, value, loadValue, staleTime);

    const {t} = useTranslation('common');

    return (
        <SelectAutocompleteField
            open={isOpen}
            value={customValue}
            onOpen={onOpen}
            onClose={onClose}
            disabled={valueLoading || disabled}
            options={data?.data || []}
            onInputChange={debounce((event, value) => setSearch(value), 300)}
            loading={isLoading || valueLoading}
            error={error || isError || valueError}
            helperText={valueError ? t('errors.loadValue') : helperText}
            {...props}
        />
    );

}

export default memo(AsyncSelectAutocompleteField);