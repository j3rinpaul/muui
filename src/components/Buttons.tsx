
import { Stack,Button, IconButton } from "@mui/material"
import SendIcon from '@mui/icons-material/Send';
export const Buttons = () => {
  return (
    <Stack spacing={3} >  {/*stack is used instead of div in mui to provide more features */}
      <Stack direction='row' spacing={3}>  {/*spacing is the padding defined in material ui */}
          <Button variant="text">Text</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
        </Stack>


        <Stack direction='row' spacing={3}>
          <Button variant="outlined" color="primary">Primary</Button>
          <Button variant="outlined" color="secondary">Primary</Button>
          <Button variant="outlined" color="error">Primary</Button>
          <Button variant="outlined" color="success">Primary</Button>
          <Button variant="outlined" color="info">Primary</Button>
        </Stack>

        <Stack display='block' direction='row' spacing={4}> 
        {/*dipslay by default is flex and inorder to decrease the button size display block is used
            size attribute can be used to adjust the size of the buttons
        
        */}
          <Button variant="contained" size="small" >Small</Button>
          <Button variant="contained" size="medium">Large</Button>
          <Button variant="contained" size="large">Medium</Button>
        </Stack>

        <Stack direction='row' spacing={3}>
          <Button variant="contained" endIcon={<SendIcon/>} disableElevation >Send</Button >
          <Button variant="contained" startIcon={<SendIcon/>} disableRipple 
          // disableRipple and disableElevation is used to disable features of the button
          onClick={()=>{
            alert("Hello World my First Tsx");
          }}>Send</Button>
          <IconButton aria-label="send"><SendIcon/></IconButton>
        </Stack>
 
  </Stack>
  )
}
