import {useContext} from 'react'
import {SecurityContext} from "../contexts/SecurityContext";
import { SecurityProps } from '../contexts/Security';

type UseUser = {
    user: any,
    isLoading: boolean
    setUser :(value:any)=>void
    loadUser:()=>void
    hasToken: boolean
    isAuthenticated: boolean
}

const useUser = ():UseUser => {
    const context: SecurityProps = useContext(SecurityContext);
    if (context === undefined) {
        throw new Error('useSecurity must be used within a SecurityProvider');
    }
    const {
        user,
        isLoading,
        setUser,
        loadUser,
        hasToken
    } = context;

    return {
        user,
        isLoading,
        setUser,
        loadUser,
        hasToken,
        isAuthenticated: !!user || hasToken
    };
}


export default useUser;