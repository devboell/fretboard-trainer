import { compose } from 'ramda'

import withLoading from 'components/Loading'
import List from 'components/List'
import withData from './enhancers'


export default compose(
  withData,
  withLoading,
)(List)
