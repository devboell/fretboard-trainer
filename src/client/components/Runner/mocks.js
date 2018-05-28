import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer, { initialState } from './reducer'


export const createMockStore = () =>
  createStore(
    combineReducers({ runner: reducer }),
    { runner: initialState },
    applyMiddleware(thunk),
  )


export { pcQuestion as mockQuestion } from 'fixtures/question'
