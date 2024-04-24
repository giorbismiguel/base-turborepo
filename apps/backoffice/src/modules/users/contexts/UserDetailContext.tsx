import type { InterfaceUser } from "modules/users/interfaces/IUser";
import type { Dispatch, SetStateAction} from 'react';
import { createContext, useContext, useEffect, useState } from 'react';
import { useParams } from "react-router";
import { useFindOneUsers } from "../hooks/useFindOneUsers";

// Data value of the provider context
interface UserContextValue {
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
interface UserContextProps {
    children: any
}

/**
 * Provider component
 * */
function UserDetailProvider(props: UserContextProps) {
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
