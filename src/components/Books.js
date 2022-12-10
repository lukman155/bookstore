import React from 'react';
import Form from './Form';
import Book from './Book';
import NavBar from './NavBar';

const Books = () => (
  <>
    <NavBar />
    <div className="books-con">
      <Book />
      <Book />
      <Book />
      <span className="horizontal-line" />
      <Form />
    </div>
  </>
);

export default Books;
