import { set, lensProp } from 'ramda'

export const ITEM_SELECTION = 'ITEM_SELECTION'

export const selectItem = item => ({
  type: ITEM_SELECTION,
  item,
})

export const initialState = {
  selectedItem: undefined,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ITEM_SELECTION:
      return set(lensProp('selectedItem'), action.item, state)

    default:
      return state
  }
}
