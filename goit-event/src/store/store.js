import { configureStore } from "@reduxjs/toolkit";
import { counterReducer, pokemonSlice  } from "./slices";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        pokemons: pokemonSlice.reducer
    },
})