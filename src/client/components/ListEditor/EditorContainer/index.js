import { connect } from 'react-redux'
import { compose } from 'ramda'
import { selectItem } from 'components/ListEditor/ListContainer/reducer'

import Editor from 'components/Editor'
import withData from './enhancers'
import {
  selectNewItem,
  unselectItem,
  updateItem,
  updateBuffer,
} from './reducer'


const mapStateToProps = state => ({
  original: state.editor.original,
  buffer: state.editor.buffer,
  mode: state.editor.mode,
})

const handleCreateMutation = (dispatch, mutation, item) =>
  mutation(item).then(res =>
    dispatch(selectItem(res.data.createQuiz)))

const handleUpdateMutation = (dispatch, mutation, item) =>
  mutation(item).then(res =>
    dispatch(updateItem(res.data.updateQuiz)))

const handleDeleteMutation = (dispatch, mutation, id) =>
  mutation(id).then(() =>
    dispatch(unselectItem()))

const mapDispatchToProps = (dispatch, ownProps) => {
  const { createMutation, updateMutation, deleteMutation } = ownProps

  return {
    onSelectNewItem: () => dispatch(selectNewItem()),
    onCreate: qz => handleCreateMutation(dispatch, createMutation, qz),
    onUpdate: qz => handleUpdateMutation(dispatch, updateMutation, qz),
    onDelete: id => handleDeleteMutation(dispatch, deleteMutation, id),
    onUpdateBuffer: (k, v) => dispatch(updateBuffer(k, v)),
  }
}

export default compose(
  withData,
  connect(mapStateToProps, mapDispatchToProps),
)(Editor)
