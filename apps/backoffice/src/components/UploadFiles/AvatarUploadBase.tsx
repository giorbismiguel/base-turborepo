import {memo} from 'react'
import {Avatar, AvatarProps, CircularProgress, IconButton, IconButtonProps, styled} from "@mui/material";
import CameraAltIcon from '@mui/icons-material/CameraAlt';

export type AvatarUploadBaseProps = Omit<AvatarProps, 'onClick'> & {
    isLoading?: boolean,
    size?: number,
    onClick?: () => any
}

export const AvatarUploadStyle = styled('div')<{ size: number }>(({size}) => ({
    position: 'relative',
    width: size,
    '.MuiCircularProgress-root': {
        position: 'absolute',
        top: '-2px',
        left: '-2px'
    }
}));

// @ts-ignore
export const IconButtonStyle = styled(IconButton)<IconButtonProps>(({theme}) => ({
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: theme.palette.background.paper,
    border: `2px solid ${theme.palette.divider}`,
    '&:hover': {
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.primary.main,
        borderColor: theme.palette.primary.main,
    }
}));


const AvatarUploadBase = ({
                              src,
                              onClick,
                              size = 90,
                              isLoading,
                              sx,
                              ...props
                          }: AvatarUploadBaseProps) => {
    return (
        <AvatarUploadStyle size={size + 4}>
            {isLoading && <CircularProgress size={size + 4} thickness={1}/>}

            <>
                <Avatar
                    sx={{
                        height: size,
                        width: size,
                        color: 'white',
                        bgColor: 'secondary.light',
                        ...sx
                    }}
                    src={src}
                    {...props}
                />
                {!isLoading &&
                    <IconButtonStyle size={'small'} onClick={onClick}>
                        <CameraAltIcon fontSize='small'/>
                    </IconButtonStyle>
                }
            </>
        </AvatarUploadStyle>
    );

}

export default memo(AvatarUploadBase);