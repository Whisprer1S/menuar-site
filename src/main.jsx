import React from 'react';
import { createRoot } from 'react-dom/client';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import NewSite from './newsite';
import './styles.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NewSite />
    <Analytics />
    <SpeedInsights />
  </React.StrictMode>,
);
