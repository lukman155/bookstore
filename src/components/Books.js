import React from 'react';
import Form from './Form';
import Book from './Book';
import NavBar from './NavBar';

const Books = () => (
  <>
    <NavBar />
    <div className="books-con">
      <Book title="book title" author="author name" />
      <Book title="tired" author="dev" />
      <Book title="life" author="me" />
      <span className="horizontal-line" />
      <Form />
    </div>
  </>
);

export default Books;
