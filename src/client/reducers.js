import { combineReducers } from 'redux'
import list from 'components/QuizList/reducer'
import listViewer from 'components/ListViewer/reducer'
import editor from 'components/EditorPage/ListEditor/EditorContainer/reducer'
import runner from 'components/Runner/reducer'

export default () => combineReducers({
  listViewer,
  list,
  editor,
  runner,
})
