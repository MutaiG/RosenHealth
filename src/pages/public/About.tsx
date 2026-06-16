import { Link } from 'react-router-dom';
import { Box, Container, Typography, Button, Grid, Card, CardContent } from '@mui/material';
import PublicLayout from '../../components/layout/PublicLayout';
import GoldDivider from '../../components/ui/GoldDivider';

const infrastructure = [
  {
    title: 'The Elite Gynaecological MIS Suite',
    sub: 'Our Operating Theatre',
    items: [
      { label: 'Ultra-HD 4K Endoscopic Imaging Towers', body: 'Crystal-clear anatomical visualization for unmatched surgical precision, smaller entry incisions, and minimized blood loss.' },
      { label: 'Advanced Electrosurgical & Thermal Energy Platforms', body: 'Precision cutting and sealing tools that drastically decrease tissue trauma and reduce post-operative pain.' },
      { label: 'Positive Pressure HEPA Air-Filtration Systems', body: 'An ultra-sterile environment that lowers the risk of surgical site infections to near-zero.' },
      { label: 'Ergonomic Surgical Integration', body: 'Designed around the surgeon\'s efficiency, ensuring swift operational times and shorter periods under anesthesia.' },
    ],
  },
  {
    title: 'The Premium Recovery Experience',
    sub: 'Maternity & Post-Op',
    items: [
      { label: 'Boutique Private Postnatal Suites', body: 'Sound-insulated, beautifully appointed private rooms with ambient lighting, premium linens, and en-suite amenities.' },
      { label: 'Continuous, Smart Maternal Monitoring', body: 'Advanced telemetry systems that monitor vital signs silently and wirelessly, protecting your rest without disruptive alarms.' },
      { label: 'Dedicated Infant Care Stations', body: 'Fully equipped neonatal zones within your room, encouraging seamless mother-baby bonding with medical support at arm\'s reach.' },
    ],
  },
];

const promises = [
  { n: '01', title: 'Surgical Mastery, Minimized Scarring', body: 'Our focus on advanced keyhole techniques means smaller incisions, less downtime, and a swift return to your daily life.' },
  { n: '02', title: 'Uncompromising Safety Protocols', body: 'We fuse premium hospitality with absolute clinical compliance, operating under strict international healthcare guidelines.' },
  { n: '03', title: 'Tailored Patient Journeys', body: 'No two paths are identical. Your care plan is custom-tailored to your unique needs, whether gynaecological or maternity.' },
];

