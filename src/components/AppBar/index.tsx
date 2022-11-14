import React, { useState, useMemo } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Divider, Drawer, IconButton, List, ListItem, AppBar, Container, Toolbar, Typography, Box, Button, Link, Avatar } from '@mui/material';
import { styles } from "./styles";
import BodyButton from '../BodyButton';

const drawerWidth = 240;

export default function DrawerAppBar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  
  const drawer = useMemo(() => (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', backgroundColor: '#434', height: '100%' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Maxi Gomez
      </Typography>
      <Divider />
      <List>
        <ListItem sx={styles.listItem} key="about" disablePadding>
          <Link sx={styles.link} href="#about" color="inherit" underline="none">
            <Typography color="secondary" sx={styles.menuOption} variant="h6">
              01.
            </Typography>
            <Typography sx={styles.menuOption} variant="h6">
              About
            </Typography>
          </Link>
        </ListItem>
        <Divider />
        <ListItem sx={styles.listItem} key="skills" disablePadding>
          <Link sx={styles.link} href="#skills" color="inherit" underline="none">
            <Typography color="secondary" sx={styles.menuOption} variant="h6">
              02.
            </Typography>
            <Typography sx={styles.menuOption} variant="h6">
              Skills
            </Typography>
          </Link> 
        </ListItem>
        <Divider />
        <ListItem sx={styles.listItem} key="about" disablePadding>
          <Link sx={styles.link} href="#experience" color="inherit" underline="none">
            <Typography color="secondary" sx={styles.menuOption} variant="h6">
              03.
            </Typography>
            <Typography sx={styles.menuOption} variant="h6">
              Experience
            </Typography>
          </Link>
        </ListItem>
        <Divider />
        <ListItem sx={styles.listItem} key="skills" disablePadding>
          <Link sx={styles.link} href="#contact" color="inherit" underline="none">
            <Typography color="secondary" sx={styles.menuOption} variant="h6">
              04.
            </Typography>
            <Typography sx={styles.menuOption} variant="h6">
              Contact
            </Typography>
          </Link> 
        </ListItem>
        <Divider />
      </List>
    </Box>
  ), [])

  const container = window !== undefined ? () => window.document.body : undefined;

  return (
    <Box sx={styles.container}>
      <AppBar component="nav" sx={styles.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={styles.headerContainer} >
            <Box display="flex" flexDirection="row" >
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
            </Box>
            <BodyButton variant="SMALL" text="Resume" isALink linkHref="https://calendly.com/maxi-gomez-tumini/30min" />
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav" >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: '#434' },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
