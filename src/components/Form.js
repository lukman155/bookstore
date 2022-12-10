import React from 'react';

const Form = () => (
  <>
    <div className="add-book">
      <p>ADD NEW BOOK</p>
      <div className="add-book-form">
        <input type="text" placeholder="Title" />
        <input type="text" placeholder="Author" />
        <button type="button">ADD BOOK</button>
      </div>
    </div>
  </>
);

export default Form;
