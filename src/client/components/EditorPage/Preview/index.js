import React from 'react'
import pt from 'prop-types'

import Runner from 'components/Runner'
import Wrapper from './Wrapper'
import ControlsWrapper from './ControlsWrapper'
import CloseButton from './CloseButton'
import ContentWrapper from './ContentWrapper'

const Preview = ({ onClosePreview }) =>
  <Wrapper>
    <ControlsWrapper>
      <CloseButton
        onClick={() => onClosePreview()}
      >
        Close
      </CloseButton>
    </ControlsWrapper>
    <ContentWrapper>
      <Runner />
    </ContentWrapper>
  </Wrapper>

Preview.propTypes = {
  onClosePreview: pt.func.isRequired,
}

export default Preview
