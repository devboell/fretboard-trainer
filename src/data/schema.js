import { makeExecutableSchema } from 'graphql-tools'
import resolvers from './resolvers'

const typeDefs = `

  type Dummy {
    name: String
  }

  type Query {
    dummies: [Dummy]
  }

  schema {
    query: Query
  }
`

const schema = makeExecutableSchema({ typeDefs, resolvers })
module.exports = schema
