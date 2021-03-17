import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem } from '@material-ui/core';
import './navBar.css';

export default function Navbar() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const [anchorEl2, setAnchorEl2] = React.useState(null);
    const handleClick2 = (event) => {
        setAnchorEl2(event.currentTarget)
    };
    const handleClose2 = () => {
        setAnchorEl2(null);
    };
    return (
        <AppBar id="ShopNav">
            <Toolbar id="toolbar">
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
                    <Link to="/commissions" className={window.location.pathname === "/commissions" ? "nav-link active" : "nav-link"}>
                        Commissions
                    </Link>
                </Button>
                <Menu
                    id="commission-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem  class="dropdown" onClick={() => {handleClose(); document.getElementById('commissionStoles').scrollIntoView() }}>Stoles &#38; Decon-Stoles</MenuItem>
                    <MenuItem  class="dropdown" onClick={() => {handleClose(); document.getElementById('commissionScapulars').scrollIntoView() }}>Scapulars &#38; Chasables</MenuItem>
                    <MenuItem class="dropdown"  onClick={() => {handleClose(); document.getElementById('commissionBanners').scrollIntoView() }}>Paraments &#38; Banners</MenuItem>
                </Menu>

                <Button id="servicesBtn" aria-controls="services-menu" aria-haspopup="true" onClick={handleClick2}>
                    Services
                </Button>
                <Menu
                    id="services-menu"
                    anchorEl={anchorEl2}
                    keepMounted
                    open={Boolean(anchorEl2)}
                    onClose={handleClose2}
                >
                    <MenuItem class="dropdown" onClick={handleClose2}>
                        <Link to="/workshops" className={window.location.pathname === "/workshops" ? "nav-link active" : "nav-link"}>
                            Hands-On Workshops
                        </Link>
                    </MenuItem>
                    <MenuItem class="dropdown" onClick={handleClose2}>
                        <Link to="/events" className={window.location.pathname === "/events" ? "nav-link active" : "nav-link"}>
                            Events
                        </Link>
                    </MenuItem>
                    <MenuItem  class="dropdown" onClick={handleClose2}>
                        <Link to="/consultations" className={window.location.pathname === "/consultations" ? "nav-link active" : "nav-link"}>
                            Consultations
                        </Link>
                    </MenuItem>
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