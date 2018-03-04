import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-client-preset'

const link = new HttpLink({
  uri: '/graphql',
  credentials: 'same-origin',
})

export default new ApolloClient({
  link,
  cache: new InMemoryCache().restore({}),
})
