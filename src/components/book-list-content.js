import React, { Component } from 'react';
import BookShelf from './books-shelf';
import * as BooksApi from '../BooksAPI';
import PropTypes from 'prop-types';

class BookListContent extends Component {

    static propTypes = {
        books: PropTypes.array.isRequired,
        handleShelfChange: PropTypes.func.isRequired
    }

    render() {

        const { books, handleShelfChange } = this.props;

        return (
            <div>
                <BookShelf
                    books={books.filter((item) => (item.shelf === "currentlyReading"))}
                    shelfTitle="Currently Reading"
                    handleBookChange={handleShelfChange}
                />
                <BookShelf
                    books={books.filter((item) => (item.shelf === "wantToRead"))}
                    shelfTitle="Want to Read"
                    handleBookChange={handleShelfChange}
                />
                <BookShelf
                    books={books.filter((item) => (item.shelf === "read"))}
                    shelfTitle="Read"
                    handleBookChange={handleShelfChange}
                />
            </div>
        )
    }

}

export default BookListContent;