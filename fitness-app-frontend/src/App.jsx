import { Button } from '@mui/material';
import React from 'react'
import ReactDOM from "react-dom/client";
import {BrowserRouter as Router, Navigate ,Route, Routes,UseLocation } from "react-router";
import { RouterProvider } from "react-router/dom";

const App = () => {
  return (
    <Router>
      <Button variant='contained' color='#dc004e'>Log In</Button>
    </Router>
    
  )
}

export default App