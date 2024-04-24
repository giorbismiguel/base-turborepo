import { memo } from 'react'
import UserDetailsContent from "modules/users/components/UserDetailsContent/UserDetailsContent";
import { UserSummary } from "modules/users/components/UserSummary";
import { UserDetailProvider } from "modules/users/contexts/UserDetailContext";
import { DetailContent, DetailLayout, DetailSummary } from "form-layout";

function UserDetailContainer() {
  return <UserDetailProvider>
        <DetailLayout>
            <DetailSummary>
                <UserSummary />
            </DetailSummary>
            <DetailContent>
                <UserDetailsContent />
            </DetailContent>
        </DetailLayout>
    </UserDetailProvider>
}

export default memo(UserDetailContainer);
