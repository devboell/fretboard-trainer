import {
  set,
  over,
  lensProp,
  lensPath,
  compose,
  append,
  without,
  pluck,
  assoc,
  dissoc,
} from 'ramda'

import { ITEM_SELECTION, CLEAR_SELECTION } from 'components/reusable/ListDetail'

const NEW_ITEM_SELECTION = 'NEW_ITEM_SELECTION'
const ITEM_UPDATE = 'ITEM_UPDATE'
const BUFFER_UPDATE = 'BUFFER_UPDATE'


export const selectNewItem = quizType => ({
  type: NEW_ITEM_SELECTION,
  quizType,
})


export const updateItem = quiz => ({
  type: ITEM_UPDATE,
  quiz,
})

export const updateBuffer = (key, value, updateType) => ({
  type: BUFFER_UPDATE,
  key,
  value,
  updateType,
})


export const modes = {
  UNSELECTED: 'UNSELECTED',
  SELECTED: 'SELECTED',
  NEW: 'NEW',
}

export const updateTypes = {
  SET: 'SET',
  ADD: 'ADD',
  REMOVE: 'REMOVE',
}

const newQuiz = type => ({
  id: undefined,
  name: '',
  description: '',
  type,
  tuning: 'standard',
  width: 13,
  panelModeIds: ['1'],
  allAnswers: false,
  allowIncorrect: false,
  useTimer: true,
  time: 5,
  showNotes: false,
  __typename: 'Quiz',
})

export const initialState = {
  original: undefined,
  buffer: undefined,
  mode: modes.UNSELECTED,
}

const convertPanelModes = (quiz) => {
  const panelModeIds = pluck('id', quiz.panelModes)
  return compose(
    assoc('panelModeIds', panelModeIds),
    dissoc('panelModes'),
  )(quiz)
}

const initBuffer = quiz => state => compose(
  set(lensProp('buffer'), quiz),
  set(lensProp('original'), quiz),
)(state)


const handleSelection = (quiz, mode) => state => compose(
  initBuffer(quiz),
  set(lensProp('mode'), mode),
)(state)

export default name => (state = initialState, action) => {
  switch (action.type) {
    /*
    case INIT_EDITOR: {
      const editableQuiz = convertPanelModes(action.quiz)
      return handleSelection(editableQuiz, modes.SELECTED)(state)
    }
    */
    case ITEM_SELECTION + name: {
      const editableQuiz = convertPanelModes(action.item)
      return handleSelection(editableQuiz, modes.SELECTED)(state)
    }

    case NEW_ITEM_SELECTION:
      return handleSelection(newQuiz(action.quizType), modes.NEW)(state)

    case CLEAR_SELECTION + name:
      return handleSelection(undefined, modes.UNSELECTED)(state)

    case ITEM_UPDATE: {
      const editableQuiz = convertPanelModes(action.quiz)
      return initBuffer(editableQuiz)(state)
    }

    case BUFFER_UPDATE: {
      const { key, value, updateType } = action
      const lensKey = lensPath(['buffer', key])

      switch (updateType) {
        case updateTypes.SET: {
          return set(lensKey, value, state)
        }
        case updateTypes.ADD: {
          return over(lensKey, append(value), state)
        }

        case updateTypes.REMOVE: {
          return over(lensKey, without([value]), state)
        }

        default:
          return state
      }
    }

    default:
      return state
  }
}
