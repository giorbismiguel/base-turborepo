import {AlertColor} from "@mui/material/Alert/Alert";

export type ErrorType = {
    title?: string,
    description?: string,
    severity?: AlertColor
};

export type HandlerErrorProps = {
    error?: any;
    errors?: any;
    networkError?: boolean;
    closable?: boolean;
    mapError?: (error: any) => ErrorType | null | undefined;
}
