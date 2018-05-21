import { combineReducers } from 'redux'
import list from 'components/EditorPage/ListEditor/ListContainer/reducer'
import editor from 'components/EditorPage/ListEditor/EditorContainer/reducer'
import runner from 'components/Runner/reducer'

export default () => combineReducers({
  list,
  editor,
  runner,
})
