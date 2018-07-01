import { compose } from 'ramda'
import { connect } from 'react-redux'
import withLoading from 'components/reusable/Loading'
import List from 'components/reusable/List'
import withData from './enhancers'
import { selectItem } from './reducer'

const mapStateToProps = (state, ownProps) => ({
  selectedItem: state[ownProps.stateSlice].list.selectedItem,
})


const mapDispatchToProps = (dispatch, ownProps) => ({
  onSelectItem: (qz) => {
    dispatch(selectItem(ownProps.stateSlice)(qz))
    ownProps.onSelectItem && ownProps.onSelectItem(qz)
  },
})

export default compose(
  withData,
  connect(mapStateToProps, mapDispatchToProps),
  withLoading,
)(List)
