import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from './book';

class BooksGrid extends Component {

    static propTypes = {
        books: PropTypes.array.isRequired
    }

    render() {

        const { books } = this.props;

        return (
            <ol className="books-grid">
                {books && books.length &&
                    books.map((book) => (
                        <li key={book.id}>
                            <Book
                                book={book}
                            />
                        </li>
                    ))}
            </ol>
        );
    }
}

export default BooksGrid;