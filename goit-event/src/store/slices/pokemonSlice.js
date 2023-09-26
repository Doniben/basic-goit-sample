import { createSlice } from '@reduxjs/toolkit'

export const pokemonSlice = createSlice({
    name: "pokemon",
    initialState:{
        pokemons: [],
        page: 0,
        loading: false
    },
    reducers: {
        isLoading: (state) => {
            state.loading = true
        },
        getPokemons: (state, action) => {
          console.log(action)
            state.pokemons = action.payload.pokemons,
            state.page = action.payload.page,
            state.loading = false
        }
    }
})

export const { isLoading, getPokemons } = pokemonSlice.actions
