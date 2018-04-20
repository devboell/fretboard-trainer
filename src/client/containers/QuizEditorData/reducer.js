import { lensProp, set } from 'ramda'

const initialState = {
  selectedQuizId: 'no_selection',
  isNew: false,
  editedQuiz: undefined,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SELECTED_QUIZ_ID':
      return { ...state, selectedQuizId: action.id }
    case 'SET_IS_NEW':
      return { ...state, isNew: action.flag }
    case 'SET_EDITED_QUIZ':
      return { ...state, editedQuiz: action.quiz }
    case 'UPDATE_EDITED_QUIZ': {
      const { key, value } = action
      const lensKey = lensProp(key)
      const { editedQuiz } = state
      return {
        ...state,
        editedQuiz: set(lensKey, value, editedQuiz),
      }
    }

    default:
      return state
  }
}
