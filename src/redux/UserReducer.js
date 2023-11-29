// User State Control
import { createSlice } from '@reduxjs/toolkit';

export const UserSlice = createSlice({
    // state's name
    name: "user",
    // init state
    initialState: {
      email : null,
      name : null,
      profileImg : null,
      render : true
    },
    // reducer
    reducers: {
        // reducre's function
        login: (state, action) => {
            state.email = action.payload.email
            state.name = action.payload.name
            state.profileImg = action.payload.profile_image_path
        },
        // Force Re render
        render: (state) => {
            state.render = !state.render
        }
    },
});
// It is use when you want change state
export const { login, render } = UserSlice.actions;
// exprot user's reducer
export default UserSlice.reducer;
