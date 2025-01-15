import { createSlice } from "@reduxjs/toolkit";

const addSlice = createSlice({
    name: "addSlice",
    initialState: {
        selectItem: []
    },
    reducers: {
        addToProduct: (state, action) => {
            const newItems = action.payload.cartProducts.filter(
              (item) => !state.selectItem.some((existingItem) => existingItem.id === item.id)
            );
            state.selectItem = [...state.selectItem, ...newItems];
          },
    }
})
export const { addToProduct } = addSlice.actions
export default addSlice.reducer;