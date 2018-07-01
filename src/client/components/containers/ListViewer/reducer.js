import listReducer from 'components/containers/QuizList/reducer'

export const initialState = {}

export default (state = initialState, action) => ({
  list: listReducer('listViewer')(state.list, action),
})
