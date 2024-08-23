import React from 'react';
import { Box } from '@mui/material';

import SectionTitle from '../../components/SectionTitle';
import { WorkExperiences } from '../../constants/work-experiences';
import { ExperienceCardProps } from '../../components/ExperienceCard/types';
import ExperienceCard from '../../components/ExperienceCard';

import { styles } from './styles';

const WorkExperience = () => {

  return (
    <Box sx={styles.sectionContainer} id="work-experience">
      <SectionTitle number="02." name="Work Experience" />
      <Box className='text-container' sx={styles.experienceContainer}>
        {WorkExperiences.map((experience: ExperienceCardProps, index: number) => (
          <ExperienceCard {...experience} />
        ))}
      </Box>
    </Box>
  );
}

export default WorkExperience;
