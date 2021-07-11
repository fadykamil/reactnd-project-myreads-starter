import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as BooksApi from '../BooksAPI';

class Book extends Component {
    static propTypes = {
        book: PropTypes.object.isRequired,
        handleBookStatusChange: PropTypes.func.isRequired
    }

    handleChange = (selectedValue) => {
        BooksApi.update(this.props.book, selectedValue).then((result) => {
            this.props.handleBookStatusChange(this.props.book, selectedValue);
        });
    }

    render() {

        const { book } = this.props;

        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks ? book.imageLinks.thumbnail : ""})` }}></div>
                    <div className="book-shelf-changer">
                        <select
                            value={book.shelf ? book.shelf : 'none'}
                            onChange={(event) => this.handleChange(event.target.value)}
                        >
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors ? book.authors.join(' - ') : ''}</div>
            </div>
        )
    }

}

export default Book;
