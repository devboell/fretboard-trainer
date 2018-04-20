
export const quizzes = [
  {
    id: '1',
    name: 'quiz one',
    type: 'pc',
    __typename: 'Quiz',
  },
  {
    id: '2',
    name: 'quiz two',
    type: 'pc',
    __typename: 'Quiz',
  },
  {
    id: '3',
    name: 'quiz three',
    type: 'pc',
    __typename: 'Quiz',
  },
  {
    id: '4',
    name: 'quiz four',
    type: 'pc',
    __typename: 'Quiz',
  },
  {
    id: '5',
    name: 'quiz five',
    type: 'pc',
    __typename: 'Quiz',
  },
  {
    id: '6',
    name: 'quiz six',
    type: 'pc',
    __typename: 'Quiz',
  },
]

export const loadingState = {
  loading: false,
  error: undefined,
}

const newQuiz = {
  id: undefined,
  name: '',
  type: 'pc',
  __typename: 'Quiz',
}

export const newEditedQuiz = {
  id: undefined,
  name: 'new',
  type: 'pc',
  __typename: 'Quiz',
}

export const updatedEditedQuiz = {
  id: '1',
  name: 'updated',
  type: 'pc',
  __typename: 'Quiz',
}

export const spies = () => ({
  updateQuiz: jest.fn(),
  createQuiz: jest.fn().mockResolvedValue(newEditedQuiz),
  deleteQuiz: jest.fn(),
  onSelectQuiz: jest.fn(),
  onSelectNewQuiz: jest.fn(),
  onDeselectQuiz: jest.fn(),
  onUpdateEditedQuiz: jest.fn(),
})

const selectedQuiz = (selectedQuizId, isNew) => {
  if (isNew) return newQuiz
  if (selectedQuizId === 'no_selection') return undefined
  return quizzes.filter(qz => qz.id === selectedQuizId)[0]
}

export default (selectedQuizId, isNew) => ({
  quizzes,
  ...spies(),
  selectedQuizId,
  isNew,
  editedQuiz: selectedQuiz(selectedQuizId, isNew),
  selectedQuiz: selectedQuiz(selectedQuizId, isNew),
})
