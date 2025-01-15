import { configureStore } from "@reduxjs/toolkit";
import GetCarts from "../feature/CartSlice";
import addSlice from "../feature/AddSlice"
import moviesSlice from "../feature/MoviesSlice"
import photoSlice from "../feature/PhotoSlice"
import movieSelected from "../feature/MovieSelectedSlice"

const store = configureStore({
    reducer: {
        cart: GetCarts,
        select: addSlice,
        movies: moviesSlice,
        photo: photoSlice,
        movieAdd: movieSelected

    },
});

export default store;
