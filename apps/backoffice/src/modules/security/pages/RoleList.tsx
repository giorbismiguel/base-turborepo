import { memo } from 'react'
import { useTranslation } from "react-i18next";
import { PagePaperLayout } from "layouts/index";
import { TableProvider } from "admin-layout";
import RoleListContainer from "modules/security/containers/RoleListContainer";


const RoleList = () => {
    const { t } = useTranslation('role');

    return (
        <PagePaperLayout title={t('roleList')}>
            <TableProvider id={'roles'}>
                <RoleListContainer />
            </TableProvider>
        </PagePaperLayout>
    );
}

export default memo(RoleList);