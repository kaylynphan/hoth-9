import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles'
import FriendsList from './FriendsList.js';
import { useNavigate } from "react-router-dom";
import ProfileCard from './ProfileCard';

import logo from "./assets/logo.png"

const styles = theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  appBar: {
    position: 'relative',
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
  footer: {
    marginTop: theme.spacing.unit * 8,
    borderTop: `1px solid ${theme.palette.divider}`,
    padding: `${theme.spacing.unit * 6}px 0`,
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
        <Box sx={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '10%'}}>
            <div>
                <h1>Welcome Back!</h1>
                <ProfileCard />
            </div>
            <div>
                <h1>Friends</h1>
                <FriendsList />
            </div>
            
        </Box>

      </main>
    </React.Fragment>
  );
}

SelectionPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SelectionPage);