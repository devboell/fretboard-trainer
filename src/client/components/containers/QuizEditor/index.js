import { compose, omit, assoc, dissoc, find, propEq } from 'ramda'
import { connect } from 'react-redux'

import { initRunner } from 'components/containers/Runner/reducer'
import withLoading from 'components/reusable/Loading'
import Editor from 'components/presentational/EditorPage/Editor'
import withData from './enhancers'

import {
  selectNewItem,
  updateItem,
  updateBuffer,
} from './reducer'


const mapStateToProps = state => ({
  original: state.listEditor.editor.original,
  buffer: state.listEditor.editor.buffer,
  mode: state.listEditor.editor.mode,
  runnerStatus: state.runner.status,
})

const handleCreateMutation = (onSelectItem, mutation, item) => {
  const createInput = {
    input: {
      quiz: omit(['__typename', 'id', 'panelModeIds'], item),
      panelModeIds: item.panelModeIds,
    },
  }

  return mutation(createInput).then((res) => {
    onSelectItem(res.data.createQuiz)
  })
}


const handleUpdateMutation = (dispatch, mutation, item) => {
  const updateInput = {
    input: {
      id: item.id,
      quiz: omit(['__typename', 'id', 'panelModeIds'], item),
      panelModeIds: item.panelModeIds,
    },
  }

  return mutation(updateInput).then(res =>
    dispatch(updateItem(res.data.updateQuiz)))
}

const handleDeleteMutation = (onClearSelection, mutation, id) =>
  mutation(id).then(() => onClearSelection())

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
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const {
    createMutation,
    updateMutation,
    deleteMutation,
    onSelectItem,
    onClearSelection,
  } = ownProps

  return {
    onSelectNewItem: (type) => {
      onClearSelection()
      dispatch(selectNewItem(type))
    },
    onCreate: qz => handleCreateMutation(onSelectItem, createMutation, qz),
    onUpdate: qz => handleUpdateMutation(dispatch, updateMutation, qz),
    onDelete: id => handleDeleteMutation(onClearSelection, deleteMutation, id),
    onUpdateBuffer: (k, v, t) => dispatch(updateBuffer(k, v, t)),
    onOpenPreview: (buffer, panelModes) => openPreview(dispatch, buffer, panelModes),
  }
}

export default compose(
  withData,
  connect(mapStateToProps, mapDispatchToProps),
  withLoading,
)(Editor)
