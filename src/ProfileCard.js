import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@material-ui/core/Chip'
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import ChatBubbleOutlinedIcon from '@mui/icons-material/ChatBubbleOutlined';
import ThumbUpRoundedIcon from '@mui/icons-material/ThumbUpRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import logo from './assets/logo.png';

function ProfileCard() {
  const theme = useTheme();
  return (
    <Card sx={{ width: 300,  display: 'flex', justifyContent: 'space-around'}}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5" paddingTop={2} paddingBottom={1}>
            Today's Activities
          </Typography>
          <Grid container justifyContent="left" spacing={2}>
            {["Cardio", "Core"].map((value) => (
                <Grid key={value} item>
                    <Chip label={value}/>
                </Grid>
            ))}
          </Grid>
          <Typography component="div" variant="h5" paddingTop={2} paddingBottom={1}>
            Today's Goals
          </Typography>
          <Grid container justifyContent="left" spacing={2}>
            {["Have Fun", "Find A Gym Buddy"].map((value) => (
                <Grid key={value} item>
                    <Chip label={value} />
                </Grid>
            ))}
          </Grid>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Click to Log Today's Workout:
          </Typography>
          <Button 
            variant="raised"
            style={{ backgroundColor: 'transparent' }}
            startIcon={<img src={logo} width='100px'/>}>
          </Button>
        </Box>
      </Box>
    </Card>
  );
}

export default ProfileCard;