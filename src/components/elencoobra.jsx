import Grid from '@mui/material/Grid2';
import Personaindex from './personaindex';
import Button from '@mui/material/Button';

const Elencoobra = () => {return(
    <> <Grid container sx={{ paddingTop: 4, paddingBottom: 8 }} direction={'column'} ><h5><b>ELENCO</b></h5>
    <Grid
  container
  direction="row"
  sx={{
    justifyContent: "space-around",
    alignItems: "flex-start",
    marginTop: 3,
  }}
>
<Personaindex nombrepersona={"Actriz Actrizer"} puestopersona={"Personaje 1"} />
<Personaindex nombrepersona={"Actor Actorez"} puestopersona={"Personaje 2"} />
<Personaindex nombrepersona={"Actriz Actrizer"} puestopersona={"Personaje 3"} />
<Personaindex nombrepersona={"Actor Actorez"} puestopersona={"Personaje 4"} />

</Grid>
<Grid
  container
  direction="row"
  sx={{
    justifyContent: "space-around",
    alignItems: "flex-start",
    marginTop: 3,
  }}
>
<Button variant="contained" size="large" sx={{background: 'black'}}><h5><b>TODO EL EQUIPO</b></h5>
</Button>

</Grid>
</Grid></>
)}

export default Elencoobra;