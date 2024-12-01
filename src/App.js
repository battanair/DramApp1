import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Obra from './pages/obra';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';



const App = () => (
  <div className="app">
     <Container maxWidth="md">
        <Obra />
      </Container>
  </div>
);

export default App;
