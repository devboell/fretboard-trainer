import { set, lensProp, lensPath, compose, find, propEq } from 'ramda'

const QUIZ_SELECTION = 'QUIZ_SELECTION'
const BUFFER_UPDATE = 'BUFFER_UPDATE'

export const selectQuiz = quizzes => id => ({
  type: QUIZ_SELECTION,
  quiz: find(propEq('id', id), quizzes),
  id,
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

export const initialState = {
  selectedQuizId: undefined,
  original: undefined,
  buffer: undefined,
  mode: modes.UNSELECTED,
}


export default (state = initialState, action) => {
  switch (action.type) {
    case QUIZ_SELECTION:
      return compose(
        set(lensProp('selectedQuizId'), action.id),
        set(lensProp('buffer'), action.quiz),
        set(lensProp('original'), action.quiz),
        set(lensProp('mode'), modes.SELECTED),
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
