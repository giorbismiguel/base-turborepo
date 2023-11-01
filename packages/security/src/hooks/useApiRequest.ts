import {useCallback, useReducer} from 'react';

//reduce actions
export enum ACTIONS {
    LOADING = 'LOADING',
    ERROR = 'ERROR',
    COMPLETE = 'COMPLETE'
}

//state data
export type ApiRequestState = {
    isLoading: boolean,
    isSuccess?: boolean,
    isError?: boolean,
    error?: any,
    data?: any
}

//dispatch input
type ApiRequestAction = {
    type: ACTIONS,
    data?: any
    error?: any
}
//reduce handler
export const reducer = (state: ApiRequestState, action: ApiRequestAction): ApiRequestState => {
    switch (action.type) {
        case ACTIONS.LOADING:
            return {
                isLoading: true,
                isSuccess: false,
            };
        case ACTIONS.ERROR:
            return {
                isLoading: false,
                isSuccess: false,
                isError: true,
                error: action.error
            };
        case ACTIONS.COMPLETE:
            return {
                isLoading: false,
                isSuccess: true,
                data: action.data
            };
        default:
            return state;
    }
};


//initial state
const defaultState: ApiRequestState = {
    isLoading: true
}

export const useApiRequestReducer = (initialState: ApiRequestState) => {
    const [state, dispatch] = useReducer(reducer, initialState || defaultState);

    const startRequest = useCallback(() => {
        dispatch({type: ACTIONS.LOADING})
    }, []);

    const errorRequest = useCallback((error: any) => {
        dispatch({type: ACTIONS.ERROR, error});
    }, [])

    const completeRequest = useCallback((data: any) => {
        dispatch({type: ACTIONS.COMPLETE, data});
    }, [])

    return {
        startRequest,
        errorRequest,
        completeRequest,
        state
    };
}