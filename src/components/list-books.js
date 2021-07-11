import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BookListContent from './book-list-content';
import PropTypes from 'prop-types';

class BooksList extends Component {

    static propTypes = {
        books: PropTypes.array.isRequired,
        handleShelfChange: PropTypes.func.isRequired
    }

    render() {
        const { books, handleShelfChange } = this.props;

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <BookListContent books={books} handleShelfChange={handleShelfChange}/>
                </div>
                <div className="open-search">
                    <Link
                        to='/search'>
                        Add a book
                    </Link>
                </div>
            </div>
        );
    }
}

export default BooksList;