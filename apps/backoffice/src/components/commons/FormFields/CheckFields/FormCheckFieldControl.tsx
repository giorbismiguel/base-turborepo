import React, {FC, memo} from "react";
import {Control, Controller} from "react-hook-form";
import {InputBaseComponentProps} from "@mui/material";
import {useDFLForm} from "../Form";

export type FormCheckFieldControlProps = {
    Component?: any,
    control?: Control<any, any>,
    name: string,
    isLoading?: boolean,
    disabled?: boolean,
    readOnly?: boolean,
    inputProps?: InputBaseComponentProps | undefined
}

const FormCheckFieldControl: FC<FormCheckFieldControlProps> = ({control, name, Component, ...props}) => {
    const {isLoading, readOnly, disabled, control: superControl} = useDFLForm();
    return (
        <Controller
            name={name}
            control={superControl || control}
            render={({field: {ref, ...rest}}) => (
                <Component inputRef={ref}
                           {...rest}
                           disabled={isLoading || disabled || readOnly || props.isLoading || props.readOnly}
                           {...props} />
            )}
        />
    );
};

export default memo(FormCheckFieldControl);
