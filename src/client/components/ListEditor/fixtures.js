import { createStore, combineReducers } from 'redux'

import listReducer, { initialState as initialListState } from './ListContainer/reducer'
import editorReducer, { initialState as initialEditorState } from './EditorContainer/reducer'
import QUIZZES from './ListContainer/queries'
import {
  CREATE_QUIZ,
  UPDATE_QUIZ,
  DELETE_QUIZ,
} from './EditorContainer/mutations'

const tuning = 'standard'
const width = 13

export const quizzes = [
  {
    id: '1',
    name: 'quiz one',
    type: 'pc',
    tuning,
    width,
    __typename: 'Quiz',
  },
  {
    id: '2',
    name: 'quiz two',
    type: 'pc',
    tuning,
    width,
    __typename: 'Quiz',
  },
  {
    id: '3',
    name: 'quiz three',
    type: 'pc',
    tuning,
    width,
    __typename: 'Quiz',
  },
  {
    id: '4',
    name: 'quiz four',
    type: 'pc',
    tuning,
    width,
    __typename: 'Quiz',
  },
  {
    id: '5',
    name: 'quiz five',
    type: 'pc',
    tuning,
    width,
    __typename: 'Quiz',
  },
  {
    id: '6',
    name: 'quiz six',
    type: 'pc',
    tuning,
    width,
    __typename: 'Quiz',
  },
]

export const quiz3 = {
  id: '3',
  name: 'quiz three',
  type: 'pc',
  tuning,
  width,
  __typename: 'Quiz',
}

export const newQuiz = {
  name: 'new',
  type: 'pc',
  tuning,
  width,
  __typename: 'Quiz',
}

export const updatedQuiz = {
  id: '3',
  name: 'updated',
  type: 'pc',
  tuning,
  width,
}

export const createdQuiz = {
  id: '7',
  name: 'new',
  type: 'pc',
  tuning,
  width,
  __typename: 'Quiz',
}


export const quizzesMocks = [
  {
    request: { query: QUIZZES },
    result: { data: { quizzes } },
  },
]

export const crudMocks = [
  {
    request: {
      query: CREATE_QUIZ,
      variables: newQuiz,
    },
    result: { data: { createQuiz: createdQuiz } },
  },
  {
    request: {
      query: UPDATE_QUIZ,
      variables: updatedQuiz,
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
  list: initialListState,
  editor: initialEditorState,
}

export const store = createStore(combineReducers({
  list: listReducer,
  editor: editorReducer,
}), initialState)
