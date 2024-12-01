import Item from "./item";
import Grid from '@mui/material/Grid2';
import { Typography } from '@mui/material';

const Personaindex = () => {
return (
<Grid
  container
  direction="column"
  
><Item>
<img src="https://picsum.photos/150/200"></img>
<p sx={{ lineHeight: 1.5, display: 'flex',
  alignItems: 'center' }}><b>Director Directorez</b><br></br>Director</p>
</Item></Grid>
)}

export default Personaindex; 