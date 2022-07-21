const { createSlice } = require("@reduxjs/toolkit");

const initialState = [
  {
    id: 1,
    userName: "Vishesh Bajpayee",
    postContent: "I am AWesome person in this world and I am the world",
    timestamp: new Date(),
  },
  {
    id: 2,
    userName: "Vishesh Cool",
    postContent: "cool coolaiyaaa",
    timestamp: new Date(),
  },
  {
    id: 1,
    userName: "Vishesh Bajpayee",
    postContent: "bhul bhulaiyaa",
    timestamp: new Date(),
  },
];

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (state, action) => {
      return [...state, action.payload];
    },
  },
});

// Actions
export const { addPost } = postsSlice.actions;
