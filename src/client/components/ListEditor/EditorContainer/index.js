import { connect } from 'react-redux'
import { compose, omit } from 'ramda'
import { selectItem } from 'components/ListEditor/ListContainer/reducer'
import { initRunner } from 'components/Runner/reducer'

import Editor from 'components/Editor'
import withData from './enhancers'
import {
  selectNewItem,
  unselectItem,
  updateItem,
  updateBuffer,
  togglePreview,
} from './reducer'


const mapStateToProps = state => ({
  original: state.editor.original,
  buffer: state.editor.buffer,
  mode: state.editor.mode,
})

const handleCreateMutation = (dispatch, mutation, item) => {
  console.log('item', omit(['__typename', 'id'], item))
  const createInput = {
    input: {
      quiz: omit(['__typename', 'id'], item),
      panelIds: [1, 2],
    },
  }
  return mutation(createInput).then(res =>
    dispatch(selectItem(res.data.createQuiz)))
}
const handleUpdateMutation = (dispatch, mutation, item) => {
  const updateInput = {
    input: {
      id: item.id,
      quiz: omit(['__typename', 'id', 'panels'], item),
      panelIds: [1, 2, 3],
    },
  }
  return mutation(updateInput).then(res =>
    dispatch(updateItem(res.data.updateQuiz)))
}


const handleDeleteMutation = (dispatch, mutation, id) =>
  mutation(id).then(() =>
    dispatch(unselectItem()))

const openPreview = (dispatch, buffer) => {
  dispatch(initRunner(buffer))
  dispatch(togglePreview())
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const { createMutation, updateMutation, deleteMutation } = ownProps

  return {
    onSelectNewItem: () => dispatch(selectNewItem()),
    onCreate: qz => handleCreateMutation(dispatch, createMutation, qz),
    onUpdate: qz => handleUpdateMutation(dispatch, updateMutation, qz),
    onDelete: id => handleDeleteMutation(dispatch, deleteMutation, id),
    onUpdateBuffer: (k, v) => dispatch(updateBuffer(k, v)),
    onOpenPreview: buffer => openPreview(dispatch, buffer),
  }
}

const mergeProps = (stateProps, dispatchProps) => ({
  ...stateProps,
  ...dispatchProps,
  onOpenPreview: () => dispatchProps.onOpenPreview(stateProps.buffer),
})

export default compose(
  withData,
  connect(mapStateToProps, mapDispatchToProps, mergeProps),
)(Editor)
