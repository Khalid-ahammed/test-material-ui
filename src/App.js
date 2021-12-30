import React from "react";
import "./style.css";
import {Paper,Button,Typography} from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {theme} from './theme'
import {makeStyles} from '@mui/styles'

const useStyles=makeStyles({
  myTypograph:{
    backgroundColor:"yellow",
    boxShadow:'5px 5px 10px black',
  },
})


export default function App() {
  const classes=useStyles()
  return (
    <ThemeProvider theme={theme}>
      <Typography className={classes.myTypograph} variant="h4" color="secondary">
				hey its designed text
      </Typography>
      <Button variant="outlined" color="primary">
				hello world
      </Button>
    </ThemeProvider>
  );
}
