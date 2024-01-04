import { configureStore } from "@reduxjs/toolkit";

import usersReducer from "./users";

//configuring the store
export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

console.log(store.getState());
