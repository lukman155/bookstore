import React from 'react';
import { useDispatch } from 'react-redux';
import { checkStatusAction } from '../redux/categories/categories';
import NavBar from './NavBar';

function Categories() {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(checkStatusAction());
  };
  return (
    <div>
      <NavBar />
      <button onClick={handleClick} type="button">Check Status</button>
    </div>
  );
}
export default Categories;
