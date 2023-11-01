import {AxiosError} from 'axios';

export type DFLError = AxiosError & {
    status: number | string
    message?: string
    data?: any
    networkError?: boolean
    reference?: number | string
}

