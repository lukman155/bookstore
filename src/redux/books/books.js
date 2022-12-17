/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const ADD_BOOK = 'books/addBook';
const REMOVE_BOOK = 'books/removeBook';
const GET_BOOKS = 'books/getBooks';

const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/9jEyUOJaAsYSP9nfZYrl/books';

export const removeBookAction = createAsyncThunk(REMOVE_BOOK, async (data) => {
  const response = await fetch(`${URL}/${data.item_id}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return response.json();
});

export const getBooksAction = createAsyncThunk(GET_BOOKS, async () => {
  const response = await fetch(URL);
  const data = await response.json();
  return data;
});

export const addBookAction = createAsyncThunk(ADD_BOOK, async (data) => {
  const response = await fetch(URL, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return response.json();
});

const bookSlice = createSlice({
  name: 'books',
  initialState: {
    books: [],
    status: null,
  },
  reducers: {
    addBook: (state, action) => {
      const data = { ...action.payload };
      state.books.push(data);
    },
    removeBook: (state, action) => {
      state.books = state.books.filter(
        (book) => book.item_id !== action.payload.item_id,
      );
    },
  },

  extraReducers: {
    [getBooksAction.pending]: (state) => {
      state.status = 'loading';
    },
    [getBooksAction.fulfilled]: (state, action) => {
      state.status = 'success';
      const books = Object.keys(action.payload).map((key) => ({
        ...action.payload[key][0],
        item_id: key,
      }));
      state.books = books;
    },
    [getBooksAction.rejected]: (state) => {
      state.status = 'failed';
    },
  },
});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
