import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <div className="nav-con">
    <nav>
      <Link to="/"><h1>Bookstore CMS</h1></Link>
      <Link className="grey" to="/">Books</Link>
      <Link className="grey" to="/categories">Categories</Link>
    </nav>
    <img className="user-icon" src="https://img.icons8.com/fluency-systems-regular/48/null/user.png" alt="" />
  </div>
);

export default NavBar;
