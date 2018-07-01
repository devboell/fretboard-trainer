import { set, lensProp } from 'ramda'

export const ITEM_SELECTION = 'ITEM_SELECTION'

export const selectItem = name => item => ({
  type: ITEM_SELECTION + name,
  item,
})

export const initialState = {
  selectedItem: undefined,
}

export default name => (state = initialState, action) => {
  switch (action.type) {
    case ITEM_SELECTION + name:
      return set(lensProp('selectedItem'), action.item, state)

    default:
      return state
  }
}
