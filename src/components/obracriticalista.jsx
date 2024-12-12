import Stack from "@mui/material/Stack";
import { Obracriticas } from "./Obracriticas";
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid2';


export const Obracriticalista = () => {
    return (
        <><h5 style={{textAlign: "center"}}><b>CRÍTICAS</b></h5>

        <Stack
            direction="row"
            spacing={2}
            sx={{
                width: "100%", // Ocupar todo el ancho de la pantalla
                padding: 2, // Margen alrededor de los rectángulos
            }}
        >
            {/* Critica 1 */}
            <Obracriticas
                medio="La Gacetilla"
                texto="Esta es la crítica del primer medio. Darío Duarte, hijo de uruguayos, es un dramaturgo que a sus 45 años se enfrenta a su primer estreno en la Sala Grande del Teatro María Guerrero. Cuando hace un curso con el también uruguayo Sergio Blanco, este le recomienda que escriba sobre el acontecimiento más relevante de su infancia. En 1983, el gobierno socialista de Felipe González fletó un avión para que casi doscientos hijos de exiliados y presos políticos uruguayos viajaran a su país para pasar la Nochevieja con sus familias.
"               nota="9,5"
            />

            {/* Critica 2 */}
            <Obracriticas
                medio="Otro medio"
                texto="Darío Duarte, hijo de uruguayos, es un dramaturgo que a sus 45 años se enfrenta a su primer estreno en la Sala Grande del Teatro María Guerrero. Cuando hace un curso con el también uruguayo Sergio Blanco, este le recomienda que escriba sobre el acontecimiento más relevante de su infancia. En 1983, el gobierno socialista de Felipe González fletó un avión para que casi doscientos hijos de exiliados y presos políticos uruguayos viajaran a su país para pasar la Nochevieja con sus familias.
"               nota="8"
            />
        </Stack>
        <Grid
  container
  direction="row"
  sx={{
    justifyContent: "space-around",
    alignItems: "flex-start",
    marginTop: 3,
  }}
>
<Button variant="contained" size="large" sx={{background: 'black', marginBottom: '40px'}}><h5><b>TODAS LAS CRÍTICAS</b></h5>
</Button>

</Grid></>
    );
};
