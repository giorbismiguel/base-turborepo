import { createContext, useContext } from 'react';
import { useFindOneRoles } from "modules/security/hooks/useFindOneRoles";
import { ChildrenProps } from "mui-react-common";
import { UseQueryResult } from "react-query";
import { IRole } from "modules/security/interfaces";


type RoleDetailContextValue = UseQueryResult<IRole> & {
    roleId: string
}
// create context
// @ts-ignore
const RoleDetailContext = createContext<RoleDetailContextValue>();

// Proptypes of Provider component
type RoleDetailContextProps = ChildrenProps & {
    roleId: string
}

/**
 * Provider component
 * */
const RoleDetailProvider = ({ roleId, ...props }: RoleDetailContextProps) => {

    const query = useFindOneRoles(roleId);

    return (
        <RoleDetailContext.Provider
            value={{ ...query, roleId }}
            {...props}
        />
    );
}


// Default hook to retrieve context data
const useRoleDetail = () => {
    const context = useContext(RoleDetailContext);
    if (context === undefined) {
        throw new Error('You must be inside a RoleDetailProvider') // also, you can throw an error if it is you need the context
    }
    return context;
}

export { RoleDetailProvider, useRoleDetail };
