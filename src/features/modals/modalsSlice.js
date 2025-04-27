// src/store/modalSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openGems: false,
  openLeaderboard: false,
  openStreak: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setOpenGems(state, action) {
      state.openGems = action.payload;
    },
    setOpenLeaderboard(state, action) {
      state.openLeaderboard = action.payload;
    },
    setOpenStreak(state, action) {
      state.openStreak = action.payload;
    },
  },
});

export const { setOpenGems, setOpenLeaderboard, setOpenStreak } =
  modalSlice.actions;

export default modalSlice.reducer;
