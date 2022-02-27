import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { useNavigate } from 'react-router-dom';

import Select from './Select.js';
import logo from "./assets/logo.png"
import './App.css';

const styles = theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  appBar: {
    position: 'static',
  },
  toolbarTitle: {
    flex: 1,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
      width: 900,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  cardHeader: {
    backgroundColor: theme.palette.grey[200],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing.unit * 2,
  },
  cardActions: {
    [theme.breakpoints.up('sm')]: {
      paddingBottom: theme.spacing.unit * 2,
    },
  },
});


function SelectionPage(props) {
  const { classes } = props;
  let navigate = useNavigate();

  async function goToFriends() {
    navigate("/friends");
  }

  async function goToHome() {
    navigate("/home");
  }

  return (
    <React.Fragment>
      <CssBaseline />
        <AppBar style={{backgroundColor: '#3BD5B8'}} position="static" color="default" className={classes.appBar}>
          <Toolbar>
          <img src={logo} alt="" className="sdt-logo"/>
            <Button onClick={goToHome} className={classes.toolBarTitle}>
              <Typography variant="h6" color="inherit" noWrap>
                BFit Together
              </Typography>
            </Button>
            <Box container justifyContent="right">
              <Button>About</Button>
              <Button onClick={goToFriends}>Friends</Button>
              <Button style={{right: '5%', position: 'absolute',}}
                color="primary" 
                variant="outlined"
              >
                Login
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
        <main className={classes.layout}>
          {/* <Grid container spacing={10} columns={1}> */}
            <Select />
            <Button style={{position: 'absolute', left: '43.5%', bottom: '10%'}} variant="contained" color="primary" onClick={goToFriends}>
                See Friend Activity
            </Button>
          {/*</Grid>*/}
        </main>
    </React.Fragment>
  );
}

SelectionPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SelectionPage);