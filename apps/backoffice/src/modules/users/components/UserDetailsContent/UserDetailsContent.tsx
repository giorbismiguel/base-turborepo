import { Box } from "@mui/material";
import { memo } from 'react';
import { RouteLoader, RouterTab } from "security";
import accountRoutes from "modules/users/routes/account";
import { accountTabs } from "modules/users/constants/account.tabs";
import { useParams } from "react-router-dom";

function UserDetailsContent() {
    const { id } = useParams();

    return (
        <Box pt={1}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider', paddingX: { xs: 2, md: 4 } }}>
                <RouterTab prefix={`/users/${String(id)}`} tabs={accountTabs} translationNs="account" />
            </Box>
            <Box sx={{ padding: { xs: 2, md: 4 } }}>
                <RouteLoader notfoundRedirect={`/users/${String(id)}/general`} routes={accountRoutes} />
            </Box>
        </Box>
    );
}

export default memo(UserDetailsContent);
