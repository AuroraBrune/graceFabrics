import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import './style.css';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const Aside = () => {
  const classes = useStyles();
  // const preventDefault = (event) => event.preventDefault();

  return(
    <div className={classes.root}>
      <ul className="nav">
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
              Contact 
            </Link>
          </Button>
        </li>
        <li className="nav-item">
          <Button color="primary">
            <Link to="/orders" className={window.location.pathname === "/Orders.js" ? "nav-link active" : "nav-link"}>
              Customer Orders
            </Link>
          </Button>
        </li>
        <li className="nav-item">
          <Button color="primary">
            <Link to="/login" className={window.location.pathname === "/Orders.js" ? "nav-link active" : "nav-link"}>
              (Admin)
            </Link>
          </Button>
        </li>
      </ul> 
    </div>
  )
}

export default Aside;