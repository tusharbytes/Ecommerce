import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const url = "https://fakestoreapi.com/products";

const GetCarts = createAsyncThunk("GetCarts", async (_, thunkAPI) => {
    try {
        const response = await axios.get(url, {
            headers: {
                "Content-type": "application/json"
            }
        });
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
        return thunkAPI.rejectWithValue(error.response?.data || "An error occurred");
    }
});

const cartSlice = createSlice({
    name: "cartSlice",
    initialState: {
        cartGet: [],
        loading: false,
        error: null
    },
    reducers: {
  
    },
    extraReducers: (builder) => {
        builder
            .addCase(GetCarts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(GetCarts.fulfilled, (state, action) => {


                state.loading = false;
                state.cartGet = action.payload;
                state.error = null;
            })
            .addCase(GetCarts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || "Failed to fetch data";
            });
    }
});

export { GetCarts };
 

export default cartSlice.reducer;
