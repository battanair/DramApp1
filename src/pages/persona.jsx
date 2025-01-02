import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import { obras_db, relaciones_db, personas_db } from '../components/database';
import Imagenesobra from '../components/imagenesobra';

const Persona = () => {
    const { id } = useParams(); // Capturamos el ID de la URL
    const [personaData, setPersonaData] = useState(null);
    const [elenco, setElenco] = useState([]);

    useEffect(() => {
        // Buscar la persona en la base de datos
        const persona = personas_db.find((p) => p.id_persona === Number(id));
        setPersonaData(persona);

        if (persona) {
            // Encontrar las relaciones asociadas con esta persona
            const relaciones = relaciones_db.filter((rel) => rel.personaId === persona.id_persona);
        }
    }, [id]);

    if (!personaData) {
        return <p>Cargando datos de la persona...</p>;
    }

    return (
        <>
            <Grid container spacing={4} sx={{ paddingTop: 4, paddingBottom: 4 }}>
                {/* Columna 1: Imagen */}
                <Grid item xs={12} md={4}>
                    <Box sx={{ textAlign: 'center' }}>
                        <img
                            src="https://picsum.photos/200/300"
                            alt="Persona"
                            style={{ width: '100%', borderRadius: '8px' }}
                        />
                    </Box>
                </Grid>

                {/* Columna 2: Texto */}
                <Grid item xs={12} md={8}>
                    <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 1, marginBottom: 1 }}>
                        <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                            {personaData.nombre_persona} {personaData.apellido_persona}
                        </Typography>
                    </Box>

                    <Typography variant="body1" sx={{ fontWeight: 'bold', marginBottom: '8px' }}>
                        Actor, directos y Don Cojones.
                    </Typography>

                    <Typography variant="body2" paragraph>
                        {personaData.bio_persona}
                    </Typography>
                </Grid>
            </Grid>
            <Imagenesobra imagen1="https://picsum.photos/400/300?random=1" imagen2="https://picsum.photos/400/300?random=2" imagen3="https://picsum.photos/400/300?random=3" imagen4="https://picsum.photos/400/300?random=4" imagen5="https://picsum.photos/400/300?random=5" />

            <Box sx={{ marginTop: 4 , paddingBottom: 5}}>
           
                <Accordion defaultExpanded>
                    <AccordionSummary className="perheadlist"
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <h5>ELENCO</h5>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Stack direction="horizontal" spacing={2} alignItems="center">
                            <img
                                src="https://picsum.photos/200/300"
                                alt="Obra"
                                style={{ width: '70px', borderRadius: '8px' }} />

                            <Typography className="perlistaobra"
                                variant="body1"
                                sx={{
                                    lineHeight: 1.2,
                                    color: '#333',
                                    fontSize: '1rem',
                                }}
                            ><b>MISERICORDIA</b> <br></br><>(2015)</> <br></br> Impro

                            </Typography>

                        </Stack>
                    </AccordionDetails>
                </Accordion>
                
                <Accordion>
                    <AccordionSummary className="perheadlist"
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <h5>ELENCO</h5>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Stack direction="horizontal" spacing={2} alignItems="center">
                            <img
                                src="https://picsum.photos/200/300"
                                alt="Obra"
                                style={{ width: '70px', borderRadius: '8px' }} />

                            <Typography className="perlistaobra"
                                variant="body1"
                                sx={{
                                    lineHeight: 1.2,
                                    color: '#333',
                                    fontSize: '1rem',
                                }}
                            ><b>MISERICORDIA</b> <br></br><>(2015)</> <br></br> Impro

                            </Typography>

                        </Stack>
                    </AccordionDetails>
                </Accordion>
            </Box>
        </>
    );
};

export default Persona;
