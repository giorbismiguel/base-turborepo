import React, { useCallback, useMemo, useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { styled } from "@mui/material";
import Box from "@mui/material/Box";
import { ChildrenProps } from "mui-react-common";

export type BaseFilterProps = ChildrenProps & {
  id?: string;
  title: string;
  menuProps?: any;
};

// export const MenuStl = styled(Menu)(() => ({
//   ".MuiList-root": {
//     minWidth: "150px",
//   },
//   ".MuiCheckbox-root": {
//     padding: "0 9px 0 0",
//   },
//   ".MuiRadio-root": {
//     padding: "0 9px 0 0",
//   },
// }));

// export const ButtonInput = styled(Button)(({ theme }) => ({
//   color: theme.palette.text.primary,
//   paddingRight: "8px",
//   border:
//     "1px solid " +
//     (theme.palette.mode === "light"
//       ? theme.palette.grey[400]
//       : theme.palette.grey[600]),
// }));

const FilterBase = ({ id, title, children, menuProps }: BaseFilterProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const { menuID, controls } = useMemo(() => {
    const menuID = id || "menuid" + new Date().getTime() + Math.random();
    const controls = menuID + "controls";
    return {
      menuID,
      controls,
    };
  }, [id]);

  const handleClick = useCallback((event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  }, []);

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  return (
    <Box>
      <Button
        id={menuID}
        aria-controls={open ? controls : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="outlined"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
        <span>{title}</span>
      </Button>
      <Menu
        id={controls}
        MenuListProps={{
          "aria-labelledby": menuID,
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        {...menuProps}
      >
        {children}
      </Menu>
    </Box>
  );
};

export default FilterBase;
