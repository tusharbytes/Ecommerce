import { configureStore } from "@reduxjs/toolkit";
import GetCarts from "../feature/CartSlice";
import addSlice from "../feature/AddSlice"

const store = configureStore({
    reducer: {
        cart: GetCarts,
        select: addSlice

    },
});

export default store;
