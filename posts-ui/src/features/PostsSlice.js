const { createSlice } = require("@reduxjs/toolkit");

const initialState = [
  {
    id: 1,
    userName: "Vishesh Bajpayee",
    postContent: "I am AWesome person in this world and I am the world",
    timestamp: 1607110335663,
  },
  {
    id: 2,
    userName: "Vishesh Cool",
    postContent: "cool coolaiyaaa",
    timestamp: 1607113465663,
  },
  {
    id: 1,
    userName: "Vishesh Bajpayee",
    postContent: "bhul bhulaiyaa",
    timestamp: 1633333465663,
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
