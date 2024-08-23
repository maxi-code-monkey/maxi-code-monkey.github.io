import React from "react";
import { Box, Typography } from "@mui/material";

import { ExperienceCardProps } from "./types";
import Pill from "../Pill";
import InlineTypography from "../InlineTypography";

import { styles } from './styles';

const ExperienceCard = ({
  description,
  employer,
  fromYear,
  position,
  stack,
  toYear,
  url,
}: ExperienceCardProps) => {
  const handleCardClick = () => url && window.open(url, '_blank');

  return (
    <Box onClick={handleCardClick} className='experience-card' sx={url ? styles.cardContainerWithPointer : styles.cardContainer}>
      <Box className='left-column' sx={styles.leftColumn}>
        <Typography sx={styles.years} variant="body1">
          {fromYear} - {toYear}
        </Typography>
      </Box>
      <Box className='right-column' sx={styles.rightColumn}>
        <Typography sx={styles.position} variant="body1">
          {position} <InlineTypography text={`@ ${employer}`} />
        </Typography>
        {description.map((paragraph, index) => (
          <Typography sx={styles.descParagraph} key={index} variant="body1">
            {paragraph}
          </Typography>
        ))}
        <Box sx={styles.pillsContainer} className='pills-container'>
          {stack.map((tech, index) => (
            <Pill label={tech} key={index} />
          ))}
        </Box>
      </Box>
    </Box>
  )
}

export default ExperienceCard;