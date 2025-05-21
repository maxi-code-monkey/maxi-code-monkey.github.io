import React from 'react';
import { Box } from '@mui/material';

import SectionTitle from '../../components/SectionTitle';
import QuoteList from '../../components/Quotes';
import { ReferenceQuotes } from '../../components/Quotes/quotes';

import { styles } from './styles';

const Referrals = () => {
  return (
    <Box sx={styles.sectionContainer} id="work-referrals">
      <SectionTitle number="02." name="Work Referrals" />
      <QuoteList quotes={ReferenceQuotes} />
    </Box>
  );
}

export default Referrals;
