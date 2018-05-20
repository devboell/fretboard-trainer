import { createStore, combineReducers } from 'redux'
import reducer, { initialState } from './reducer'


export const store = createStore(combineReducers({ runner: reducer }), initialState)
export const bla = 'bla'
