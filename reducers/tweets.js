import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: ([]),
};

export const tweetsSlice = createSlice({
  name: "tweets",
  initialState,
  reducers: {
    newTweet: (state, action) => {
      state.value.push(action.payload);
    },
    deleteTweet: (state, action) => {
      
    }
  },
});

export const { newTweet, deleteTweet } = tweetsSlice.actions;
export default tweetsSlice.reducer;