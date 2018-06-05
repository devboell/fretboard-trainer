import { connect } from 'react-redux'
import { compose, omit, assoc, dissoc, find, propEq } from 'ramda'
import { selectItem } from 'components/EditorPage/ListEditor/ListContainer/reducer'
import { initRunner } from 'components/Runner/reducer'
import withLoading from 'components/Loading'

import Editor from 'components/EditorPage/Editor'
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
  const createInput = {
    input: {
      quiz: omit(['__typename', 'id', 'panelModeIds', 'timer'], item),
      timer: omit(['__typename'], item.timer),
      panelModeIds: item.panelModeIds,
    },
  }

  return mutation(createInput).then(res =>
    dispatch(selectItem(res.data.createQuiz)))
}


const handleUpdateMutation = (dispatch, mutation, item) => {
  const updateInput = {
    input: {
      id: item.id,
      quiz: omit(['__typename', 'id', 'panelModeIds', 'timer'], item),
      timer: omit(['__typename'], item.timer),
      panelModeIds: item.panelModeIds,
    },
  }

  return mutation(updateInput).then(res =>
    dispatch(updateItem(res.data.updateQuiz)))
}

const handleDeleteMutation = (dispatch, mutation, id) =>
  mutation(id).then(() =>
    dispatch(unselectItem()))

const convertPanelModeIds = (buffer, allPanelModes) => {
  const panelModes = buffer.panelModeIds.map(id =>
    find(propEq('id', id), allPanelModes))

  return compose(
    assoc('panelModes', panelModes),
    dissoc('panelModeIds'),
  )(buffer)
}

const openPreview = (dispatch, buffer, panelModes) => {
  dispatch(initRunner(convertPanelModeIds(buffer, panelModes)))
  dispatch(togglePreview())
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const { createMutation, updateMutation, deleteMutation } = ownProps

  return {
    onSelectNewItem: type => dispatch(selectNewItem(type)),
    onCreate: qz => handleCreateMutation(dispatch, createMutation, qz),
    onUpdate: qz => handleUpdateMutation(dispatch, updateMutation, qz),
    onDelete: id => handleDeleteMutation(dispatch, deleteMutation, id),
    onUpdateBuffer: (k, v, t) => dispatch(updateBuffer(k, v, t)),
    onOpenPreview: (buffer, panelModes) => openPreview(dispatch, buffer, panelModes),
  }
}

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...stateProps,
  ...dispatchProps,
  ...ownProps,
  onOpenPreview: () => dispatchProps.onOpenPreview(stateProps.buffer, ownProps.panelModes),
})

export default compose(
  withData,
  connect(mapStateToProps, mapDispatchToProps, mergeProps),
  withLoading,
)(Editor)
