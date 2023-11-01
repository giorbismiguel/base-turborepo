import React from 'react';
import Button from '@mui/material/Button';
import MuiLink from '@mui/material/Link';
import {ButtonProps, LinkProps} from '@mui/material';
import {Link, LinkProps as RouterLinkProps} from 'react-router-dom';

type ReactButtonProps = ButtonProps & RouterLinkProps & {
    href?: string
};
type ReactLinkProps = LinkProps & RouterLinkProps & {
    href?: string
};

export const ReactButtonLink = ({to, href, ...props}: ReactButtonProps) => {
    return (
        // @ts-ignore
        <Button {...props} component={Link} to={to || href}/>
    );
};

export const ReactLink = ({to, href, ...props}: ReactLinkProps) => {
    return (
        // @ts-ignore
        <MuiLink {...props} component={Link} to={to || href}/>
    );
};

