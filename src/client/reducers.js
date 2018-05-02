import { combineReducers } from 'redux'
import list from 'components/ListEditor/ListContainer/reducer'
import editor from 'components/ListEditor/EditorContainer/reducer'

export default () => combineReducers({
  list,
  editor,
})
