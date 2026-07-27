import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import NewSite from './newsite';
import AboutPage from './newsite/AboutPage.jsx';
import PrivacyPage from './newsite/PrivacyPage.jsx';
import { LanguageProvider } from './newsite/i18n/LanguageProvider.jsx';
import './styles.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NewSite />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
    <Analytics />
    <SpeedInsights />
  </React.StrictMode>,
);
