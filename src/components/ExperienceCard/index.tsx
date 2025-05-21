import React, { useState } from "react";
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

  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleOnMouseEnter = () => setIsHovered(true);
  const handleOnMouseLeave = () => setIsHovered(false);

  return (
    <Box
      className='experience-card'
      onClick={handleCardClick}
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
      sx={url ? styles.cardContainerWithPointer : styles.cardContainer}
    >
      <Typography sx={styles.years} variant="body1">
        {fromYear} - {toYear}
      </Typography>
      <Box sx={styles.rightColumn}>
        <Typography sx={styles.position} variant="body1">
          {position} <InlineTypography text={`@ ${employer}`} />
        </Typography>
        {description.map((paragraph, index) => (
          <Typography sx={styles.descParagraph} key={index} variant="body1">
            {paragraph}
          </Typography>
        ))}
        <Box sx={styles.pillsContainer} className={`${isHovered ? 'hovered' : ''}`}>
          {stack.map((tech, index) => (
            <Pill label={tech} key={index} />
          ))}
        </Box>
      </Box>
    </Box>
  )
}

export default ExperienceCard;