export default function About() {
  return (
    <PublicLayout>
      {/* HERO BANNER */}
      <Box sx={{ minHeight: { xs: 300, md: 420 }, background: 'linear-gradient(135deg, #2C3E50 0%, #1a2634 100%)', display: 'flex', alignItems: 'flex-end' }}>
        <Container maxWidth="xl" sx={{ pb: 6 }}>
          <Typography sx={{ color: '#D4AF37', fontFamily: 'Lato', fontSize: 12, letterSpacing: 4, textTransform: 'uppercase', mb: 2 }}>About Us</Typography>
          <Typography variant="h1" sx={{ color: '#FDFBF7', fontSize: { xs: 30, md: 52 }, maxWidth: 700, lineHeight: 1.15 }}>
            Redefining Women's Healthcare Through Innovation and Serenity.
          </Typography>
        </Container>
      </Box>

      {/* STORY */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: '#FDFBF7' }}>
        <Container maxWidth="xl">
          <Grid container spacing={8} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography sx={{ color: '#D4AF37', fontFamily: 'Lato', fontSize: 12, letterSpacing: 4, textTransform: 'uppercase', mb: 2 }}>Our Story & Philosophy</Typography>
              <Typography variant="h3" sx={{ color: '#2C3E50', mb: 3, fontSize: { xs: 26, md: 36 } }}>Founded on Surgical Excellence and Compassionate Maternal Care</Typography>
              <GoldDivider sx={{ width: 60, mb: 3 }} />
              <Typography variant="body1" sx={{ color: '#5a6a7a', mb: 3 }}>
                At Rosen Health Maternity and Laparoscopy Centre, we believe that world-class medical intervention should never feel cold or intimidating. Founded on the dual pillars of surgical excellence and compassionate maternal care, our boutique center offers women an unparalleled healthcare experience.
              </Typography>
              <Typography variant="body1" sx={{ color: '#5a6a7a' }}>
                We have purposefully departed from traditional, institutional hospital design. By merging an elite team of medical specialists with a tranquil, spa-like environment, we ensure that every patient feels deeply cared for, safe, and respected from the moment they step through our doors.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
                {[
                  { label: 'Our Mission', body: 'To deliver state-of-the-art, minimally invasive gynecological care and beautifully curated maternity journeys, prioritizing patient safety, rapid recovery, and absolute peace of mind.' },
                  { label: 'Our Vision', body: 'To stand as the premier boutique women\'s health institution in East Africa, recognized globally for combining clinical surgical mastery with a premium, patient-centric healing environment.' },
                ].map((item) => (
                  <Card key={item.label} sx={{ border: '1px solid rgba(212,175,55,0.25)', p: 0.5 }}>
                    <CardContent>
                      <Box sx={{ width: 32, height: 2, bgcolor: '#D4AF37', mb: 2 }} />
                      <Typography variant="h6" sx={{ color: '#2C3E50', mb: 1.5, fontSize: 17 }}>{item.label}</Typography>
                      <Typography variant="body2" sx={{ color: '#5a6a7a', lineHeight: 1.8 }}>{item.body}</Typography>
                    </CardContent>
                  </Card>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* INFRASTRUCTURE */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: '#f7f5f0' }}>
        <Container maxWidth="xl">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography sx={{ color: '#D4AF37', fontFamily: 'Lato', fontSize: 12, letterSpacing: 4, textTransform: 'uppercase', mb: 2 }}>Specialized Infrastructure</Typography>
            <Typography variant="h3" sx={{ color: '#2C3E50', fontSize: { xs: 26, md: 38 } }}>Technological Amenities</Typography>
          </Box>
          <Grid container spacing={4}>
            {infrastructure.map((col) => (
              <Grid item xs={12} md={6} key={col.title}>
                <Card sx={{ height: '100%', border: '1px solid rgba(212,175,55,0.3)', overflow: 'visible' }}>
                  <CardContent sx={{ p: 4 }}>
                    <Typography variant="h5" sx={{ color: '#2C3E50', mb: 0.5 }}>{col.title}</Typography>
                    <Typography sx={{ color: '#D4AF37', fontFamily: 'Lato', fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', mb: 3 }}>{col.sub}</Typography>
                    <GoldDivider sx={{ mb: 3 }} />
                    {col.items.map((item) => (
                      <Box key={item.label} sx={{ mb: 2.5 }}>
                        <Typography sx={{ color: '#2C3E50', fontWeight: 600, fontFamily: 'Lato', fontSize: 14, mb: 0.5 }}>{item.label}</Typography>
                        <Typography variant="body2" sx={{ color: '#5a6a7a' }}>{item.body}</Typography>
                      </Box>
                    ))}
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
          <Box sx={{ mb: 8 }}>
            <Typography sx={{ color: '#D4AF37', fontFamily: 'Lato', fontSize: 12, letterSpacing: 4, textTransform: 'uppercase', mb: 2 }}>Why Patients Choose Us</Typography>
            <Typography variant="h3" sx={{ color: '#FDFBF7', fontSize: { xs: 26, md: 38 } }}>The Rosen Health Promise</Typography>
          </Box>
          <Grid container spacing={4}>
            {promises.map((p) => (
              <Grid item xs={12} md={4} key={p.n}>
                <Box sx={{ borderLeft: '2px solid #D4AF37', pl: 3 }}>
                  <Typography sx={{ color: '#D4AF37', fontFamily: 'Lato', fontSize: 11, letterSpacing: 3, mb: 1 }}>{p.n}</Typography>
                  <Typography variant="h6" sx={{ color: '#FDFBF7', mb: 1.5 }}>{p.title}</Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(253,251,247,0.7)', lineHeight: 1.8 }}>{p.body}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA */}
      <Box sx={{ py: { xs: 8, md: 10 }, bgcolor: '#FDFBF7', textAlign: 'center' }}>
        <Container maxWidth="md">
          <Typography variant="h4" sx={{ color: '#2C3E50', mb: 2 }}>Experience It Yourself</Typography>
          <Typography variant="body1" sx={{ color: '#5a6a7a', mb: 4, fontFamily: 'Lato' }}>
            We invite you to step inside and discover a healthcare environment unlike any other.
          </Typography>
          <Button component={Link} to="/book" variant="contained" color="secondary" size="large">
            Schedule a Private Facility Tour
          </Button>
        </Container>
      </Box>
    </PublicLayout>
  );
}
