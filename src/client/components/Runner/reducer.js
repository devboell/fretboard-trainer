import { compose, set, lensProp } from 'ramda'

const INIT_RUNNER = 'INIT_RUNNER'
const RESET_RUNNER = 'RESET_RUNNER'
const RUNNER_START = 'RUNNER_START'
const PANEL_MODE_SELECTION = 'PANEL_MODE_SELECTION'

export const initRunner = quiz => ({
  type: INIT_RUNNER,
  quiz,
})

export const resetRunner = () => ({
  type: RESET_RUNNER,
})

export const startRunner = question => ({
  type: RUNNER_START,
  question,
})

export const initialState = {
  quiz: undefined,
  question: undefined,
  selectedPanelModeId: undefined,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case INIT_RUNNER:
      return compose(
        set(lensProp('quiz'), action.quiz),
        set(lensProp('question'), undefined),
      )(state)

    case RESET_RUNNER:
      return set(lensProp('quiz'), undefined, state)

    case RUNNER_START:
      return set(lensProp('question'), action.question, state)

    default:
      return state
  }
}
