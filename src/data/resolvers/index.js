import {
  quizzes,
  panelModes,
  createQuiz,
  updateQuiz,
  deleteQuiz,
} from './quiz'

const resolvers = {
  Query: {
    quizzes,
  },
  Quiz: {
    panelModes,
  },
  Mutation: {
    createQuiz,
    updateQuiz,
    deleteQuiz,
  },
}

export default resolvers
