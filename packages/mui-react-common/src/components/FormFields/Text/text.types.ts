import {TextFieldProps} from "./TextField";

export type PasswordFieldProps = TextFieldProps & {
    hideIcon?: boolean;
    strong?: number;
    value?: any;
};
