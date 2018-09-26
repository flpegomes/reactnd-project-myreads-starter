import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import * as BooksAPI from './BooksAPI';
import { Route } from 'react-router-dom';
import ListBooks from './ListBooks'
import AddBook from './AddBook'

class BooksApp extends React.Component {

  state = {
    books: [],
  }

  moveTo = (book, shelf) => {
    BooksAPI.update(book, shelf)
      .then(this.getAllBooks)
  }

  getAllBooks = () => {
    BooksAPI.getAll()
    .then((books) => {
      this.setState(() => ({
        books
      }))
    })
  }
  componentDidMount() {
    this.getAllBooks();
  }
  
  render() {
    return (
      <div className="app">
        <Route exact path="/search" render={() => (
            <AddBook moveTo={this.moveTo} />
          )}
        />
        <Route exact path="/" render={({history}) => (
            <ListBooks books={this.state.books} moveTo={this.moveTo} />
          )}
        />
      </div>
    )
  }
}

export default BooksApp
