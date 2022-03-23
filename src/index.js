import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// redux
import { Provider } from 'react-redux';
import store from './common/redux/configureStore';

// theme
import { ThemeProvider } from 'styled-components';
import theme from './common/styles/theme';

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
);
