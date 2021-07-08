import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BooksGrid from './books-grid';

class BookShelf extends Component {

    static propTypes = {
        books: PropTypes.array.isRequired,
        shelfTitle: PropTypes.string.isRequired,
        handleBookChange: PropTypes.func.isRequired
    }

    render() {

        const { books, shelfTitle, handleBookChange } = this.props;

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{shelfTitle}</h2>
                <div className="bookshelf-books">
                    <BooksGrid
                        books={books}
                        handleBookChange={handleBookChange}
                    />
                </div>
            </div>
        );
    }

}

export default BookShelf;