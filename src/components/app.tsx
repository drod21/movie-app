import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, RouteComponentProps } from 'react-router-dom';
import MovieService from 'services';
import store from 'store';
import { Home } from 'views/home';

const App: React.FC = () => {
  // use same instance for movie service
  const movieService: MovieService = new MovieService()

  return (
    <Provider store={store}>
      <Router>
        <Route exact path='/' render={(props: RouteComponentProps) => <Home movieService={movieService} {...props} />} />
      </Router>
    </Provider>
  );
}

export default App;
