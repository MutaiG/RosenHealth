import { Link } from 'react-router-dom';
import { Box, Container, Typography, Button } from '@mui/material';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import HotelIcon from '@mui/icons-material/Hotel';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import PublicLayout from '../../components/layout/PublicLayout';
import GoldDivider from '../../components/ui/GoldDivider';

const pillars = [
  {
    icon: <LocalParkingIcon sx={{ fontSize: 40, color: '#D4AF37' }} />,
    title: 'Seamless Arrival & Complimentary Valet',
    body: 'Your experience begins before you even enter our doors. Arrive stress-free with our private, complimentary valet parking service. Our professional team handles your vehicle securely, allowing you and your family to step directly into our tranquil reception lounge without a moment\'s delay.',
  },
  {
    icon: <SupportAgentIcon sx={{ fontSize: 40, color: '#D4AF37' }} />,
    title: 'Elite Medical Concierge Service',
    body: 'Every patient at Rosen Health is assigned a dedicated Care Concierge. Your concierge serves as your personal liaison, managing appointment scheduling, coordinating with insurance or private billing, and ensuring your personal preferences are perfectly integrated into your stay.',
  },
  {
    icon: <HotelIcon sx={{ fontSize: 40, color: '#D4AF37' }} />,
    title: 'The Private Oasis: Luxury Inpatient Suites',
    body: 'Our sound-insulated inpatient and postnatal suites are modeled after five-star boutique hotels.',
    bullets: [
      'Premium, high-thread-count organic linens and hypoallergenic bedding.',
      'An elegant, built-in companion overnight lounge for your partner or family member.',
      'A fully private, spa-inspired en-suite bathroom stocked with premium botanical amenities.',
      'Customized, chef-curated wellness menus tailored precisely to your nutritional and dietary needs.',
    ],
  },
  {
    icon: <VolumeOffIcon sx={{ fontSize: 40, color: '#D4AF37' }} />,
    title: 'Whispering Medicine: A Quiet Healing Environment',
    body: 'We have eliminated the loud, distressing atmosphere of traditional hospitals. Our medical monitoring equipment communicates silently and wirelessly with our nursing stations. There are no frantic overhead pages or disruptive alarms — just a peaceful, restorative environment that promotes rapid biological healing.',
  },
];

export default function Experience() {
  return (
    <PublicLayout>
      {/* Hero Section */}
      <Box sx={{ background: 'linear-gradient(135deg, #2C3E50 0%, #1a2634 100%)', minHeight: { xs: 320, md: 440 }, display: 'flex', alignItems: 'flex-end', width: '100%' }}>
        <Container maxWidth="xl" sx={{ pb: 6, width: '100%' }}>
          <Typography sx={{ color: '#D4AF37', fontFamily: 'Lato', fontSize: 12, letterSpacing: 4, textTransform: 'uppercase', mb: 2 }}>The Patient Experience</Typography>
          <Typography variant="h1" sx={{ color: '#FDFBF7', fontSize: { xs: 28, md: 52 }, maxWidth: 700, lineHeight: 1.15, mb: 2 }}>
            A Sanctuary of Healing. World-Class Medical Care, Curated for Your Complete Comfort.
          </Typography>
          <Typography variant="body1" sx={{ color: 'rgba(253,251,247,0.75)', maxWidth: 580, fontFamily: 'Lato' }}>
            From the moment you arrive, your peace of mind is our highest priority. Discover a healthcare journey designed to eliminate anxiety and wrap you in absolute serenity.
          </Typography>
        </Container>
      </Box>

      {/* Pillars Section */}
      <Box sx={{ backgroundColor: '#FDFBF7', py: { xs: 6, md: 8 }, width: '100%' }}>
        <Container maxWidth="xl" sx={{ width: '100%' }}>
          <Box sx={{ textAlign: 'center', mb: 10 }}>
            <Typography sx={{ color: '#D4AF37', fontFamily: 'Lato', fontSize: 12, letterSpacing: 4, textTransform: 'uppercase', mb: 2 }}>Our Hospitality Standards</Typography>
            <Typography variant="h3" sx={{ color: '#2C3E50', fontSize: { xs: 26, md: 38 } }}>The Pillars of Our Luxury Hospitality</Typography>
          </Box>

          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 6, width: '100%' }}>
            {pillars.map((p) => (
              <Box
                key={p.title}
                sx={{
                  border: '1px solid rgba(212,175,55,0.25)',
                  p: 4,
                  borderRadius: 2,
                  transition: 'box-shadow 0.3s',
                  '&:hover': { boxShadow: '0 8px 40px rgba(44,62,80,0.12)' },
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <Box sx={{ mb: 2 }}>{p.icon}</Box>
                <Typography variant="h5" sx={{ color: '#2C3E50', mb: 2, fontSize: { xs: 18, md: 22 } }}>{p.title}</Typography>
                <GoldDivider sx={{ mb: 2 }} />
                <Typography variant="body2" sx={{ color: '#5a6a7a', lineHeight: 1.9, mb: p.bullets ? 2 : 0 }}>{p.body}</Typography>
                {p.bullets && p.bullets.map(b => (
                  <Box key={b} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, mb: 1.5 }}>
                    <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: '#D4AF37', mt: 0.8, flexShrink: 0 }} />
                    <Typography variant="body2" sx={{ color: '#5a6a7a', lineHeight: 1.6 }}>{b}</Typography>
                  </Box>
                ))}
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box sx={{ backgroundColor: '#D4AF37', py: 8, textAlign: 'center', width: '100%' }}>
        <Container maxWidth="md" sx={{ width: '100%' }}>
          <Typography variant="h4" sx={{ color: '#2C3E50', mb: 2 }}>Experience the Rosen Health Difference</Typography>
          <Typography variant="body1" sx={{ color: '#2C3E50', mb: 4, fontFamily: 'Lato', opacity: 0.8 }}>
            Schedule a private tour and let us show you what truly exceptional women's healthcare feels like.
          </Typography>
          <Button
            component={Link}
            to="/book"
            variant="contained"
            sx={{ backgroundColor: '#2C3E50', color: '#FDFBF7', '&:hover': { backgroundColor: '#1a2634' }, px: 5 }}
          >
            Schedule a Private Facility Tour
          </Button>
        </Container>
      </Box>
    </PublicLayout>
  );
}
