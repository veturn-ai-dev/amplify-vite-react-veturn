import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Avatar,
  Typography,
  useTheme,
} from '@mui/material';
import {
  Image as ImageIcon,
  Mic as MicIcon,
  Email as EmailIcon,
  Settings as SettingsIcon,
  Logout as LogoutIcon,
} from '@mui/icons-material';
import { useAuth } from '../../contexts/AuthContext';

export function Header() {
  const theme = useTheme();
  const location = useLocation();
  const { user, logout } = useAuth();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    try {
      await logout();
      handleClose();
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <AppBar position="sticky" color="default" elevation={0}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 800,
                background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Veturn AI
            </Typography>
          </Link>

          <Box sx={{ ml: 4, display: 'flex', gap: 2 }}>
            <Button
              component={Link}
              to="/tools/text-to-image"
              color="inherit"
              sx={{
                fontWeight: isActive('/tools/text-to-image') ? 600 : 400,
                color: isActive('/tools/text-to-image')
                  ? theme.palette.primary.main
                  : 'inherit',
              }}
            >
              <ImageIcon sx={{ mr: 1 }} />
              Text to Image
            </Button>
            <Button
              component={Link}
              to="/tools/text-to-speech"
              color="inherit"
              sx={{
                fontWeight: isActive('/tools/text-to-speech') ? 600 : 400,
                color: isActive('/tools/text-to-speech')
                  ? theme.palette.primary.main
                  : 'inherit',
              }}
            >
              <MicIcon sx={{ mr: 1 }} />
              Text to Speech
            </Button>
            <Button
              component={Link}
              to="/tools/email-agents"
              color="inherit"
              sx={{
                fontWeight: isActive('/tools/email-agents') ? 600 : 400,
                color: isActive('/tools/email-agents')
                  ? theme.palette.primary.main
                  : 'inherit',
              }}
            >
              <EmailIcon sx={{ mr: 1 }} />
              Email Agents
            </Button>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Button
            component={Link}
            to="/pricing"
            color="inherit"
            sx={{
              fontWeight: isActive('/pricing') ? 600 : 400,
              color: isActive('/pricing') ? theme.palette.primary.main : 'inherit',
            }}
          >
            Pricing
          </Button>
          <Button
            component={Link}
            to="/faq"
            color="inherit"
            sx={{
              fontWeight: isActive('/faq') ? 600 : 400,
              color: isActive('/faq') ? theme.palette.primary.main : 'inherit',
            }}
          >
            FAQ
          </Button>
          <Button
            component={Link}
            to="/contact"
            color="inherit"
            sx={{
              fontWeight: isActive('/contact') ? 600 : 400,
              color: isActive('/contact') ? theme.palette.primary.main : 'inherit',
            }}
          >
            Contact
          </Button>

          {user ? (
            <>
              <IconButton
                onClick={handleMenu}
                size="small"
                sx={{ ml: 2 }}
                aria-controls="menu-appbar"
                aria-haspopup="true"
              >
                <Avatar
                  sx={{ width: 32, height: 32 }}
                  alt={user.displayName || 'User'}
                  src={user.photoURL}
                >
                  {user.displayName?.charAt(0) || user.email?.charAt(0)}
                </Avatar>
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography variant="subtitle2">
                      {user.displayName || 'User'}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {user.email}
                    </Typography>
                  </Box>
                </MenuItem>
                <MenuItem component={Link} to="/settings/profile" onClick={handleClose}>
                  <SettingsIcon sx={{ mr: 1 }} />
                  Settings
                </MenuItem>
                <MenuItem onClick={handleLogout}>
                  <LogoutIcon sx={{ mr: 1 }} />
                  Log out
                </MenuItem>
              </Menu>
            </>
          ) : (
            <>
              <Button
                component={Link}
                to="/auth/login"
                color="inherit"
                sx={{
                  fontWeight: isActive('/auth/login') ? 600 : 400,
                  color: isActive('/auth/login')
                    ? theme.palette.primary.main
                    : 'inherit',
                }}
              >
                Log in
              </Button>
              <Button
                component={Link}
                to="/auth/signup"
                variant="contained"
                color="primary"
                sx={{
                  fontWeight: 600,
                  textTransform: 'none',
                }}
              >
                Sign up
              </Button>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
} 