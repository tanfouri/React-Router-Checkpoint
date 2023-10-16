import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MovieList from './components/MovieList';
import MovieDescription from './components/MovieDescription';
//import MovieCard from './components/MovieCard';
function App() {
  return (
    <Router>
      <div className="app">
        <h1>Movie App</h1>
        <Switch>
          <Route path="/movie/:id" component={MovieDescription} />
          <Route path="/" component={MovieList} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
