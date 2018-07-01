import listReducer from 'components/containers/QuizList/reducer'
import editorReducer from 'components/containers/QuizEditor/reducer'

export const initialState = {}

export default (state = initialState, action) => ({
  list: listReducer('listEditor')(state.list, action),
  editor: editorReducer(state.editor, action),
})
