import { createSelector } from 'reselect'

const panelModes = state => state.runner.quiz.panelModes
const selectedPanelModeIdx = state => state.runner.selectedPanelModeIdx

export const selectedPanelMode = createSelector(
  panelModes,
  selectedPanelModeIdx,
  (pms, idx) => pms[idx],
)

export const isFretboardAnswer = createSelector(
  selectedPanelMode,
  pm => pm.answer === 'fretboard',
)
