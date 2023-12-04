import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ThemeContextWrapper from './theme/ThemeWrapper';

const root = createRoot(document.getElementById('root'));

root.render(
  <ThemeContextWrapper>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeContextWrapper>
);

// Resto del código
reportWebVitals();
