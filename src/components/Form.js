import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBookAction } from '../redux/books/books';

const Form = () => {
  const dispatch = useDispatch();
  const [book, setBook] = useState({
    title: '',
    author: '',
  });

  const handleChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      ...book,
      id: Date.now().toString(),
    };
    if (book.title.length > 0 && book.title.length > 0) {
      dispatch(addBookAction(data));
    }
    setBook({
      title: '',
      author: '',
    });
  };

  return (
    <>
      <div className="add-book">
        <p>ADD NEW BOOK</p>
        <form className="AddForm add-book-form" onSubmit={handleSubmit}>
          <input type="text" name="title" placeholder="Title" required value={book.title} onChange={handleChange} />
          <input type="text" name="author" placeholder="Author" required value={book.author} onChange={handleChange} />
          <input type="submit" />
        </form>
      </div>
    </>
  );
};

export default Form;
