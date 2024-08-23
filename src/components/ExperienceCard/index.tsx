import React from "react";
import { Box, Typography } from "@mui/material";

import { ExperienceCardProps } from "./types";
import Pill from "../Pill";

import { styles } from './styles';
import InlineTypography from "../InlineTypography";

const ExperienceCard = ({
  description,
  employer,
  fromYear,
  position,
  stack,
  toYear
}: ExperienceCardProps) => {
  return (
    <Box className='experience-card' sx={styles.cardContainer}>
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