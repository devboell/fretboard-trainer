import 'babel-polyfill'
import 'raf/polyfill'
import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { ApolloProvider } from 'react-apollo'
import { AppContainer } from 'react-hot-loader' // eslint-disable-line import/no-extraneous-dependencies
import { BrowserRouter } from 'react-router-dom'
import App from 'components/presentational/App'
import './globalStyles'


import initStore from './initStore'
import initClient from './initClient'

const client = initClient
const store = initStore()

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <ApolloProvider client={client}>
          <BrowserRouter>
            <Component />
          </BrowserRouter>
        </ApolloProvider>
      </Provider>
    </AppContainer>,
    document.getElementById('main'),
  )
}

render(App)

if (module.hot) {
  module.hot.accept('components/presentational/App', () => { render(App) })
}
