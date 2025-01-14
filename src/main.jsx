// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

import React from 'react';
import ReactDOM from 'react-dom/client';  // Make sure you're using `react-dom/client` for React 18+
import App from './App';  // Import your main App component
import './index.css';  // Optionally import global CSS
import { BrowserRouter } from 'react-router-dom';

// Create a root element and render the App component
const root = ReactDOM.createRoot(document.getElementById('root'));  // Create a root container
root.render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
    <App />  {/* Wrap your App component inside React.StrictMode (optional but recommended) */}
    {/* </BrowserRouter> */}
  </React.StrictMode>
);

