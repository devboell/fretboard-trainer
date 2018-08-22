import { find, propEq } from 'ramda'
import { createSelector } from 'reselect'

const selectedItemId = stateSlice => stateSlice.list.selectedItemId

export const getSelectedItem = items => createSelector(
  selectedItemId,
  id => find(propEq('id', id), items),
)
