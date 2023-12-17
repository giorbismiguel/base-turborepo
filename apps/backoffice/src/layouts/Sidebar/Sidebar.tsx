import {memo} from 'react';
import {AdminSidebar, SpaceSelector, SidebarSection} from 'admin-layout';
import {ChildrenProps, useMenu} from 'mui-react-common';
import {Box, Divider} from '@mui/material';
import {useLocation} from 'react-router';
import { MAIN_MENU } from 'settings/main.menu';

declare type AdminSidebarProps = ChildrenProps & {
    onClose: () => void;
    open: boolean;
};

const Sidebar = (props: AdminSidebarProps) => {
    const sections = useMenu(MAIN_MENU);
    const {pathname} = useLocation();

    return (
        <AdminSidebar {...props} >
            <SpaceSelector/>
            <Divider
                sx={{
                    my: 3,
                }}
            />
            <Box sx={{flexGrow: 1}} className={'cursor-pointer'}>
                {sections.map((section) => (
                    <SidebarSection
                        key={section.title}
                        path={pathname}
                        sx={{
                            mt: 2,
                            "& + &": {
                                mt: 2,
                            },
                        }}
                        {...section}
                    />
                ))}
            </Box>
        </AdminSidebar>
    );

};

export default memo(Sidebar);
