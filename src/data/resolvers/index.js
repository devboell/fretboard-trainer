import {
  quizzes,
  timer,
  panelModes as panels,
  createQuiz,
  updateQuiz,
  deleteQuiz,
} from './quiz'
import { panelModes } from './panelMode'

const resolvers = {
  Query: {
    quizzes,
    panelModes,
  },
  Quiz: {
    timer,
    panelModes: panels,
  },
  Mutation: {
    createQuiz,
    updateQuiz,
    deleteQuiz,
  },
}

export default resolvers
