import { combineReducers } from 'redux'
import list from 'components/ListEditor/ListContainer/reducer'
import editor from 'components/ListEditor/EditorContainer/reducer'
import runner from 'components/Runner/reducer'

export default () => combineReducers({
  list,
  editor,
  runner,
})
