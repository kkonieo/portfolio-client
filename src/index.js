import React from 'react';
import ReactDOM from 'react-dom';
import App from './shared/App';

import { Provider } from 'react-redux';
import store from './redux/configureStore';

// theme
import { ThemeProvider } from 'styled-components';
import theme from './shared/theme';

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
);
