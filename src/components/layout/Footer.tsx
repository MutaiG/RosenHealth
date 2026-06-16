import { Link } from 'react-router-dom';
import { Box, Container, Grid, Typography, Divider } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import rosenLogo from '../../assets/rosen_logo.jpeg';

const EMERGENCY = import.meta.env.VITE_EMERGENCY_PHONE || '+254 700 000 000';

export default function Footer() {
  return (
    <Box sx={{ bgcolor: '#2C3E50', color: '#FDFBF7', pt: 8, pb: 4, position: 'relative', zIndex: 100, flexShrink: 0 }}>
      <Container maxWidth="xl">
        <Grid container spacing={6}>
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
              <Box
                component="img"
                src={rosenLogo}
                alt="Rosen Health Logo"
                sx={{
                  height: 44,
                  width: 44,
                  objectFit: 'cover',
                  borderRadius: '50%',
                  border: '2px solid #D4AF37',
                }}
              />
              <Box>
                <Typography sx={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 600, fontSize: 16, lineHeight: 1.1, color: '#FDFBF7' }}>ROSEN HEALTH</Typography>
                <Typography sx={{ color: '#D4AF37', fontFamily: 'Lato', fontSize: 10, letterSpacing: 2 }}>Maternity & Laparoscopy Centre</Typography>
              </Box>
            </Box>
            <Typography variant="body2" sx={{ color: 'rgba(253,251,247,0.7)', lineHeight: 1.8, fontSize: 13 }}>
              Redefining women's healthcare through innovation and serenity. Nairobi, Kenya.
            </Typography>
          </Grid>

          <Grid item xs={6} md={2}>
            <Typography sx={{ color: '#D4AF37', fontFamily: 'Lato', fontSize: 11, letterSpacing: 2, mb: 2, textTransform: 'uppercase' }}>Navigate</Typography>
            {[['About Us', '/about'], ['Laparoscopy', '/services/laparoscopy'], ['Hysteroscopy', '/services/hysteroscopy'], ['Maternity', '/maternity'], ['Experience', '/experience']].map(([l, to]) => (
              <Link key={to} to={to} style={{ display: 'block', color: 'rgba(253,251,247,0.7)', textDecoration: 'none', fontSize: 13, fontFamily: 'Lato', marginBottom: 6 }}>{l}</Link>
            ))}
          </Grid>

          <Grid item xs={6} md={2}>
            <Typography sx={{ color: '#D4AF37', fontFamily: 'Lato', fontSize: 11, letterSpacing: 2, mb: 2, textTransform: 'uppercase' }}>Hours</Typography>
            <Typography sx={{ color: 'rgba(253,251,247,0.7)', fontSize: 12, fontFamily: 'Lato', mb: 0.5 }}>Mon – Fri: 8:00 AM – 6:00 PM</Typography>
            <Typography sx={{ color: 'rgba(253,251,247,0.7)', fontSize: 12, fontFamily: 'Lato', mb: 0.5 }}>Saturday: 9:00 AM – 2:00 PM</Typography>
            <Typography sx={{ color: 'rgba(253,251,247,0.7)', fontSize: 12, fontFamily: 'Lato', mb: 0.5 }}>Sunday: Closed</Typography>
            <Typography sx={{ color: '#D4AF37', fontSize: 11, fontFamily: 'Lato', mt: 1 }}>Emergency Maternity: 24/7</Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography sx={{ color: '#D4AF37', fontFamily: 'Lato', fontSize: 11, letterSpacing: 2, mb: 2, textTransform: 'uppercase' }}>Contact</Typography>
            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, mb: 1.5 }}>
              <LocationOnIcon sx={{ color: '#D4AF37', fontSize: 18, mt: 0.2 }} />
              <Typography sx={{ color: 'rgba(253,251,247,0.7)', fontSize: 13, fontFamily: 'Lato' }}>
                Zambia Apartment, Ngong Road, Ground Floor, Nairobi, Kenya
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
              <PhoneIcon sx={{ color: '#D4AF37', fontSize: 18 }} />
              <Typography component="a" href={`tel:${EMERGENCY}`} sx={{ color: 'rgba(253,251,247,0.7)', fontSize: 13, fontFamily: 'Lato', textDecoration: 'none', '&:hover': { color: '#D4AF37' } }}>
                {EMERGENCY}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <EmailIcon sx={{ color: '#D4AF37', fontSize: 18 }} />
              <Typography sx={{ color: 'rgba(253,251,247,0.7)', fontSize: 13, fontFamily: 'Lato' }}>info@rosenhealth.co.ke</Typography>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: 'rgba(212,175,55,0.3)', my: 4 }} />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 1 }}>
          <Typography sx={{ color: 'rgba(253,251,247,0.5)', fontSize: 12, fontFamily: 'Lato' }}>
            © {new Date().getFullYear()} Rosen Health Maternity and Laparoscopy Centre. All rights reserved.
          </Typography>
          <Link to="/admin" style={{ color: 'rgba(253,251,247,0.3)', fontSize: 12, fontFamily: 'Lato', textDecoration: 'none' }}>Admin</Link>
        </Box>
      </Container>
    </Box>
  );
}
