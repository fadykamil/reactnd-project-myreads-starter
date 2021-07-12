import React from 'react';
import { Route } from 'react-router-dom';
import BooksList from './components/list-books';
import SearchBooks from './components/search-books';
import * as BooksApi from './BooksAPI';

import './App.css'

class BooksApp extends React.Component {

  state = {
    books: []
  }

  async componentDidMount() {
    const books = await BooksApi.getAll();
    this.setState({ books });
  }

  async componentDidUpdate() {
    //const books = await BooksApi.getAll();
    //this.setState({ books });
  }

  handleShelfChange = (book, shelf) => {
    this.setState((prevState) => {
      prevState.books.filter(item => item.id === book.id).map(item => item.shelf = shelf)
      return prevState;
    });
  }

  render() {
    return (
      <div className="app">
        <Route
          exact path='/'
          render={() => (
            <BooksList books={this.state.books} handleShelfChange={this.handleShelfChange} />
          )}
        />
        <Route
          path='/search'
          render={() => (
            <SearchBooks booksShelf={this.state.books.map(item => ({ bookId: item.id, shelf: item.shelf }))} />
          )}
        />
      </div>
    )
  }
}

export default BooksApp
