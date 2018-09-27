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
      .then((book) => {
        const updatedBook = book
        updatedBook.shelf = shelf;
        const updatedBooks = this.state.books
        console.log(book)
        const filtered = updatedBooks.filter((a) => a.id !== updatedBook.id)
        console.log(updatedBook)
        shelf !== 'none' && filtered.push(updatedBook)
        console.log(filtered)

      })
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
            <AddBook moveTo={this.moveTo} books={this.state.books}/>
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
