import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from './book';

class BooksGrid extends Component {

    static propTypes = {
        books: PropTypes.array.isRequired,
        handleBookChange: PropTypes.func.isRequired
    }

    render() {

        const { books, handleBookChange } = this.props;

        return (
            <ol className="books-grid">
                {books && books.length > 0 &&
                    books.map((book) => (
                        <li key={book.id}>
                            <Book
                                book={book}
                                bookShelf={book.shelf}
                                handleBookStatusChange={handleBookChange}
                            />
                        </li>
                    ))}
            </ol>
        );
    }
}

export default BooksGrid;