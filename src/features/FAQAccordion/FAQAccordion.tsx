import { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Box, CircularProgress } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useFAQs } from '../../api/faqs';
import type { FAQCategory } from '../../types';

interface Props {
  category: FAQCategory;
  staticItems?: { question: string; answer: string }[];
}

export default function FAQAccordion({ category, staticItems }: Props) {
  const [expanded, setExpanded] = useState<string | false>(false);
  const { data, isLoading } = useFAQs(category);

  const items: { id: string; question: string; answer: string }[] = data
    ? data.map(f => ({ id: f.id, question: f.question, answer: f.answer }))
    : (staticItems || []).map((f, i) => ({ id: String(i), question: f.question, answer: f.answer }));

  if (isLoading) return <Box sx={{ display: 'flex', justifyContent: 'center', py: 4 }}><CircularProgress sx={{ color: '#D4AF37' }} /></Box>;

  return (
    <Box>
      {items.map((item) => (
        <Accordion
          key={item.id}
          expanded={expanded === item.id}
          onChange={(_, isExp) => setExpanded(isExp ? item.id : false)}
          elevation={0}
          sx={{
            bgcolor: 'transparent',
            borderBottom: '1px solid rgba(212,175,55,0.3)',
            '&:before': { display: 'none' },
            '&.Mui-expanded': { margin: 0 },
          }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#D4AF37' }} />} sx={{ px: 0, py: 1.5 }}>
            <Typography sx={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 18, fontWeight: 600, color: '#2C3E50' }}>
              {item.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ px: 0, pb: 2.5 }}>
            <Typography variant="body2" sx={{ color: '#5a6a7a', lineHeight: 1.9 }}>{item.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}
