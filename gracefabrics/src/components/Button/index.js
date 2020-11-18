import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';


const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: 'white',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    height: '3em',
    padding: '0 30px',
    width: "20%",
    marginLeft: "40%",
    marginTop: "1em",
    marginBottom: "1em",
  }
}));

export default function PurchaseButton(props) {
  const classes = useStyles();

  return (
      <Button
        type="submit"
        variant="contained"
        color="inherit"
        className={classes.button}
        endIcon={<Icon>send</Icon>}
      />
  );
}