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


function FriendCard(props) {
  const theme = useTheme();
  return (
    <Card sx={{ display: 'flex' }}>
      <CardMedia
        className="cardMedia"
        component="img"
        sx={{ width: 200 }}
        image="/static/images/cards/live-from-space.jpg"
        alt="Friend Profile Picture"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {props.name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Working on:s
          </Typography>
          <Grid container justifyContent="left" spacing={2}>
            {props.activities.map((value) => (
                <Grid key={value} item>
                    <Chip label={value}/>
                </Grid>
            ))}
          </Grid>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Hoping to:
          </Typography>
          <Grid container justifyContent="left" spacing={2}>
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
        <div>
            <FriendCard name={"Cindy"} activities={["Pull", "Back"]} goals={["PR", "Have Fun"]}/>
            <FriendCard name={"Brian"} activities={["Basketball", "Zumba", "Core"]} goals={["Talk to Gym Crush", "Release Endorphins"]}/>
            <FriendCard name={"Jeffrey"} activities={["Back"]} goals={["PR", "Try Something New", "Find A Spotter"]}/>
        </div>
    );
}

export default FriendsList;