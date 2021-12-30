import { ThemeProvider, createTheme } from '@mui/material/styles';
import * as React from 'react'
import {purple,green} from '@mui/material/colors'

export const theme=createTheme({
  palette:{
    primary:{
      main:purple[500],
    },
    secondary:{
      main:green[500],
    },
  },
})