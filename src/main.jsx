import React from 'react'
import ReactDOM from 'react-dom/client'

import {
   RouterProvider,
} from "react-router-dom";
import './index.css'

import { ThemeProvider } from '@material-tailwind/react';
import { router } from './Router/router';
import AuthProvider from './Provider/AuthProvider';




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>     
  
      <AuthProvider>
      <RouterProvider router={router} />
      </AuthProvider>
  
      </ThemeProvider>
  </React.StrictMode>,
)
