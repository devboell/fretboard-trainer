import {
  quizzes,
  createQuiz,
  updateQuiz,
  deleteQuiz,
} from './quiz'

const resolvers = {
  Query: {
    quizzes,
  },
  Mutation: {
    createQuiz,
    updateQuiz,
    deleteQuiz,
  },
}

export default resolvers
