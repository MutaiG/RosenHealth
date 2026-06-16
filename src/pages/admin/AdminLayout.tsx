import { useState } from 'react';
import { Link, useLocation, Outlet, useNavigate } from 'react-router-dom';
import {
  Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText,
  AppBar, Toolbar, Typography, IconButton, useMediaQuery, useTheme,
} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import EventNoteIcon from '@mui/icons-material/EventNote';
import QuizIcon from '@mui/icons-material/Quiz';
import DescriptionIcon from '@mui/icons-material/Description';
import BarChartIcon from '@mui/icons-material/BarChart';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import { useAuth } from '../../hooks/useAuth';
import { useLogout } from '../../api/auth';

const DRAWER_WIDTH = 240;

const navItems = [
  { label: 'Dashboard', to: '/admin', icon: <DashboardIcon /> },
  { label: 'Appointments', to: '/admin/appointments', icon: <EventNoteIcon /> },
  { label: 'FAQs', to: '/admin/faqs', icon: <QuizIcon /> },
  { label: 'Documents', to: '/admin/documents', icon: <DescriptionIcon /> },
  { label: 'Analytics', to: '/admin/analytics', icon: <BarChartIcon /> },
];

export default function AdminLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const { logout } = useAuth();
  const { mutate: logoutMutate } = useLogout();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLogout = () => {
    logoutMutate(undefined, { onSettled: () => { logout(); navigate('/admin/login'); } });
  };

  const drawer = (
    <Box sx={{ bgcolor: '#2C3E50', height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ p: 3, display: 'flex', alignItems: 'center', gap: 1.5 }}>
        <Box sx={{ width: 36, height: 36, borderRadius: '50%', bgcolor: '#D4AF37', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 16, color: '#2C3E50', fontFamily: 'serif' }}>R</Box>
        <Box>
          <Typography sx={{ color: '#FDFBF7', fontFamily: 'Cormorant Garamond, serif', fontWeight: 600, fontSize: 13, lineHeight: 1.1 }}>ROSEN HEALTH</Typography>
          <Typography sx={{ color: '#D4AF37', fontSize: 9, fontFamily: 'Lato', letterSpacing: 1.5 }}>ADMIN PORTAL</Typography>
        </Box>
      </Box>
      <List sx={{ flex: 1, px: 1 }}>
        {navItems.map(item => (
          <ListItem key={item.to} disablePadding sx={{ mb: 0.5 }}>
            <ListItemButton component={Link} to={item.to} onClick={() => setMobileOpen(false)}
              selected={location.pathname === item.to}
              sx={{ borderRadius: 1, '&.Mui-selected': { bgcolor: 'rgba(212,175,55,0.15)', '& .MuiListItemIcon-root': { color: '#D4AF37' }, '& .MuiListItemText-primary': { color: '#D4AF37' } }, '&:hover': { bgcolor: 'rgba(212,175,55,0.08)' } }}>
              <ListItemIcon sx={{ color: 'rgba(253,251,247,0.5)', minWidth: 38 }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} primaryTypographyProps={{ sx: { color: 'rgba(253,251,247,0.8)', fontFamily: 'Lato', fontSize: 13 } }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <List sx={{ px: 1, pb: 2 }}>
        <ListItem disablePadding>
          <ListItemButton onClick={handleLogout} sx={{ borderRadius: 1, '&:hover': { bgcolor: 'rgba(212,175,55,0.08)' } }}>
            <ListItemIcon sx={{ color: 'rgba(253,251,247,0.5)', minWidth: 38 }}><LogoutIcon /></ListItemIcon>
            <ListItemText primary="Sign Out" primaryTypographyProps={{ sx: { color: 'rgba(253,251,247,0.8)', fontFamily: 'Lato', fontSize: 13 } }} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', bgcolor: '#f5f3ef', minHeight: '100vh' }}>
      {isMobile ? (
        <>
          <AppBar position="fixed" sx={{ bgcolor: '#2C3E50', zIndex: theme.zIndex.drawer + 1 }}>
            <Toolbar>
              <IconButton onClick={() => setMobileOpen(true)} sx={{ color: '#FDFBF7', mr: 2 }}><MenuIcon /></IconButton>
              <Typography sx={{ color: '#FDFBF7', fontFamily: 'Cormorant Garamond, serif', fontWeight: 600 }}>Rosen Health Admin</Typography>
            </Toolbar>
          </AppBar>
          <Drawer open={mobileOpen} onClose={() => setMobileOpen(false)} PaperProps={{ sx: { width: DRAWER_WIDTH } }}>
            {drawer}
          </Drawer>
        </>
      ) : (
        <Drawer variant="permanent" PaperProps={{ sx: { width: DRAWER_WIDTH, border: 'none' } }}>
          {drawer}
        </Drawer>
      )}
      <Box component="main" sx={{ flex: 1, ml: { md: `${DRAWER_WIDTH}px` }, pt: { xs: 8, md: 0 }, p: { xs: 2, md: 4 } }}>
        <Outlet />
      </Box>
    </Box>
  );
}
