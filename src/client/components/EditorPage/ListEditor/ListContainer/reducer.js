import { set, lensProp } from 'ramda'
import {
  NEW_ITEM_SELECTION,
  ITEM_UNSELECTION,
} from 'components/ListEditor/EditorContainer/reducer'

export const ITEM_SELECTION = 'ITEM_SELECTION'

export const selectItem = item => ({
  type: ITEM_SELECTION,
  item,
})

export const initialState = {
  selectedItemId: undefined,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ITEM_SELECTION:
      return set(lensProp('selectedItemId'), action.item.id, state)
    case NEW_ITEM_SELECTION:
    case ITEM_UNSELECTION:
      return set(lensProp('selectedItemId'), undefined)

    default:
      return state
  }
}
