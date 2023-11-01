import {memo, Suspense} from 'react';
import PageLoader from '../components/PageLoader';
import AuthLayout from '../layouts/AuthLayout';
import {AuthenticationModule} from 'modules/index';

const MainApp = () => {
    return (
        <AuthLayout>
            <Suspense fallback={<PageLoader size={"page"}/>}>
                <AuthenticationModule/>
            </Suspense>
        </AuthLayout>
    );
};

export default memo(MainApp);
