import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem} from '@material-ui/core';
import './navBar.css';

export default function Navbar() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [anchorEl2, setAnchorEl2] = React.useState(null);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClick2 = (event) => {
        setAnchorEl2(event.currentTarget)
      };
  
    const handleClose = () => {
      setAnchorEl(null);
    
    };
    const handleClose2 = () => {
        setAnchorEl2(null);
      };
    return (
        <AppBar id="ShopNav">
            <Toolbar>
                <Button color="primary">
                    <Link to="/about" className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}>
                        About
                    </Link>
                </Button>

                <Button color="primary">
                    <Link to="/stoles" className={window.location.pathname === "/stoles" ? "nav-link active" : "nav-link"}>
                        Stoles
                    </Link>
                </Button>

                <Button color="primary">
                    <Link to="/banners" className={window.location.pathname === "/banners" ? "nav-link active" : "nav-link"}>
                        Banners
                    </Link>
                </Button>
                <Button aria-controls="commission-menu" aria-haspopup="true" onClick={handleClick}>
                    Commissions
                </Button>
                <Menu
                    id="commission-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>Stole / Decon-Stoles</MenuItem>
                    <MenuItem onClick={handleClose}>Scapulars / Chasables</MenuItem>
                    <MenuItem onClick={handleClose}>Paraments / Banners</MenuItem>
                </Menu>

                <Button aria-controls="services-menu" aria-haspopup="true" onClick={handleClick2}>
                    Services
                </Button>
                <Menu
                    id="services-menu"
                    anchorEl={anchorEl2}
                    keepMounted
                    open={Boolean(anchorEl2)}
                    onClose={handleClose2}
                >
                    <MenuItem onClick={handleClose2}>Hands-On Workshops</MenuItem>
                    <MenuItem onClick={handleClose2}>Events</MenuItem>
                    <MenuItem onClick={handleClose2}>Consultations</MenuItem>
                </Menu>

                <Typography variant="h6" id="title" >
                    Color for the Journey
                </Typography>

                <Button id="cartBtn">
                    <Link to="/cart" className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}>
                        View Cart
                    </Link>
                </Button>
            </Toolbar>
        </AppBar>
    )
}