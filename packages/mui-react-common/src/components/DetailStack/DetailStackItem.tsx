import React, {ReactNode} from 'react';
import {Stack, StackProps, Typography} from "@mui/material";
import {useTranslation} from "react-i18next";
import {ResponsiveStyleValue} from "@mui/system";

export type DetailStackItemRecord = {
    label: string,
    value?: string,
    hideEmpty?: boolean,
    translate?: boolean,
    truncate?: boolean,
    forceMultiline?: boolean,
    inverse?: boolean,
    render?: (data: any) => ReactNode,
    /**
     * Permissions required to render the item.
     */
    permissions?: string | string[];
}

type DetailItemProps = DetailStackItemRecord & Omit<StackProps, 'translate'> & {
    data: any,
    itemDirection?: ResponsiveStyleValue<'row' | 'row-reverse' | 'column' | 'column-reverse'>,
};

const sxTruncate = {
    minWidth: 0,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
}
const sxMultiLine = {
    minWidth: 0,
    wordWrap: 'break-word',
    display: 'block',
}

const sx = {};

const strong = {
    fontWeight: 'bold'
}
const normal = {
    color: 'text.secondary'
}
const DetailStackItem = ({
                             label,
                             value,
                             itemDirection = 'row',
                             justifyContent = 'space-between',
                             alignItems = 'center',
                             render,
                             translate = true,
                             hideEmpty,
                             forceMultiline,
                             truncate,
                             inverse,
                             data,
                             ...stackProps
                         }: DetailItemProps) => {
    const {t} = useTranslation('common');
    const renderValue = value || render?.(data);

    if (!renderValue && hideEmpty) {
        return <></>
    }

    const contentSx = truncate ? sxTruncate : forceMultiline ? sxMultiLine : sx;

    return (
        <Stack direction={itemDirection} justifyContent={justifyContent} alignItems={alignItems} {...stackProps}>
            <Typography {...(inverse ? normal : strong)} mr={3}>
                {translate === false ? label : t(label)}
            </Typography>
            <Typography {...(inverse ? strong : normal)} component={'div'} sx={contentSx}>
                {renderValue}
            </Typography>
        </Stack>
    );
}

export default DetailStackItem;
