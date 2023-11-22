import { createSlice } from '@reduxjs/toolkit';

export const CategorySlice = createSlice({
    name: "category",
    initialState: {
      main : "Main",
      sub : "Home",
    },
    reducers: {
        changeMain: (state, action) => {
          state.main = action.payload
        },
        changeSub: (state, action) => {
          state.sub = action.payload
        }
    },
});
export const { changeMain, changeSub } = CategorySlice.actions;
export default CategorySlice.reducer;