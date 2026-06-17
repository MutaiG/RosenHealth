import { Link } from 'react-router-dom';
import { Box, Container, Typography, Button, Tabs, Tab } from '@mui/material';
import { useState } from 'react';
import PublicLayout from '../../components/layout/PublicLayout';
import FAQAccordion from '../../features/FAQAccordion/FAQAccordion';
import GoldDivider from '../../components/ui/GoldDivider';
import { downloadBrochure } from '../../api/auth';

const maternityFAQs = [
  { question: "What distinguishes Rosen Health's Maternity Packages from traditional hospital stays?", answer: "We view childbirth as a sacred, joyous life milestone rather than a purely clinical event. Our packages merge uncompromising clinical safety with the tailored amenities of a five-star luxury hotel. Every mother stays in an expansive, private boutique suite designed for serene rest. Your care is fully individualized, featuring dedicated luxury nursing ratios, premium organic maternity linens, and a tranquil atmosphere free from chaotic hospital noise." },
  { question: "What is included in your Antenatal (Pregnancy Care) Track?", answer: "Our antenatal care is designed to offer absolute reassurance at every milestone. It includes regular, unhurried consultations with our elite obstetricians, routine and high-resolution fetal ultrasounds, comprehensive prenatal laboratory profiles, nutritional counseling, and private birth-planning sessions. We ensure you feel informed, confident, and deeply supported from conception to delivery." },
  { question: "Do your packages accommodate both Normal Delivery and Cesarean Sections?", answer: "Yes. Our infrastructure is fully equipped for both paths. Whether you choose or require a Normal Vaginal Delivery (NVD) or a planned/emergency Cesarean Section, you will receive the highest standard of care. Our surgical suites are permanently on standby, and our advanced intrapartum pain management team is always available to ensure your absolute comfort." },
  { question: "Can my partner or a family member stay with me in the room?", answer: "Absolutely. Family integration is essential to a beautiful birthing experience. Our premium private suites are purposefully designed with elegant, dedicated companion overnight lounges, allowing your partner or a chosen loved one to stay comfortably by your side throughout the entire journey." },
  { question: "What post-delivery and neonatal support do you provide?", answer: "Your journey with us does not end at birth. Our postnatal care includes 24/7 dedicated nursing support, private lactation and breastfeeding masterclasses with certified specialists, routine newborn vaccinations, and a comprehensive maternal healing check-up before you smoothly transition home." },
];

