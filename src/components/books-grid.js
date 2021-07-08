import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from './book';

class BooksGrid extends Component {

    static propTypes = {
        books: PropTypes.array.isRequired
    }

    render() {
        return (
            <ol className="books-grid">
                {books && books.length &&
                    books.map((book) => (
                        <Book
                            book={book}
                        />))}
            </ol>
        );
    }
}

export default BooksGrid;