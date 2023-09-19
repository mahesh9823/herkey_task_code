import Drawer from './components/drawer';
import React, { useState } from 'react';
import AppBar from './components/appBar';
import Box from '@mui/material/Box';
import { Fab, Toolbar } from '@mui/material';
import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';


const Home = lazy(() => import('./home'));


function App() {

  const [drawerState, setDrawerState] = useState(false)


  const handleHamburgerMenu = () => {
    setDrawerState(!drawerState)
  }


  return (
    <Box sx={{ display: 'flex' }} >
      
        <AppBar handleHamburgerMenu={handleHamburgerMenu} drawerState={drawerState} />
        <Drawer drawerState={drawerState} handleHamburgerMenu={handleHamburgerMenu} />

        <Box component="main" sx={{ flexGrow: 1 }}>
        
          <Toolbar />
          <Routes>
            <Route path="*" element={<Navigate to="/" />} />
            <Route exact path="/" element={<Home />} ></Route>
          </Routes >
          
        </Box>
      
    </Box>
  );
}

export default App;
