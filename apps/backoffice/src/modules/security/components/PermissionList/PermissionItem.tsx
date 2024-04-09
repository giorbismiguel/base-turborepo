import {memo} from 'react';
import Chip, {ChipProps} from '@mui/material/Chip';
import {styled} from "@mui/material";

export type InlineChipProps = {
    inline?: boolean
}

const InlineChip = ({className, inline, ...props}: InlineChipProps & ChipProps) => {
    //ignoring inline property to fix the DOM warning
    return (<Chip className={className} {...props}/>)
}

const PermissionItem = styled(InlineChip)<InlineChipProps>(({theme, inline}) => (
    {
        borderRadius: 4,
        backgroundColor: theme.palette.primary.light,
        marginBottom: inline ? 0 : 7,
        marginRight: 7
    }
))


export default memo(PermissionItem)