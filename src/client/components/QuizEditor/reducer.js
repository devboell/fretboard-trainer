import { set, lensProp, compose, find, propEq } from 'ramda'

const QUIZ_SELECTION = 'QUIZ_SELECTION'

export const selectQuiz = quizzes => id => ({
  type: QUIZ_SELECTION,
  quiz: find(propEq('id', id), quizzes),
  id,
})

const initialState = {
  selectedQuizId: undefined,
  original: undefined,
  buffer: undefined,
}


export default (state = initialState, action) => {
  switch (action.type) {
    case QUIZ_SELECTION:
      return compose(
        set(lensProp('selectedQuizId'), action.id),
        set(lensProp('original'), action.quiz),
        set(lensProp('buffer'), action.quiz),
      )(state)
    default:
      return state
  }
}
