import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBooks, addBookOne } from '../redux/books/books';

const Form = () => {
  const initialInputValues = {
    title: '',
    author: '',
  };
  const [inputValues, setInputValues] = useState({ initialInputValues });
  const dispatch = useDispatch();

  const handleInputValue = (e) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddBookBtn = (e) => {
    e.preventDefault();
    const { title, author } = inputValues;
    const bookData = {
      title,
      author,
      category: 'Action',
      item_id: uuidv4(),
    };
    if (title.length > 0 && author.length > 0) {
      dispatch(addBooks(bookData)).then(() => {
        dispatch(addBookOne(bookData));
      });
    }
    setInputValues({
      title: '',
      author: '',
    });
  };
  return (
    <>
      <div className="add-book">
        <p>ADD NEW BOOK</p>
        <form className="AddForm add-book-form" onSubmit={handleAddBookBtn}>
          <input type="text" name="title" placeholder="Title" required value={inputValues.title} onChange={handleInputValue} />
          <input type="text" name="author" placeholder="Author" required value={inputValues.author} onChange={handleInputValue} />
          <input type="submit" />
        </form>
      </div>
    </>
  );
};

export default Form;
