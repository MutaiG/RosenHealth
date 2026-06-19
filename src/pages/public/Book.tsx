import { Box, Typography, Grid } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PublicLayout from '../../components/layout/PublicLayout';
import BookingForm from '../../features/BookingForm/BookingForm';
import GoldDivider from '../../components/ui/GoldDivider';

const EMERGENCY = import.meta.env.VITE_EMERGENCY_PHONE || '+254 700 000 000';
const MAPS_KEY = import.meta.env.VITE_GOOGLE_MAPS_KEY || '';

export default function Book() {
  return (
    <PublicLayout>
      <Box sx={{ bgcolor: '#FDFBF7' }}>
        <Grid container sx={{ minHeight: '100vh' }}>
          {/* LEFT — FORM */}
          <Grid item xs={12} md={6} sx={{ bgcolor: '#328283', p: { xs: 4, md: 8 }, pt: { xs: 8, md: 12 } }}>
            <BookingForm />
          </Grid>

          {/* RIGHT — DETAILS */}
          <Grid item xs={12} md={6} sx={{ bgcolor: '#FDFBF7', p: { xs: 4, md: 8 }, pt: { xs: 8, md: 12 } }}>
            {/* EMERGENCY BLOCK */}
            <Box sx={{ border: '2px solid #D4AF37', borderRadius: 2, p: 3, mb: 5, bgcolor: '#fff' }}>
              <Typography sx={{ color: '#D4AF37', fontFamily: 'Lato', fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', mb: 1 }}>
                24/7 Urgent Maternity Response Line
              </Typography>
              <Typography variant="body2" sx={{ color: '#5a6a7a', mb: 2, lineHeight: 1.8 }}>
                If you are an expectant mother experiencing labour, an urgent maternal concern, or a gynaecological emergency, our specialist surgical and delivery teams are permanently on standby.
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <PhoneIcon sx={{ color: '#D4AF37', fontSize: 22 }} />
                <Typography component="a" href={`tel:${EMERGENCY}`}
                  sx={{ color: '#2C3E50', fontFamily: 'Cormorant Garamond, serif', fontSize: 26, fontWeight: 700, textDecoration: 'none', '&:hover': { color: '#D4AF37' } }}>
                  {EMERGENCY}
                </Typography>
              </Box>
            </Box>

            {/* LOCATION */}
            <Box sx={{ mb: 4 }}>
              <Typography sx={{ color: '#D4AF37', fontFamily: 'Lato', fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', mb: 1.5 }}>Location & Access</Typography>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                <LocationOnIcon sx={{ color: '#2C3E50', fontSize: 22, mt: 0.2 }} />
                <Box>
                  <Typography sx={{ color: '#2C3E50', fontWeight: 600, fontFamily: 'Lato', fontSize: 14 }}>Rosen Health Maternity and Laparoscopy Centre</Typography>
                  <Typography variant="body2" sx={{ color: '#5a6a7a' }}>Zambia Apartment, Ngong Road, Ground Floor</Typography>
                  <Typography variant="body2" sx={{ color: '#5a6a7a' }}>Nairobi, Kenya</Typography>
                  <Typography variant="body2" sx={{ color: '#5a6a7a', mt: 0.5, fontStyle: 'italic' }}>
                    Secure, private parking and complimentary valet at the main entrance.
                  </Typography>
                </Box>
              </Box>
            </Box>

            {/* HOURS */}
            <Box sx={{ mb: 4 }}>
              <Typography sx={{ color: '#D4AF37', fontFamily: 'Lato', fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', mb: 1.5 }}>Consultation Hours</Typography>
              <GoldDivider sx={{ mb: 2 }} />
              {[
                { day: 'Monday – Friday', hours: '8:00 AM – 6:00 PM' },
                { day: 'Saturday', hours: '9:00 AM – 2:00 PM' },
                { day: 'Sunday', hours: 'Closed' },
              ].map(r => (
                <Box key={r.day} sx={{ display: 'flex', justifyContent: 'space-between', py: 1, borderBottom: '1px solid rgba(212,175,55,0.15)' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <AccessTimeIcon sx={{ fontSize: 16, color: '#D4AF37' }} />
                    <Typography variant="body2" sx={{ color: '#2C3E50', fontFamily: 'Lato', fontWeight: 500 }}>{r.day}</Typography>
                  </Box>
                  <Typography variant="body2" sx={{ color: r.day === 'Sunday' ? '#c0392b' : '#5a6a7a', fontFamily: 'Lato' }}>{r.hours}</Typography>
                </Box>
              ))}
              <Typography variant="body2" sx={{ color: '#D4AF37', mt: 1, fontFamily: 'Lato', fontSize: 12 }}>
                Emergency Maternity Admissions: Open 24/7
              </Typography>
            </Box>

            {/* MAP */}
            <Box sx={{ borderRadius: 2, overflow: 'hidden', border: '1px solid rgba(212,175,55,0.3)', height: 280 }}>
              {MAPS_KEY ? (
                <iframe
                  title="Rosen Health Location"
                  width="100%" height="100%" style={{ border: 0 }}
                  loading="lazy"
                  src={`https://www.google.com/maps/embed/v1/place?key=${MAPS_KEY}&q=Zambia+Apartment,Ngong+Road,Nairobi,Kenya`}
                  allowFullScreen
                />
              ) : (
                <Box sx={{ height: '100%', bgcolor: '#e8e4dc', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
                  <LocationOnIcon sx={{ color: '#D4AF37', fontSize: 40 }} />
                  <Typography variant="body2" sx={{ color: '#5a6a7a', fontFamily: 'Lato', textAlign: 'center', px: 3 }}>
                    Zambia Apartment, Ngong Road, Ground Floor, Nairobi, Kenya
                  </Typography>
                  <Typography sx={{ color: '#D4AF37', fontSize: 11, fontFamily: 'Lato', letterSpacing: 1 }}>
                    Add VITE_GOOGLE_MAPS_KEY to .env to enable live map
                  </Typography>
                </Box>
              )}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </PublicLayout>
  );
}
