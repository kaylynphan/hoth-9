import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { useState } from 'react';

function OptionButton(props) {
  const [appearance, setAppearance] = useState("outlined")
  return <Button 
    variant={appearance}
    onClick={() => {
      console.log("click");
      setAppearance(appearance === "outlined" ? "contained" : "outlined");
    }}
    >{props.text}
  </Button>
}

function Activties() {
  return (
    <div>
      <h1>What do you want to work on today?</h1>
      <Grid container justifyContent="center" spacing={2}>
          {[ "Push", "Pull", "Legs", "Cardio", "Core", "Back", "Chest", "Arms", "Booty 🍑", "Yoga", "Zumba", "Basketball" ].map((value) => (
            <Grid key={value} item>
              <OptionButton text={value}/>
            </Grid>
          ))}
      </Grid>
    </div>
  );
}

function Goals() {
  return (
    <div>
      <h1>What are your goals for today?</h1> 
      <Grid container justifyContent="center" spacing={2}>
          {[ "PR", "Learn", "Make Gym Buddies", "Try Something New", "Stretch", "Get into Routine", "Have Fun", "Improve Form", "Release Endorphins", "Drink More Water", "Talk to Gym Crush", "Find a Spotter"].map((value) => (
            <Grid key={value} item>
              <OptionButton text={value}/>
            </Grid>
          ))}
      </Grid>
    </div>
  );
}

function Moods() {
  return (
    <div>
      <h1>How are you feeling today?</h1>
      <Grid container justifyContent="center" spacing={2}>
          {[ "Great!", "Tired", "Lazy", "Confident", "Nervous", "Happy", "Excited", "Adventurous", "Stressed" ].map((value) => (
            <Grid key={value} item>
              <OptionButton text={value}/>
            </Grid>
          ))}
      </Grid>
    </div>
  );
}

function Select() {
  return (
    <Grid container spacing={40} justifyContent="center">
      <Activties />
        <br />
      <Goals />
        <br />
      <Moods />
    </Grid>
  )
}

export default Select;