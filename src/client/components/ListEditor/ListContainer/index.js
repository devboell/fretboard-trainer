import { connect } from 'react-redux'
import { compose } from 'ramda'

import withLoading from 'components/Loading'
import List from 'components/List'
import withData from './enhancers'
import { selectItem } from './reducer'


const mapStateToProps = state => ({
  selectedItemId: state.list.selectedItemId,
})

const mapDispatchToProps = dispatch => ({
  onSelectItem: qz => dispatch(selectItem(qz)),
})


export default compose(
  withData,
  connect(mapStateToProps, mapDispatchToProps),
  withLoading,
)(List)
