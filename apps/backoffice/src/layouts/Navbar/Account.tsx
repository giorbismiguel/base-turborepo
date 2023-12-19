import { memo, useMemo } from "react";
import { AccountButton } from "admin-layout";
import { useTranslation } from "react-i18next";
import {
  Divider,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useSecurity } from "security";
import type { MenuItemType } from "settings/account.menu";
import { ACCOUNT_MENU } from "settings/account.menu";

function Account() {
  const { t } = useTranslation("common");
  const { hasPermission } = useSecurity();

  const options = useMemo(() => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return ACCOUNT_MENU.filter((menu) => {
      return menu?.permission?.length ? hasPermission(menu.permission) : true;
    }).map((menu) => {
      const menuItem = menu as MenuItemType;

      if (menu.divider) {
        return <Divider key={menuItem.label} />;
      }

      const Icon = menuItem.icon;
      return (
        <MenuItem component={Link} key={menuItem.label} to={menuItem.link}>
          <ListItemIcon>
            <Icon fontSize="small" />
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography variant="body1">{t(menuItem.label)}</Typography>
            }
          />
        </MenuItem>
      );
    });
  }, [hasPermission, t]);

  return <AccountButton logoutText={t("logout")}>{options}</AccountButton>;
}

export default memo(Account);
