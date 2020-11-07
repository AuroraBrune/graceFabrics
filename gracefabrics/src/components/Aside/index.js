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
          <Button href="#text-buttons" color="primary">
            <Link to="/about" className={ window.location.pathname === "/about" ? "nav-link active" : "nav-link" }>
              About
            </Link>
          </Button>
        </li>

        <li className="nav-item">
          <Button href="#text-buttons" color="primary">
            <Link to="/shop" className={ window.location.pathname === "/shop" ? "nav-link active" : "nav-link" }>
              Shop
            </Link>
          </Button>
        </li>

        {/* Begin Sub-List */}
          <ul>
            <li> 
              <Button href="#text-buttons" color="primary">
                <Link to="/banners" className= { window.location.pathname === "/banners" ? "nav-link active" : "nav-link" }>
                  Banners

                </Link>
              </Button>
            </li>
            <li>
              <Button href="#text-buttons" color="primary">
                <Link to="/stoles" className={ window.location.pathname === "/stoles" ? "nav-link active" : "nav-link" }>
                  Stoles
                </Link>
              </Button>
            </li>
            <li>
              <Button href="#text-buttons" color="primary">
                <Link to="/Category3" className={ window.location.pathname === "/Category3" ? "nav-link active" : "nav-link" }>
                  Category3
                </Link>
              </Button>
            </li>
          </ul>
        {/* End Sub-List */}

        <li className="nav-item">
          <Button href="#text-buttons" color="primary">
            <Link to="/gallery" className={window.location.pathname === "/gallery" ? "nav-link active" : "nav-link"}>
              Gallery
            </Link>
          </Button>
        </li>
        <li className="nav-item">
          <Button href="#text-buttons" color="primary">
            <Link to="/contact" className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
              Contact Info
            </Link>
          </Button>
        </li>
      </ul> 
    </div>
  )
}

export default Aside;

