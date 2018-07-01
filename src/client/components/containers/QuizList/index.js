import { compose } from 'ramda'

import withLoading from 'components/reusable/Loading'
import List from 'components/reusable/List'
import withData from './enhancers'


export default compose(
  withData,
  withLoading,
)(List)
