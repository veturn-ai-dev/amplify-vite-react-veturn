import { Box, Container, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const faqs = [
  {
    question: 'What is Veturn AI?',
    answer: 'Veturn AI is a suite of AI-powered tools designed specifically for veterinary practices. Our tools help streamline operations, improve patient care, and enhance communication through advanced AI technologies.',
  },
  {
    question: 'How does the Text to Image tool work?',
    answer: 'Our Text to Image tool uses advanced AI to generate high-quality images based on text descriptions. Simply enter a description of the image you need, and our AI will create a professional, relevant image for your veterinary practice.',
  },
  {
    question: 'Can I use the Text to Speech tool for patient education?',
    answer: 'Yes! Our Text to Speech tool is perfect for creating audio content for patient education. You can convert written materials into natural-sounding speech, making it easier for pet owners to understand complex medical information.',
  },
  {
    question: 'What kind of email automation features are available?',
    answer: 'Our Email Agents tool offers various automation features including appointment reminders, follow-up emails, and personalized communication templates. You can customize the automation rules to match your practice\'s workflow.',
  },
  {
    question: 'Is my data secure?',
    answer: 'Yes, we take data security very seriously. All data is encrypted in transit and at rest. We comply with industry-standard security practices and regularly update our security measures to protect your information.',
  },
  {
    question: 'Can I cancel my subscription at any time?',
    answer: 'Yes, you can cancel your subscription at any time. There are no long-term contracts, and you\'ll continue to have access to the service until the end of your current billing period.',
  },
  {
    question: 'Do you offer a free trial?',
    answer: 'Yes, we offer a 14-day free trial for all our plans. You can try all features without any commitment and decide which plan works best for your practice.',
  },
  {
    question: 'What kind of support do you provide?',
    answer: 'We provide email support for all plans, with priority support for Professional and Enterprise plans. Our support team is available to help you with any questions or issues you may have.',
  },
];

export default function FAQ() {
  return (
    <Box sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="md">
        <Typography
          variant="h2"
          align="center"
          sx={{
            fontWeight: 800,
            fontSize: { xs: '2rem', md: '2.5rem' },
            mb: 2,
          }}
        >
          Frequently Asked Questions
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          sx={{ mb: 8, maxWidth: 600, mx: 'auto' }}
        >
          Find answers to common questions about Veturn AI and our services.
        </Typography>
        <Box sx={{ width: '100%' }}>
          {faqs.map((faq, index) => (
            <Accordion
              key={index}
              sx={{
                mb: 2,
                '&:before': {
                  display: 'none',
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{
                  backgroundColor: (theme) => theme.palette.grey[50],
                  '&:hover': {
                    backgroundColor: (theme) => theme.palette.grey[100],
                  },
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                  }}
                >
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography color="text.secondary">{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
    </Box>
  );
} 