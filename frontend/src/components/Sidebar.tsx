import React, { ReactElement, FC } from "react";
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import ContentCut from '@mui/icons-material/ContentCut';
import ContentCopy from '@mui/icons-material/ContentCopy';
import ContentPaste from '@mui/icons-material/ContentPaste';
import Cloud from '@mui/icons-material/Cloud';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

const drawerWidth = 240;

const Sidebar: FC<any> = (): ReactElement => {
  return (
    <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
      
      {/* <Toolbar /> */}

      <Box sx={{ overflow: 'auto' }}>
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
    // <Paper sx={{ maxWidth: '100%' }}>
    //   <MenuList>
    //     <MenuItem>
    //       <ListItemIcon>
    //         <ContentCut fontSize="small" />
    //       </ListItemIcon>
    //       <Typography variant="body2" color="text.secondary">
    //         ⌘X
    //       </Typography>
    //       <ListItemText>Cut</ListItemText>
    //     </MenuItem>
    //     <MenuItem>
    //       <ListItemIcon>
    //         <ContentCopy fontSize="small" />
    //       </ListItemIcon>
    //       <ListItemText>Copy</ListItemText>
    //       <Typography variant="body2" color="text.secondary">
    //         ⌘C
    //       </Typography>
    //     </MenuItem>
    //     <MenuItem>
    //       <ListItemIcon>
    //         <ContentPaste fontSize="small" />
    //       </ListItemIcon>
    //       <ListItemText>Paste</ListItemText>
    //       <Typography variant="body2" color="text.secondary">
    //         ⌘V
    //       </Typography>
    //     </MenuItem>
    //     <Divider />
    //     <MenuItem>
    //       <ListItemIcon>
    //         <Cloud fontSize="small" />
    //       </ListItemIcon>
    //       <ListItemText>Web Clipboard</ListItemText>
    //     </MenuItem>
    //   </MenuList>
    // </Paper>
  );
};

export default Sidebar;