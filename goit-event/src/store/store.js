import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { counterReducer, pokemonSlice  } from "./slices";
//import storage from 'redux-persist/lib/storage'
import storage from 'redux-persist/lib/storage/session';
import { persistReducer, persistStore } from 'redux-persist'



const rootReducer = combineReducers({
    counter: counterReducer,
    pokemons: pokemonSlice.reducer
})

const persistConfig = {
    key: "root",
    storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = configureStore({
    reducer: persistedReducer
})

export const persistor = persistStore(store)