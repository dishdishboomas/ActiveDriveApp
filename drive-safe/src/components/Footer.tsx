import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import '../App.css';

const Footer = () => {
    return (
        <footer className="app-footer">
            <nav className="nav-footer">
                {/* <ul className="nav-list"> */}
                {/* <li className="nav-item">Home</li>
                    <li className="nav-item">Groups</li>
                    <li className="nav-item">Stats</li>
                    <li className="nav-item">Articles</li>
                    <li className="nav-item">Personal Info</li> */}

                <Button color="inherit" component={Link} to="/">Home</Button>
                <Button color="inherit" component={Link} to="/articles">Articles</Button>
                <Button color="inherit" component={Link} to="/mainprofile">My Profile</Button>
                <Button color="inherit" component={Link} to="/metrics">Stats</Button>
            </nav>
        </footer>
    );
};

export default Footer;