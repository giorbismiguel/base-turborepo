import type {ErrorType} from "mui-react-common";

export const ERRORS = {
    NETWORK_ERROR: "00000",
    EXPIRED_TOKEN: "PJ0012",
    NOT_ALLOW: "0"
};


export const GET_ONE_ERROR: ErrorType = {
    title: "common:errors.notFound",
    description: "common:errors.notFoundDescription",
    severity: "warning",
}

export const mapGetOneErrors = (error: any): ErrorType | undefined => {
    if (error?.statusCode === 400 || error?.statusCode === 404)
        return GET_ONE_ERROR;
}