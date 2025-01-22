import { createSlice } from "@reduxjs/toolkit";

const singleSlice = createSlice({
    name: "singleSlice",
    initialState: {
        viewProduct: null
    },
    reducers: {
        setSingleProduct: (state, action) => {
            state.viewProduct = action.payload

        }
    }
})
export const { setSingleProduct } = singleSlice.actions
export default singleSlice.reducer