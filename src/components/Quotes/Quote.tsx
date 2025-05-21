import React from "react";
import { Avatar, Box, Link, Typography } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import { QuoteProps } from "./types";
import { styles } from "./styles";

const Quote = ({
  image,
  linkedinProfileUrl,
  name,
  position,
  quote,
}: QuoteProps) => {
  return (
    <Box sx={styles.quote}>
      <Box className='left-column'>
        <Box className='name-caontainer'>
          <Link href={linkedinProfileUrl}>
            <Typography variant="h2" className="name">{name}</Typography>
            <LinkedInIcon />
          </Link>
        </Box>
        {quote.map((q, index) => <Typography key={`quote-${index}`} variant="body1" className="quote">{q}</Typography>)}
        <Typography variant="body2" className="position">{position}</Typography>
      </Box>
      <Box className='right-column'>
        <Avatar sx={styles.avatar} src={image} />
      </Box>
    </Box>
  );
}

export default Quote;