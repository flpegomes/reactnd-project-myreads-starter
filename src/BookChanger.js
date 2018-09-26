import React, { Component } from 'react';

class BookChanger extends Component {


    render() {
        const { shelf, moveTo, book } = this.props;
        return (
                <div className="book-shelf-changer">
                    {shelf === 'currentlyReading' && (
                        <select onChange={(e) => moveTo(book, e.target.value)} value="move">
                            <option value="move" disabled>Move to...</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    )}

                    {shelf === 'read' && (
                        <select onChange={(e) => moveTo(book, e.target.value)} value="move">
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="none">None</option>
                        </select>
                    )}

                    {shelf === 'wantToRead' && (
                        <select onChange={(e) => moveTo(book, e.target.value)} value="move">
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    )}

                    {shelf === undefined && (
                        <select onChange={(e) => moveTo(book, e.target.value)} value="move">
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    )}
                </div> 

        )
        
    }
}

export default BookChanger;