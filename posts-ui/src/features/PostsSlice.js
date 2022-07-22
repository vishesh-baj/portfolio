const { createSlice } = require("@reduxjs/toolkit");

const initialState = [
  {
    key: "wieudfh12",
    id: 1,
    display: "Vishesh Bajpayee",
    postContent:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when ",
    timestamp: 1607110335663,
  },
  {
    key: "ewfois33",
    id: 2,
    display: "John Doe",
    postContent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ",
    timestamp: 1117113465663,
  },
  {
    key: "efoisj32re",
    id: 3,
    display: "Jack Maas",
    postContent: "Sed ut perspiciatis unde omnis iste natus ",
    timestamp: 1632343465663,
  },
  {
    key: "efoissdfihuefj32re",
    id: 4,
    display: "Zac Dill",
    postContent:
      "aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequa ",
    timestamp: 1632113465663,
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
