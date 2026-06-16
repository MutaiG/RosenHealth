import { Link } from 'react-router-dom';
import { Box, Container, Typography, Button, Grid, Card, CardContent } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ScienceIcon from '@mui/icons-material/Science';
import FavoriteIcon from '@mui/icons-material/Favorite';
import VerifiedIcon from '@mui/icons-material/Verified';
import PersonIcon from '@mui/icons-material/Person';
import PublicLayout from '../../components/layout/PublicLayout';
import GoldDivider from '../../components/ui/GoldDivider';

const promises = [
  { icon: <ScienceIcon sx={{ color: '#D4AF37', fontSize: 36 }} />, title: 'Surgical Mastery, Minimized Scarring', body: 'Our focus on advanced keyhole techniques means smaller incisions, less downtime, and a swift return to your daily life.' },
  { icon: <VerifiedIcon sx={{ color: '#D4AF37', fontSize: 36 }} />, title: 'Uncompromising Safety Protocols', body: 'We fuse premium hospitality with absolute clinical compliance, operating under strict international healthcare guidelines.' },
  { icon: <PersonIcon sx={{ color: '#D4AF37', fontSize: 36 }} />, title: 'Tailored Patient Journeys', body: 'No two paths are identical. Whether navigating a complex diagnosis or expecting a child, your care plan is custom-tailored to your unique needs.' },
  { icon: <FavoriteIcon sx={{ color: '#D4AF37', fontSize: 36 }} />, title: 'A Sanctuary of Healing', body: 'We have departed from institutional hospital design, merging elite medical specialists with a tranquil, spa-like environment.' },
];

const services = [
  { title: 'Gynaecological MIS Centre', sub: 'Laparoscopy & Hysteroscopy', body: 'Advanced minimally invasive surgery for fibroids, cysts, endometriosis, and more — with virtually invisible scarring and rapid recovery.', links: [['Laparoscopy', '/services/laparoscopy'], ['Hysteroscopy', '/services/hysteroscopy']] },
  { title: 'Premium Maternity Care', sub: 'Antenatal & Postnatal Journeys', body: 'Beautifully curated maternity packages merging clinical excellence with five-star boutique comfort for every stage of your pregnancy journey.', links: [['Maternity Packages', '/maternity']] },
];

