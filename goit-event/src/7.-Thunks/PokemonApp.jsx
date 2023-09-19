import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { pokemonThunk } from '../store/slices/pokemonThunk'
import { CirclesWithBar } from "react-loader-spinner";

export const PokemonApp = () => {
  const dispatch = useDispatch()
  const { pokemons, page, loading } = useSelector(state => state.pokemons)
  useEffect(() => {
    dispatch( pokemonThunk() )
  }, [dispatch])
  
  return (
    <div className='container mt-5'>
        <div className="d-flex flex-column align-items-center">
          <h1 className="text-center">Pokemon Thunks App</h1>
          <h4 className="text-center">Loading: { loading ? 'True' : 'False' }</h4>
          {
            loading ? (<CirclesWithBar
              height={50}
              width={50}
              color="#4fa94d"
              visible={true}
              ariaLabel="circles-with-bar-loading"
            />) : (<br />)
          }
        </div>
        <hr />
        <ul className="item-group">
          {
            pokemons.map(pokemon => (<li className="list-group-item text-capitalize" key={pokemon.name}>{ pokemon.name }</li>))
          }
          <button className="btn btn-success mt-2" onClick={() => dispatch(pokemonThunk(page))}>Next</button>
        </ul>
    </div>
  )
}
