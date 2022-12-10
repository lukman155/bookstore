import React from 'react';

const Book = () => (
  <>
    <div className="book">
      <div className="book-info">
        <p>Book Genre</p>
        <h3>Book Title</h3>
        <p>Book Author</p>
        <div className="book-actions">
          <button type="button">Comments</button>
          <span className="vertical-line" />
          <button type="button">Remove</button>
          <span className="vertical-line" />
          <button type="button">Edit</button>
        </div>
      </div>
      <div className="prog-con">
        <div className="book-progress">
          <div className="c100 p50 small green">
            <div className="slice">
              <div className="bar" />
              <div className="fill" />
            </div>
          </div>
          <div>
            <p className="num-percent">50%</p>
            <p>Completed</p>
          </div>
        </div>
        <span className="vertical-line width" />
        <div className="book-update">
          <p>CURRENT CHAPTER</p>
          <p>Chapter Name</p>
          <button type="button">UPDATE PROGRESS</button>
        </div>
      </div>
    </div>
  </>
);

export default Book;
