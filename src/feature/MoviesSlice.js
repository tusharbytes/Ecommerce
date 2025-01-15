import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const moviesShow = createAsyncThunk("moviesShow", async () => {
    try {
        const response = await axios.get('https://jsonfakery.com/movies/paginated')
        return response.data

    } catch {

    }
})

const movieSlice = createSlice({
    name: "moviesSlice",
    initialState: {
        getMovies: [],
        loading: false,
        error: null
    },
    reducer: {}
    ,
    extraReducers: (builders) => {
        builders
            .addCase(moviesShow.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(moviesShow.fulfilled, (state, action) => {

                state.loading = false;
                state.getMovies = action.payload;
                state.error = null;
            })
            .addCase(moviesShow.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || "Failed to fetch data";
            });
    }
}
)
export {moviesShow}
export default movieSlice.reducer;