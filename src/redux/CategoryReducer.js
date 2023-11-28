import { createSlice } from '@reduxjs/toolkit';

export const CategorySlice = createSlice({
    name: "category",
    initialState: {
      main : "Main",
      sub : "Home",
      render : true
    },
    reducers: {
        changeMain: (state, action) => {
          state.main = action.payload
        },
        changeSub: (state, action) => {
          state.sub = action.payload
        },
        render : (state) => {
          state.render = !state.render
        }
    },
});
export const { changeMain, changeSub, render } = CategorySlice.actions;
export default CategorySlice.reducer;