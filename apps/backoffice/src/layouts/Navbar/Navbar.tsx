import { memo } from "react";
import Box from "@mui/material/Box";
import type { ChildrenProps } from "mui-react-common";
import {
  Navbar as AdminNavbar,
  ThemeButton,
  LanguageButton,
} from "admin-layout";
import { useSettings } from "contexts/SettingsProvider";
import Account from "layouts/Navbar/Account";

declare type NavbarProps = ChildrenProps & {
  onOpenSidebar: () => void;
};

const display = { display: { xs: "none", sm: "block" } };

function Navbar({ onOpenSidebar }: NavbarProps) {
  const { toggleTheme, settings } = useSettings();
  // const { isOpen, onOpen, onClose } = useToggle(false);

  return (
    <AdminNavbar onOpenSidebar={onOpenSidebar}>
      <Box sx={{ flexGrow: 1 }} />
      <Box sx={display}>
        <ThemeButton current={settings.theme} toggle={toggleTheme} />
      </Box>
      <Box sx={display}>
        <LanguageButton />
      </Box>

      {/*<NotificationsButton*/}
      {/*  tooltipTitle={t('notifications')}*/}
      {/*  handleClick={onOpen}*/}
      {/*  hideBadge={false}*/}
      {/*/>*/}

      {/*<NotificationDrawer*/}
      {/*  headerText={t('notifications')}*/}
      {/*  headerActionText={t('deleteAll')}*/}
      {/*  handleActionText={handleActionText}*/}
      {/*  open={isOpen}*/}
      {/*  onClose={onClose}*/}
      {/*  notifications={NotificationsMock}*/}
      {/*  isLoading={false}*/}
      {/*/>*/}

      <Account />
    </AdminNavbar>
  );
}

export default memo(Navbar);
