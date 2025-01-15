import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const showPhotoes = createAsyncThunk("showPhotoes", async () => {
    const response = await axios.get("https://jsonfakery.com/photos")
    return response.data
})

const photoSlice = createSlice({
    name: "photoSlice",
    initialState: {
        photoGet: [],
        loading: false,
        error: null
    },
    reducers: {}
    ,
    extraReducers: (builders) => {
        builders
            .addCase(showPhotoes.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(showPhotoes.fulfilled, (state, action) => {


                state.loading = false;
                state.photoGet = action.payload;
                state.error = null;
            })
            .addCase(showPhotoes.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || "Failed to fetch data";
            });
    }
}
)
export { showPhotoes }
export default photoSlice.reducer;