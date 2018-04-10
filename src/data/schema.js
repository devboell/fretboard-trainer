import { makeExecutableSchema } from 'graphql-tools'
import resolvers from './resolvers'

const typeDefs = `

  type Quiz {
    id: ID
    name: String
  }

  type Query {
    quizzes: [Quiz]
  }

  type Mutation {
    createQuiz(
      name: String
    ): Quiz

    updateQuiz(
      id: ID
      name: String
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
