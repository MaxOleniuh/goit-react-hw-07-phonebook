import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'App/App';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import './index.css';
import { MantineProvider } from '@mantine/core';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <MantineProvider
        withNormalizeCSS
        withGlobalStyles
        theme={{ colorScheme: 'dark' }}
      >
        {' '}
        <App />
      </MantineProvider>
    </Provider>
  </React.StrictMode>
);
