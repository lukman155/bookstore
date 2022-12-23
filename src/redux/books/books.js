/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const Url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/8dmspuqHVBlGIGuvvRwv/books';

const initialState = { books: [] };

export const addBooks = createAsyncThunk('books/addBooks', async (bookData) => {
  const response = await fetch(Url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(bookData),
  });
  return response.json();
});

export const deleteBooks = createAsyncThunk('books/removeBooks', async (bookData) => {
  const response = await fetch(`${Url}/${bookData.item_id}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(bookData),
  });
  return response.json();
});

export const getBooks = createAsyncThunk('books/getBooks', async () => {
  const response = await fetch(Url);
  const data = await response.json();
  return data;
});

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBookOne: (state, action) => {
      const data = { ...action.payload };
      state.books.push(data);
    },
    deleteBookOne: (state, action) => {
      state.books = state.books.filter(
        (book) => book.item_id !== action.payload.item_id,
      );
    },
  },

  extraReducers: {
    [getBooks.fulfilled]: (state, action) => {
      const books = Object.keys(action.payload).map((key) => ({
        ...action.payload[key][0],
        item_id: key,
      }));
      state.books = books;
    },
  },
});
export const { addBookOne, deleteBookOne } = bookSlice.actions;
export default bookSlice.reducer;
