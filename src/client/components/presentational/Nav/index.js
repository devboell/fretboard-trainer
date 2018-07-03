import React from 'react'
import H3 from 'components/styled/H3'
import StyledNavLink from './StyledNavLink'
import Wrapper from './Wrapper'

const Nav = () =>
  <Wrapper>
    <StyledNavLink exact to="/"><H3>Training</H3></StyledNavLink>
    <StyledNavLink to="/editor"><H3>Editor</H3></StyledNavLink>
  </Wrapper>


export default Nav
