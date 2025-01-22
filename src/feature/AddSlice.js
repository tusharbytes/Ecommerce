import { createSlice } from "@reduxjs/toolkit";

const addSlice = createSlice({
  name: "addSlice",
  initialState: {
    selectItem: [],

  },
  reducers: {
    addRemoveToProduct: (state, action) => {
      console.log(state, "state")
      console.log(action, "action")
      const itemExists = state.selectItem.some(item => item.id === action.payload.id);
      if (itemExists) {
        state.selectItem = state.selectItem.filter(item => item.id !== action.payload.id);
      } else {
        state.selectItem.push(action.payload);
      }
    },
    removeProduct: (state, action) => {
      const productId = action.payload;
      state.selectItem = state.selectItem?.filter((product, index) => product.id !== productId);

    }
  }
})
export const {  addRemoveToProduct, removeProduct } = addSlice.actions
export default addSlice.reducer;  