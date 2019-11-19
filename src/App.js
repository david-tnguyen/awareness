import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
import store from './store';
import { syncHistoryWithStore } from 'react-router-redux';

const history = syncHistoryWithStore(browserHistory, store);
const routes = createRoutes(store, history);

function App() {
  return (
    <Provider store={store}>
      {routes}
    </Provider>
  );
}

export default App;
