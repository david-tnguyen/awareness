import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import createRoutes from './routes';

const App = () => (
  <Provider store={store}>
    {createRoutes()}
  </Provider>
);

export default App;
