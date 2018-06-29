import { combineReducers } from 'redux'
import list from 'components/QuizList/reducer'
import listView from 'components/ListView/reducer'
import editor from 'components/EditorPage/ListEditor/EditorContainer/reducer'
import runner from 'components/Runner/reducer'

export default () => combineReducers({
  listView,
  list,
  editor,
  runner,
})
