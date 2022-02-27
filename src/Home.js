import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import {useNavigate} from "react-router-dom";
import './App.css';

// images
import rock from "./assets/rock.png"
import logo from "./assets/logo.png"
import background from "./assets/background.png"

const styles = theme => ({

  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  appBar: {
    position: 'static',
    backgroundColor: theme.palette.common.gray,
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

const tiers = [
  {
    title: 'Free',
    price: '0',
    description: ['10 users included', '2 GB of storage', 'Help center access', 'Email support'],
    buttonText: 'Sign up for free',
    buttonVariant: 'outlined',
  },
  {
    title: 'Pro',
    subheader: 'Most popular',
    price: '15',
    description: [
      '20 users included',
      '10 GB of storage',
      'Help center access',
      'Priority email support',
    ],
    buttonText: 'Get started',
    buttonVariant: 'contained',
  },
  {
    title: 'Enterprise',
    price: '30',
    description: [
      '50 users included',
      '30 GB of storage',
      'Help center access',
      'Phone & email support',
    ],
    buttonText: 'Contact us',
    buttonVariant: 'outlined',
  },
];
const footers = [
  {
    title: 'Company',
    description: ['Team', 'History', 'Contact us', 'Locations'],
  },
  {
    title: 'Features',
    description: ['Cool stuff', 'Random feature', 'Team feature', 'Developer stuff', 'Another one'],
  },
  {
    title: 'Resources',
    description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
  },
  {
    title: 'Legal',
    description: ['Privacy policy', 'Terms of use'],
  },
];

function Home(props) {
  const { classes } = props;
  let navigate = useNavigate();

  async function goToSelection() {
    navigate("/select");
  }

  async function goToFriends() {
    navigate("/friends");
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar style={{backgroundColor: '#3BD5B8'}} position="static" color="default" className={classes.appBar}>
      <Toolbar>
        <img src={logo} alt="" className="sdt-logo"/>
          <Button className={classes.toolBarTitle}>
            <Typography style={{left: '5%'}} variant="h6" color="inherit" noWrap>
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
      <main className={classes.layout} style={{width: '100%', height: '82.5%', backgroundImage: `url(${background})`, backgroundSize: 'contain',}}>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Typography style={{fontWeight: '500'}} component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            BFit Together
          </Typography>
          <Typography variant="h6" align="center" color="textSecondary" component="p">
          A web app that allows users to track workouts by selecting what type of workout they do and what their goal is for the day. If each person in a friend group works out at least 5 times a week, they get a prize!
          </Typography><br></br>
          {/* <img src={rock} alt="" className="home-rock"/> */}
          <Button style={{fontWeight: 'bold', height: '50px', width: '300px', left: '25%', bottom: '80%', color: 'white', backgroundColor:'navy', borderRadius: '20px',}} variant="outlined" color="primary" onClick={goToSelection}>
            Let's Go
          </Button>
        </div>
      </main>
    </React.Fragment>
  );
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);