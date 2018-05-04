import { set, lensProp } from 'ramda'

const INIT_RUNNER = 'INIT_RUNNER'
const RESET_RUNNER = 'RESET_RUNNER'

export const initRunner = quiz => ({
  type: INIT_RUNNER,
  quiz,
})

export const resetRunner = () => ({
  type: RESET_RUNNER,
})

const initialState = {
  quiz: undefined,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case INIT_RUNNER:
      return set(lensProp('quiz'), action.quiz, state)

    case RESET_RUNNER:
      return set(lensProp('quiz'), undefined, state)

    default:
      return state
  }
}
