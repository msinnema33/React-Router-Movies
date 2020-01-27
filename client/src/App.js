import React, { useState } from 'react';
import MovieList from './Movies/MovieList';

import SavedList from './Movies/SavedList';
import { Route } from 'react-router-dom';
import Movie from './Movies/Movie';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route exact path="/">
          <MovieList />
      </Route>
      <Route path="/Movie/:itemID">
          <Movie />
      </Route>

      {/* <div>Replace this Div with your Routes</div> */}
    </div>
  );
};

export default App;
