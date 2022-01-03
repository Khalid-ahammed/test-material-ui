import React,{useState} from 'react';
import './style.css';
import { Paper, Button, Typography,Box } from '@mui/material';
import { ThemeProvider} from '@mui/material/styles';
import { theme } from './theme';
import {mystyles} from './mystyles'


export default function App() {
  const [state,setState]=useState(true);
  const styles=mystyles({state})
 
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{
        bgcolor:{
          xs:'primary.dark',
          sm:'secondary.light',
        },
        borderRadius:state?'10px':0,
        height:'100vh',
        display:'grid',
        placeItems:'center',
      }}>
      <Button sx={{
        color:'primary.light',
        fontWeight:'bolder',
        border:'2px solid',
        letterSpacing:theme=>theme.spacing(.2)
      }}
      onClick={()=>setState(!state)}
      >Hello</Button>

      <Typography sx={styles.myTypograph} variant='h4' color='secondary'>
        Hey
      </Typography>
      <Paper sx={styles.withProp}>
        With Passed Prop
      </Paper>

      </Box>
    </ThemeProvider>
  );
}
