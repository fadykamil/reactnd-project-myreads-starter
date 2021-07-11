import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksApi from '../BooksAPI';
import Book from './book';
class SearchBooks extends Component {

  state = {
    searchResult: [],
    searchKey: '',
    availableKeys: ['Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 'Games', 'Gandhi', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS']
  }

  updateSearchKey = (key) => {
    this.setState({
      searchKey: key,
      searchResult: []
    });

    if (key) {
      BooksApi.search(key).then((results) => {
        this.setState({
          searchResult: !results.error ? results : []
        });
      });
    }
  }

  handleMove = (book, shelf) => {
    this.setState((prevState) => {
      prevState.searchResult.filter(item => item.id === book.id).map(item => item.shelf = shelf)
      return prevState;
    });
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link
            to='/'
            className='close-search'>
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.searchKey}
              onChange={(event) => { this.updateSearchKey(event.target.value) }}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.searchResult.length > 0 && this.state.searchResult.map(item => (
              <li key={item.id}>
                <Book
                  book={item}
                  handleBookStatusChange={this.handleMove}
                />
              </li>
            ))}
          </ol>
          {this.state.searchKey && this.state.searchResult.length === 0 && (
            <div>
              <p>No books matched your search.</p>
              <p>{`You can search with any key of these: ${this.state.availableKeys.join(' , ')}`}</p>
            </div>
          )}
        </div>
      </div>
    );
  }

}

export default SearchBooks;