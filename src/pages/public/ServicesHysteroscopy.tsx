import { Link } from 'react-router-dom';
import { Box, Container, Typography, Button, Card, CardContent } from '@mui/material';
import PublicLayout from '../../components/layout/PublicLayout';
import GoldDivider from '../../components/ui/GoldDivider';

const conditions = [
  { label: 'Uterine Polyps & Submucosal Fibroids', body: 'Swift removal of growths that cause heavy periods or obstruct fertility.' },
  { label: 'Abnormal Uterine Bleeding (AUB)', body: 'Definitive visual investigation and targeted treatment of irregular cycles.' },
  { label: "Asherman's Syndrome", body: 'Careful clearing of intrauterine scar tissue to prepare the womb for pregnancy.' },
  { label: 'Recurrent Miscarriage Investigation', body: 'Meticulous structural evaluation of the uterine lining.' },
];

export default function ServicesHysteroscopy() {
  return (
    <PublicLayout>
      {/* Hero Section */}
      <Box sx={{ backgroundImage: 'linear-gradient(135deg, rgba(44,62,80,0.4) 0%, rgba(26,38,52,0.4) 100%), url(/rosen_image.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: { xs: 'scroll', md: 'fixed' }, minHeight: { xs: 330, md: 420 }, display: 'flex', alignItems: 'flex-end', width: '100%' }}>
        <Container maxWidth="xl" sx={{ pb: 6, width: '100%' }}>
          <Typography sx={{ color: '#D4AF37', fontFamily: 'Lato', fontSize: 12, letterSpacing: 4, textTransform: 'uppercase', mb: 2 }}>Gynaecological MIS</Typography>
          <Typography variant="h1" sx={{ color: '#FDFBF7', fontSize: { xs: 28, md: 48 }, maxWidth: 600, lineHeight: 1.15 }}>
            Advanced Hysteroscopy (Scarless Treatment)
          </Typography>
        </Container>
      </Box>

      {/* Content Section */}
      <Box sx={{ backgroundColor: '#FDFBF7', pt: { xs: 6, md: 8 }, pb: { xs: 8, md: 10 }, width: '100%' }}>
        <Container maxWidth="xl" sx={{ width: '100%' }}>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 8, width: '100%' }}>
            {/* Left Column */}
            <Box sx={{ minWidth: 0 }}>
              <Typography sx={{ color: '#D4AF37', fontFamily: 'Lato', fontSize: 12, letterSpacing: 4, textTransform: 'uppercase', mb: 2 }}>What is Hysteroscopy?</Typography>
              <Typography variant="h4" sx={{ color: '#2C3E50', mb: 3 }}>Zero Incisions. Absolute Gentleness.</Typography>
              <GoldDivider sx={{ width: 60, mb: 3 }} />
              <Typography variant="body1" sx={{ color: '#5a6a7a', mb: 3, lineHeight: 1.8 }}>
                Hysteroscopy represents the absolute peak of gentle gynaecological care. It is a completely scarless procedure where a slender, lighted telescope is guided gently through the natural opening of the cervix. There are absolutely no external incisions or cuts made to your body. This allows our specialists to view, diagnose, and treat conditions directly inside the uterine cavity.
              </Typography>
              <Typography variant="h5" sx={{ color: '#2C3E50', mt: 5, mb: 3 }}>Indications for Hysteroscopy</Typography>
              <GoldDivider sx={{ mb: 3 }} />
              {conditions.map((c) => (
                <Box key={c.label} sx={{ mb: 2.5, pl: 2, borderLeft: '2px solid rgba(212,175,55,0.4)' }}>
                  <Typography sx={{ color: '#2C3E50', fontWeight: 700, fontFamily: 'Lato', fontSize: 14, mb: 0.5 }}>{c.label}</Typography>
                  <Typography variant="body2" sx={{ color: '#5a6a7a', lineHeight: 1.6 }}>{c.body}</Typography>
                </Box>
              ))}
            </Box>

            {/* Right Column */}
            <Box sx={{ minWidth: 0 }}>
              <Card sx={{ border: '1px solid rgba(212,175,55,0.3)', height: 'fit-content' }}>
                <CardContent sx={{ p: 4 }}>
                  <Typography sx={{ color: '#D4AF37', fontFamily: 'Lato', fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', mb: 2 }}>The Luxury Recovery Advantage</Typography>
                  <Typography variant="h5" sx={{ color: '#2C3E50', mb: 2 }}>Outpatient. Same Day. No Downtime.</Typography>
                  <GoldDivider sx={{ mb: 3 }} />
                  <Typography variant="body2" sx={{ color: '#5a6a7a', mb: 3, lineHeight: 1.9 }}>
                    Because there are zero incisions to heal, hysteroscopy is incredibly gentle on the body. Most procedures are performed comfortably on an outpatient basis, meaning you can relax in our luxury recovery lounge for a few hours and return home the very same day.
                  </Typography>
                  {['Zero external incisions or scarring', 'Outpatient / day-care procedure', 'Minimal to no downtime', 'Comfortable recovery lounge included'].map((item) => (
                    <Box key={item} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, mb: 1.5 }}>
                      <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: '#D4AF37', mt: 0.8, flexShrink: 0 }} />
                      <Typography variant="body2" sx={{ color: '#5a6a7a', lineHeight: 1.6 }}>{item}</Typography>
                    </Box>
                  ))}
                  <Button component={Link} to="/book" variant="contained" color="secondary" fullWidth sx={{ mt: 3 }}>
                    Book a Consultation
                  </Button>
                </CardContent>
              </Card>
            </Box>
          </Box>
        </Container>
      </Box>
    </PublicLayout>
  );
}
