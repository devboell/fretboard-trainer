import { createStore, combineReducers } from 'redux'

import QUIZZES from 'graphql/Quizzes'
import CREATE_QUIZ from 'graphql/CreateQuiz'
import UPDATE_QUIZ from 'graphql/UpdateQuiz'
import DELETE_QUIZ from 'graphql/DeleteQuiz'

import * as fxt from 'fixtures/graphql/quiz'

import listReducer, { initialState as initialListState } from './ListContainer/reducer'
import editorReducer, { initialState as initialEditorState } from './EditorContainer/reducer'


export const quizzesMocks = [
  {
    request: { query: QUIZZES },
    result: { data: { quizzes: fxt.quizzes } },
  },
]

export const crudMocks = [
  {
    request: {
      query: CREATE_QUIZ,
      variables: fxt.createQuizInputValues,
    },
    result: { data: { createQuiz: fxt.createdQuiz } },
  },
  {
    request: {
      query: UPDATE_QUIZ,
      variables: fxt.updateQuizInputValues,
    },
    result: { data: { updateQuiz: fxt.updatedQuiz } },
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
