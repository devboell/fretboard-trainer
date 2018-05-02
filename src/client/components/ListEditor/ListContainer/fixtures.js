import { createStore, combineReducers } from 'redux'

import reducer, { initialState as initialListState } from './reducer'
import QUIZZES from './queries'

export const quizzes = [
  {
    id: '1',
    name: 'quiz one',
    type: 'pc',
    __typename: 'Quiz',
  },
  {
    id: '2',
    name: 'quiz two',
    type: 'pc',
    __typename: 'Quiz',
  },
  {
    id: '3',
    name: 'quiz three',
    type: 'pc',
    __typename: 'Quiz',
  },
  {
    id: '4',
    name: 'quiz four',
    type: 'pc',
    __typename: 'Quiz',
  },
  {
    id: '5',
    name: 'quiz five',
    type: 'pc',
    __typename: 'Quiz',
  },
  {
    id: '6',
    name: 'quiz six',
    type: 'pc',
    __typename: 'Quiz',
  },
]

export const quiz3 = {
  id: '3',
  name: 'quiz three',
  type: 'pc',
  __typename: 'Quiz',
}

export const updatedQuiz = {
  id: '3',
  name: 'updated',
  type: 'pc',
  __typename: 'Quiz',
}

export const createdQuiz = {
  id: '7',
  name: 'new',
  type: 'pc',
  __typename: 'Quiz',
}

export const quizzesMocks = [
  {
    request: { query: QUIZZES },
    result: { data: { quizzes } },
  },
]

const initialState = {
  list: initialListState,
}

export const store = createStore(combineReducers({ list: reducer }), initialState)
