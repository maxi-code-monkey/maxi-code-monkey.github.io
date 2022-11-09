import { List, ListItem, Link } from '@mui/material';
import React from 'react';

import FixedSideElement from '../../../components/FixedSideElement';

import { ReactComponent as GitHubIcon } from '../../../assets/svg/github-40.svg';
import { ReactComponent as LinkedinIcon } from '../../../assets/svg/linkedin-40.svg';
import { ReactComponent as OutlookIcon } from '../../../assets/svg/outlook-40.svg';
import { ReactComponent as GmailIcon } from '../../../assets/svg/gmail-40.svg';

import { styles } from './styles';

const LeftBar = () => {
  return (
    <FixedSideElement
      side="left"
    >
      <List sx={styles.listContainer}>
        <ListItem sx={styles.listItem}>
          <Link href="https://www.github.com/maxi-code-monkey/" underline="none">
            <GitHubIcon />
          </Link>
        </ListItem>
        <ListItem sx={styles.listItem}>
          <Link href="https://www.linkedin.com/in/maximiliano-gomez-49ba1ab2/" underline="none">
            <LinkedinIcon />
          </Link>
        </ListItem>
        <ListItem sx={styles.listItem}>
          <Link href="mailto:maxi.gomez.tumini@live.com" underline="none">
            <OutlookIcon/>
          </Link>
        </ListItem>
        <ListItem sx={styles.listItem}>
          <Link href="mailto:maxi.gomez.tumini@gmail.com" underline="none">
            <GmailIcon />
          </Link>
        </ListItem>
      </List>
    </FixedSideElement>
  );
};

export default LeftBar;