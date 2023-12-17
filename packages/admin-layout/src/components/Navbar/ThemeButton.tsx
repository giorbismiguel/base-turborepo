import React, { memo } from 'react';
import { IconButton, Tooltip } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { THEMES } from 'mui-react-common';
import LightModeIcon from '@mui/icons-material/LightMode';


type ThemeButtonProps = {
  toggle: () => void,
  current: THEMES
}
const ThemeButton = ({ toggle, current }: ThemeButtonProps) => {
  const Icon = current === THEMES.LIGHT ? LightModeIcon : DarkModeIcon;

  return (
    <Tooltip title='Switch between Light and Dark mode'>
      <IconButton color='secondary' onClick={toggle}>
        <Icon fontSize='small' />
      </IconButton>
    </Tooltip>
  );
};

export default memo(ThemeButton);
