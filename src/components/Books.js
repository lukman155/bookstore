import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Form from './Form';
import Book from './Book';
import { getBooks } from '../redux/books/books';
import NavBar from './NavBar';

const Books = () => {
  const books = useSelector((state) => state.book.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  },
  // eslint-disable-next-line
  []);

  return (
    <>
      <NavBar />
      <div className="books-con">
        {(books).map((book) => (
          <Book
            title={book.title}
            id={book.item_id}
            author={book.author}
            key={book.item_id}
          />
        ))}
        <span className="horizontal-line" />
        <Form />
      </div>
    </>
  );
};

export default Books;
