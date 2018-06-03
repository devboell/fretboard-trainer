import React, { Component } from 'react'
import pt from 'prop-types'
import vexflow from 'vexflow'
import { equals } from 'ramda'
import Wrapper from './Wrapper'

const VF = vexflow.Flow

class StaffPanel extends Component {
  componentDidMount() {
    this.vf = new VF.Factory({
      renderer: { elementId: this.renderDiv, width: 100, height: 150 },
    })
    this.renderNote()
  }

  componentDidUpdate(prevProps) {
    if (!equals(this.props.entity, prevProps.entity)) {
      this.clearRenderDiv()
      this.renderNote()
    }
  }

  clearRenderDiv() {
    const svg = this.renderDiv.firstChild
    while (svg.hasChildNodes()) {
      svg.removeChild(svg.lastChild)
    }
  }

  renderNote() {
    const score = this.vf.EasyScore()
    const system = this.vf.System()
    const { entity: { notes } } = this.props

    system.addStave({
      voices: notes.map(note =>
        score.voice(score.notes(`${note}/w`))),
    }).addClef('treble')

    this.vf.draw()
  }

  render() {
    return (
      <Wrapper>
        <div
          ref={(d) => { this.renderDiv = d }}
        />
      </Wrapper>
    )
  }
}

StaffPanel.propTypes = {
  entity: pt.shape({}).isRequired,
}


export default StaffPanel
