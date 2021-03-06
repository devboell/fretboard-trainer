import React from 'react'
import TestProvider from 'test-utils'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import QUIZZES from 'graphql/Quizzes'
import PANEL_MODES from 'graphql/PanelModes'
import CREATE_QUIZ from 'graphql/CreateQuiz'
import UPDATE_QUIZ from 'graphql/UpdateQuiz'
import DELETE_QUIZ from 'graphql/DeleteQuiz'

import * as quizFxt from 'fixtures/graphql/quiz'
import * as panelFxt from 'fixtures/graphql/panelMode'


import listViewerReducer, { initialState as initialListViewerState } from 'components/containers/ListViewer/reducer'
import listEditorReducer, { initialState as initialListEditorState } from 'components/containers/ListEditor/reducer'
import runnerReducer, { initialState as initialRunnerState } from 'components/containers/Runner/reducer'

import ListEditor from './index'


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

export const dataMocks = [
  quizzes,
  panelModes,
  createQuiz,
  updateQuiz,
  deleteQuiz,
]

const initialState = {
  listViewer: initialListViewerState,
  listEditor: initialListEditorState,
  runner: initialRunnerState,
}

export const store = createStore(
  combineReducers({
    listViewer: listViewerReducer,
    listEditor: listEditorReducer,
    runner: runnerReducer,
  }),
  initialState,
  applyMiddleware(thunk),
)

export const getWrapper = async () => {
  const wrapper = mount((
    <TestProvider
      store={store}
      mocks={dataMocks}
    >
      <ListEditor />
    </TestProvider>
  ))
  // makes sure the loading is done
  await new Promise(resolve => setTimeout(resolve))
  await new Promise(resolve => setTimeout(resolve))
  wrapper.update()

  return wrapper
}
