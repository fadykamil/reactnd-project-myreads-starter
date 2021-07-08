import React, { Component } from 'react';
import BookShelf from './books-shelf';
import * as BooksApi from '../BooksAPI';

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

    handleShelfChange = (book, shelf) => {
        this.setState((prevState) => {
            prevState.books.filter(item => item.id === book.id).map(item => item.shelf = shelf)
            return prevState;
        });
    }

    render() {
        return (
            <div>
                <BookShelf
                    books={this.state.books.filter((item) => (item.shelf === "currentlyReading"))}
                    shelfTitle="Currently Reading"
                    handleBookChange={this.handleShelfChange}
                />
                <BookShelf
                    books={this.state.books.filter((item) => (item.shelf === "wantToRead"))}
                    shelfTitle="Want to Read"
                    handleBookChange={this.handleShelfChange}
                />
                <BookShelf
                    books={this.state.books.filter((item) => (item.shelf === "read"))}
                    shelfTitle="Read"
                    handleBookChange={this.handleShelfChange}
                />
            </div>
        )
    }

}

export default BookListContent;