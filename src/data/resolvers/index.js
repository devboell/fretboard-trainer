import {
  quizzes,
  panels,
  createQuiz,
  updateQuiz,
  deleteQuiz,
} from './quiz'

const resolvers = {
  Query: {
    quizzes,
  },
  Quiz: {
    panels,
  },
  Mutation: {
    createQuiz,
    updateQuiz,
    deleteQuiz,
  },
}

export default resolvers
