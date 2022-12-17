import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBookAction } from '../redux/books/books';

const Book = ({
  title, author, category = 'Uncategorized', id,
}) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(removeBookAction(id));
  };
  return (
    <>
      <div className="book">
        <div className="book-info">
          <p>{category}</p>
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
  category: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
export default Book;
