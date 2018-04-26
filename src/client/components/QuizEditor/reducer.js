import { set, lensProp, lensPath, compose, find, propEq } from 'ramda'

const QUIZ_SELECTION = 'QUIZ_SELECTION'
const NEW_QUIZ_SELECTION = 'NEW_QUIZ_SELECTION'
const UPDATE_QUIZ = 'UPDATE_QUIZ'
const BUFFER_UPDATE = 'BUFFER_UPDATE'

export const selectQuiz = quizzes => id => ({
  type: QUIZ_SELECTION,
  quiz: find(propEq('id', id), quizzes),
  id,
})

export const selectNewQuiz = () => ({
  type: NEW_QUIZ_SELECTION,
})

export const updateQuiz = quiz => ({
  type: UPDATE_QUIZ,
  quiz,
})

export const updateBuffer = (key, value) => ({
  type: BUFFER_UPDATE,
  key,
  value,
})

export const modes = {
  UNSELECTED: 'UNSELECTED',
  SELECTED: 'SELECTED',
  NEW: 'NEW',
}

const NEW_QUIZ = {
  id: undefined,
  name: '',
  type: 'pc',
  __typename: 'Quiz',
}

export const initialState = {
  selectedQuizId: undefined,
  original: undefined,
  buffer: undefined,
  mode: modes.UNSELECTED,
}

const handleSelection = (id, quiz, mode, state) => compose(
  set(lensProp('selectedQuizId'), id),
  set(lensProp('buffer'), quiz),
  set(lensProp('original'), quiz),
  set(lensProp('mode'), mode),
)(state)

export default (state = initialState, action) => {
  switch (action.type) {
    case QUIZ_SELECTION:
      return handleSelection(action.id, action.quiz, modes.SELECTED, state)

    case NEW_QUIZ_SELECTION:
      return handleSelection(undefined, NEW_QUIZ, modes.NEW, state)

    case UPDATE_QUIZ:
      return compose(
        set(lensProp('buffer'), action.quiz),
        set(lensProp('original'), action.quiz),
      )(state)

    case BUFFER_UPDATE: {
      const { key, value } = action
      const lensKey = lensPath(['buffer', key])

      return set(lensKey, value, state)
    }

    default:
      return state
  }
}
