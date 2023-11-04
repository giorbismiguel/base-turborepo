// @ts-nocheck
import React, {memo, useCallback, useEffect, useState} from 'react'
import {StatusItem, IStatus} from './StatusItem'
import {
    MenuItem as MuiMenuItem,
    styled,
    SelectProps,
} from "@mui/material";
import {darken} from "@mui/system/colorManipulator";
import {useToggle} from "@dfl/hook-utils";
import {DropDown} from "../DropDown";
import {grey} from "@mui/material/colors";


export type StatusPickerProps = {
    value: IStatus,
    isLoading?: boolean,
    isError?: boolean
    readOnly?: boolean
    options?: IStatus[]
    name: string
    size?: 'small' | 'medium'
    onChange: (event: any) => void
}

export const SelectContainer = styled('div')(() => ({
    display: 'inline-block',
    minWidth: 75,
}));

type WrapperSelectProps = { statusColor?: string, isLoading?: boolean, isError?: boolean } & SelectProps;


export const SDropDown = styled(DropDown)<WrapperSelectProps>(({
                                                                   statusColor,
                                                                   isError
                                                               }) => ({
    '>.MuiButton-root': {
        cursor: 'pointer',
        borderRadius: 30,
        ...(
            statusColor ? {
                    background: isError ? '#fff' : statusColor,
                    color: '#fff',
                    border: 'none!important',
                    '&:hover': {
                        background: darken(statusColor, 0.3)
                    },
                } :
                {
                    background: isError ? '#fff' : grey.A400,
                    '&:hover': {
                        background: grey.A700
                    },
                }
        )
    }
}));

export const MenuItem = styled(MuiMenuItem)<{ color?: string }>(({color}) => ({
    background: color
}));

const StatusPicker = ({value, options, name, size = 'small', readOnly, onChange, isLoading}: StatusPickerProps) => {

    const [innerValue, setInnerValue] = useState<IStatus | undefined>(value);
    const {isOpen, onClose, onOpen} = useToggle();

    useEffect(() => {
        setInnerValue(value);
    }, [value])

    const handleChange = useCallback((status: IStatus) => {
        let prevValue;
        setInnerValue((prevState) => {
            prevValue = prevState;
            return status;
        });
        if (status?._id !== prevValue._id) {
            const promise = onChange?.(status);
            if (promise?.then) {
                promise.catch(() => {
                    setInnerValue(prevValue);
                });
            }
        }
        onClose()
    }, [onChange])

    if (readOnly) {
        return <SelectContainer><StatusItem value={value}/></SelectContainer>
    }

    return (
        <SelectContainer>
            <SDropDown
                variant={"contained"}
                name={name}
                buttonProps={{size, disabled: isLoading}}
                isLoading={isLoading}
                label={innerValue?.title}
                statusColor={innerValue?.color}
                open={isOpen}
                onClose={onClose}
                onOpen={onOpen}
            >
                {
                    options?.map(status => (
                        <MenuItem value={status._id} key={status._id} onClick={() => handleChange(status)}>
                            <StatusItem value={status} fullWidth/>
                        </MenuItem>
                    ))
                }
            </SDropDown>
        </SelectContainer>
    );

}

export default memo(StatusPicker);