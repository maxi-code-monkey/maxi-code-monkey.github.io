import React from 'react';
import AppBar from '@mui/material/AppBar';
import { Container, Toolbar, Typography, Box, Button, Link, Avatar } from '@mui/material';
import { styles } from "./styles";

export const APP_BAR_TEST_ID = "app-bar-test-id";

const CustomAppBar = () => {
  return (
    <Box id="back-to-top-anchor" data-testid={APP_BAR_TEST_ID} sx={{ flexGrow: 1 }}>
      <AppBar elevation={0} sx={styles.appBar} position="sticky">
        <Container maxWidth="xl">
          <Toolbar sx={styles.toolbar} disableGutters>
            {/* Logo */}
            <Box alignItems="center" display="flex">
              <Avatar
                alt="avatar"
                variant="rounded"
                sx={styles.avatar}
              >
                MG
              </Avatar>
              <Typography variant="h6">
                Maxi Gomez
              </Typography>
            </Box>
            {/* Menu Options */}
            <Box display="flex">
              <Link sx={styles.link} href="#about" color="inherit" underline="none">
                <Typography color="secondary" sx={styles.menuOption} variant="h6">
                  01.
                </Typography>
                <Typography sx={styles.menuOption} variant="h6">
                  About
                </Typography>
              </Link>
              <Link sx={styles.link} href="#skills" color="inherit" underline="none">
                <Typography color="secondary" sx={styles.menuOption} variant="h6">
                  02.
                </Typography>
                <Typography sx={styles.menuOption} variant="h6">
                  Skills
                </Typography>
              </Link> 
              <Link sx={styles.link} href="#experience" color="inherit" underline="none">
                <Typography color="secondary" sx={styles.menuOption} variant="h6">
                  03.
                </Typography>
                <Typography sx={styles.menuOption} variant="h6">
                  Experience
                </Typography>
              </Link>
              <Link sx={styles.link} href="#contact" color="inherit" underline="none">
                <Typography color="secondary" sx={styles.menuOption} variant="h6">
                  04.
                </Typography>
                <Typography sx={styles.menuOption} variant="h6">
                  Contact
                </Typography>
              </Link>
              <Button sx={styles.resume} variant="outlined" color="secondary" >
                Resume
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}

export default CustomAppBar;