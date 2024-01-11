import {Toaster} from 'react-hot-toast';
import {CssBaseline, ThemeProvider} from '@mui/material';
import {ChildrenProps, CurrencyProvider, toasterOptions} from 'mui-react-common';
import {useSettings} from 'contexts/SettingsProvider';
import QueryProvider from 'contexts/QueryContext';
import {AuthControl, SecurityProvider} from 'security';


export const AppProvider = ({children}: ChildrenProps) => {
    const {theme} = useSettings(); // App theme

    return (
        <QueryProvider>
            <ThemeProvider theme={theme}>
                <SecurityProvider>
                    <CurrencyProvider currency={'CUP'}>
                        <AuthControl/>
                        {children}
                    </CurrencyProvider>
                    <CssBaseline/>
                    <Toaster toastOptions={toasterOptions}/>
                </SecurityProvider>
            </ThemeProvider>
        </QueryProvider>
    );
};
