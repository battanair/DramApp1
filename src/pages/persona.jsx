import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Stack } from 'react-bootstrap';
import { Margin } from '@mui/icons-material';



const Persona = () => {
    return (
        <>
            <div>
                <Accordion defaultExpanded>
                    <AccordionSummary className="perheadlist"
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <h5>ELENCO</h5>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Stack direction="horizontal" spacing={2}>
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
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                    >
                        <Typography component="span">Header</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        bo
                    </AccordionDetails>

                </Accordion>
            </div>
        </>
    )
}

export default Persona;
