import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Book from './Book'

class AddBook extends Component {
    state = {
        query:'',
        searchResults: []
    }
    
    componentWillReceiveProps(nextProps, prevState) {
        if(nextProps.books !== prevState.books){
            this.updateQuery(this.state.query)
        }
    }

    updateQuery = (value) => {
        const { query } = this.state;

        this.setState(() => ({
            query: value.trim()
        }))

        if(query.length > 2) {
            BooksAPI.search(query)
            .then((resp) => {
                let listBooks = []

                resp.map((item) => {
                    const obj = {...item}
                    obj.shelf = 'none'

                    const verified = this.props.books.find((a) => a.id === obj.id)
                    return verified ? listBooks.push(verified) : listBooks.push(obj)
                })
                return listBooks
            })
            .then((resp) => {
                this.setState({
                    searchResults: resp
                })
            })   
        }
    }

    clearQuery = () => {
        this.updateQuery('');
    }

    render() {

        const { query, searchResults } = this.state;
        const { moveTo } = this.props;
        //const { books } = this.props;
        console.log(searchResults)

        return (
            <div className="search-books">
                <div className="search-books-bar">
                <Link
                    className='close-search'
                    to='/'>
                        Close
                </Link>
                <div className="search-books-input-wrapper">
                    {/*
                    NOTES: The search from BooksAPI is limited to a particular set of search terms.
                    You can find these search terms here:
                    https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                    However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                    you don't find a specific author or title. Every search is limited by search terms.
                    */}
                    <input 
                        type="text" 
                        placeholder="Search by title or author"
                        value={query}
                        onChange={(event) => this.updateQuery(event.target.value)}
                    />
                </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        <Book books={searchResults} moveTo={moveTo}/>
                    </ol>
                    </div>
            </div>
        )
    }
}

export default AddBook;