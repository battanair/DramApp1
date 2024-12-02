import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Categoriaobra from './indexobra'; // Asegúrate de que este componente esté importado correctamente

const HeaderObra = () => {
  return (
    <Box sx={{ flexGrow: 1, paddingTop: 4 }}>
      <Grid container spacing={4} alignItems="center">
        {/* Columna 1: Imagen */}
        <Grid item xs={12} md={4}>
          <Box sx={{ textAlign: 'center' }}>
            <img src="https://picsum.photos/200/300" alt="Obra" style={{ width: '100%', borderRadius: '8px' }} />
          </Box>
        </Grid>
        
        {/* Columna 2: Texto */}
        <Grid item xs={12} md={8}>
          {/* Componente Categoriaobra agregado encima del título con separación */}
          <Categoriaobra categoria1={'Teatro'} categoria2={'Comedia'} nota={'10'} />
          
          {/* Título con el año en la misma línea */}
          <Grid container alignItems="center" spacing={1}>
            <Grid container
  direction="row"
  sx={{
    justifyContent: "flex-start",
    alignItems: "flex-start",
  }}>
              <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
                LA FIESTA DE LA DEMOCRACIA
              </Typography>
              <Typography variant="h6" color="textSecondary" sx={{ marginBottom: '16px' }}>
                (2024)
              </Typography>
            </Grid>
          </Grid>

          <Typography variant="body1" sx={{ fontWeight: 'bold', marginBottom: '8px' }}>
            SHOWPRIME Y CENTRO DRAMÁTICO NACIONAL
          </Typography>

          <Typography variant="body2" sx={{ marginBottom: '16px' }}>
            Texto y Dirección de Denise Despeyroux
          </Typography>
          
          <Typography variant="body2" paragraph>
            Darío Duarte, hijo de uruguayos, es un dramaturgo que a sus 45 años se enfrenta a su primer estreno en la Sala Grande del Teatro María Guerrero. Cuando hace un curso con el también uruguayo Sergio Blanco, este le recomienda que escriba sobre el acontecimiento más relevante de su infancia. En 1983, el gobierno socialista de Felipe González fletó un avión para que casi doscientos hijos de exiliados y presos políticos uruguayos viajaran a su país para pasar la Nochevieja con sus familias.
            <a href="#" style={{ textDecoration: 'underline', color: 'inherit' }}>(más)</a>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default HeaderObra;

