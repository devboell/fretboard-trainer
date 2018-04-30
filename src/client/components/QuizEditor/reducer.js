import { set, prop, lensProp, lensPath, compose } from 'ramda'

const QUIZ_SELECTION = 'QUIZ_SELECTION'
const NEW_QUIZ_SELECTION = 'NEW_QUIZ_SELECTION'
const QUIZ_UNSELECTION = 'QUIZ_UNSELECTION'
const QUIZ_UPDATE = 'QUIZ_UPDATE'
const BUFFER_UPDATE = 'BUFFER_UPDATE'
const PREVIEW_TOGGLE = 'PREVIEW_TOGGLE'

export const selectQuiz = quiz => ({
  type: QUIZ_SELECTION,
  quiz,
})

export const selectNewQuiz = () => ({
  type: NEW_QUIZ_SELECTION,
})

export const unselectQuiz = () => ({
  type: QUIZ_UNSELECTION,
})

export const updateQuiz = quiz => ({
  type: QUIZ_UPDATE,
  quiz,
})

export const updateBuffer = (key, value) => ({
  type: BUFFER_UPDATE,
  key,
  value,
})

export const togglePreview = () => ({
  type: PREVIEW_TOGGLE,
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
  showPreview: false,
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
      return handleSelection(action.quiz.id, action.quiz, modes.SELECTED, state)

    case NEW_QUIZ_SELECTION:
      return handleSelection(undefined, NEW_QUIZ, modes.NEW, state)

    case QUIZ_UNSELECTION:
      return handleSelection(undefined, undefined, modes.UNSELECTED, state)

    case QUIZ_UPDATE:
      return compose(
        set(lensProp('buffer'), action.quiz),
        set(lensProp('original'), action.quiz),
      )(state)

    case BUFFER_UPDATE: {
      const { key, value } = action
      const lensKey = lensPath(['buffer', key])

      return set(lensKey, value, state)
    }

    case PREVIEW_TOGGLE:
      return set(lensProp('showPreview'), !prop('showPreview', state), state)

    default:
      return state
  }
}
