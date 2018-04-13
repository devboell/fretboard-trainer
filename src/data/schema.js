import { makeExecutableSchema } from 'graphql-tools'
import resolvers from './resolvers'

const typeDefs = `
  enum QuizTypeEnum {
    pc
  }

  type Quiz {
    id: ID
    name: String
    type: QuizTypeEnum
  }

  type Query {
    quizzes: [Quiz]
  }

  type Mutation {
    createQuiz(
      name: String
      type: QuizTypeEnum
    ): Quiz

    updateQuiz(
      id: ID
      name: String
      type: QuizTypeEnum
    ): Quiz

    deleteQuiz(
      id: ID
    ): String  
  }

  schema {
    query: Query
    mutation: Mutation
  }
`

export default makeExecutableSchema({ typeDefs, resolvers })
