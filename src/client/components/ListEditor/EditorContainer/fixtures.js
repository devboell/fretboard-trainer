import { createStore, combineReducers } from 'redux'

import reducer, { initialState as initialEditorState } from './reducer'
import { CREATE_QUIZ, UPDATE_QUIZ, DELETE_QUIZ } from './mutations'

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

export const crudMocks = [
  {
    request: {
      query: CREATE_QUIZ,
      variables: {
        name: 'new', type: 'pc', __typename: 'Quiz',
      },
    },
    result: { data: { createQuiz: createdQuiz } },
  },
  {
    request: {
      query: UPDATE_QUIZ,
      variables: {
        id: '3', name: 'updated', type: 'pc',
      },
    },
    result: { data: { updateQuiz: updatedQuiz } },
  },
  {
    request: {
      query: DELETE_QUIZ,
      variables: { id: '3' },
    },
    result: { data: { deleteQuiz: '3' } },
  },
]

const initialState = {
  editor: initialEditorState,
}

export const store = createStore(combineReducers({ editor: reducer }), initialState)
