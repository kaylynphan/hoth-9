import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// firebase shit
import auth from './Auth.js';
import { createUserWithEmailAndPassword,updateProfile,} from "firebase/auth";
import { useNavigate } from "react-router";
import {doc, setDoc } from "firebase/firestore";
import {db} from "./FirebaseConfig";

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
    let navigate = useNavigate();
    let errorMessage = "";
    // register a new user
    async function signedUp() {
        navigate("/home");
    }

    async function addUser(username, userId) {
        try {
            // add user with default data
            const docRef = doc(db, "users", userId);
            await setDoc(docRef, {
                username: username,
            });
        } catch {
            console.log("couldn't upload information");
        }
    }

    async function signIn() {
        navigate("/signin");
    }

    async function signUp(){
        let email = document.getElementById("email").value;
        let pwd = document.getElementById("password").value;
        let username = document.getElementById("username").value;
        try{//attempt to create user, then pass username into newly created Profile
            const user= (await createUserWithEmailAndPassword(auth, email, pwd)).user;
            await updateProfile(user,{displayName:username});
            const userID=user.uid;
            await addUser(username,userID);
            console.log("added user ",user);
            signedUp(); //send user to Home page
        }   
        catch (error){     
            const errorCode = error.code;
            errorMessage = error.message; //TODO: make it so error message prints to user
            console.log(errorCode, errorMessage);
        }
    }

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return ( 
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="username"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={signUp}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link onClick={signIn} href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
