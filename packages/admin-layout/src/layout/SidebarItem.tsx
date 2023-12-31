import React, { useState } from "react";
import { Box, Button, Collapse, ListItem, Theme } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { ChildrenProps, IMenuItem, IMenuLeaf } from "mui-react-common";
import { Link } from "react-router-dom";

const backgroundItem = (theme: Theme) =>
  theme.palette.primary.main || theme.palette.primary.light;

const activeColor = (theme: Theme) =>
  theme.palette.primary.main || "secondary.main";
const color = (theme: Theme) => theme.palette.info.light || "secondary.main";

type SidebarItemProps = Omit<IMenuItem, "children"> &
  IMenuLeaf &
  ChildrenProps & { depth: number; open: boolean; active: boolean };

export const SidebarItem = (props: SidebarItemProps) => {
  const {
    active,
    children,
    chip,
    depth,
    icon,
    info,
    open,
    disabled,
    path,
    title,
    ...other
  } = props;

  const [isOpen, setIsOpen] = useState(!!open);

  const handleToggle = () => {
    setIsOpen((prevOpen) => !prevOpen);
  };

  let paddingLeft = 24;

  if (depth > 0) {
    paddingLeft = 24 + 8 * depth;
  }

  // Branch
  if (children) {
    return (
      <ListItem
        disableGutters
        sx={{
          display: "block",
          mb: 0.5,
          py: 0,
          px: 2,
        }}
        {...other}
      >
        <Button
          endIcon={
            !isOpen ? (
              <ChevronRightIcon fontSize="small" />
            ) : (
              <ExpandMoreIcon fontSize="small" />
            )
          }
          disabled={disabled}
          disableRipple
          onClick={handleToggle}
          startIcon={icon}
          sx={{
            color,
            justifyContent: "flex-start",
            pl: `${paddingLeft}px`,
            pr: 3,
            textAlign: "left",
            textTransform: "none",
            width: "100%",
            ...(active && {
              backgroundColor: backgroundItem,
              color: activeColor,
              fontWeight: "fontWeightBold",
            }),
            "&:hover": {
              backgroundColor: backgroundItem,
              color: activeColor,
            },
          }}
        >
          <Box sx={{ flexGrow: 1 }}>{title}</Box>
          {info}
        </Button>
        <Collapse in={isOpen} sx={{ mt: 0.5 }}>
          {children}
        </Collapse>
      </ListItem>
    );
  }

  // Leaf
  return (
    <ListItem
      disableGutters
      sx={{
        display: "flex",
        mb: 0.5,
        py: 0,
        px: 2,
      }}
    >
      <Button
        component={Link}
        to={path}
        startIcon={icon}
        endIcon={chip}
        disabled={disabled}
        disableRipple
        sx={{
          borderRadius: 1,
          // color: "neutral.300",
          justifyContent: "flex-start",
          pl: `${paddingLeft}px`,
          pr: 3,
          textAlign: "left",
          textTransform: "none",
          color,
          width: "100%",
          ...(active && {
            backgroundColor: backgroundItem,
            color: activeColor,
            fontWeight: "fontWeightBold",
          }),
          // '& .MuiButton-startIcon': {
          //
          // },
          "&:hover": {
            backgroundColor: backgroundItem,
            color: activeColor,
          },
        }}
      >
        <Box sx={{ flexGrow: 1 }}>{title}</Box>
        {info}
      </Button>
    </ListItem>
  );
};

SidebarItem.defaultProps = {
  active: false,
  open: false,
};
