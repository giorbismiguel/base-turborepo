import {memo, useEffect} from 'react';
import LoginContainer from 'modules/authentication/container/LoginContainer';
import {useTranslation} from 'react-i18next';
import { H1 } from 'components/Typography';
// import {useSecurity} from "react-security";
// import {useNavigate} from "react-router-dom";

const Login = () => {
    const {t} = useTranslation('authentication');
    // const {isAuthenticated} = useSecurity();
    // let navigate = useNavigate();

    // useEffect(() => {
    //     if (isAuthenticated)
    //         navigate('/')
    //     // eslint-disable-next-line
    // }, [])

    return (<>
            <H1 textAlign={'center'}>
                {t('loginTitle')}
            </H1>
            <LoginContainer/>
        </>
    );
};

export default memo(Login);
