import { makeExecutableSchema } from 'graphql-tools'
import resolvers from './resolvers'

const typeDefs = `
  enum QuizTypeEnum {
    pc
  }

  enum TuningEnum {
    standard
  }

  type Quiz {
    id: ID
    name: String
    type: QuizTypeEnum
    tuning: TuningEnum
    width: Int
  }

  type Query {
    quizzes: [Quiz]
  }

  type Mutation {
    createQuiz(
      name: String
      type: QuizTypeEnum
      tuning: TuningEnum
      width: Int
    ): Quiz

    updateQuiz(
      id: ID
      name: String
      type: QuizTypeEnum
      tuning: TuningEnum
      width: Int
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