export default function Home() {
  return (
    <PublicLayout>
      {/* HERO */}
      <Box sx={{
        minHeight: '100vh', display: 'flex', alignItems: 'center',
        background: 'linear-gradient(135deg, #2C3E50 0%, #1a2634 60%, #2C3E50 100%)',
        position: 'relative', overflow: 'hidden',
      }}>
        <Box sx={{ position: 'absolute', inset: 0, opacity: 0.04,
          backgroundImage: 'radial-gradient(circle at 2px 2px, #D4AF37 1px, transparent 0)',
          backgroundSize: '40px 40px' }} />
        <Box sx={{ position: 'absolute', top: '10%', right: '5%', width: 400, height: 400, borderRadius: '50%', border: '1px solid rgba(212,175,55,0.15)' }} />
        <Box sx={{ position: 'absolute', top: '20%', right: '10%', width: 280, height: 280, borderRadius: '50%', border: '1px solid rgba(212,175,55,0.1)' }} />

        <Container maxWidth="xl" sx={{ pt: 14, pb: 10 }}>
          <Box sx={{ maxWidth: 720 }}>
            <Typography sx={{ color: '#D4AF37', fontFamily: 'Lato', fontSize: 12, letterSpacing: 4, textTransform: 'uppercase', mb: 3 }}>
              Rosen Health — Nairobi, Kenya
            </Typography>
            <Typography variant="h1" sx={{ color: '#FDFBF7', fontSize: { xs: 36, md: 58, lg: 68 }, lineHeight: 1.1, mb: 3 }}>
              Redefining Women's Healthcare Through{' '}
              <Box component="span" sx={{ color: '#D4AF37' }}>Innovation</Box>{' '}
              and Serenity.
            </Typography>
            <GoldDivider sx={{ width: 80, my: 3 }} />
            <Typography variant="body1" sx={{ color: 'rgba(253,251,247,0.8)', fontSize: 17, maxWidth: 580, mb: 5, fontFamily: 'Lato' }}>
              A boutique women's health centre where surgical excellence meets compassionate, spa-like care. Every patient deserves to feel safe, respected, and deeply cared for.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Button component={Link} to="/book" variant="contained" color="secondary" size="large" endIcon={<ArrowForwardIcon />}>
                Book a Consultation
              </Button>
              <Button component={Link} to="/about" variant="outlined" size="large"
                sx={{ borderColor: '#D4AF37', color: '#FDFBF7', '&:hover': { borderColor: '#D4AF37', bgcolor: 'rgba(212,175,55,0.1)' } }}>
                Tour the Facility
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* SERVICES */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: '#FDFBF7' }}>
        <Container maxWidth="xl">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography sx={{ color: '#D4AF37', fontFamily: 'Lato', fontSize: 12, letterSpacing: 4, textTransform: 'uppercase', mb: 2 }}>Our Specialisations</Typography>
            <Typography variant="h2" sx={{ color: '#2C3E50', fontSize: { xs: 28, md: 40 } }}>World-Class Care, Two Paths</Typography>
          </Box>
          <Grid container spacing={4}>
            {services.map((s) => (
              <Grid item xs={12} md={6} key={s.title}>
                <Card sx={{ height: '100%', border: '1px solid rgba(212,175,55,0.2)', p: 1, transition: 'box-shadow 0.3s', '&:hover': { boxShadow: '0 8px 40px rgba(44,62,80,0.15)' } }}>
                  <CardContent sx={{ p: 4 }}>
                    <Box sx={{ width: 48, height: 2, bgcolor: '#D4AF37', mb: 3 }} />
                    <Typography variant="h5" sx={{ color: '#2C3E50', mb: 0.5 }}>{s.title}</Typography>
                    <Typography sx={{ color: '#D4AF37', fontFamily: 'Lato', fontSize: 12, letterSpacing: 2, textTransform: 'uppercase', mb: 2 }}>{s.sub}</Typography>
                    <Typography variant="body2" sx={{ color: '#5a6a7a', mb: 3 }}>{s.body}</Typography>
                    <Box sx={{ display: 'flex', gap: 2 }}>
                      {s.links.map(([label, to]) => (
                        <Button key={to} component={Link} to={to} variant="outlined" size="small" endIcon={<ArrowForwardIcon />}
                          sx={{ borderColor: '#D4AF37', color: '#2C3E50', fontSize: 11 }}>
                          {label}
                        </Button>
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* PROMISE */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: '#2C3E50' }}>
        <Container maxWidth="xl">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography sx={{ color: '#D4AF37', fontFamily: 'Lato', fontSize: 12, letterSpacing: 4, textTransform: 'uppercase', mb: 2 }}>Why Patients Choose Us</Typography>
            <Typography variant="h2" sx={{ color: '#FDFBF7', fontSize: { xs: 28, md: 40 } }}>The Rosen Health Promise</Typography>
          </Box>
          <Grid container spacing={4}>
            {promises.map((p) => (
              <Grid item xs={12} sm={6} md={3} key={p.title}>
                <Box sx={{ textAlign: 'center', p: 3 }}>
                  <Box sx={{ mb: 2 }}>{p.icon}</Box>
                  <Typography variant="h6" sx={{ color: '#FDFBF7', mb: 1.5, fontSize: 17 }}>{p.title}</Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(253,251,247,0.7)', lineHeight: 1.8 }}>{p.body}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA STRIP */}
      <Box sx={{ py: 8, bgcolor: '#D4AF37', textAlign: 'center' }}>
        <Container maxWidth="md">
          <Typography variant="h4" sx={{ color: '#2C3E50', mb: 2 }}>Begin Your Journey With Us</Typography>
          <Typography variant="body1" sx={{ color: '#2C3E50', mb: 4, fontFamily: 'Lato', opacity: 0.8 }}>
            Schedule a private consultation or tour our facility. Your peace of mind is our highest priority.
          </Typography>
          <Button component={Link} to="/book" variant="contained"
            sx={{ bgcolor: '#2C3E50', color: '#FDFBF7', '&:hover': { bgcolor: '#1a2634' }, fontSize: 13, px: 5 }}>
            Schedule a Private Consultation
          </Button>
        </Container>
      </Box>
    </PublicLayout>
  );
}
