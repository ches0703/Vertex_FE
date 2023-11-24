// User State Control
import { createSlice } from '@reduxjs/toolkit';

export const UserSlice = createSlice({
    // state's name
    name: "user",
    // init state
    initialState: {
      name : "Guest",
    },
    // reducer
    reducers: {
        // reducre's function
        login: (state, action) => {
            state.name = action.payload
        },
    },
});
// It is use when you want change state
export const { login } = UserSlice.actions;
// exprot user's reducer
export default UserSlice.reducer;
