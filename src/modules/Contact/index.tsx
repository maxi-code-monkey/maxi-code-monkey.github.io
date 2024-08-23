import React from 'react';
import { Box, Typography } from '@mui/material';
import BodyButton from '../../components/BodyButton';
import SectionTitle from '../../components/SectionTitle';
import { styles } from './styles';

const Contact = () => (
  <Box sx={styles.sectionContainer} id="contact">
    <SectionTitle
      number="03."
      name="And now what"
    />
    <Typography sx={styles.message} variant="body1">
      I´m always looking to hear about new opportunities and challenges, so, my inbox is always open.
    </Typography>
    <Typography sx={styles.message} variant="body1">
      Whether you have a question, you want to say hi, you have any feedback or comments, reach out and I´ll do my best to answer back.
    </Typography>
    <BodyButton
      text="Say Hello!"
      isALink
      linkHref="mailto:maxi.gomez.tumini@live.com"
    />
  </Box>
);

export default Contact;