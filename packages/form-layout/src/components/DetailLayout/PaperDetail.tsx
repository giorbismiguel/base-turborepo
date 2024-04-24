import React from 'react';
import {Paper, PaperProps, styled} from '@mui/material';

export type PaperDetailProps = PaperProps & {
    ghost?: boolean
}

const PaperDetailWrapper = ({className, ghost , ...props}: PaperDetailProps) => {
    //ignoring ghost property to fix the DOM warning
    return (<Paper className={className} {...props}/>)
}

const PaperDetail = styled(PaperDetailWrapper)<PaperDetailProps>(({ghost}) => {
    if (ghost)
        return {
            border: 'none',
            background: 'none',
            boxShadow: 'none'
        }
});


export default PaperDetail;
