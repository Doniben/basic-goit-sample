// Thunk/Async Operation => Acción que invoca otra acción

import { getPokemons, isLoading } from "./pokemonSlice"

export const pokemonThunk = (page = 0) => {
    return async(dispatch, getState) => {
        dispatch( isLoading() )
        const baseUrl = 'https://pokeapi.co/api/v2'
        const res = await fetch(baseUrl + `/pokemon?limit=10&offset=${page * 10}`)
        const data = await res.json();
        dispatch( getPokemons({
            pokemons: data.results,
            page: page + 1,
        }) )
    }
}
