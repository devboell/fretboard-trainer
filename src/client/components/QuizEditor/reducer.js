import { set, lensProp } from 'ramda'

const QUIZ_SELECTION = 'QUIZ_SELECTION'

export const selectQuiz = id => ({
  type: QUIZ_SELECTION,
  id,
})

const initialState = {
  selectedQuizId: undefined,
}


export default (state = initialState, action) => {
  switch (action.type) {
    case QUIZ_SELECTION:
      return set(lensProp('selectedQuizId'), action.id, state)
    default:
      return state
  }
}
