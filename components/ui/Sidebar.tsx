import { useContext } from 'react';
import {
  Drawer,
  Box,
  Typography,
  ListItem,
  Divider,
  ListItemText,
  List,
  ListItemIcon
} from '@mui/material';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import OutboxOutlinedIcon from '@mui/icons-material/OutboxOutlined';

import { UIContext } from '../../context/ui';

const menuItems: string[] = ['Inbox', 'Starred', 'Send email', 'Drafts'];

export const Sidebar = () => {
  const { sideMenuOpen, closeSideMenu } = useContext(UIContext);

  return (
    <>
      <Drawer
        anchor="left"
        open={sideMenuOpen}
        onClose={closeSideMenu}>
        <Box sx={{ width: '250px' }}>
          <Box sx={{ padding: '5px 10px' }}>
            <Typography variant="h4">Menu</Typography>
          </Box>
          <List>
            {menuItems.map((item, index) => (
              <ListItem
                button
                key={item}>
                <ListItemIcon>
                  {index % 2 === 0 ? <MailOutlinedIcon /> : <OutboxOutlinedIcon />}
                </ListItemIcon>
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {menuItems.map((item, index) => (
              <ListItem
                button
                key={item}>
                <ListItemIcon>
                  {index % 2 === 0 ? <MailOutlinedIcon /> : <OutboxOutlinedIcon />}
                </ListItemIcon>
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};
