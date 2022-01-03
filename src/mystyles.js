export const mystyles=props=>({
  myTypograph:{
    bgcolor:'black',
    p:theme=>theme.spacing(1)
  },
  withProp:{
    border:props.state&&'2px solid black',
    boxShadow:!props.state&&'5px 5px 10px black',
    padding:theme=>theme.spacing(1),
  }
})