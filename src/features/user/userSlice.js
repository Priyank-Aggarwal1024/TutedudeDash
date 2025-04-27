import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    name: "Salmaan Ahmed",
    email: "henny@gmail.com",
    id: "1234567890",
    rank: 48,
    gems: 48,
    streak: 4,
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
    },
    updateUser: (state, action) => {
      state.user = {
        ...state.user,
        ...action.payload,
      };
    },
  },
});

export const { setUser, clearUser, updateUser } = userSlice.actions;

export default userSlice.reducer;
