import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          DriveSafe
        </Typography>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/about">About</Button>
        <Button color="inherit" component={Link} to="/articles">Articles</Button>
        <Button color="inherit" component={Link} to="/mainprofile">Main Profile</Button>
        <Button color="inherit" component={Link} to="/metrics">Metrics</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;