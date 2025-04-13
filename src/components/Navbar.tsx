import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';

const menuItems = [
  { text: 'Features', path: '#features' },
  { text: 'How It Works', path: '#how-it-works' },
  { text: 'Pricing', path: '#pricing' },
  { text: 'Contact', path: '#contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <List>
      {menuItems.map((item) => (
        <ListItem
          button
          key={item.text}
          onClick={() => {
            navigate(item.path);
            setMobileOpen(false);
          }}
        >
          <ListItemText primary={item.text} />
        </ListItem>
      ))}
      <ListItem>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={() => navigate('/login')}
        >
          Get Started
        </Button>
      </ListItem>
    </List>
  );

  return (
    <AppBar position="sticky" color="default" elevation={0}>
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, fontWeight: 'bold' }}
        >
          Veturn
        </Typography>

        {isMobile ? (
          <>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              variant="temporary"
              anchor="right"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true,
              }}
            >
              {drawer}
            </Drawer>
          </>
        ) : (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            {menuItems.map((item) => (
              <Button
                key={item.text}
                color="inherit"
                onClick={() => navigate(item.path)}
              >
                {item.text}
              </Button>
            ))}
            <Button
              variant="contained"
              color="primary"
              onClick={() => navigate('/login')}
            >
              Get Started
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
} 