import React, { Component } from 'react';
import BookChanger from './BookChanger';
import { Route } from 'react-router-dom'

class Book extends Component {
    render() {
        const { books, shelf, moveTo } = this.props;
        return (
            <div style={{display: 'flex'}}>
                <Route exact path='/' render={(() => (
                    books.filter((book) => book.shelf === shelf).map((book, index) => (
                        <li key={index}>
                            <div className="book">
                                <div className="book-top">
                                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks.smallThumbnail}")` }}></div>
                                    <BookChanger shelf={book.shelf} moveTo={moveTo} book={book} />
                                </div>
                                <div className="book-title">{book.title}</div>
                                <div className="book-authors">{book.authors}</div>
                            </div>
                        </li>
                    ))
                ))}
                />

                <Route exact path='/search' render={(() => (
                    books.map((book, index) => (
                        <li key={index}>
                            <div className="book">
                                <div className="book-top">
                                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks.smallThumbnail}")` }}></div>
                                    <BookChanger shelf={book.shelf} moveTo={moveTo} book={book} />
                                </div>
                                <div className="book-title">{book.title}</div>
                                <div className="book-authors">{book.authors}</div>
                            </div>
                        </li>
                    ))
                ))}
                />
            </div>
        )
    }
}

export default Book;