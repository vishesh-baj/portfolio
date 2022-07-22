const { createSlice } = require("@reduxjs/toolkit");

const initialState = [
  {
    key: "wieudfh12",
    id: 1,
    display: "Vishesh Bajpayee",
    postContent: "I am AWesome person in this world and I am the world",
    timestamp: 1607110335663,
  },
  {
    key: "ewfois33",
    id: 2,
    display: "John Doe",
    postContent: "cool coolaiyaaa",
    timestamp: 1607113465663,
  },
  {
    key: "efoisj32re",
    id: 3,
    display: "Jack Maas",
    postContent:
      "bloresod owijed oqiscje ovjior jfoewjoi jgoiewdjoi wejdoiw ejfowj owe",
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
