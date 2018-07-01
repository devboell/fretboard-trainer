import { combineReducers } from 'redux'
import list from 'components/containers/QuizList/reducer'
import listViewer from 'components/containers/ListViewer/reducer'
import editor from 'components/presentational/EditorPage/ListEditor/EditorContainer/reducer'
import runner from 'components/containers/Runner/reducer'

export default () => combineReducers({
  listViewer,
  list,
  editor,
  runner,
})
