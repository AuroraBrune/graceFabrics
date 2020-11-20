import React from "react";
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import './style.css';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ShopHub from "../../pages/ShopHub";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Grace Fabrics
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
        <li className="nav-item">
          <Button color="primary">
            <Link to="/about" className={ window.location.pathname === "/about" ? "nav-link active" : "nav-link" }>
              About
            </Link>
          </Button>
        </li>

        <li className="nav-item">
        <Button color="primary">
            <Link to="/shop" className={ window.location.pathname === "/shop" ? "nav-link active" : "nav-link" }>
              Shop
            </Link>
          </Button>
        </li>

        {/* Begin Sub-List */}
          <ul>
            <li> 
              <Button color="primary">
                <Link to="/banners" className= { window.location.pathname === "/banners" ? "nav-link active" : "nav-link" }>
                  Banners
                </Link>
              </Button>
            </li>
            <li>
              <Button color="primary">
                <Link to="/stoles" className={ window.location.pathname === "/stoles" ? "nav-link active" : "nav-link" }>
                  All Stoles
                </Link>
              </Button>
            </li>
            <li>
              <Button color="primary">
                <Link to="/rainbow-stoles" className={ window.location.pathname === "/rainbow-stoles" ? "nav-link active" : "nav-link" }>
                  Rainbow Stoles
                </Link>
              </Button>
            </li>
            <li>
              <Button color="primary">
                <Link to="/christmas-stoles" className={ window.location.pathname === "/christmas-stoles" ? "nav-link active" : "nav-link" }>
                  Christmas Stoles
                </Link>
              </Button>
            </li>
            <li>
              <Button color="primary">
                <Link to="/easter-stoles" className={ window.location.pathname === "/easter-stoles" ? "nav-link active" : "nav-link" }>
                  Easter Stoles
                </Link>
              </Button>
            </li>
            <li>
              <Button color="primary">
                <Link to="/pentecost-stoles" className={ window.location.pathname === "/pentecost-stoles" ? "nav-link active" : "nav-link" }>
                  Pentecost Stoles
                </Link>
              </Button>
            </li>
            <li>
              <Button color="primary">
                <Link to="/lenten-stoles" className={ window.location.pathname === "/lenten-stoles" ? "nav-link active" : "nav-link" }>
                  Lenten Stoles
                </Link>
              </Button>
            </li>
            <li>
              <Button color="primary">
                <Link to="/advent-stoles" className={ window.location.pathname === "/advent-stoles" ? "nav-link active" : "nav-link" }>
                  Advent Stoles
                </Link>
              </Button>
            </li>
          </ul>
        {/* End Sub-List */}

       {/* <li className="nav-item">
          <Button color="primary">
            <Link to="/gallery" className={window.location.pathname === "/gallery" ? "nav-link active" : "nav-link"}>
              Gallery
            </Link>
          </Button>
           </li>*/}
        <li className="nav-item">
          <Button color="primary">
            <Link to="/contact" className={window.location.pathname === "/contact.js" ? "nav-link active" : "nav-link"}>
            Custom Orders
            </Link>
          </Button>
        </li>
        {/*<li className="nav-item">
          <Button color="primary">
            <Link to="/orders" className={window.location.pathname === "/Orders.js" ? "nav-link active" : "nav-link"}>
              Customer Orders
            </Link>
          </Button>
          </li>*/}
        <li className="nav-item">
          <Button color="primary">
            <Link to="/login" className={window.location.pathname === "/Orders.js" ? "nav-link active" : "nav-link"}>
              (Admin)
            </Link>
          </Button>
        </li>
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader}>
          {/* <ShopHub /> */}
        </div>
      </main>
    </div>
  );
}


