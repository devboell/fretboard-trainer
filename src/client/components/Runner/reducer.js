import {
  compose,
  set,
  lensProp,
  lensPath,
  over,
  append,
  add,
} from 'ramda'

const RUNNER_INIT = 'RUNNER_INIT'
const RUNNER_STOP = 'RUNNER_STOP'
const RUNNER_START = 'RUNNER_START'
const PANEL_MODE_SELECTION = 'PANEL_MODE_SELECTION'
const CORRECT_ANSWER = 'CORRECT_ANSWER'
const INCORRECT_ANSWER = 'INCORRECT_ANSWER'
const SET_QUESTION = 'SET_QUESTION'
const ELAPSED_TIME_INCREMENT = 'ELAPSED_TIME_INCREMENT'

export const initRunner = quiz => ({
  type: RUNNER_INIT,
  quiz,
})

export const stopRunner = () => ({
  type: RUNNER_STOP,
})

export const startRunner = () => ({
  type: RUNNER_START,
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

export const setQuestion = question => ({
  type: SET_QUESTION,
  question,
})

export const incrementElapsedTime = tick => ({
  type: ELAPSED_TIME_INCREMENT,
  tick,
})

export const statusMap = {
  READY: 'READY',
  RUNNING: 'RUNNING',
}

const initialAnswers = {
  correct: [],
  incorrect: [],
}

const initialElapsedTime = 1000

export const initialState = {
  quiz: undefined,
  question: undefined,
  selectedPanelModeIdx: 0,
  answers: initialAnswers,
  status: undefined,
  elapsedTime: initialElapsedTime,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case RUNNER_INIT:
      return compose(
        set(lensProp('quiz'), action.quiz),
        set(lensProp('question'), undefined),
        set(lensProp('selectedPanelModeIdx'), 0),
        set(lensProp('answers'), initialAnswers),
        set(lensProp('status'), statusMap.READY),
        set(lensProp('elapsedTime'), initialElapsedTime),
      )(state)

    case RUNNER_STOP:
      return compose(
        set(lensProp('status'), statusMap.READY),
        set(lensProp('question'), undefined),
        set(lensProp('elapsedTime'), initialElapsedTime),
      )(state)

    case RUNNER_START:
      return set(lensProp('status'), statusMap.RUNNING, state)

    case SET_QUESTION:
      return compose(
        set(lensProp('answers'), initialAnswers),
        set(lensProp('elapsedTime'), initialElapsedTime),
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

    case ELAPSED_TIME_INCREMENT:
      return over(lensProp('elapsedTime'), add(action.tick), state)

    default:
      return state
  }
}
