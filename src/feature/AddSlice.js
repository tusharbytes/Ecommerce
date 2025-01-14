import { createSlice } from "@reduxjs/toolkit";

const addSlice = createSlice({
    name: "addSlice",
    initialState: {
        selectItem: []
    },
    reducers: {
        addToProduct: (state, action) => {
            // console.log(action.payload, "action")
            state.selectItem.push(action.payload) 

        }
    }
})
export const { addToProduct } = addSlice.actions
export default addSlice.reducer;