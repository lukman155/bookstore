import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Form from './Form';
import Book from './Book';
import NavBar from './NavBar';
import { getBooksAction } from '../redux/books/books';

const Books = () => {
  const { books, status } = useSelector((state) => state.book);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooksAction());
  }, [dispatch]);

  if (status === 'loading') {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <NavBar />
      <div className="books-con">
        {(books).map((book) => (
          <Book
            key={book.id}
            title={book.title}
            author={book.author}
            id={book.id}
          />
        ))}
        <span className="horizontal-line" />
        <Form />
      </div>
    </>
  );
};

export default Books;
