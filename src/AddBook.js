import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Book from './Book'
import { debounce } from 'lodash'; 

class AddBook extends Component {
    state = {
        query:'',
        searchResults: []
    }
    

    //atualiza propriedade dos livros
    componentWillReceiveProps(nextProps, prevState) {
        if(nextProps.books !== prevState.books){
            this.updateQuery(this.state.query)
        }
    }

    updateQuery = debounce((value) => {
        const query = value.trim().replace(/\s+/g, ' ')

        this.setState({query});

        if(query.length) {
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
            .catch(error => {
                console.log(error)
                this.setState({
                    searchResults: []
                })
            })
        } else {
            console.log('no results')
            this.setState({
                searchResults: []
            })
        }
    })

    render() {

        const { searchResults } = this.state;
        const { moveTo } = this.props;

        return (
            <div className="search-books">
                <div className="search-books-bar">
                <Link className='close-search' to='/'> Close </Link>
                <div className="search-books-input-wrapper">
                    <input 
                        type="text" 
                        placeholder="Search by title or author"
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