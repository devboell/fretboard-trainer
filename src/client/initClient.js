import ApolloClient from 'apollo-boost'


export default new ApolloClient({
  clientState: {
    defaults: {
      selectedQuizId: 'no_selection',
      isNew: false,
    },
  },
})
