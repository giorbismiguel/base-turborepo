import React, {memo} from 'react';
import {ChildrenProps} from '../../types';
import {H5} from '../Typography';
import {Box} from "@mui/material";
import {FlexBox} from "../FlexBox";

export type ResultBaseProps = ChildrenProps & {
    image?: string
    imageHeight?: number
    imageWidth?: number
    vertical?: boolean
}
const titleSx = {
    fontWeight: 'bold',
    fontSize: '1.25rem',
    lineHeight: '1.75rem',
    maxWidth: '25rem'
};

export const ErrorTitle = ({children}: ChildrenProps) => <H5 component={'div'} sx={titleSx} mb={1}>
    {children}
</H5>;

const imageSx = {
    mt: 1,
    mb: 2,
    marginRight: {lg: 2, xl: 4},
}

const verticalDirection: { [key: string]: "column" | "row" } = {xs: 'column'}
const defaultDirection: { [key: string]: "column" | "row" } = {xs: 'column', lg: 'row'}

const ResultBase = ({
                        image = '/images/no-results.png',
                        children,
                        imageHeight = 109,
                        imageWidth = 109,
                        vertical
                    }: ResultBaseProps) => {
    return (
        <FlexBox flexDirection={vertical ? verticalDirection : defaultDirection}>
            {/*<div className={'flex flex-col lg:flex-row'}>*/}
            <Box sx={imageSx}>
                <img src={image} height={imageHeight} width={imageWidth}/>
            </Box>
            {children}
        </FlexBox>
    );

};

export default memo(ResultBase);