import React, { Component } from 'react'
import Shelf from './Shelf';
import { Link } from 'react-router-dom';

class ListBooks extends Component {

    render() {
        const { books, moveTo } = this.props;
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <Shelf 
                            shelf='currentlyReading'
                            title='Currently Reading'  
                            books={books}       
                            moveTo={moveTo}
                        />
                        <Shelf 
                            shelf='wantToRead' 
                            title='Want to Read'  
                            books={books}
                            moveTo={moveTo}
                        />
                        <Shelf 
                            shelf='read' 
                            title='Read'  
                            books={books}
                            moveTo={moveTo}
                        />
                    </div>
                </div>
                <Link
                    className='open-search'
                    to='/search'>
                    Add a book
                </Link>
            </div>
        )
    }
}

export default ListBooks