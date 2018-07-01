import React from 'react'
import pt from 'prop-types'

import { panelModeShape } from 'propShapes/quiz'

import PanelMode from 'components/reusable/PanelMode'
import PanelModeButton from './PanelModeButton'
import Wrapper from './Wrapper'

const PanelModeSelector = ({
  panelModes,
  selectedPanelModeIdx,
  onSelectPanelModeIdx,
}) =>
  <Wrapper>
    {panelModes.map((pm, i) =>
      <PanelModeButton
        isSelected={i === selectedPanelModeIdx}
        onClick={() => onSelectPanelModeIdx(i)}
        key={`panelModeButton=${pm.id}`}
      >
        <PanelMode panelMode={pm} />
      </PanelModeButton>)
    }
  </Wrapper>

PanelModeSelector.propTypes = {
  panelModes: pt.arrayOf(panelModeShape).isRequired,
  selectedPanelModeIdx: pt.number.isRequired,
  onSelectPanelModeIdx: pt.func.isRequired,
}

export default PanelModeSelector

