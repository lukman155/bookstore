const CHECK_STATUS = 'bookstore/categories/CHECK_STATUS';
const initialState = [];

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_STATUS: return 'Under construction';
    default: return state;
  }
};

export const checkStatusAction = () => ({ type: CHECK_STATUS });

export default categoryReducer;
