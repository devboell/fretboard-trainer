import React from 'react'
import pt from 'prop-types'


import FieldLabel from './FieldLabel'
import FieldContent from './FieldContent'
import Wrapper from './Wrapper'

const FieldWrapper = ({ label, children }) =>
  <Wrapper>
    <FieldLabel>
      {label}:
    </FieldLabel>
    <FieldContent>
      {children}
    </FieldContent>
  </Wrapper>

FieldWrapper.propTypes = {
  label: pt.string.isRequired,
  children: pt.node.isRequired,
}

export default FieldWrapper
