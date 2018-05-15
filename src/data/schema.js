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
    id: ID!
    name: String
    type: QuizTypeEnum
    tuning: TuningEnum
    width: Int
    panels: [Panel]
  }

  type Panel {
    id: ID!
    q: String
    a: String
  }

  type Query {
    quizzes: [Quiz]
  }

  input QuizInput {
    name: String
    type: QuizTypeEnum
    tuning: TuningEnum
    width: Int
  }

  input CreateQuizInput {
    quiz: QuizInput
    panelIds: [Int]
  }

  input UpdateQuizInput {
    id: ID!
    quiz: QuizInput
    panelIds: [Int]
  }

  type Mutation {
    createQuiz(
      input: CreateQuizInput
    ): Quiz

    updateQuiz(
      input: UpdateQuizInput
    ): Quiz

    deleteQuiz(
      id: ID!
    ): String  
  }

  schema {
    query: Query
    mutation: Mutation
  }
`

export default makeExecutableSchema({ typeDefs, resolvers })
