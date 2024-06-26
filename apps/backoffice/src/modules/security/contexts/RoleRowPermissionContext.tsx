import { createContext, useCallback, useContext, useState } from 'react';
import { InterfaceRole } from "modules/security/interfaces";

// Data value of the provider context
type RoleRowPermissionContextValue = {
    role?: InterfaceRole,
    onClose: () => void
    onOpen: (role: InterfaceRole) => void
    isOpen: boolean
}
// default value of the context
const defaultValue: RoleRowPermissionContextValue = {
    onClose: () => {
    },
    onOpen: (role) => {
    },
    isOpen: false
}

// create context
const RoleRowPermissionContext = createContext<RoleRowPermissionContextValue>(defaultValue);

// Proptypes of Provider component
type RoleRowPermissionContextProps = {
    children: any
}

/**
 * Provider component
 * */
const RoleRowPermissionProvider = (props: RoleRowPermissionContextProps) => {

    const [role, setRole] = useState<InterfaceRole>();

    const onClose = useCallback(() => {
        setRole(undefined);
    }, []);

    const onOpen = useCallback((role: InterfaceRole) => {
        setRole(role);
    }, []);

    return (
        <RoleRowPermissionContext.Provider
            value={{
                role,
                isOpen: !!role,
                onClose,
                onOpen
            }}
            {...props}
        />
    );
}


// Default hook to retrieve context data
const useRoleRowPermission = () => {
    const context = useContext(RoleRowPermissionContext);
    if (context === undefined) {
        return defaultValue; // also, you can throw an error if it is you need the context
    }
    return context;
}

export { RoleRowPermissionProvider, useRoleRowPermission };
