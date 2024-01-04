import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  refresh: false,
  users: [],
  posts: [],
  countries: [],
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
      state.posts = [...action.payload];
    },
    refreshPage: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.refresh = !state.refresh;
    },
    addWarehouse: (state, action) => {
      state.habits.push(action.payload);
    },
    removeWarehouse: (state, action) => {
      // const filterdstate = state.habits.filter((item) => {
      //   console.log(item.id, action.payload);
      //   return item.id !== action.payload;
      // });
      state.warehouses.splice(
        state.warehouses.findIndex((arrow) => arrow?.id === action.payload),
        1
      );
      // console.log(filterdstate, action.payload, state.habits.length);
      // return state.habits;
    },
    editWarehouse: (state, action) => {
      //   const filterdstate = state.filter((item) => item.id != action.payload.id);
      //   state.habits = [filterdstate, action.payload];
      //   const indexOfState = state.habits.indexOf(action.payload);

      // if (state.habits.length < 1) {
      //   state.habits.week.push(action.payload);
      // }
      const HabitindexOfState = state.warehouses.findIndex((x) => {
        return x.id === action.payload.id;
      });
      console.log(HabitindexOfState, action.payload);
      //   const indexOfState = state.warehouses[HabitindexOfState];

      // const updatedArray = state.habits.map((obj) => {
      //   console.log(obj);
      //   if (obj.id === action.payload.id) {
      //     return action.payload;
      //   }
      //   // Otherwise, return the original object
      //   return obj;
      // });
      // console.log(
      //   "updated array",
      //   updatedArray,
      //   state.habits[0].week[0].status
      // );

      // const indexOfState = state.habits
      //   .map((x) => {
      //     console.log("x", x);
      //     return x.id;
      //   })
      //   .indexOf(action.payload.id);
      //   console.log("edited state", state.habits[`${HabitindexOfState}`]);

      if (HabitindexOfState != -1)
        state.warehouses[`${HabitindexOfState}`] = action.payload;
      return;
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
