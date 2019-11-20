import React from 'react';
import './App.scss';
import { Provider } from 'react-redux';
import store from './store';
import createRoutes from './routes';

const App = () => (
  <Provider store={store}>
    {createRoutes()}
  </Provider>
);

export default App;
