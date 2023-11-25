// User State Control
import { createSlice } from '@reduxjs/toolkit';

export const UserSlice = createSlice({
    // state's name
    name: "user",
    // init state
    initialState: {
      email : null,
      name : null,
      profileImg : null 
    },
    // reducer
    reducers: {
        // reducre's function
        login: (state, action) => {
            state.email = action.payload.email
            state.name = action.payload.name
            state.profileImg = action.payload.profile_image_path
        },
    },
});
// It is use when you want change state
export const { login } = UserSlice.actions;
// exprot user's reducer
export default UserSlice.reducer;
