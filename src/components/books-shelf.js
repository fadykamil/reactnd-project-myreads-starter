import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BooksGrid from './books-grid';

class BookShelf extends Component {

    static propTypes = {
        books: PropTypes.array.isRequired,
        shelfTitle: PropTypes.string.isRequired
    }

    render() {

        const { books, shelfTitle } = this.props;

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{shelfTitle}</h2>
                <div className="bookshelf-books">
                    <BooksGrid
                        books={books}
                    />
                </div>
            </div>
        );
    }

}

export default BookShelf;