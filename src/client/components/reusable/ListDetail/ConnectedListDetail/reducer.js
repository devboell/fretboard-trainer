import { set, lensProp } from 'ramda'

export const ITEM_SELECTION = 'ITEM_SELECTION'
export const CLEAR_SELECTION = 'CLEAR_SELECTION'

export const selectItem = name => item => ({
  type: ITEM_SELECTION + name,
  item,
})

export const clearSelection = name => () => ({
  type: CLEAR_SELECTION + name,
})

export const initialState = {
  selectedItemId: 'no_selection',
}

export default name => (state = initialState, action) => {
  switch (action.type) {
    case ITEM_SELECTION + name:
      return set(lensProp('selectedItemId'), action.item.id, state)

    case CLEAR_SELECTION + name:
      return set(lensProp('selectedItemId'), 'no_selection', state)

    default:
      return state
  }
}
