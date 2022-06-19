import React, { FC, ReactElement } from "react";
import AppBar from '@mui/material/AppBar';
import {
    Box,
    Link,
    Container,
    IconButton,
    Menu,
    MenuItem,
    Toolbar,
    Typography,
    Tooltip,
    Avatar
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { routes } from "../routes";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Navbar: FC = (): ReactElement => {
    const { t } = useTranslation();
    const settings = ['پروفایل', 'تنظیمات', 'خروج'];
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    // const [anchorElNav, setAnchorElNav] = React.useState(null);
    // const handleOpenNavMenu = (event: any) => {
    //     setAnchorElNav(event.currentTarget);
    // };
    // const handleCloseNavMenu = () => {
    //     setAnchorElNav(null);
    // };

    return (
        <Box>
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }} dir="rtl">
                <Toolbar>
                    <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
                        <Link href="/" color="inherit" underline="none">
                            اتوماسیون اداری
                        </Link>
                    </Typography>

                    <Box>
                        <Tooltip title="Open settings">
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                        </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                            >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );

    // return (
    //     <Box
    //         sx={{
    //             width: "100%",
    //             height: "auth",
    //             backgroundColor: "primary.main",
    //             color: "primary.contrastText",
    //         }}
    //     >
    //         <Container maxWidth={false} dir="rtl">
    //             <Toolbar disableGutters>
    //             <Typography
    //                 variant="h6"
    //                 noWrap
    //                 sx={{
    //                 mr: 2,
    //                 display: { xs: "none", md: "flex" },
    //                 }}
    //             >
    //             {t('process_management')}
    //             </Typography>
    //             <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
    //                 <IconButton
    //                 size="large"
    //                 aria-label="account of current user"
    //                 aria-controls="menu-appbar"
    //                 aria-haspopup="true"
    //                 onClick={handleOpenNavMenu}
    //                 color="inherit"
    //                 >
    //                     <MenuIcon />
    //                 </IconButton>
    //                 <Menu
    //                 id="menu-appbar"
    //                 anchorEl={anchorElNav}
    //                 anchorOrigin={{
    //                     vertical: "bottom",
    //                     horizontal: "left",
    //                 }}
    //                 keepMounted
    //                 transformOrigin={{
    //                     vertical: "top",
    //                     horizontal: "left",
    //                 }}
    //                 open={Boolean(anchorElNav)}
    //                 onClose={handleCloseNavMenu}
    //                 sx={{
    //                     display: { xs: "block", md: "none" },
    //                 }}
    //                 >
    //                 {routes.map((page) => (
    //                     <Link
    //                     key={page.key}
    //                     component={NavLink}
    //                     to={page.path}
    //                     color="black"
    //                     underline="none"
    //                     variant="button"
    //                     >
    //                     <MenuItem onClick={handleCloseNavMenu}>
    //                         <Typography textAlign="center">{page.title}</Typography>
    //                     </MenuItem>
    //                     </Link>
    //                 ))}
    //                 </Menu>
    //             </Box>
    //             <Typography
    //                 variant="h6"
    //                 noWrap
    //                 component="div"
    //                 sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
    //             >
    //                 React Starter App
    //             </Typography>
    //             <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
    //                 <Box
    //                 sx={{
    //                     display: "flex",
    //                     flexDirection: "row",
    //                     justifyContent: "flex-start",
    //                     alignItems: "center",
    //                     marginLeft: "1rem",
    //                 }}
    //                 >
    //                 {routes.map((page) => (
    //                     <Link
    //                     key={page.key}
    //                     component={NavLink}
    //                     to={page.path}
    //                     color="white"
    //                     underline="none"
    //                     variant="button"
    //                     sx={{ fontSize: "large", marginLeft: "2rem" }}
    //                     >
    //                     {page.title}
    //                     </Link>
    //                 ))}
    //                 </Box>
    //             </Box>
    //             </Toolbar>
    //         </Container>
    //     </Box>
    // );
};

export default Navbar;