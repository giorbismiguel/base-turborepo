import { memo } from 'react'
import { PagePaperLayout } from "layouts";
import { useTranslation } from 'react-i18next';
import UserListContainer from "modules/users/containers/UserListContainer";
import { TableProvider, FilterViewProvider } from "admin-layout";
import { userViewTabs } from "modules/users/constants/user.viewtabs";
import { filters } from "modules/users/constants/filters";

const UserList = () => {
    const { t } = useTranslation('users');

    return (
        <PagePaperLayout title={t('userList')}>
            <TableProvider id={'users'} filters={filters}>
                <FilterViewProvider views={userViewTabs}>
                    <UserListContainer />
                </FilterViewProvider>
            </TableProvider>
        </PagePaperLayout>
    );

}

export default memo(UserList);
