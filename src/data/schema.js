import { makeExecutableSchema } from 'graphql-tools'
import resolvers from './resolvers'

const typeDefs = `

  type Quiz {
    name: String
  }

  type Query {
    quizzes: [Quiz]
  }

  schema {
    query: Query
  }
`

export default makeExecutableSchema({ typeDefs, resolvers })
