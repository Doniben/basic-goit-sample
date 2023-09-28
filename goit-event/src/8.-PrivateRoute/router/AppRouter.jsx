import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../../pages/Home'
import { PokemonApp } from '../../7.-Thunks/PokemonApp'
import { RedirectedPage } from '../../pages/RedirectedPage'
import { PrivateRoute } from './privateRoute'

export const AppRouter = () => {
    const authenticated = true
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/dashboard'>
            <Route path='pokemons' element={
                <PrivateRoute auth={ authenticated }>
                    <PokemonApp />
                </PrivateRoute>
            } />
        </Route>
        <Route path='/redirected-page' element={ <RedirectedPage /> }/>
    </Routes>
  )
}
