
export const quizzes = [
  {
    id: '1',
    name: 'quiz one',
    __typename: 'Quiz',
  },
  {
    id: '2',
    name: 'quiz two',
    __typename: 'Quiz',
  },
  {
    id: '3',
    name: 'quiz three',
    __typename: 'Quiz',
  },
  {
    id: '4',
    name: 'quiz four',
    __typename: 'Quiz',
  },
  {
    id: '5',
    name: 'quiz five',
    __typename: 'Quiz',
  },
  {
    id: '6',
    name: 'quiz six',
    __typename: 'Quiz',
  },
]

export const loadingState = {
  loading: false,
  error: undefined,
}

export const clientState = {
  selectedQuizId: 'no_selection',
  isNew: false,
}

export const spies = () => ({
  updateQuiz: jest.fn(),
  createQuiz: jest.fn(),
  deleteQuiz: jest.fn(),
  selectQuiz: jest.fn(),
  clearQuizSelection: jest.fn(),
})

export default (selectedQuizId, isNew) => ({
  quizzes,
  ...spies(),
  selectedQuizId,
  isNew,
})
