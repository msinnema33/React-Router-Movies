import React from 'react';
import { Route, Link } from 'react-router-dom';


const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <span className="saved-movie">{movie.title}</span>
    ))}
    {/* <Route exact path="/">
          <MovieList />
      </Route>
      <Link to={`/movies/${movie.id}`}>
         <MovieDetails key={movie.id} movie={movie} />
        </Link> */}
    <Link to = '/'>
    <div className="home-button">Home</div>
    </Link>
  </div>
);

export default SavedList;
