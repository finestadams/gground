import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],

};

export const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    //action would have type and payload

    booksData: (state, { payload }) => {
      state.books = payload;
    },
 
  }
});

// Action creators are generated for each case reducer function
export const { booksData } = bookSlice.actions;

export default bookSlice.reducer;
