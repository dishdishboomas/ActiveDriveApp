import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import '../App.css';

const Navbar = () => {

    const [tokens, setTokens] = useState(4895.78);

    return (<>
        <div className='app-navbar'>
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    <IconButton component={Link} to="/">
                        <img src={"drivesafe.png"} height={50} width={120} />
                    </IconButton>
                </Typography>
                <div className="header-right">
                    <div className="hello-text">Hello David</div>
                </div>
            </Toolbar>
        </div>
        <div className="tokens-text">{tokens}</div>
    </>
    );
};

export default Navbar;