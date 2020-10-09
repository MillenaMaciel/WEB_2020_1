import { createStore, combineReducers } from 'redux'
import pokemonIdReducer from './reducers/pokemonId'
import numeroIdReducer from './reducers/numeroId'

const reducers = combineReducers(
    {
        pokemonId: pokemonIdReducer,
        numeroId: numeroIdReducer


    }

)

function storeConfig() {
    return createStore(reducers)
}

export default storeConfig