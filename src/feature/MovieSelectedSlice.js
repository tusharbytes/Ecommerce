import { createSlice } from "@reduxjs/toolkit";

const movieSelected = createSlice({
    name: "movieSelected",
    initialState: {
        movieCart: [],
        loading: false,
        error: null
    },
    reducers: {
        selectMovie: (state, action) => {
            state.movieCart.push(action.payload)

        }
    }

})
export const { selectMovie } = movieSelected.actions
export default movieSelected.reducer