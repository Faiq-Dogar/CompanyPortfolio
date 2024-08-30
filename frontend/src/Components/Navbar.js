import * as React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Darkmode from './DarkMode';
import { Divider, Tooltip } from '@mui/material';

const pages = [
    {
        name: "Home",
        url: "/"
    },
    {
        name: "Services",
        url: "/Services"
    },
    {
        name: "Portfolio",
        url: "/Portfolio"
    },
    {
        name: "About",
        url: "/About"
    },
    {
        name: "Contact",
        url: "/Contact"
    }
];

const services = [
    { name: "All Services", url: "/Services" },
    { name: "Mobile App Development", url: "/Services/mobile-app-development" },
    { name: "Web App Development", url: "/Services/web-app-development" },
    { name: "Software Development", url: "/Services/software-development" },
    { name: "UI/UX Development", url: "/Services/ui-ux-development" },
    { name: "SEO", url: "/Services/seo" },
];

function Navbar({ isDarkMode, setIsDarkMode }) {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElServices, setAnchorElServices] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleServicesMenuOpen = (event) => {
        setAnchorElServices(event.currentTarget);
    };

    const handleServicesMenuClose = () => {
        setAnchorElServices(null);
    };

    return (
        <AppBar position="static" style={{
            backgroundColor: 'transparent',
            color: isDarkMode ? 'white' : 'black'
        }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        DEVBERRY
                    </Typography>

                    <Box sx={{
                        flexGrow: 1, display: {
                            xs: 'none',
                            md: 'flex',
                            justifyContent: 'center'
                        }
                    }}>
                        {pages.map((page) => (
                            page.name === "Services" ? (
                                <Box
                                    key={page.name}
                                    onMouseEnter={handleServicesMenuOpen}
                                    onMouseLeave={handleServicesMenuClose}
                                >
                                    <Button
                                        component={Link}
                                        to={page.url}
                                        sx={{ my: 2, mx: 2, color: 'inherit', fontWeight: '100' }}
                                    >
                                        {page.name}
                                    </Button>
                                    <Menu
                                        anchorEl={anchorElServices}
                                        open={Boolean(anchorElServices)}
                                        onClose={handleServicesMenuClose}
                                        MenuListProps={{
                                            onMouseLeave: handleServicesMenuClose,
                                        }}
                                        sx={{
                                            zIndex: 1300,
                                           
                                        }}
                                    >
                                        {services.map((service) => (
                                            <>
                                                <MenuItem
                                                    key={service.name}
                                                    component={Link}
                                                    to={service.url}
                                                    onClick={handleServicesMenuClose}
                                                >
                                                    {service.name}
                                                </MenuItem>
                                                <Divider />
                                            </>
                                        ))}
                                    </Menu>
                                </Box>
                            ) : (
                                <Button
                                    key={page.name}
                                    component={Link}
                                    to={page.url}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, mx: 2, display: 'block', color: 'inherit', fontWeight: '100' }}
                                >
                                    {page.name}
                                </Button>
                            )
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem
                                    key={page.name}
                                    component={Link}
                                    to={page.url}
                                    onClick={handleCloseNavMenu}
                                >
                                    <Typography textAlign="center">{page.name}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        LOGO
                    </Typography>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Change Theme">
                            <IconButton>
                                <Darkmode isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
                            </IconButton>
                        </Tooltip>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Navbar;
