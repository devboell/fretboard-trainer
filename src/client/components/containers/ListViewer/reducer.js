import { set, lensProp } from 'ramda'
import listReducer, {
  initialState as initialListState,
  ITEM_SELECTION,
} from 'components/containers/QuizList/reducer'

export { selectItem } from 'components/containers/QuizList/reducer'

export const selectItemId = id => ({
  type: ITEM_SELECTION,
  id,
})

export const initialState = {
  list: initialListState,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ITEM_SELECTION:
      return set(lensProp('list'), listReducer(state, action), state)

    default:
      return state
  }
}
