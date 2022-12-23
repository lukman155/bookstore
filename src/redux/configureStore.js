import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import booksReducer from './books/books';
import categoryReducer from './categories/categories';

const store = configureStore({
  reducer: {
    book: booksReducer,
    category: categoryReducer,
  },
}, applyMiddleware(thunk));

export default store;
