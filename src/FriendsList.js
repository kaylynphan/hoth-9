import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ChatBubbleOutlinedIcon from '@mui/icons-material/ChatBubbleOutlined';
import ThumbUpRoundedIcon from '@mui/icons-material/ThumbUpRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import './App.css';

// images
import cindy from "./assets/cindy.png"
import brian from "./assets/brian.png"
import jeff from "./assets/jeff.png" 
import logo from "./assets/logo.png"
import adele from "./assets/adele.png"
/*
function ProfileCard() {
    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
  */


function FriendCard(props) {
  const theme = useTheme();
  return (
    <Card sx={{ width: 500,  display: 'flex', justifyContent: 'space-between' }}>
      <Box 
        sx={{ display: 'flex', 
              flexDirection: 'column', 
              width: '35%', 
              justifyContent: 'center',
              paddingLeft: 2
       }}
        >
        <CardMedia
            component="img"
            sx={{ width: 151, height: 151, borderRadius: '50%' }}
            image={props.image}
            alt="Live from space album cover"
        />
      </Box>
      <Box sx={{ display: 'flex', width: '65%', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {props.name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Working on:
          </Typography>
          <Grid container justifyContent="left" spacing={1}>
            {props.activities.map((value) => (
                <Grid key={value} item>
                    <Chip label={value}/>
                </Grid>
            ))}
          </Grid>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Hoping to:
          </Typography>
          <Grid container justifyContent="left" spacing={1}>
            {props.goals.map((value) => (
                <Grid key={value} item>
                    <Chip label={value}/>
                </Grid>
            ))}
          </Grid>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton aria-label="previous">
            <ThumbUpRoundedIcon sx={{ height: 25, width: 25 }} />
          </IconButton>
          <IconButton aria-label="play/pause">
            <ChatBubbleOutlinedIcon sx={{ height: 25, width: 25 }} />
          </IconButton>
          <IconButton aria-label="next">
            <EmailRoundedIcon sx={{ height: 25, width: 25 }} />
          </IconButton>
        </Box>
      </Box>
    </Card>
  );
}

function FriendsList() {
    return (
        <Grid container>
            <FriendCard name={"Cindy"} activities={["Pull", "Back"]} goals={["PR", "Have Fun"]} image={cindy}/>
            <FriendCard name={"Brian"} activities={["Basketball", "Zumba", "Core"]} goals={["Talk to Gym Crush", "Release Endorphins"]} image={brian}/>
            <FriendCard name={"Jeffrey"} activities={["Back"]} goals={["PR", "Try Something New", "Find A Spotter"]} image={jeff}/>
        </Grid>
    );
}

export default FriendsList;