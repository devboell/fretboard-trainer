import { reducer as listReducer } from 'components/reusable/ListDetail'

export const initialState = {}

export default (state = initialState, action) => ({
  list: listReducer('listViewer')(state.list, action),
})
