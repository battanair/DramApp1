import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';

const HeaderObra = () => {
    return(
    
    <><Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={0} className="pt-4">
      <Grid size={4}>
        <img src="https://picsum.photos/200/300"></img>
      </Grid>
      <Grid size={8} container className="inline flex">
      <Grid autoWidth container > <h2><b>LA FIESTA DE LA DEMOCRACIA</b></h2></Grid> <Grid ><h6>(2024)</h6></Grid>
      <h5>SHOWPRIME Y CENTRO DRAMÁTICO NACIONAL</h5>
      <h6>Texto y Dirección de Denise Despeyroux</h6>
      <body2> Darío Duarte, hijo de uruguayos, es un dramaturgo que a sus 45 años se enfrenta a su primer estreno en la Sala Grande del Teatro María Guerrero. Cuando hace un curso con el también uruguayo Sergio Blanco, este le recomienda que escriba sobre el acontecimiento más relevante de su infancia. En 1983, el gobierno socialista de Felipe González fletó un avión para que casi doscientos hijos de exiliados y presos políticos uruguayos viajaran a su país para pasar la Nochevieja con sus familias.<a href="#">(más)</a> </body2>
      </Grid>
    </Grid>
  </Box></>
)}

export default HeaderObra;

