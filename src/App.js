import React from 'react';
import { Route } from 'react-router-dom';
import BooksList from './components/list-books';
import SearchBooks from './components/search-books';
// import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {

  render() {
    return (
      <div className="app">
        <Route
          exact path='/'
          render={() => (
            <BooksList />
          )}
        />
        <Route
          path='/search'
          render={() => (
            <SearchBooks />
          )}
        />
      </div>
    )
  }
}

export default BooksApp
