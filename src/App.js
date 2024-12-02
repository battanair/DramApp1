import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Obra from './pages/obra';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';




const App = () => (
  <div className="app">
    <Box sx={{background: 'lightgrey'}}>
     <Container maxWidth="md" sx={{background: 'white'}}>
        <Obra />
      </Container>
      </Box>
  </div>
);

export default App;
