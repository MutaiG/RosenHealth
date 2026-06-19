import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import rosenLogo from '../../assets/rosen_logo.jpeg';
import {
  AppBar, Toolbar, Box, Button, IconButton, Drawer,
  List, ListItem, ListItemButton, ListItemText, useScrollTrigger, Container,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const EMERGENCY = import.meta.env.VITE_EMERGENCY_PHONE || '+254 700 000 000';

const navLinks = [
  { label: 'About', to: '/about' },
  { label: 'Laparoscopy', to: '/services/laparoscopy' },
  { label: 'Hysteroscopy', to: '/services/hysteroscopy' },
  { label: 'Maternity', to: '/maternity' },
  { label: 'Experience', to: '/experience' },
  { label: 'Contact', to: '/book' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const scrolled = useScrollTrigger({ disableHysteresis: true, threshold: 60 });

  return (
    <>
      <AppBar
        position="fixed"
        elevation={scrolled ? 4 : 0}
        sx={{
          bgcolor: scrolled ? 'primary.main' : 'transparent',
          backdropFilter: scrolled ? 'none' : 'blur(8px)',
          backgroundColor: scrolled ? '#328283' : 'rgba(50,130,131,0.85)',
          transition: 'all 0.3s ease',
          zIndex: 1100,
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between', minHeight: { xs: 64, sm: 72 }, py: 0 }}>
            <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
              <Box
                component="img"
                src={rosenLogo}
                alt="Rosen Health Logo"
                sx={{
                  height: { xs: 48, sm: 56 },
                  width: { xs: 48, sm: 56 },
                  objectFit: 'cover',
                  borderRadius: '50%',
                  border: '2px solid #D4AF37',
                }}
              />
              <Box>
                <Box sx={{ color: '#FDFBF7', fontFamily: 'Cormorant Garamond, serif', fontWeight: 600, fontSize: 16, lineHeight: 1.1 }}>
                  ROSEN HEALTH
                </Box>
                <Box sx={{ color: '#D4AF37', fontFamily: 'Lato, sans-serif', fontSize: 10, letterSpacing: 2, textTransform: 'uppercase' }}>
                  Maternity & Laparoscopy Centre
                </Box>
              </Box>
            </Link>

            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 0.5 }}>
              {navLinks.map(l => (
                <Button key={l.to} component={Link} to={l.to}
                  sx={{
                    color: '#FDFBF7', fontSize: 11, letterSpacing: 1.5, fontFamily: 'Lato, sans-serif',
                    fontWeight: 500, px: 1.5,
                    borderBottom: location.pathname === l.to ? '1px solid #D4AF37' : '1px solid transparent',
                    borderRadius: 0,
                    '&:hover': { color: '#D4AF37', bgcolor: 'transparent' },
                  }}>
                  {l.label}
                </Button>
              ))}
              <Button component={Link} to="/book" variant="contained" color="secondary" sx={{ ml: 2, fontSize: 11 }}>
                Book Consultation
              </Button>
            </Box>

            <IconButton onClick={() => setOpen(true)} sx={{ display: { md: 'none' }, color: '#FDFBF7' }}>
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}
        PaperProps={{ sx: { width: 280, bgcolor: '#328283' } }}>
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'flex-end' }}>
          <IconButton onClick={() => setOpen(false)} sx={{ color: '#FDFBF7' }}><CloseIcon /></IconButton>
        </Box>
        <List>
          {navLinks.map(l => (
            <ListItem key={l.to} disablePadding>
              <ListItemButton component={Link} to={l.to} onClick={() => setOpen(false)}
                sx={{ '&:hover': { bgcolor: 'rgba(212,175,55,0.1)' } }}>
                <ListItemText primary={l.label}
                  primaryTypographyProps={{ sx: { color: '#FDFBF7', fontFamily: 'Lato, sans-serif', letterSpacing: 1.5, fontSize: 13 } }} />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem sx={{ pt: 2, px: 2 }}>
            <Button fullWidth component={Link} to="/book" variant="contained" color="secondary" onClick={() => setOpen(false)}>
              Book Consultation
            </Button>
          </ListItem>
          <ListItem sx={{ px: 2 }}>
            <Button fullWidth href={`tel:${EMERGENCY}`} variant="outlined"
              sx={{ borderColor: '#D4AF37', color: '#D4AF37', fontSize: 11 }}>
              Emergency: {EMERGENCY}
            </Button>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}
