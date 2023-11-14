import '@babel/polyfill'
import React from 'react';
import { createRoot } from 'react-dom/client';

import AppRouter from './approuter';
// Use For Switch
import 'react-toggle-switch/dist/css/switch.min.css';
import { UserProvider } from './context/UserContext';
import { LoaderProvider } from './context/LoaderContext';
import { EnumsProvider } from './context/EnumsContext';
const root = createRoot(document.getElementById('root'));
root.render(
  <LoaderProvider>
    <EnumsProvider>
      <UserProvider>
        <AppRouter />
      </UserProvider>
    </EnumsProvider>
  </LoaderProvider>
);

if (module.hot) {
  // enables hot module replacement if plugin is installed
  module.hot.accept();
}
