import React from 'react';
import type {PaperProps} from '@mui/material/Paper';
import Paper from '@mui/material/Paper';
import {styled} from '@mui/material';


type FormCardProps = PaperProps & { rounded?: boolean, maxWidth?: any }

function Card({children, ...props}: FormCardProps) {
    return (
        <Paper elevation={1} {...props}>
            {children}
        </Paper>
    );
}


const FormCard = styled(Card)<FormCardProps>(({theme, rounded, maxWidth = 700}) => ({
    padding: 16,
    width: '100%',
    maxWidth,
    height: '100%',
    borderRadius: rounded ? 6 : 0,
    [theme.breakpoints.down('md')]: {
        boxShadow: 'none'
    },
    [theme.breakpoints.up('md')]: {
        padding: 32,
        height: 'auto'
    }
}));


export default FormCard;
