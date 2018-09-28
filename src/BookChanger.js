import React, { Component } from 'react';

class BookChanger extends Component {
    render() {
        
        const { moveTo, book } = this.props;
        return (
                <div className="book-shelf-changer">
                    {book.shelf === 'currentlyReading' && (
                        <select onChange={(e) => moveTo(book, e.target.value)} value="move">
                            <option value="move" disabled>Move to...</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    )}

                    {book.shelf === 'read' && (
                        <select onChange={(e) => moveTo(book, e.target.value)} value="move">
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="none">None</option>
                        </select>
                    )}

                    {book.shelf === 'wantToRead' && (
                        <select onChange={(e) => moveTo(book, e.target.value)} value="move">
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    )}

                    {book.shelf === 'none' && (
                        <select onChange={(e) => moveTo(book, e.target.value)} value="move">
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                        </select>
                    )}
                </div> 

        )
        
    }
}

export default BookChanger;