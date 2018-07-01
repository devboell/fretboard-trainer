/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Component } from 'react'
import pt from 'prop-types'
import { equals } from 'ramda'
import Soundfont from 'soundfont-player'

import speakerImage from './images/speaker.svg'

import Wrapper from './Wrapper'
import ChoiceWrapper from './ChoiceWrapper'
import ChoiceClickArea from './ChoiceClickArea'
import ImageWrapper from './ImageWrapper'


const isTestEnv = () => process.env.NODE_ENV === 'test'

const instrument = (() => {
  if (isTestEnv()) return null
  return Soundfont.instrument(new AudioContext(), 'acoustic_guitar_nylon', { gain: 5 })
})()

class SoundPanel extends Component {
  componentDidMount() {
    if (!isTestEnv() && this.shouldPlayOnUpdate()) this.playNote()
  }

  componentDidUpdate(prevProps) {
    if (this.receivedNewEntity(prevProps)
      && this.shouldPlayOnUpdate()
      && !isTestEnv()) this.playNote()
  }

  receivedNewEntity(prevProps) {
    return !equals(this.props.entity, prevProps.entity)
  }

  shouldPlayOnUpdate() {
    return !this.props.isChoice
  }

  playNote(evt) {
    evt && evt.stopPropagation()
    const { entity: { notes } } = this.props
    instrument.then(guitar =>
      notes.forEach(n => guitar.play(n, 0)))
  }

  render() {
    const { isChoice } = this.props
    return (
      <Wrapper>
        {isChoice
          ?
            <ChoiceWrapper>
              <ChoiceClickArea>click here</ChoiceClickArea>
              <img
                onClick={evt => this.playNote(evt)}
                alt=""
                src={speakerImage}
              />
            </ChoiceWrapper>
          :
            <ImageWrapper
              onClick={evt => this.playNote(evt)}
            >
              <img
                alt=""
                src={speakerImage}
              />
            </ImageWrapper>
        }
      </Wrapper>
    )
  }
}


SoundPanel.propTypes = {
  entity: pt.shape({}).isRequired,
  isChoice: pt.bool,
}

SoundPanel.defaultProps = {
  isChoice: false,
}

export default SoundPanel
