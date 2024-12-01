import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import Personaindex from './personaindex';

const VideoLineObra = () => {
  return (

    <><Box className="pt-4">
      <Grid container spacing={0} className="pt-4">
        <Grid size={6}>

          <h5><b>TEXTO Y DIRECCIÓN DE:</b></h5>
          <Personaindex nombre={"Director Directorez"} puesto={"Director"}/>
        </Grid>
        <Grid size={6} container className="inline flex">
          

            <iframe src="https://www.youtube.com/embed/iwyiAHxZs7M?si=mq-U2bFnXzCVe72D" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
           </Grid>
      </Grid>
    </Box></>
  )
}

export default VideoLineObra;