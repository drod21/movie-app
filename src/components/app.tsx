import React, { lazy } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  RouteComponentProps
} from "react-router-dom";
import { Provider } from 'react-redux';
import store from '../store'
import { Home } from './home'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path='/' component={Home} />
      </Router>
    </Provider>
  );
}

export default App;
