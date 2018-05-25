import {
  compose,
  set,
  lensProp,
  lensPath,
  over,
  append,
} from 'ramda'

const INIT_RUNNER = 'INIT_RUNNER'
const RESET_RUNNER = 'RESET_RUNNER'
const RUNNER_START = 'RUNNER_START'
const PANEL_MODE_SELECTION = 'PANEL_MODE_SELECTION'
const CORRECT_ANSWER = 'CORRECT_ANSWER'
const INCORRECT_ANSWER = 'INCORRECT_ANSWER'

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

export const selectPanelModeIdx = idx => ({
  type: PANEL_MODE_SELECTION,
  idx,
})

export const addCorrectAnswer = answer => ({
  type: CORRECT_ANSWER,
  answer,
})

export const addIncorrectAnswer = answer => ({
  type: INCORRECT_ANSWER,
  answer,
})

const initialAnswers = {
  correct: [],
  incorrect: [],
}

export const initialState = {
  quiz: undefined,
  question: undefined,
  selectedPanelModeIdx: 0,
  answers: initialAnswers,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case INIT_RUNNER:
      return compose(
        set(lensProp('quiz'), action.quiz),
        set(lensProp('question'), undefined),
        set(lensProp('selectedPanelModeIdx'), 0),
        set(lensProp('answers'), initialAnswers),
      )(state)

    case RESET_RUNNER:
      return set(lensProp('quiz'), undefined, state)

    case RUNNER_START:
      return compose(
        set(lensProp('answers'), initialAnswers),
        set(lensProp('question'), action.question),
      )(state)

    case PANEL_MODE_SELECTION:
      return set(lensProp('selectedPanelModeIdx'), action.idx, state)

    case CORRECT_ANSWER: {
      const correctLens = lensPath(['answers', 'correct'])
      return over(correctLens, append(action.answer), state)
    }

    case INCORRECT_ANSWER: {
      const incorrectLens = lensPath(['answers', 'incorrect'])
      return over(incorrectLens, append(action.answer), state)
    }

    default:
      return state
  }
}
