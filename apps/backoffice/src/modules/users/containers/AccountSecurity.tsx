import { memo } from 'react'
import { UserSecurityInfo } from '../components/UserSecurityInfo'

function AccountSecurity() {
    return (
        <UserSecurityInfo />
    )
}

export default memo(AccountSecurity)