const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

const initialState = [
  {
    id: '1',
    title: 'The Hunger Games',
    category: 'Action',
    author: 'Suzanne Collins',
  },
  {
    id: '2',
    title: 'Dune',
    category: 'Sci-Fi',
    author: 'Frank Herbert',
  },
  {
    id: '3',
    title: 'Capital in the Twenty-First Century',
    category: 'Economy',
    author: 'Suzanne Collins',
  },
];

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
};

export const addBookAction = (book) => ({
  type: ADD_BOOK,
  payload: book,
});

export const removeBookAction = (id) => ({
  type: REMOVE_BOOK,
  payload: id,
});

export default booksReducer;
