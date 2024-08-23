import React from 'react';
import { Box, Typography, Avatar, Link } from '@mui/material';

import ProfilePic from '../../assets/img/profile_pic.jpeg';
import { ReactComponent as GitHubIcon } from '../../assets/svg/github-40.svg';
import { ReactComponent as LinkedinIcon } from '../../assets/svg/linkedin-40.svg';
import { ReactComponent as OutlookIcon } from '../../assets/svg/outlook-40.svg';
import { ReactComponent as GmailIcon } from '../../assets/svg/gmail-40.svg';

import { styles } from './styles';

const MainInfo = () => {
  return (
    <Box className='main-info-container' sx={styles.sectionContainer}>
      <Box className='img-container' sx={styles.avatarContainer}>
        <Avatar sx={styles.avatar} src={ProfilePic} />
      </Box>
      <Box sx={styles.contentContainer} className='content-container'>
        <Box className='text-container'>
          <Typography className='name' variant='h2' sx={styles.name}>
            Maxi Gomez
          </Typography>
          <Typography className='work-title' variant='h3' sx={styles.workTitle}>
            Senior Frontend Engineer
          </Typography>
          <Typography className='description' variant='body1' sx={styles.description}>
            I love to build all kind of new and exciting things.
          </Typography>
        </Box>
        <Box className='links-container' sx={styles.linksContainer}>
          <Box className='gh-link' sx={styles.link}>
            <Link target="_blank" href="https://www.github.com/maxi-code-monkey/" underline="none">
              <GitHubIcon />
            </Link>
          </Box>
          <Box className='lkn-link' sx={styles.link}>
            <Link target="_blank" href="https://www.linkedin.com/in/maximiliano-gomez-49ba1ab2/" underline="none">
              <LinkedinIcon />
            </Link>
          </Box>
          <Box className='outlook-link' sx={styles.link}>
            <Link target="_blank" href="mailto:maxi.gomez.tumini@live.com" underline="none">
              <OutlookIcon/>
            </Link>
          </Box>
          <Box className='gmail-link' sx={styles.link}>
            <Link target="_blank" href="mailto:maxi.gomez.tumini@gmail.com" underline="none">
              <GmailIcon />
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default MainInfo;