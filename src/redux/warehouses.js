import { createSlice } from "@reduxjs/toolkit";

const warehouses = [
  {
    name: "Warehouse-165",
    code: "W-00001",
    id: 1,
    city: "Delhi",
    space_available: 1234,
    type: "Leasable Space",
    cluster: "cluster-a-32",
    is_registered: true,
    is_live: false,
  },
  {
    name: "Warehouse-276",
    code: "W-00002",
    id: 2,
    city: "Chennai",
    space_available: 124,
    type: "Warehouse Service",
    cluster: "cluster-a-1",
    is_registered: true,
    is_live: false,
  },
  {
    name: "Warehouse-3039",
    code: "W-00003",
    id: 3,
    city: "Indore",
    space_available: 134,
    type: "Warehouse Service",
    cluster: "cluster-a-1",
    is_registered: true,
    is_live: false,
  },
  {
    name: "Warehouse-324",
    code: "W-00004",
    id: 4,
    city: "Chennai",
    space_available: 12,
    type: "Leasable Space",
    cluster: "cluster-a-21",
    is_registered: true,
    is_live: false,
  },
  {
    name: "Warehouse-5454",
    code: "W-00005",
    id: 5,
    city: "Chennai",
    space_available: 1243434,
    type: "Warehouse Service",
    cluster: "cluster-a-21",
    is_registered: true,
    is_live: false,
  },
  {
    name: "Warehouse-4345",
    code: "W-00006",
    id: 6,
    city: "Chennai",
    space_available: 1,
    type: "Leasable Space",
    cluster: "cluster-a-21",
    is_registered: true,
    is_live: false,
  },
  {
    name: "Warehouse-3455",
    code: "W-00007",
    id: 7,
    city: "Mumbai",
    space_available: 4,
    type: "Leasable Space",
    cluster: "cluster-a-2",
    is_registered: true,
    is_live: false,
  },
  {
    name: "Warehouse-23455",
    code: "W-00008",
    id: 8,
    city: "Bangalore",
    space_available: 3456,
    type: "Warehouse Service",
    cluster: "cluster-a-21",
    is_registered: false,
    is_live: true,
  },
  {
    name: "Warehouse-6457",
    code: "W-00009",
    id: 9,
    city: "Bangalore",
    space_available: 1234545,
    type: "Warehouse Service",
    cluster: "cluster-a-1",
    is_registered: true,
    is_live: false,
  },
  {
    name: "Warehouse-32456",
    code: "W-000010",
    id: 10,
    city: "Guwahati",
    space_available: 121234,
    type: "Warehouse Service",
    cluster: "cluster-a-1",
    is_registered: true,
    is_live: true,
  },
  {
    name: "Warehouse-3245678",
    code: "W-000011",
    id: 11,
    city: "Delhi",
    space_available: 98,
    type: "Leasable Space",
    cluster: "cluster-v-2",
    is_registered: true,
    is_live: false,
  },
  {
    name: "Warehouse-4567",
    code: "W-000012",
    id: 12,
    city: "Indore",
    space_available: 97,
    type: "Warehouse Service",
    cluster: "cluster-a-1",
    is_registered: false,
    is_live: true,
  },
  {
    name: "Warehouse-458",
    code: "W-000013",
    id: 13,
    city: "Delhi",
    space_available: 654,
    type: "Leasable Space",
    cluster: "cluster-a-1",
    is_registered: true,
    is_live: false,
  },
];

const initialState = {
  refresh: false,
  warehouses: [...warehouses],
};

export const warehouseSlice = createSlice({
  name: "warehouses",
  initialState,
  reducers: {
    refreshWarehouses: (state, action) => {
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
  refreshWarehouses,
  addWarehouse,
  editWarehouse,
  removeWarehouse,
} = warehouseSlice.actions;

export default warehouseSlice.reducer;
