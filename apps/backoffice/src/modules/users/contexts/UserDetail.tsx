import { InterfaceUser } from "modules/users/interfaces/IUser";
import { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from 'react';
import { useFindOneUsers } from "../hooks/useFindOneUsers";
import { useParams } from "react-router";

// Data value of the provider context
type UserContextValue = {
    user?: InterfaceUser,
    isLoading: boolean,
    setUser?: Dispatch<SetStateAction<InterfaceUser | undefined>>
    error?: any
}
// default value of the context
const defaultValue: UserContextValue = {
    isLoading: true,
}

// create context
const UserContext = createContext<UserContextValue>(defaultValue);

// Proptypes of Provider component
type UserContextProps = {
    children: any
}

/**
 * Provider component
 * */
const UserDetailProvider = (props: UserContextProps) => {
    const { id } = useParams();

    const { isLoading, data, error } = useFindOneUsers(id ?? null);

    const [user, setUser] = useState<InterfaceUser>();

    useEffect(() => {
        if (data) {
            setUser(data);
        }
    }, [data, setUser]);

    return (
        <UserContext.Provider
            value={{ user, setUser, isLoading, error }}
            {...props}
        />
    );
}


// Default hook to retrieve context data
const useUserDetail = () => {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error('You must be inside a UserDetailProvider component')
    }
    return context;
}

export { UserDetailProvider, useUserDetail };
