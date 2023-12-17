import React, {FC} from 'react';
import {MenuItem, Popover} from "@mui/material";


type SpacePopoverProps = {
    anchorEl: any;
    onClose: () => void;
    open: boolean;
};

const organizations = ["Acme Inc", "Division Inc"];

export const SpacePopover: FC<SpacePopoverProps> = (props) => {
  const {anchorEl, onClose, open, ...other} = props;

  const handleChange = () => {
    onClose?.();
  };

  return (
    <Popover
      anchorEl={anchorEl}
      anchorOrigin={{
        horizontal: "left",
        vertical: "bottom",
      }}
      keepMounted
      onClose={onClose}
      open={!!open}
      PaperProps={{sx: {width: 248}}}
      transitionDuration={0}
      {...other}
    >
      {organizations.map((organization) => (
        <MenuItem key={organization} onClick={handleChange}>
          {organization}
        </MenuItem>
      ))}
    </Popover>
  );
};
