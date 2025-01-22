import { combineReducers, configureStore } from "@reduxjs/toolkit";
import GetCarts from "../feature/CartSlice";
import addSlice from "../feature/AddSlice";
import moviesSlice from "../feature/MoviesSlice";
import photoSlice from "../feature/PhotoSlice";
import movieSelected from "../feature/MovieSelectedSlice";
import singleSlice from "../feature/SingleProductSlice/SingleProductSlice";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import { persistStore } from "redux-persist";

// Persist configuration
const persistConfig = {
    key: "root",
    storage,
};

// Combine reducers
const rootReducer = combineReducers({
    cart: GetCarts,
    select: addSlice,
    movies: moviesSlice,
    photo: photoSlice,
    movieAdd: movieSelected,
    viewSingle: singleSlice,
});

// Wrap rootReducer with persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure store with the persisted reducer
const store = configureStore({
    reducer: persistedReducer,
});

// Create persistor (optional, if you're using redux-persist)
export const persistor = persistStore(store);

export default store;
