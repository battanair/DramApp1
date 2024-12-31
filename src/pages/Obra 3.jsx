import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Categoriaobra from './indexobra'; 
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import obras from './Database';  // Importamos las obras desde Database.jsx

const Obra2 = () => {
  const { id } = useParams();  // Capturamos el ID de la URL
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: { xs: '90%', md: '55%' },
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const [expanded, setExpanded] = useState(false);
  const [obraData, setObraData] = useState(null);

  useEffect(() => {
    // Buscamos la obra correspondiente usando el id que viene de useParams()
    const obra = obras.find((obra) => obra.id === id);
    setObraData(obra);  // Asignamos la obra encontrada al estado
  }, [id]);  // Se ejecuta cada vez que el id cambia

  return (
    <>
      <Grid container spacing={4} sx={{ paddingTop: 4 }}>
        <Grid item xs={12} md={4}>
          <Box sx={{ textAlign: 'center' }}>
            <img
              src={obraData ? obraData.imagen : 'https://picsum.photos/200/300'} // Usamos la imagen de la obra
              alt="Obra"
              style={{ width: '100%', borderRadius: '8px' }}
            />
          </Box>
        </Grid>

        <Grid item xs={12} md={8}>
          <div className="linea">
            <Rating name="half-rating" defaultValue={2} precision={1} />
            <Categoriaobra categoria1="Teatro" categoria2="Comedia" nota="10" />
          </div>

          <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 1, marginBottom: 1 }}>
            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
              {obraData ? obraData.titulo : 'Cargando...'}
            </Typography>
            <Typography variant="h6" color="textSecondary" sx={{ fontSize: '1rem' }}>
              {obraData ? `(${obraData.anio})` : ''}
            </Typography>
          </Box>

          <Typography variant="body1" sx={{ fontWeight: 'bold', marginBottom: '8px' }}>
            {obraData ? obraData.produccion : 'Cargando...'}
          </Typography>

          <Typography variant="body2" paragraph>
            {obraData ? obraData.descripcion : 'Cargando descripción...'}
          </Typography>

          <Button variant="contained" sx={{ background: 'black', marginBottom: '40px' }} onClick={handleOpen}>
            <h6><b>COMPRAR ENTRADAS</b></h6>
          </Button>
        </Grid>
      </Grid>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Comprar entradas
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Aquí irá una dara grid jeje
          </Typography>
        </Box>
      </Modal>

      <HeaderObra />
      <VideoLineObra />
      <Elencoobra />
      <Imagenesobra />
      <Listapremiosobra />
      <Obracriticalista />
    </>
  );
};

export default Obra2;
