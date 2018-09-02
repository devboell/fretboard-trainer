import React from 'react'
import pt from 'prop-types'


import FieldTitle from './FieldTitle'
import FieldInput from './FieldInput'
import Wrapper from './Wrapper'

const FieldWrapper = ({ label, children }) =>
  <Wrapper>
    <FieldTitle>
      {label}:
    </FieldTitle>
    <FieldInput>
      {children}
    </FieldInput>
  </Wrapper>

FieldWrapper.propTypes = {
  label: pt.string.isRequired,
  children: pt.node.isRequired,
}

export default FieldWrapper
