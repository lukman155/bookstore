import React from 'react';
import { useSelector } from 'react-redux';
import Form from './Form';
import Book from './Book';
import NavBar from './NavBar';

const Books = () => {
  const books = useSelector((state) => state.book);
  return (
    <>
      <NavBar />
      <div className="books-con">
        {books.map((book) => (
          <Book
            key={book.id}
            title={book.title}
            author={book.author}
            category={book.category}
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
