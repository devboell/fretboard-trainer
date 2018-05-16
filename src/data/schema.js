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
    panelModes: [PanelMode]
  }

  type PanelMode {
    id: ID!
    question: String
    answer: String
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
    panelModeIds: [Int]
  }

  input UpdateQuizInput {
    id: ID!
    quiz: QuizInput
    panelModeIds: [Int]
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
