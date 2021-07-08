import React, { Component } from 'react';
import BookShelf from './books-shelf';
import * as BooksApi from '../BooksAPI'
class BookListContent extends Component {

    state = {
        books: []
    }

    componentDidMount() {
        BooksApi.getAll().then((books) => {
            this.setState(() => ({
                books
            }));
        });
    }

    render() {
        return (
            <div>
                <BookShelf
                    books={this.state.books.filter((item) => (item.shelf === "currentlyReading"))}
                    shelfTitle="Currently Reading"
                />
                <BookShelf
                    books={this.state.books.filter((item) => (item.shelf === "wantToRead"))}
                    shelfTitle="Want to Read"
                />
                <BookShelf
                    books={this.state.books.filter((item) => (item.shelf === "read"))}
                    shelfTitle="Read"
                />
            </div>
        )
    }

}

export default BookListContent;