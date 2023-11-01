import {URLSearchParamsInit, useSearchParams} from "react-router-dom";
import {useCallback, useMemo} from "react";

export const getQueryObj = (searchParams: URLSearchParams): { [key: string]: string | string[] } => {
    const entries = Array.from(searchParams.entries());
    // @ts-ignore
    return entries.reduce((a: { [key: string]: string | string[] }, b: [string, string]) => {
        const key = b[0];
        const value = b[1];
        if (a[key]) {
            a[key] = Array.isArray(a[key]) ? a[key] as string[] : [a[key] as string];
            (a[key] as string[]).push(value);
        } else {
            a[key] = value;
        }
        return a;
    }, {})
}

export const useGetQueryObj = (): { [key: string]: string | string[] } => {
    let [searchParams, setSearchParams] = useSearchParams();
    return useMemo(() => {
        return getQueryObj(searchParams);
    }, [searchParams, setSearchParams]);
}

export const useParamsLink = (params: any) => {
    let [searchParams, setSearchParams] = useSearchParams();
    return useCallback(() => {
        const queries = getQueryObj(searchParams);
        setSearchParams({...queries, ...params});
    }, [searchParams, setSearchParams]);
};

export const useSearchParamsChange = (field?: string, all?: boolean) => {
    let [searchParams, setSearchParams] = useSearchParams();
    const update = useCallback((params: object, removeFields?: string | string[]) => {
        const queries = getQueryObj(searchParams);
        if (removeFields)
            if (Array.isArray(removeFields)) { // @ts-ignore
                (removeFields as string[]).forEach(item => delete queries[item]);
            } else// @ts-ignore
                delete queries[removeFields as string];
        setSearchParams({...queries, ...params});
    }, [searchParams, setSearchParams]);

    const replace = useCallback((params: object) => {
        setSearchParams(params as URLSearchParamsInit);
    }, [setSearchParams]);

    const removeField = useCallback((field: string | string[]) => {
        const queries = getQueryObj(searchParams);
        if (Array.isArray(field)) { // @ts-ignore
            (field as string[]).forEach(item => delete queries[item])
        } else// @ts-ignore
            delete queries[field as string]

        setSearchParams(queries as URLSearchParamsInit);
    }, [setSearchParams, searchParams]);

    const clean = useCallback(() => {
        setSearchParams({});
    }, [setSearchParams]);

    const fieldValue = field ? searchParams[all ? 'getAll' : 'get'](field) : undefined;

    return {
        update,
        replace,
        removeField,
        clean,
        value: fieldValue

    }

};