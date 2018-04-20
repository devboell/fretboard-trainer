export const setSelectedQuizId = id => ({
  type: 'SET_SELECTED_QUIZ_ID',
  id,
})

export const setIsNew = flag => ({
  type: 'SET_IS_NEW',
  flag,
})

export const setEditedQuiz = quiz => ({
  type: 'SET_EDITED_QUIZ',
  quiz,
})

export const updateEditedQuiz = (key, value) => ({
  type: 'UPDATE_EDITED_QUIZ',
  key,
  value,
})
