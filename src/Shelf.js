import React, { Component } from 'react';
import Book from './Book'

class Shelf extends Component {
    render() {
        const { books, shelf, moveTo } = this.props;
        return (
            <div>
                {shelf === 'currentlyReading' &&  (
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">{this.props.title}</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                                <Book books={books} shelf={shelf} moveTo={moveTo} />
                            </ol>
                        </div>
                    </div>
                )}

                {shelf === 'wantToRead' && (
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">{this.props.title}</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                                <Book books={books} shelf={shelf} moveTo={moveTo} />
                            </ol>
                        </div>
                    </div>
                )}

                {shelf === 'read' && (
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">{this.props.title}</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                                <Book books={books} shelf={shelf} moveTo={moveTo} />
                            </ol>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}

export default Shelf;