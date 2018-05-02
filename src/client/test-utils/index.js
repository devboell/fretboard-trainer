import React from 'react'
import pt from 'prop-types'
import { MockedProvider } from 'react-apollo/test-utils'
import { Provider } from 'react-redux'

import { createStore } from 'redux'

const TestPovider = ({ store, mocks, children }) =>
  <Provider store={store}>
    <MockedProvider
      mocks={mocks}
    >
      {children}
    </MockedProvider>
  </Provider>

TestPovider.propTypes = {
  store: pt.shape({}),
  mocks: pt.arrayOf(pt.shape({})),
  children: pt.node.isRequired,
}

TestPovider.defaultProps = {
  store: createStore((state = {}) => state),
  mocks: [],
}

export default TestPovider
