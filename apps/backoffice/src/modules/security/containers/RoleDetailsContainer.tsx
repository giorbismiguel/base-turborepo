import { memo } from 'react'
import { DetailContent, DetailLayout, DetailSummary } from "@dfl/mui-form-layout";
import { CenterPageLayout } from "layouts/index";
import RoleDetailsSummary from "modules/security/containers/RoleDetailsSummary";
import RoleUsersTable from "modules/security/containers/RoleUsersTable";
import { RolePermissionList } from "modules/security/components/RolePermissionList";
import { Divider, Paper, Stack } from '@mui/material';

const RoleDetailsContainer = () => {

    return (
        <CenterPageLayout>
            <DetailLayout>
                <DetailSummary ghost>
                    <Paper sx={{ marginBottom: 3 }}>
                        <Stack direction={'column'} divider={<Divider orientation="horizontal" light />} spacing={0}>
                            <RoleDetailsSummary />
                        </Stack>
                    </Paper>
                </DetailSummary>
                <DetailContent ghost>
                    <RoleUsersTable />
                    <RolePermissionList />
                </DetailContent>
            </DetailLayout>
        </CenterPageLayout>
    );
}

export default memo(RoleDetailsContainer);