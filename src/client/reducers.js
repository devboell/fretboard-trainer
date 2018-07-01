import { combineReducers } from 'redux'
import listViewer from 'components/containers/ListViewer/reducer'
import listEditor from 'components/containers/ListEditor/reducer'
import runner from 'components/containers/Runner/reducer'

export default () => combineReducers({
  listViewer,
  listEditor,
  runner,
})
