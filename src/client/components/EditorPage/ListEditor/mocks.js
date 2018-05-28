import { createStore, combineReducers } from 'redux'

import QUIZZES from 'graphql/Quizzes'
import PANEL_MODES from 'graphql/PanelModes'
import CREATE_QUIZ from 'graphql/CreateQuiz'
import UPDATE_QUIZ from 'graphql/UpdateQuiz'
import DELETE_QUIZ from 'graphql/DeleteQuiz'

import * as quizFxt from 'fixtures/graphql/quiz'
import * as panelFxt from 'fixtures/graphql/panelMode'

import runnerReducer, { initialState as initialRunnerState } from 'components/Runner/reducer'
import listReducer, { initialState as initialListState } from './ListContainer/reducer'
import editorReducer, { initialState as initialEditorState } from './EditorContainer/reducer'

export const quizzes = {
  request: { query: QUIZZES },
  result: { data: { quizzes: quizFxt.quizzes } },
}

export const panelModes = {
  request: { query: PANEL_MODES },
  result: { data: { panelModes: panelFxt.panelModes } },
}

export const createQuiz = {
  request: {
    query: CREATE_QUIZ,
    variables: quizFxt.createQuizInputValues,
  },
  result: { data: { createQuiz: quizFxt.createdQuiz } },
}

export const updateQuiz = {
  request: {
    query: UPDATE_QUIZ,
    variables: quizFxt.updateQuizInputValues,
  },
  result: { data: { updateQuiz: quizFxt.updatedQuiz } },
}

export const deleteQuiz = {
  request: {
    query: DELETE_QUIZ,
    variables: { id: '3' },
  },
  result: { data: { deleteQuiz: '3' } },
}

export const apolloMocks = [
  quizzes,
  panelModes,
  createQuiz,
  updateQuiz,
  deleteQuiz,
]

const initialState = {
  list: initialListState,
  editor: initialEditorState,
  runner: initialRunnerState,
}

export const store = createStore(combineReducers({
  list: listReducer,
  editor: editorReducer,
  runner: runnerReducer,
}), initialState)
