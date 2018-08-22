import { reducer as listReducer } from 'components/reusable/ListDetail'
import editorReducer from 'components/containers/QuizEditor/reducer'

export const initialState = {}

export default (state = initialState, action) => ({
  list: listReducer('listEditor')(state.list, action),
  editor: editorReducer('listEditor')(state.editor, action),
})
