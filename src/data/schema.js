import { makeExecutableSchema } from 'graphql-tools'
import resolvers from './resolvers'

const typeDefs = `
  enum QuizTypeEnum {
    pc
    pitch
  }

  enum TuningEnum {
    standard
  }

  enum TimerTypeEnum {
    none
    normal
    strict
  }

  type Quiz {
    id: ID!
    name: String
    type: QuizTypeEnum
    timer: Timer
    tuning: TuningEnum
    width: Int
    panelModes: [PanelMode]
  }

  type Timer {
    type: TimerTypeEnum
    pause: Int
    time: Int
  }

  type PanelMode {
    id: ID!
    question: String
    answer: String
  }

  type Query {
    quizzes: [Quiz]
    panelModes: [PanelMode]
  }

  input QuizInput {
    name: String
    type: QuizTypeEnum
    tuning: TuningEnum
    width: Int
  }

  input TimerInput {
    type: TimerTypeEnum
    pause: Int
    time: Int
  }

  input CreateQuizInput {
    quiz: QuizInput
    timer: TimerInput
    panelModeIds: [Int]
  }

  input UpdateQuizInput {
    id: ID!
    quiz: QuizInput
    timer: TimerInput
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
