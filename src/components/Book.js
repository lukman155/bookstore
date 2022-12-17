import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBookAction, removeBook } from '../redux/books/books';

const Book = ({
  title, author, id,
}) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    const data = {
      item_id: id,
    };
    dispatch(removeBookAction(data)).then(() => {
      dispatch(removeBook(data));
    });
  };

  return (
    <>
      <div className="book">
        <div className="book-info">

          <h3>{title}</h3>
          <p>{author}</p>
          <div className="book-actions">
            <button type="button">Comments</button>
            <span className="vertical-line" />
            <button type="button" onClick={handleClick}>Remove</button>
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
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
export default Book;
