import { configureStore } from "@reduxjs/toolkit";
import { postsSlice } from "./features/PostsSlice";

const store = configureStore({
  reducer: {
    posts: postsSlice.reducer,
  },
});

export default store;
