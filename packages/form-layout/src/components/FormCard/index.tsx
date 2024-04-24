import React from 'react';
import Paper, {PaperProps} from '@mui/material/Paper';
import {StackProps, styled} from '@mui/material';


type FormCardProps = PaperProps & { rounded?: boolean, maxWidth?: any }

const Card = ({children, rounded, ...props}: FormCardProps) => {
    return (
        <Paper elevation={1}  {...props}>
            {children}
        </Paper>
    );
};


const FormCard = styled(Card)<FormCardProps>(({theme, rounded, maxWidth = 700}) => ({
    padding: 16,
    width: '100%',
    maxWidth: maxWidth,
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
