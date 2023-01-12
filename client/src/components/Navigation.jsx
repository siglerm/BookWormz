import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from './assets/logo.png';
// import logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';

const pages = ['Thoughts?', 'Coffee Talk', 'Your Shelf'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar({ info }) {
  // console.log('This is the icon: ', AdbIcon);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();
  function navigateThoughts() {
    navigate('/addThought', { state: { info } });
  }
  function navigateCoffeeTalk() {
    navigate('/');
  }
  function navigateShelf() {
    navigate('/shelf', { state: { info } });
  }

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      style={{
        background: '#fdf3eb',
        // border: '1px solid black',
        width: '100vw',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: '#7b503c',
              textDecoration: 'none',
            }}
          >
            BookWormz
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="#7b503c"
            >
              <MenuIcon style={{ color: '#7b503c' }} />
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
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" style={{ color: '#7b503c' }}>
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: '#7b503c',
              textDecoration: 'none',
            }}
          >
            BookWormz
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button
              key="Thoughts?"
              onClick={navigateThoughts}
              sx={{ my: 2, color: '#7b503c', display: 'block' }}
            >
              Thoughts?
            </Button>
            <Button
              key="Coffee Talk?"
              onClick={navigateCoffeeTalk}
              sx={{ my: 2, color: '#7b503c', display: 'block' }}
            >
              Coffee Talk
            </Button>
            <Button
              key="Shelf?"
              onClick={navigateShelf}
              sx={{ my: 2, color: '#7b503c', display: 'block' }}
            >
              Your Shelf
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="./logo.png" />
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
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;

// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// function Navigation({ info }) {
//   const navigate = useNavigate();
//   function navigateThoughts() {
//     navigate('/addThought', { state: { info } });
//   }
//   function navigateCoffeeTalk() {
//     navigate('/');
//   }
//   function navigateShelf() {
//     navigate('/shelf', { state: { info } });
//   }
//   return (
//     <div id="NavigationBar">
//       <button onClick={() => navigateThoughts()}>Thoughts?</button>
//       <button onClick={() => navigateCoffeeTalk()}>Coffee Talk</button>
//       <button onClick={() => navigateShelf()}>Your Shelf</button>
//     </div>
//   );
// }
