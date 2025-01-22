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
            const update = action.payload.item.filter((select) =>
                !state.movieCart?.some((exitItem) => exitItem.id === select.id)
            )
console.log(update,":updatefsdf")
            state.movieCart = [...state.movieCart, ...update]

        }
    }

})
export const { selectMovie } = movieSelected.actions
export default movieSelected.reducer