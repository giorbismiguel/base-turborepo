import {memo} from 'react';
import {Stack} from "@mui/material";
import { ChildrenProps } from '../types';
import FormCard from '../components/FormCard';
import { AuthOptions } from '../modules/authentication/components/AuthOptions';


const AuthLayout = ({children}: ChildrenProps) => {

    return (
        <Stack alignItems={'center'} justifyContent={'center'} sx={{minHeight: '100vh'}}>
            <FormCard rounded sx={{maxWidth: 600}}>
                <div>
                    {children}
                </div>
            </FormCard>
            <AuthOptions/>
        </Stack>
    );

};

export default memo(AuthLayout);
