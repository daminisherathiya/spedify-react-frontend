import '@babel/polyfill'
import React from 'react';
import { createRoot } from 'react-dom/client';

import AppRouter from './frontend/approuter';
// Use For Switch
import 'react-toggle-switch/dist/css/switch.min.css';
const root = createRoot(document.getElementById('root'));
root.render(<AppRouter />);

if (module.hot) {
  // enables hot module replacement if plugin is installed
  module.hot.accept();
}
