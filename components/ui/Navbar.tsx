import { FC, useContext } from 'react';

import { Toolbar, AppBar, IconButton } from '@mui/material';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { Typography } from '@mui/material';
import { UIContext, UIProvider } from '../../context/ui';

export const Navbar: FC = () => {
  const { openSideMenu } = useContext(UIContext);
  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          onClick={openSideMenu}>
          <MenuOutlinedIcon />
        </IconButton>
        <Typography variant="h6">OpenJira</Typography>
      </Toolbar>
    </AppBar>
  );
};
