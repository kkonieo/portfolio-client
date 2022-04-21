import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// redux
import { Provider } from 'react-redux';
import store from './common/redux/configureStore';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

// theme
import { ThemeProvider } from 'styled-components';
import theme from './common/styles/theme';

const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);
