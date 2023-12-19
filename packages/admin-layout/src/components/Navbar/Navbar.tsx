import React from "react";
import {
  AppBar,
  IconButton,
  Toolbar,
  styled,
  AppBarProps,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { ChildrenProps } from "mui-react-common";

type NavBarProps = AppBarProps &
  ChildrenProps & {
    onOpenSidebar?: () => void;
  };
const NavbarRoot = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  ...(theme.palette.mode === "light"
    ? {
        boxShadow: theme.shadows[3],
      }
    : {
        backgroundColor: theme.palette.background.paper,
        borderBottomColor: theme.palette.divider,
        borderBottomStyle: "solid",
        borderBottomWidth: 1,
        boxShadow: "none",
      }),
}));

const Navbar = (props: NavBarProps) => {
  const { onOpenSidebar, children, ...other } = props;

  return (
    <NavbarRoot
      sx={{
        left: {
          lg: 280,
        },
        width: {
          lg: "calc(100% - 280px)",
        },
      }}
      {...other}
    >
      <Toolbar
        disableGutters
        sx={{
          minHeight: 64,
          left: 0,
          px: 2,
        }}
      >
        {onOpenSidebar && (
          <IconButton
            onClick={onOpenSidebar}
            sx={{
              display: {
                xs: "inline-flex",
                lg: "none",
              },
            }}
          >
            <MenuIcon fontSize="small" />
          </IconButton>
        )}
        {children}
      </Toolbar>
    </NavbarRoot>
  );
};

export default Navbar;
