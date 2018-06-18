import React from 'react'
import H3 from 'styled/H3'
import StyledNavLink from './StyledNavLink'

const Nav = () =>
  <div>
    <StyledNavLink exact to="/"><H3>Training</H3></StyledNavLink>
    <StyledNavLink to="/editor"><H3>Editor</H3></StyledNavLink>
  </div>


export default Nav
