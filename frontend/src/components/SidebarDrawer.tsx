import React, { ReactElement, FC } from "react";

import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ConstructionIcon from '@mui/icons-material/Construction';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import ComputerIcon from '@mui/icons-material/Computer';
import List from '@mui/material/List';
import Toolbar from '@mui/material/Toolbar';
import { Link, useMatch } from 'react-router-dom';

const SidebarDrawer: FC<any> = (): ReactElement => {
    const drawerWidth = 320;

    return (
        <Drawer
            variant="permanent"
            sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
            }}
        >
            <Toolbar />
            <Box sx={{ overflow: 'auto' }} dir="rtl">
            <List>
                <ListItem disablePadding selected={(useMatch("/dashboard") != null)}>
                <ListItemButton component={Link} to="/dashboard">
                    <ListItemIcon>
                    <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText primary="داشبورد" />
                </ListItemButton>
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItem disablePadding selected={(useMatch("/dashboard/equipments/*") != null)}>
                    <ListItemButton component={Link} to="/dashboard/equipments">
                        <ListItemIcon>
                            <ConstructionIcon />
                        </ListItemIcon>
                        <ListItemText primary="مدیریت تجهیزات" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding selected={(useMatch("/dashboard/computers/*") != null)}>
                    <ListItemButton component={Link} to="/dashboard/computers">
                        <ListItemIcon>
                            <ComputerIcon />
                        </ListItemIcon>
                        <ListItemText primary="مدیریت رایانه" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding selected={(useMatch("/dashboard/users/*") != null)}>
                    <ListItemButton>
                        <ListItemIcon>
                            <SupervisedUserCircleIcon />
                        </ListItemIcon>
                        <ListItemText primary="مدیریت کاربر" />
                    </ListItemButton>
                </ListItem>
            </List>
            </Box>
        </Drawer>
    );
}

export default SidebarDrawer;