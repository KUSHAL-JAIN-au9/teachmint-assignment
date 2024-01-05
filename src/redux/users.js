import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  refresh: false,
  users: [],
  posts: [],
  countries: [],
  userPosts: [],
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    fetchAllUsers: (state, action) => {
      state.users = [...action.payload];
    },
    fetchAllPosts: (state, action) => {
      state.posts = [...action.payload];
    },
    fetchCountries: (state, action) => {
      state.countries = [...action.payload];
    },
    filterUserPosts: (state, action) => {
      const filteredPosts = state.posts.filter(
        (post) => post.userId === action.payload.id
      );
      console.log("filterd posts", filteredPosts, state.posts);
      state.userPosts = [...filteredPosts];
    },
    refreshPage: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.refresh = !state.refresh;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  fetchAllPosts,
  fetchAllUsers,
  fetchCountries,
  filterUserPosts,
  refreshPage,
} = usersSlice.actions;

export default usersSlice.reducer;
