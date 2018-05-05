import { set, prop, lensProp, lensPath, compose } from 'ramda'

import { ITEM_SELECTION } from 'components/ListEditor/ListContainer/reducer'

const NEW_ITEM_SELECTION = 'NEW_ITEM_SELECTION'
const ITEM_UNSELECTION = 'ITEM_UNSELECTION'
const ITEM_UPDATE = 'ITEM_UPDATE'
const BUFFER_UPDATE = 'BUFFER_UPDATE'
const PREVIEW_TOGGLE = 'PREVIEW_TOGGLE'


export const selectNewItem = () => ({
  type: NEW_ITEM_SELECTION,
})

export const unselectItem = () => ({
  type: ITEM_UNSELECTION,
})

export const updateItem = quiz => ({
  type: ITEM_UPDATE,
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
  tuning: 'standard',
  width: 13,
  __typename: 'Quiz',
}

export const initialState = {
  original: undefined,
  buffer: undefined,
  mode: modes.UNSELECTED,
  showPreview: false,
}

const handleSelection = (quiz, mode, state) => compose(
  set(lensProp('buffer'), quiz),
  set(lensProp('original'), quiz),
  set(lensProp('mode'), mode),
)(state)

export default (state = initialState, action) => {
  switch (action.type) {
    case ITEM_SELECTION:
      return handleSelection(action.item, modes.SELECTED, state)

    case NEW_ITEM_SELECTION:
      return handleSelection(NEW_QUIZ, modes.NEW, state)

    case ITEM_UNSELECTION:
      return handleSelection(undefined, modes.UNSELECTED, state)

    case ITEM_UPDATE:
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
