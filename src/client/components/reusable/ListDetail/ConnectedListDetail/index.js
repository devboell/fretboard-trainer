import React from 'react'
import pt from 'prop-types'
import { connect } from 'react-redux'

import List from 'components/reusable/List'
import Wrapper from './Wrapper'
import { selectItem, clearSelection } from './reducer'
import { getSelectedItem } from './selectors'

const ListDetail = ({
  items,
  selectedItemId,
  selectedItem,
  onSelectItem,
  onClearSelection,
  children,
}) => {
  const Only = React.Children.only(children)
  const Cloned = React.cloneElement(Only, {
    selectedItem,
    onSelectItem,
    onClearSelection,
  })
  return (
    <Wrapper>
      <List {...{ items, selectedItemId, onSelectItem }} />
      {Cloned}
    </Wrapper>
  )
}

ListDetail.propTypes = {
  items: pt.arrayOf(pt.shape({})).isRequired,
  selectedItemId: pt.string.isRequired,
  selectedItem: pt.shape({}),
  onSelectItem: pt.func.isRequired,
  onClearSelection: pt.func.isRequired,
  children: pt.node.isRequired,
}

ListDetail.defaultProps = {
  selectedItem: {},
}

const mapStateToProps = (state, ownProps) => ({
  selectedItemId: state[ownProps.stateSlice].list.selectedItemId,
  selectedItem: getSelectedItem(ownProps.items)(state[ownProps.stateSlice]),
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onSelectItem: item => dispatch(selectItem(ownProps.stateSlice)(item)),
  onClearSelection: () => dispatch(clearSelection(ownProps.stateSlice)()),
})


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ListDetail)