export default function Maternity() {
  const [tab, setTab] = useState(0);

  return (
    <PublicLayout>
      {/* Hero Section */}
      <Box sx={{ background: 'linear-gradient(135deg, #2C3E50 0%, #1a2634 100%)', minHeight: { xs: 280, md: 380 }, display: 'flex', alignItems: 'flex-end', width: '100%' }}>
        <Container maxWidth="xl" sx={{ pb: 6, width: '100%' }}>
          <Typography sx={{ color: '#D4AF37', fontFamily: 'Lato', fontSize: 12, letterSpacing: 4, textTransform: 'uppercase', mb: 2 }}>Maternity</Typography>
          <Typography variant="h1" sx={{ color: '#FDFBF7', fontSize: { xs: 28, md: 48 }, maxWidth: 640, lineHeight: 1.15 }}>
            Premium Maternity Packages & Patient Guides
          </Typography>
        </Container>
      </Box>

      {/* Tab Navigation */}
      <Box sx={{ backgroundColor: '#FDFBF7', borderBottom: '1px solid rgba(212,175,55,0.2)', width: '100%' }}>
        <Container maxWidth="xl" sx={{ width: '100%' }}>
          <Tabs
            value={tab}
            onChange={(_, v) => setTab(v)}
            TabIndicatorProps={{ style: { backgroundColor: '#D4AF37', height: 2 } }}
            sx={{
              '& .MuiTab-root': { color: '#5a6a7a', fontFamily: 'Lato', letterSpacing: 1.5, fontSize: 12, textTransform: 'uppercase' },
              '& .Mui-selected': { color: '#2C3E50 !important' }
            }}
          >
            <Tab label="Laparoscopy Guide" />
            <Tab label="Hysteroscopy Guide" />
            <Tab label="Maternity FAQs" />
          </Tabs>
        </Container>
      </Box>

      {/* Content Section */}
      <Box sx={{ backgroundColor: '#FDFBF7', py: { xs: 8, md: 10 }, pb: { xs: 12, md: 14 }, width: '100%', overflow: 'hidden' }}>
        <Container maxWidth="xl" sx={{ width: '100%' }}>
          {tab === 0 && (
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 6, width: '100%' }}>
              <Box sx={{ minWidth: 0 }}>
                <Typography sx={{ color: '#D4AF37', fontFamily: 'Lato', fontSize: 12, letterSpacing: 4, textTransform: 'uppercase', mb: 2 }}>Guide 1</Typography>
                <Typography variant="h4" sx={{ color: '#2C3E50', mb: 2 }}>Advanced Laparoscopy</Typography>
                <GoldDivider sx={{ mb: 3 }} />
                <Typography variant="body1" sx={{ color: '#5a6a7a', mb: 3, lineHeight: 1.8 }}>
                  Laparoscopy is a sophisticated, minimally invasive surgical technique that allows our specialists to examine and treat pelvic organs through tiny, discreet incisions (usually 5 to 10 millimeters).
                </Typography>
                {[
                  { label: 'Uterine Fibroids (Myomectomy)', body: 'Elegant removal of fibroids while completely preserving your uterus and future fertility.' },
                  { label: 'Ovarian Cysts', body: 'Precise excision of cysts while carefully protecting healthy ovarian tissue.' },
                  { label: 'Endometriosis & Pelvic Adhesions', body: 'Advanced ablation or excision of painful endometrial tissue to restore pelvic health.' },
                  { label: 'Ectopic Pregnancies', body: 'Swift, safe surgical management to safeguard maternal health.' },
                  { label: 'Diagnostic Evaluation', body: 'Unlocking answers for unexplained infertility or long-standing pelvic discomfort.' },
                ].map(c => (
                  <Box key={c.label} sx={{ mb: 2, pl: 2, borderLeft: '2px solid rgba(212,175,55,0.4)' }}>
                    <Typography sx={{ color: '#2C3E50', fontWeight: 700, fontFamily: 'Lato', fontSize: 13, mb: 0.3 }}>{c.label}</Typography>
                    <Typography variant="body2" sx={{ color: '#5a6a7a', lineHeight: 1.6 }}>{c.body}</Typography>
                  </Box>
                ))}
              </Box>
              <Box sx={{ minWidth: 0 }}>
                <Box sx={{ backgroundColor: '#2C3E50', p: 4, borderRadius: 2, height: 'fit-content' }}>
                  <Typography sx={{ color: '#D4AF37', fontFamily: 'Lato', fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', mb: 2 }}>Luxury Recovery Advantage</Typography>
                  <Typography variant="h5" sx={{ color: '#FDFBF7', mb: 2 }}>Swift Recovery, Minimal Scarring</Typography>
                  <GoldDivider sx={{ mb: 3 }} />
                  <Typography variant="body2" sx={{ color: 'rgba(253,251,247,0.8)', lineHeight: 1.9 }}>
                    Unlike traditional open surgery, laparoscopy minimizes structural disruption. Virtually invisible scarring, drastically minimized post-operative discomfort, shorter hospital stays (often overnight or same-day), and an accelerated return to your daily routine.
                  </Typography>
                </Box>
              </Box>
            </Box>
          )}

          {tab === 1 && (
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 6, width: '100%' }}>
              <Box sx={{ minWidth: 0 }}>
                <Typography sx={{ color: '#D4AF37', fontFamily: 'Lato', fontSize: 12, letterSpacing: 4, textTransform: 'uppercase', mb: 2 }}>Guide 2</Typography>
                <Typography variant="h4" sx={{ color: '#2C3E50', mb: 2 }}>Advanced Hysteroscopy</Typography>
                <GoldDivider sx={{ mb: 3 }} />
                <Typography variant="body1" sx={{ color: '#5a6a7a', mb: 3, lineHeight: 1.8 }}>
                  Hysteroscopy represents the absolute peak of gentle gynaecological care. A completely scarless procedure — no external incisions or cuts made to your body.
                </Typography>
                {[
                  { label: 'Uterine Polyps & Submucosal Fibroids', body: 'Swift removal of growths that cause heavy periods or obstruct fertility.' },
                  { label: 'Abnormal Uterine Bleeding (AUB)', body: 'Definitive visual investigation and targeted treatment of irregular cycles.' },
                  { label: "Asherman's Syndrome", body: 'Careful clearing of intrauterine scar tissue to prepare the womb for pregnancy.' },
                  { label: 'Recurrent Miscarriage Investigation', body: 'Meticulous structural evaluation of the uterine lining.' },
                ].map(c => (
                  <Box key={c.label} sx={{ mb: 2, pl: 2, borderLeft: '2px solid rgba(212,175,55,0.4)' }}>
                    <Typography sx={{ color: '#2C3E50', fontWeight: 700, fontFamily: 'Lato', fontSize: 13, mb: 0.3 }}>{c.label}</Typography>
                    <Typography variant="body2" sx={{ color: '#5a6a7a', lineHeight: 1.6 }}>{c.body}</Typography>
                  </Box>
                ))}
              </Box>
              <Box sx={{ minWidth: 0 }}>
                <Box sx={{ backgroundColor: '#2C3E50', p: 4, borderRadius: 2, height: 'fit-content' }}>
                  <Typography sx={{ color: '#D4AF37', fontFamily: 'Lato', fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', mb: 2 }}>Luxury Recovery Advantage</Typography>
                  <Typography variant="h5" sx={{ color: '#FDFBF7', mb: 2 }}>Same Day. Zero Downtime.</Typography>
                  <GoldDivider sx={{ mb: 3 }} />
                  <Typography variant="body2" sx={{ color: 'rgba(253,251,247,0.8)', lineHeight: 1.9 }}>
                    Because there are zero incisions to heal, hysteroscopy is incredibly gentle on the body. Most procedures are performed on an outpatient basis — relax in our luxury recovery lounge for a few hours and return to the comfort of your own home the very same day.
                  </Typography>
                </Box>
              </Box>
            </Box>
          )}

          {tab === 2 && (
            <Box sx={{ maxWidth: 800, mx: 'auto', width: '100%' }}>
              <Typography sx={{ color: '#D4AF37', fontFamily: 'Lato', fontSize: 12, letterSpacing: 4, textTransform: 'uppercase', mb: 2 }}>Premium Maternity</Typography>
              <Typography variant="h4" sx={{ color: '#2C3E50', mb: 3 }}>Frequently Asked Questions</Typography>
              <GoldDivider sx={{ width: 60, mb: 4 }} />
              <FAQAccordion category="Maternity" staticItems={maternityFAQs} />
            </Box>
          )}
        </Container>
      </Box>

      {/* CTA Section */}
      <Box sx={{ backgroundColor: '#2C3E50', py: 8, textAlign: 'center', width: '100%' }}>
        <Container maxWidth="md" sx={{ width: '100%' }}>
          <Typography variant="h4" sx={{ color: '#FDFBF7', mb: 3 }}>Ready to Begin Your Journey?</Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              onClick={downloadBrochure}
              variant="outlined"
              sx={{ borderColor: '#D4AF37', color: '#D4AF37', '&:hover': { bgcolor: 'rgba(212,175,55,0.1)', borderColor: '#D4AF37' } }}
            >
              Download Maternity Brochure
            </Button>
            <Button component={Link} to="/book" variant="contained" color="secondary">
              Connect with a Patient Care Coordinator
            </Button>
          </Box>
        </Container>
      </Box>
    </PublicLayout>
  );
}
