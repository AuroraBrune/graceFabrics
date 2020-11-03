import React from "react";
import { Link } from "react-router-dom";

const Aside = () => {
  return(
    <ul className="nav">
       <li className="nav-item">
        <Link to="/about" className={ window.location.pathname === "/about" ? "nav-link active" : "nav-link" }>
          About
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/shop" className={ window.location.pathname === "/shop" ? "nav-link active" : "nav-link" }>
          Shop
        </Link>
      </li>

      {/* Begin Sub-List */}
        <ul>
          <li> 
            <Link to="/category1" className= { window.location.pathname === "/category1" ? "nav-link active" : "nav-link" }>
              Category1
            </Link>
          </li>
          <li>
            <Link to="/Category2" className={ window.location.pathname === "/Category2" ? "nav-link active" : "nav-link" }>
              Category2
            </Link>
          </li>
          <li>
            <Link to="/Category3" className={ window.location.pathname === "/Category3" ? "nav-link active" : "nav-link" }>
              Category3
            </Link>
          </li>
        </ul>
      {/* End Sub-List */}

      <li className="nav-item">
        <Link to="/gallery" className={window.location.pathname === "/gallery" ? "nav-link active" : "nav-link"}>
          Gallery
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/contact" className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
          Contact Info
        </Link>
      </li>
    </ul> 
  )
}

export default Aside;









// /* eslint-disable no-nested-ternary */
// import React from 'react';
// import PropTypes from 'prop-types';
// import { makeStyles } from '@material-ui/core/styles';
// import List from '@material-ui/core/List';
// import Link from '@material-ui/core/Link';
// import ListItem from '@material-ui/core/ListItem';
// import Collapse from '@material-ui/core/Collapse';
// import ListItemText from '@material-ui/core/ListItemText';
// import Typography from '@material-ui/core/Typography';
// import ExpandLess from '@material-ui/icons/ExpandLess';
// import ExpandMore from '@material-ui/icons/ExpandMore';
// import Breadcrumbs from '@material-ui/core/Breadcrumbs';
// import { Route } from 'react-router';
// // import { MemoryRouter } from "react-router-dom"
// import { Link as RouterLink } from 'react-router-dom';
// import { BrowserRouter as Router, Switch } from "react-router-dom"

// const breadcrumbNameMap = {
//   '/gallery': 'Gallery',
//   '/categories/category1': 'category1',
//   '/categories/category2': 'category2',
//   '/categories/category3': 'category3',
//   '/shop': 'Shop',
//   '/about': 'About',
//   // '/events': 'Events',
// };

// function ListItemLink(props) {
//   const { to, open, ...other } = props;
//   const primary = breadcrumbNameMap[to];

//   return (
//     <li>
//       <ListItem button component={RouterLink} to={to} {...other}>
//         <ListItemText primary={primary} />
//         {open != null ? open ? <ExpandLess /> : <ExpandMore /> : null}
//       </ListItem>
//     </li>
//   );
// }

// ListItemLink.propTypes = {
//   open: PropTypes.bool,
//   to: PropTypes.string.isRequired,
// };

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//     flexDirection: 'column',
//     width: 360,
//   },
//   lists: {
//     backgroundColor: theme.palette.background.paper,
//     marginTop: theme.spacing(1),
//   },
//   nested: {
//     paddingLeft: theme.spacing(4),
//   },
// }));

// const LinkRouter = (props) => <Link {...props} component={RouterLink} />;

// export default function RouterBreadcrumbs() {
//   const classes = useStyles();
//   const [open, setOpen] = React.useState(true);

//   const handleClick = () => {
//     setOpen((prevOpen) => !prevOpen);
//   };

//   return (
//     <Router initialEntries={['/gallery']} initialIndex={0}>
//       <div className={classes.root}>
//         <Route>
//           {({ location }) => {
//             const pathnames = location.pathname.split('/').filter((x) => x);

//             return (
//               <Breadcrumbs aria-label="breadcrumb">
//                 <LinkRouter color="inherit" to="/gallery">
//                   Home
//                 </LinkRouter>
//                 {pathnames.map((value, index) => {
//                   const last = index === pathnames.length - 1;
//                   const to = `/gallery${pathnames.slice(0, index + 1).join('/')}`;

//                   return last ? (
//                     <Typography color="textPrimary" key={to}>
//                       {breadcrumbNameMap[to]}
//                     </Typography>
//                   ) : (
//                     <LinkRouter color="inherit" to={to} key={to}>
//                       {breadcrumbNameMap[to]}
//                     </LinkRouter>
//                   );
//                 })}
//               </Breadcrumbs>
//             );
//           }}
//         </Route>
//         <nav className={classes.lists} aria-label="mailbox folders">
//           <List>
//             <ListItemLink to="/shop" open={open} onClick={handleClick} />
//             <Collapse component="li" in={open} timeout="auto" unmountOnExit>
//               <List disablePadding>
//                 <ListItemLink to="/categories/category1" className={classes.nested} />
//                 <ListItemLink to="/categories/category2" className={classes.nested} />
//                 <ListItemLink to="/categories/category3" className={classes.nested} />
//               </List>
//             </Collapse>
//             <ListItemLink to="/gallery" />
//             <ListItemLink to="/about" />
//             {/* <ListItemLink to="/events" /> */}
//           </List>
//         </nav>
//       </div>
//     </Router>
//   );
// }
