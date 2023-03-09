import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Hero from './components/Hero';
import Header from './components/Header';
import FixedMenu from './components/FixedMenu';
import { MantineProvider } from '@mantine/core';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Header />
      <Hero />
      <FixedMenu />
    </MantineProvider>
  </React.StrictMode>
);
